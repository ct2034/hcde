import type { SvgComponent } from "astro/types"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "Christian Henkel",
  description:
    "I work in robotics research. This is my personal site, combining scientific publications, CV entries, and blog posts.",
  locale: "en-US",
  dir: "ltr",
} as const

// mkdocs served the feed from this path; keep it so existing subscribers work.
export const RSS_PATH = "/feed_rss_created.xml"

// `trailingSlash: "always"`, so these need the trailing slash to resolve.
export const NAVIGATION = [
  { href: "/thinkoneering/", label: "Blog" },
  { href: "/publications/", label: "Research" },
  { href: "/cv/", label: "CV" },
  { href: "/tags/", label: "Tags" },
  { href: "/about/", label: "About" },
]

// LinkedIn, Mastodon, Bluesky and Ko-fi still need brand SVGs dropped into
// src/assets/icons/ before they can be listed here.
export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/ct2034", label: "GitHub", icon: GitHub },
  { href: RSS_PATH, label: "RSS", icon: RSS },
]
