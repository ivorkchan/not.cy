import Link from "next/link";

import { Article } from "@/components/article";

export default function NotFound() {
  return (
    <Article>
      <h1>Page not found</h1>
      <hr />
      <p>
        View <Link href="/about">homepage</Link>.
      </p>
    </Article>
  );
}
