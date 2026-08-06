import { getCollection, type CollectionEntry } from "astro:content"
import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import type { Element, Nodes, RootContent } from "hast"
import { postPath, type Category } from "@/categories"

export type PostListItem = {
  title: string
  href: string
  category: Category
  created: Date
  tags: string[]
  excerpt?: string
  thumbnail?: ImageMetadata
}

/** The posts carry their title as a `# Heading` in the body, not in frontmatter. */
export function postTitle(post: CollectionEntry<"posts">): string {
  return post.body?.match(/^#\s+(.+)$/m)?.[1] ?? post.id
}

const HEADINGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"])

/** Section headings would compete with the entry title, so a teaser drops them. */
function withoutHeadings(nodes: RootContent[]): RootContent[] {
  return nodes.filter(
    (node) => !(node.type === "element" && HEADINGS.has((node as Element).tagName)),
  )
}

/** mkdocs' `<!-- more -->` separator survives into `post.rendered.html`. */
function postExcerpt(post: CollectionEntry<"posts">): string | undefined {
  const html = post.rendered?.html
  const separator = html?.match(/<!--\s*more\s*-->/)
  if (!html || separator?.index === undefined) return undefined

  // The cut can land inside an open tag, so re-parse to close it; a raw slice
  // would leak the open element into the surrounding list.
  const tree = fromHtml(html.slice(0, separator.index), {
    fragment: true,
  }) as Nodes & { children: RootContent[] }

  return toHtml(withoutHeadings(tree.children)).trim() || undefined
}

export async function getPostList(category?: Category): Promise<PostListItem[]> {
  const posts = await getCollection(
    "posts",
    (post) => !post.data.draft && (post.data.categories?.length ?? 0) > 0,
  )

  return posts
    .map((post) => ({
      title: postTitle(post),
      href: `/${postPath(post.data.categories![0] as Category, post.id)}/`,
      category: post.data.categories![0] as Category,
      created: post.data.date.created,
      tags: post.data.tags,
      excerpt: postExcerpt(post),
      thumbnail: post.data.thumbnail,
    }))
    .filter((post) => !category || post.category === category)
    .sort((a, b) => b.created.valueOf() - a.created.valueOf())
}
