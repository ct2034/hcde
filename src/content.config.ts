import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // `glob` loads Markdown straight from the docs tree; no files live in src/.
  loader: glob({ pattern: '**/*.md', base: './docs/posts' }),
  schema: ({ image }) =>
    z.object({
      date: z.object({
        created: z.coerce.date(),
        updated: z.coerce.date().optional(),
      }),
      categories: z
        .array(z.enum(['Thinkoneering', 'CV', 'Publications']))
        .optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Optional listing image, path relative to the Markdown file.
      thumbnail: image().optional(),
    }),
});

const pages = defineCollection({
  // Standalone pages: `docs/index.md` and `docs/about.md`.
  loader: glob({ pattern: '*.md', base: './docs' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { posts, pages };
