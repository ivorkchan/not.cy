import { format, parseISO } from "date-fns";

export function Date({ date }) {
  const parsedDate = parseISO(date);
  return <p className="light">{format(parsedDate, "PPPP")}</p>;
}
