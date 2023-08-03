import { allBlogs, allCrafts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

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
                  className="w-[8ch] select-none"
                >
                  {year}
                </td>
              )}
              <td>
                <a
                  href={item.slug}
                  className="light light-hover no-underline transition"
                >
                  {item.title}
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

export function Craft() {
  return <ContentTable data={allCrafts} id="craft" />;
}
