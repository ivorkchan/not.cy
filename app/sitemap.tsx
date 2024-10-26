import { allBlogs } from "content-collections";

import type { Blog } from "content-collections";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    { url: "https://not.cy/about" },
    { url: "https://not.cy/blog" },
  ];

  const blogUrls = allBlogs.map((blog: Blog) => {
    let lastModified;
    try {
      const date = new Date(blog.date ?? "");
      lastModified = date.toISOString();
    } catch {
      console.warn(`Invalid date in blog: ${blog.slug}`);
    }

    return {
      url: `https://not.cy/blog/${blog.slug}`,
      lastModified,
    };
  });

  return [...staticUrls, ...blogUrls];
}
