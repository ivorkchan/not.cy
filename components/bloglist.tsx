import React from "react";

import { allBlogs } from "content-collections";
import { compareDesc } from "date-fns";
import { Link } from "next-view-transitions";

import type { Blog } from "content-collections";

const IconForward = (props: React.SVGProps<SVGSVGElement>) => (
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

function groupByYear(blogs: Blog[]): Record<string, Blog[]> {
  const groupedData = blogs.reduce(
    (acc: Record<string, Blog[]>, item: Blog) => {
      const year = item.slug.split("/")[0];
      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(item);
      return acc;
    },
    {},
  );

  for (const year of Object.keys(groupedData)) {
    groupedData[year].sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : new Date(0);
      const dateB = b.date ? new Date(b.date) : new Date(0);
      return compareDesc(dateA, dateB);
    });
  }

  return groupedData;
}

function sortYears(years: Record<string, Blog[]>): string[] {
  return Object.keys(years).sort((a, b) => Number(b) - Number(a));
}

type ContentTableProps = {
  readonly data: Blog[];
  readonly id: string;
};

function ContentTable({ data, id }: ContentTableProps) {
  const groupedByYear = groupByYear(data);
  const sortedYears = sortYears(groupedByYear);

  return (
    <table id={id}>
      <tbody>
        {sortedYears.flatMap((year, yearIdx) => {
          const itemsForYear = groupedByYear[year];
          return itemsForYear.map((item, itemIdx) => (
            <tr key={`${yearIdx}-${itemIdx}`}>
              {itemIdx === 0 && (
                <td
                  className="w-[8ch] select-none lg:w-[12ch]"
                  rowSpan={itemsForYear.length}
                >
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
        })}
      </tbody>
    </table>
  );
}

export function BlogList() {
  return <ContentTable data={allBlogs} id="blog" />;
}
