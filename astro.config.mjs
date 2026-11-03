// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypeExternalLinks from 'rehype-external-links';
import remarkMath from 'remark-math';
import { remarkMkdocsCompat } from './plugins/remark-mkdocs-compat.mjs';
import { rehypeLinkifyBibUrls } from './plugins/rehype-linkify-bib-urls.mjs';
import { legacyRedirects } from './src/legacy-redirects.mjs';

export default defineConfig({
  site: 'https://thinkoneering.com',
  // mkdocs serves every post as a directory with a trailing slash.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // In a static build each entry becomes a small meta-refresh page.
  redirects: legacyRedirects,
  // mdx() lets posts be .mdx; sitemap() writes /sitemap-index.xml at build.
  integrations: [mdx(), sitemap()],
  markdown: {
    // Two Shiki themes emit --shiki-light/--shiki-dark for code.css to resolve.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      // No default colour means no theme class is needed on <html>.
      defaultColor: false,
      wrap: true,
    },
    // Astro 7 defaults to the Sätteri processor; unified() keeps the
    // remark/rehype pipeline these plugins are written against.
    processor: unified({
      remarkPlugins: [remarkMath, remarkMkdocsCompat],
      rehypePlugins: [
        rehypeKatex,
        [
          rehypeCitation,
          {
            bibliography: 'bibtex/lit.bib',
            // Numeric style: several web sources in lit.bib have no year, and
            // an author-date style renders those as a useless "(n.d.)".
            csl: 'bibtex/ieee.csl',
            linkCitations: true,
            path: process.cwd(),
          },
        ],
        rehypeLinkifyBibUrls,
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'] },
        ],
      ],
    }),
  },
});
