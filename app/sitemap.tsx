import { MetadataRoute } from "next";

import { allBlogs, allCrafts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    { url: "https://not.cy/about" },
    { url: "https://not.cy/blog" },
    { url: "https://not.cy/craft" },
    { url: "https://not.cy/dita" },
  ];

  const blogUrls = allBlogs.map((blog) => {
    let lastModified;
    try {
      const date = new Date(blog.date);
      lastModified = date.toISOString();
    } catch (error) {
      console.warn(`Invalid date in blog: ${blog}`);
    }

    return {
      url: `https://not.cy${blog.slug}`,
      lastModified,
    };
  });

  const craftUrls = allCrafts.map((craft) => {
    let lastModified;
    try {
      const date = new Date(craft.date);
      lastModified = date.toISOString();
    } catch (error) {
      console.warn(`Invalid date in craft: ${craft}`);
    }

    return {
      url: `https://not.cy${craft.slug}`,
      lastModified,
    };
  });

  const urls = [...staticUrls, ...blogUrls, ...craftUrls];

  return urls;
}
