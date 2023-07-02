import { format, parseISO } from "date-fns";

export function Date({ date }) {
  const parsedDate = parseISO(date);
  return (
    <p className="font-serif italic text-neutral-500 dark:text-neutral-400">
      {format(parsedDate, "MMM d, yyyy")}
    </p>
  );
}
