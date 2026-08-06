// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeCitation from 'rehype-citation';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkMkdocsCompat } from './plugins/remark-mkdocs-compat.mjs';
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
    remarkPlugins: [remarkMkdocsCompat],
    rehypePlugins: [
      [
        rehypeCitation,
        {
          bibliography: 'bibtex/lit.bib',
          csl: 'bibtex/chicago-author-date.csl',
          // Keep off: v2.3.2 throws for bib entries without an `author` field.
          linkCitations: false,
          path: process.cwd(),
        },
      ],
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
      ],
    ],
  },
});
