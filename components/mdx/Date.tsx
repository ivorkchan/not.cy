import { format, formatDistanceToNow, parseISO } from "date-fns";

type DateProps = {
  readonly date: string;
};

export function Date({ date }: DateProps) {
  const parsedDate = parseISO(date);
  return <div className="mytime light">{format(parsedDate, "PPP")}</div>;
}

export function DateDistance({ date }: DateProps) {
  const parsedDate = parseISO(date);
  return (
    <div className="mytime light">
      {formatDistanceToNow(parsedDate, { addSuffix: true })}
    </div>
  );
}
