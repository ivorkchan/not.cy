import Link from "next/link";

import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export function BlogList() {
  const blogsByYear = allBlogs.reduce((groups, blog) => {
    const year = blog.slug.split("/")[2];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(blog);
    return groups;
  }, {});

  for (const year in blogsByYear) {
    blogsByYear[year].sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  }

  const sortedYears = Object.keys(blogsByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <>
      {sortedYears.map((year, idx) => (
        <section key={idx}>
          <h2>{year}</h2>
          <ul>
            {blogsByYear[year].map((blog, idx) => (
              <li key={idx}>
                <Link href={blog.slug}>{blog.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
