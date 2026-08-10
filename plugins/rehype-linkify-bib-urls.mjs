/**
 * rehype plugin: turns plain-text URLs and DOIs inside bib entries into <a> links.
 *
 * rehype-citation outputs bibliography entries as text, so URLs like
 * "Available: https://example.com/" and DOIs like "doi: 10.1000/xyz" are never
 * wrapped in anchors by the CSL processor.  This plugin post-processes those
 * text nodes.
 */

import { visit } from 'unist-util-visit';

const URL_RE = /https?:\/\/[^\s,)\]>'"]+/g;
const DOI_RE = /doi:\s*(10\.\d{4,9}\/[^\s,)\]>'"]+)(?<!\.)/g;
const EITHER_RE = new RegExp(`${URL_RE.source}|${DOI_RE.source}`, 'g');
const doi_to_url = (doi) => `https://doi.org/${doi}`;

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
        console.log('[bib-linkify] text node:', JSON.stringify(text.slice(0, 60)));
        if (!EITHER_RE.test(text)) {
          EITHER_RE.lastIndex = 0;
          return;
        }

        // Reset lastIndex after the test() call.
        EITHER_RE.lastIndex = 0;

        const newChildren = [];
        let last = 0;
        let match;

        while ((match = EITHER_RE.exec(text)) !== null) {
          // Text before this match.
          if (match.index > last) {
            newChildren.push({ type: 'text', value: text.slice(last, match.index) });
          }

          const [fullMatch, doiNumber] = match;
          console.log('[bib-linkify] fullMatch:', JSON.stringify(fullMatch));
          let href;
          if (doiNumber !== undefined) {
            console.log('[bib-linkify] matched DOI:', JSON.stringify(doiNumber));
            href = doi_to_url(doiNumber);
          } else {
            console.log('[bib-linkify] matched URL:', JSON.stringify(fullMatch));
            href = fullMatch;
          }
          console.log('[bib-linkify] href:', JSON.stringify(href));
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
