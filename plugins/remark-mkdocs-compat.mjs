import { visit } from 'unist-util-visit';

// Python-Markdown `attr_list`, e.g. [text](url){:target="_blank"}; stripped
// because rehype-external-links applies target/rel instead.
const ATTR_LIST = /\{:[^}\n]*\}/g;

// mkdocs-bibtex accepts `[@a,@b]`; rehype-citation follows pandoc's `[@a; @b]`.
const CITATION_GROUP = /\[-?@[^\]\n]+\]/g;

// Obsidian-style `![alt|300](src)`; the size becomes hast properties, which
// Astro's rehype-images forwards to <Image>.
const IMAGE_SIZE = /\|[ \t]*(\d+)(?:[ \t]*x[ \t]*(\d+))?[ \t]*$/;

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

    visit(tree, 'text', (node, index) => {
      // A citation can start a text node when an inline element precedes it.
      const hasPrecedingSibling = typeof index === 'number' && index > 0;

      node.value = node.value
        .replace(ATTR_LIST, '')
        .replace(CITATION_GROUP, (group, offset, whole) => {
          const before = whole.slice(0, offset);
          const normalized = group.replace(/\s*,\s*@/g, '; @');

          // Inside parentheses use pandoc's narrative form, so "Nash (1963)"
          // instead of a nested "(quoted in (Nash 1963))".
          const unclosedParen =
            (before.match(/\(/g) ?? []).length > (before.match(/\)/g) ?? []).length;
          if (unclosedParen && normalized.startsWith('[@') && !normalized.includes(';')) {
            return normalized.slice(1, -1);
          }

          // The posts write `word[@key]`; author-date needs a space before it.
          const prev = before.slice(-1);
          const glued = prev ? !/[\s([]/.test(prev) : hasPrecedingSibling;
          return (glued ? ' ' : '') + normalized;
        });
    });
  };
}
