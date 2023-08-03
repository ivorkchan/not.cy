import { allBlogs, allCrafts } from "contentlayer/generated";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Ivork Chan",
    description: "Sensibility is the end of rationality.",
    site_url: "https://not.cy",
    feed_url: "https://not.cy/feed.xml",
  });

  const allContents = [...allBlogs, ...allCrafts];

  const sortedContents = allContents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  sortedContents.forEach((content) => {
    feed.item({
      title: content.title,
      description: content.description,
      date: new Date(content.date),
      url: `https://not.cy${content.slug}`,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
