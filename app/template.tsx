export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      {children}
    </article>
  )
}
