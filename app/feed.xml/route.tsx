import { allBlogs } from "contentlayer/generated";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Ivork Chan",
    description: "Sensibility is the end of rationality.",
    site_url: "https://not.cy",
    feed_url: "https://not.cy/feed.xml",
  });

  const blogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  blogs.forEach((blog) => {
    feed.item({
      title: blog.title,
      description: blog.description,
      date: new Date(blog.date),
      url: `https://not.cy${blog.slug}`,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
