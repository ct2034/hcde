# Setup for <https://thinkoneering.com>

## Content

This contains sources for

- blog posts in [ton](docs/posts/ton)
- research publications in [publications](docs/posts/publications)
- CV entries in [cv](docs/posts/cv)

## Technical

The site is built with [Astro](https://astro.build/) and deployed to GitHub
Pages. Yarn 4 is pinned via `packageManager`, so run `corepack enable` once.

```sh
yarn install
yarn dev      # local server on :4321
yarn build    # static site into dist/
yarn verify   # build + dist/ sanity checks
yarn check    # type check
```

### Layout

| Path | What it is |
| --- | --- |
| `docs/posts/` | All content. One Markdown file per post, images in `imgs/`. |
| `docs/index.md`, `docs/about.md` | Standalone pages. |
| `bibtex/lit.bib` | Bibliography for `[@key]` citations. `_get_lit.py` refreshes it. |
| `src/pages/` | Routes. File name maps to URL; `[...slug].astro` renders posts. |
| `src/components/`, `src/layouts/` | UI. `.astro` files: frontmatter on top, markup below. |
| `src/styles/` | Plain CSS, all imported by `Layout.astro`. |
| `src/lib/posts.ts` | Reads the content collection, builds listing data. |
| `public/` | Copied to `dist/` verbatim (favicons, `robots.txt`). |
| `test/verify-build.mjs` | Post-build checks; catches silently empty pages. |

### Configuration

| Path | What it configures |
| --- | --- |
| `astro.config.mjs` | Site URL, Markdown pipeline, citations, redirects, sitemap. |
| `src/consts.ts` | Site title, navigation, social links. |
| `src/categories.ts` | The three categories and their URL slugs. |
| `src/content.config.ts` | Frontmatter schema for posts and pages. |
| `src/legacy-redirects.mjs` | Old WordPress URLs pointing at archive.org. |
| `plugins/remark-mkdocs-compat.mjs` | Fixes up mkdocs-era Markdown syntax. |
| `.github/workflows/` | Build & deploy, pre-commit linting, weekly link check. |
| `.pre-commit-config.yaml` | Spell check, Markdown lint, bibliography check. |
| `requirements.txt` | Python, only for the bibliography script. |

Two things to know before changing the Markdown pipeline:

- The plugins hang off `markdown.remarkPlugins` / `rehypePlugins`. Any
  integration that sets Astro 7's new `markdown.processor` disables them
  silently — notably `astro-expressive-code`.
- Plugin changes are not cache-invalidated. Run
  `rm -rf dist node_modules/.astro node_modules/.vite .astro` first.

## Open points

- Galleries / lightbox for portfolio-style image content
- Full-text search (Pagefind)
- A `404.astro` page
- Social share cards (OG images)
- PostHog analytics and cookie consent
- Brand icons + `SOCIALS` entries for LinkedIn, Mastodon, Bluesky, Ko-fi
- A `## References` heading above the bibliography
- The 19 publication posts have no `<!-- more -->`, so they list without an excerpt
- Heading anchors now use github-slugger, so deep links from before may differ
- Host the two YouTube poster frames locally (`20_03_odrm`, `24_10_gsrm`)
