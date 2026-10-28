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
  cvEnd?: Date // CV entries only: the job's end date, absent while still ongoing.
  tags: string[]
  excerpt?: string
  thumbnail?: ImageMetadata
}

function firstHeading(nodes: RootContent[]): Element | undefined {
  for (const node of nodes) {
    if (node.type !== "element") continue
    if (node.tagName === "h1") return node
    const heading = firstHeading(node.children)
    if (heading) return heading
  }
  return undefined
}

function textContent(nodes: RootContent[]): string {
  return nodes
    .map((node) =>
      node.type === "text"
        ? node.value
        : node.type === "element"
          ? textContent(node.children)
          : "",
    )
    .join("")
}

/** The posts carry their title as a `# Heading` in the body, not in frontmatter. */
export function postTitle(post: CollectionEntry<"posts">): string {
  const html = post.rendered?.html
  if (!html) return post.id
  const tree = fromHtml(html, { fragment: true }) as Nodes & {
    children: RootContent[]
  }
  const heading = firstHeading(tree.children)
  return heading ? textContent(heading.children) : post.id
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
      created: post.data.created,
      cvEnd: post.data.cvEnd,
      tags: post.data.tags,
      excerpt: postExcerpt(post),
      thumbnail: post.data.thumbnail,
    }))
    .filter((post) => !category || post.category === category)
    .sort((a, b) => b.created.valueOf() - a.created.valueOf())
}
