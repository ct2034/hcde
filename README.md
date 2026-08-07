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
| `bibtex/lit.bib` | Bibliography for `[@key]` citations, rendered in IEEE style. `_get_lit.py` refreshes it. |
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

## Open points

### Right now

- PostHog analytics
- Cookie consent
- a unified way to handle references to external social media posts of articles for comments, discussions

### Next steps

- Galleries / lightbox for portfolio-style image content
- Social share cards (OG images)

### Nice to have additional features

- Full-text search (Pagefind)
- A `404.astro` page
- Brand icons + `SOCIALS` entries for LinkedIn, Mastodon, Bluesky, Ko-fi
- A `## References` heading above the bibliography

### What copilot found

Sampled home, `/tags/`, `/cv/`, `/publications/`, and several individual
posts (blog/publication/CV) on the local production build (`yarn build` +
`yarn preview`), at desktop (1440px) and mobile (390px) widths, and compared
against the live thinkoneering.com.

- ~~**Bug — mobile overflow from bibliography.**~~ Fixed: `.csl-right-inline`
  (in `src/styles/citation.css`) had no `min-width: 0`, so a long reference
  title forced the flex item — and the whole page — to scroll horizontally on
  phone-sized screens. Added `min-width: 0` + `overflow-wrap: anywhere`;
  verified `scrollWidth === clientWidth` at 390px on
  `/thinkoneering/25_01_oss_identity/` after rebuilding.
- ~~**Regression — CV entries lost their end dates.**~~ Fixed: `src/lib/posts.ts`
  now carries `date.updated` through to `PostListItem`, and `PostList.astro`
  renders a `Month YYYY – Month YYYY` range (or `– Present` when `updated` is
  absent) for CV entries only. Verified in `dist/cv/index.html`; Thinkoneering
  and Publications listings are unchanged (still single date).
- **Design difference, not necessarily a bug.** The old mkdocs post-list
  entries show a fuller line under each title: full date, `· in <Category> ·`,
  and an estimated read time, plus an explicit "more…" link at the end of the
  excerpt. The new list only shows an abbreviated `Month Year` and drops
  category/read-time/"more…". Intentional simplification, but flagging in case
  it wasn't meant to lose that info.
- **Cosmetic.** The sidebar now shows the current post as a nested sub-item
  under "Blog" (mkdocs' sidebar never listed individual posts). For long
  titles this wraps across two lines and can look like two separate nav
  entries at a glance. Not broken, just a bit busy — worth a second look.
- No other layout breakage found: images, thumbnails on `/publications/`,
  the CV/tags listings, dark-mode toggle position, and the mobile header
  wrap all rendered correctly. (Two false alarms during testing turned out to
  be lazy-loaded images not yet painted at screenshot time, and Astro's own
  dev-toolbar overlay showing up only under `yarn dev` — neither is a real
  issue in the production build.)
