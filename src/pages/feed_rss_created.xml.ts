import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { SITE } from "@/consts"
import { getPostList } from "@/lib/posts"

// A file with an extension under src/pages/ becomes a static endpoint, so this
// module answers requests for /feed_rss_created.xml.
export async function GET(context: APIContext) {
  // mkdocs' rss plugin only fed blog posts (`match_path: "posts/ton/.*"`).
  const posts = await getPostList("Thinkoneering")

  return rss({
    title: SITE.title,
    description: SITE.description,
    // `context.site` is the `site` value from astro.config.mjs.
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      link: post.href,
      pubDate: post.created,
      categories: post.tags,
    })),
  })
}
