import React from "react"

export default function Article({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      {children}
    </article>
  )
}
