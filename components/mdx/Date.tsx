import { format, formatDistanceToNow, parseISO } from "date-fns"

interface DateProps {
  date: string
}

export function Date({ date }: DateProps) {
  const parsedDate = parseISO(date)
  return <div className="light">{format(parsedDate, "PPP")}</div>
}

export function DateDistance({ date }: DateProps) {
  const parsedDate = parseISO(date)
  return (
    <div className="light">
      {formatDistanceToNow(parsedDate, { addSuffix: true })}
    </div>
  )
}
