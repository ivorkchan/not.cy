import { format, formatDistanceToNow, parseISO } from "date-fns";

export function Date({ date }) {
  const parsedDate = parseISO(date);
  return <span className="light">{format(parsedDate, "PPP")}</span>;
}

export function DateDistance({ date }) {
  const parsedDate = parseISO(date);
  return (
    <span className="light">
      {formatDistanceToNow(parsedDate, { addSuffix: true })}
    </span>
  );
}
