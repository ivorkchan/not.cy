import { MetadataRoute } from "next"

import { allBlogs } from "contentlayer/generated"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    { url: "https://not.cy/about" },
    { url: "https://not.cy/blog" },
  ]

  const blogUrls = allBlogs.map((blog) => {
    let lastModified
    try {
      const date = new Date(blog.date ?? "")
      lastModified = date.toISOString()
    } catch {
      console.warn(`Invalid date in blog: ${blog}`)
    }

    return {
      url: `https://not.cy${blog.slug}`,
      lastModified,
    }
  })

  const urls = [...staticUrls, ...blogUrls]

  return urls
}
