import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const IconForward = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 14l4 -4l-4 -4"></path>
    <path d="M19 10h-11a4 4 0 1 0 0 8h1"></path>
  </svg>
);

function groupByYear(data) {
  const groups = data.reduce((groups, item) => {
    const year = item.slug.split("/")[2];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(item);
    return groups;
  }, {});

  for (const year in groups) {
    groups[year].sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date)),
    );
  }

  return groups;
}

function sortYears(years) {
  return Object.keys(years).sort((a, b) => Number(b) - Number(a));
}

function ContentTable({ data, id }) {
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
                  rowSpan={itemsForYear.length}
                  className="w-[8ch] select-none lg:w-[12ch]"
                >
                  {year}
                </td>
              )}
              <td>
                <a
                  href={item.slug}
                  className="light light-hover group flex gap-2 no-underline transition"
                >
                  {item.title}
                  <IconForward className="h-7 w-4 opacity-0 transition group-hover:opacity-100" />
                </a>
              </td>
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
}

export function Blog() {
  return <ContentTable data={allBlogs} id="blog" />;
}
