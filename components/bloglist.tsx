"use client";

import React, { useMemo } from "react";
import { allBlogs } from "content-collections";
import { Link } from "next-view-transitions";

import type { Blog } from "content-collections";

const IconForward: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M15 14l4 -4l-4 -4" />
    <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
  </svg>
);

const groupByYear = (blogs: Blog[]): Record<string, Blog[]> =>
  blogs.reduce<Record<string, Blog[]>>((acc, blog) => {
    const year = blog.slug.split("/")[0];
    acc[year] = acc[year] || [];
    acc[year].push(blog);
    return acc;
  }, {});

const sortYears = (years: Record<string, Blog[]>): string[] =>
  Object.keys(years).sort((a, b) => Number(b) - Number(a));

const renderYearRows = (year: string, items: Blog[], yearIdx: number) =>
  items.map((item, itemIdx) => (
    <tr key={`${yearIdx}-${itemIdx}`}>
      {itemIdx === 0 && (
        <td className="w-[8ch] select-none lg:w-[12ch]" rowSpan={items.length}>
          {year}
        </td>
      )}
      <td>
        <Link
          className="light light-hover group flex gap-2 no-underline transition"
          href={`/blog/${item.slug}`}
        >
          {item.title}
          <IconForward className="h-7 w-4 opacity-0 transition group-hover:opacity-100" />
        </Link>
      </td>
    </tr>
  ));

type ContentTableProps = {
  readonly data: Blog[];
  readonly id: string;
};

const ContentTable: React.FC<ContentTableProps> = ({ data, id }) => {
  const groupedByYear = useMemo(() => groupByYear(data), [data]);
  const sortedYears = useMemo(() => sortYears(groupedByYear), [groupedByYear]);

  return (
    <table id={id}>
      <tbody>
        {sortedYears.flatMap((year, idx) =>
          renderYearRows(year, groupedByYear[year], idx),
        )}
      </tbody>
    </table>
  );
};

const BlogList: React.FC = () => <ContentTable data={allBlogs} id="blog" />;

export default BlogList;
