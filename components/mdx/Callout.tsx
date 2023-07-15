export function Callout({ children, type }) {
  const typeStyles = {
    info: "text-blue-900 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/30",
    warn: "text-yellow-900 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/30",
    error: "text-red-900 bg-red-100 dark:text-red-200 dark:bg-red-900/30",
  };

  const styles = typeStyles[type] || typeStyles.info;

  return (
    <figure className={`rounded-md p-5 ${styles}`}>
      <div className="-my-5">{children}</div>
    </figure>
  );
}
