import { format, formatDistanceToNow, parseISO } from "date-fns"

interface DateProps {
  date: string
}

export function Date({ date }: DateProps) {
  const parsedDate = parseISO(date)
  return <span className="light">{format(parsedDate, "PPP")}</span>
}

export function DateDistance({ date }: DateProps) {
  const parsedDate = parseISO(date)
  return (
    <span className="light">
      {formatDistanceToNow(parsedDate, { addSuffix: true })}
    </span>
  )
}
