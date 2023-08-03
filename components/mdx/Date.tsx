import { format, parseISO } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export function Date({ date }) {
  const parsedDate = parseISO(date);
  return <span className="light">{format(parsedDate, "PPPP")}</span>;
}

export function DateDistance({ date }) {
  const parsedDate = parseISO(date);
  return (
    <span className="light">
      {formatDistanceToNow(parsedDate, { addSuffix: true })}
    </span>
  );
}
