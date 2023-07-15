"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const IconBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
  </svg>
);

export function Nav() {
  const pathname = usePathname();

  let isBlog;
  let isBlogArticle;
  let isCraft;
  let isCraftProject;
  let isIndex;

  isIndex = pathname.startsWith("/about");
  isBlog = pathname.startsWith("/blog");
  isBlogArticle =
    pathname.startsWith("/blog/") && pathname.length > "/blog/".length;
  isCraft = pathname.startsWith("/craft");
  isCraftProject =
    pathname.startsWith("/craft/") && pathname.length > "/craft/".length;

  return (
    <nav
      className={
        isIndex
          ? "main-nav prose prose-neutral opacity-0 dark:prose-invert"
          : "main-nav prose prose-neutral dark:prose-invert"
      }
    >
      {isBlogArticle && (
        <Link href="/blog" className="no-underline">
          <span className="light light-hover flex gap-2 transition">
            <IconBack className="h-7 w-3" />
            <em>Back to Writing</em>
          </span>
        </Link>
      )}
      {isCraftProject && (
        <Link href="/craft" className="no-underline">
          <span className="light light-hover flex gap-2 transition">
            <IconBack className="h-7 w-3" />
            <em>Back to Design</em>
          </span>
        </Link>
      )}
      {(isBlog || isCraft) && !isBlogArticle && !isCraftProject && (
        <Link href="/about" className="no-underline">
          <span className="light light-hover flex gap-2 transition">
            <IconBack className="h-7 w-3" />
            <em>Back to Index</em>
          </span>
        </Link>
      )}
    </nav>
  );
}
