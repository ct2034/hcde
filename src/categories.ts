export const CATEGORY_SLUGS = {
  Thinkoneering: 'thinkoneering',
  CV: 'cv',
  Publications: 'publications',
} as const;

export type Category = keyof typeof CATEGORY_SLUGS;

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  Thinkoneering:
    'Blog posts I write to feed my own curiosity. An article is a success if I learned something from writing it.',
  CV: 'Where I worked and what I worked on.',
  Publications: 'Peer-reviewed papers, talks, and reports.',
};

/** Reproduces mkdocs' `post_url_format: "{categories}/{file}"`. */
export function postPath(category: Category, id: string): string {
  return `${CATEGORY_SLUGS[category]}/${id.split('/').pop()}`;
}
