/**
 * rehype plugin: turns plain-text URLs and DOIs inside bib entries into <a> links.
 *
 * rehype-citation outputs bibliography entries as text, so URLs like
 * "Available: https://example.com/" and DOIs like "doi: 10.1000/xyz" are never
 * wrapped in anchors by the CSL processor.  This plugin post-processes those
 * text nodes.
 */

import { SKIP, visit } from 'unist-util-visit';

const URL_RE = /https?:\/\/[^\s,)\]>'"]+/g;
const DOI_RE = /doi:\s*(10\.\d{4,9}\/[^\s,)\]>'"]+)(?<!\.)/g;
const EITHER_RE = new RegExp(`${URL_RE.source}|${DOI_RE.source}`, 'g');
const doi_to_url = (doi) => `https://doi.org/${doi}`;

function linkifyText(text) {
  const children = [];
  let last = 0;
  EITHER_RE.lastIndex = 0;

  for (const match of text.matchAll(EITHER_RE)) {
    const [fullMatch, doiNumber] = match;
    if (match.index > last) {
      children.push({ type: 'text', value: text.slice(last, match.index) });
    }

    children.push({
      type: 'element',
      tagName: 'a',
      properties: { href: doiNumber ? doi_to_url(doiNumber) : fullMatch },
      children: [{ type: 'text', value: fullMatch }],
    });
    last = match.index + fullMatch.length;
  }

  EITHER_RE.lastIndex = 0;
  if (last === 0) return [{ type: 'text', value: text }];
  if (last < text.length) {
    children.push({ type: 'text', value: text.slice(last) });
  }
  return children;
}

function linkifyChildren(node) {
  const children = [];

  for (const child of node.children) {
    if (child.type === 'text') {
      children.push(...linkifyText(child.value));
    } else {
      if (child.type === 'element' && child.tagName !== 'a') {
        linkifyChildren(child);
      }
      children.push(child);
    }
  }

  node.children = children;
}

export function rehypeLinkifyBibUrls() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node.properties?.className?.includes('csl-right-inline')) return;
      linkifyChildren(node);
      return SKIP;
    });
  };
}
