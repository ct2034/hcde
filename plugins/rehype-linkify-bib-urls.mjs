/**
 * rehype plugin: turns plain-text URLs and DOIs inside .csl-bib-body entries
 * into clickable <a> elements.
 *
 * rehype-citation outputs bibliography entries as text, so URLs like
 * "Available: https://example.com/" and DOIs like "doi: 10.1000/xyz" are never
 * wrapped in anchors by the CSL processor.  This plugin post-processes those
 * text nodes.
 */

import { visit } from 'unist-util-visit';

// Matches https?:// URLs or bare DOIs in the form "doi: 10.xxxx/..."
// Each alternative captures either the full URL (group 1) or the DOI number
// (group 2) separately so we can build the right href.
const LINKABLE_RE = /(https?:\/\/[^\s,)\]>'"]+)|(?:\bdoi:\s*(10\.[^\s,)\]>'"]+))/g;

export function rehypeLinkifyBibUrls() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Only touch elements that carry the csl-right-inline class (the part of
      // each bibliography entry that contains the formatted reference text).
      if (
        !node.properties?.className?.includes('csl-right-inline') &&
        !node.properties?.className?.includes('csl-bib-body')
      ) {
        return;
      }

      // Recursively process all text nodes inside this element.
      visit(node, 'text', (textNode, index, parent) => {
        const text = textNode.value;
        if (!LINKABLE_RE.test(text)) return;

        // Reset lastIndex after the test() call.
        LINKABLE_RE.lastIndex = 0;

        const newChildren = [];
        let last = 0;
        let match;

        while ((match = LINKABLE_RE.exec(text)) !== null) {
          // Text before this match.
          if (match.index > last) {
            newChildren.push({ type: 'text', value: text.slice(last, match.index) });
          }

          const [fullMatch, url, doiNumber] = match;
          const href = url ?? `https://doi.org/${doiNumber}`;
          newChildren.push({
            type: 'element',
            tagName: 'a',
            properties: { href },
            children: [{ type: 'text', value: fullMatch }],
          });
          last = match.index + fullMatch.length;
        }

        // Remaining text after the last match.
        if (last < text.length) {
          newChildren.push({ type: 'text', value: text.slice(last) });
        }

        // Replace the single text node with the expanded array.
        parent.children.splice(index, 1, ...newChildren);

        // Return the index of the next sibling (skip the nodes we just inserted).
        return index + newChildren.length;
      });
    });
  };
}
