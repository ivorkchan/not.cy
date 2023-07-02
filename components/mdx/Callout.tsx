export function Callout({ children, type }) {
  const typeStyles = {
    info: "text-blue-900 border-blue-200 bg-blue-100 dark:text-blue-200 dark:border-blue-200/30 dark:bg-blue-900/30",
    warn: "text-yellow-900 border-yellow-200 bg-yellow-100 dark:text-yellow-200 dark:border-yellow-200/30 dark:bg-yellow-900/30",
    error:
      "text-red-900 border-red-200 bg-red-100 dark:text-red-200 dark:border-red-200/30 dark:bg-red-900/30",
    default:
      "text-neutral-900 border-neutral-200 bg-neutral-100 dark:text-neutral-200 dark:border-neutral-200/30 dark:bg-neutral-800",
  };

  const styles = typeStyles[type] || typeStyles.default;

  return (
    <figure className={`rounded-md border border-l-4 p-5 ${styles}`}>
      <div className="-my-5">{children}</div>
    </figure>
  );
}
