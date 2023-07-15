export function Article({ children }) {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      {children}
    </article>
  );
}
