import { SKIP, visit } from 'unist-util-visit';

// Python-Markdown `attr_list`, e.g. [text](url){:target="_blank"}; stripped
// because rehype-external-links applies target/rel instead.
const ATTR_LIST = /\{:[^}\n]*\}/g;

// Python-Markdown heading id, e.g. `## Cookie Policy {#kekse}`.
const HEADING_ID = /[ \t]*\{#([A-Za-z][\w:.-]*)\}[ \t]*$/;

// mkdocs-bibtex accepts `[@a,@b]`; rehype-citation follows pandoc's `[@a; @b]`.
const CITATION_GROUP = /\[-?@[^\]\n]+\]/g;

// Obsidian-style `![alt|300](src)`; the size becomes hast properties, which
// Astro's rehype-images forwards to <Image>.
const IMAGE_SIZE = /\|[ \t]*(\d+)(?:[ \t]*x[ \t]*(\d+))?[ \t]*$/;

// Python-Markdown `abbr`, e.g. `*[ROS]: Robot Operating System`.
const ABBR_DEFINITION = /^\*\[([^\]\n]+)\]:[ \t]*(\S.*)$/;

// The posts close with acknowledgements written as a never-referenced footnote.
const ORPHAN_FOOTNOTE = /^\[\^\]:[ \t]*/;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Text of a paragraph, but only when it is a single plain-text child. */
function plainText(node) {
  if (node.children?.length !== 1) return undefined;
  const [child] = node.children;
  return child.type === 'text' ? child.value : undefined;
}

/**
 * Pulls the `*[ABBR]: Expansion` blocks out of the tree and turns the
 * acknowledgement footnote into an aside. Both are trailing paragraphs that
 * Python-Markdown consumed and remark leaves as literal text.
 */
function collectTrailingBlocks(tree) {
  const abbreviations = new Map();

  visit(tree, 'paragraph', (node, index, parent) => {
    const text = plainText(node);
    if (text === undefined || !parent || typeof index !== 'number') return;

    if (ORPHAN_FOOTNOTE.test(text)) {
      node.children[0].value = text.replace(ORPHAN_FOOTNOTE, '');
      parent.children[index] = {
        type: 'note',
        children: [node],
        data: { hName: 'aside', hProperties: { className: ['post-note'] } },
      };
      return SKIP;
    }

    const lines = text.split('\n').filter((line) => line.trim() !== '');
    const definitions = lines.map((line) => line.match(ABBR_DEFINITION));
    if (definitions.length === 0 || definitions.includes(null)) return;

    for (const [, abbr, expansion] of definitions) {
      abbreviations.set(abbr, expansion.trim());
    }
    parent.children.splice(index, 1);
    return [SKIP, index];
  });

  return abbreviations;
}

/** Wraps every occurrence of a defined abbreviation in an `<abbr>`. */
function applyAbbreviations(tree, abbreviations) {
  if (abbreviations.size === 0) return;

  // Longest first, so `LLMs` wins where both `LLM` and `LLMs` are defined.
  const alternatives = [...abbreviations.keys()]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');
  // Explicit boundaries: `\b` would still match the `ROS` in `ROS2`.
  const pattern = new RegExp(
    `(?<![\\p{L}\\p{N}_])(${alternatives})(?![\\p{L}\\p{N}_])`,
    'gu'
  );

  visit(tree, 'text', (node, index, parent) => {
    if (!parent || typeof index !== 'number') return;

    const replacement = [];
    let last = 0;
    for (const match of node.value.matchAll(pattern)) {
      if (match.index > last) {
        replacement.push({
          type: 'text',
          value: node.value.slice(last, match.index),
        });
      }
      replacement.push({
        type: 'abbreviation',
        children: [{ type: 'text', value: match[0] }],
        data: {
          hName: 'abbr',
          hProperties: { title: abbreviations.get(match[0]) },
        },
      });
      last = match.index + match[0].length;
    }
    if (replacement.length === 0) return;

    if (last < node.value.length) {
      replacement.push({ type: 'text', value: node.value.slice(last) });
    }
    parent.children.splice(index, 1, ...replacement);
    // Resume after the new nodes; their text must not be scanned again.
    return [SKIP, index + replacement.length];
  });
}

export function remarkMkdocsCompat() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      const size = node.alt?.match(IMAGE_SIZE);
      if (!size) return;

      const [, width, height] = size;
      node.alt = node.alt.slice(0, size.index).trim();
      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          width: Number(width),
          ...(height ? { height: Number(height) } : {}),
        },
      };
    });

    visit(tree, 'heading', (node) => {
      const last = node.children.at(-1);
      if (last?.type !== 'text') return;
      const id = last.value.match(HEADING_ID);
      if (!id) return;

      last.value = last.value.slice(0, id.index);
      node.data = {
        ...node.data,
        hProperties: { ...node.data?.hProperties, id: id[1] },
      };
    });

    visit(tree, 'text', (node, index) => {
      // A citation can start a text node when an inline element precedes it.
      const hasPrecedingSibling = typeof index === 'number' && index > 0;

      node.value = node.value
        .replace(ATTR_LIST, '')
        .replace(CITATION_GROUP, (group, offset, whole) => {
          const normalized = group.replace(/\s*,\s*@/g, '; @');
          // The posts write `word[@key]`; IEEE needs a space before `[1]`.
          const prev = whole.slice(0, offset).slice(-1);
          const glued = prev ? !/[\s([]/.test(prev) : hasPrecedingSibling;
          return (glued ? ' ' : '') + normalized;
        });
    });

    applyAbbreviations(tree, collectTrailingBlocks(tree));
  };
}
