"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  {
    name: "about",
    href: "/about",
  },
  {
    name: "blog",
    href: "/blog",
  },
];

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

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, (value) => (value > 10 ? 1 : 0));

  return (
    <header className="sticky top-0">
      <div className="mx-auto max-w-4xl">
        <nav className="flex justify-between px-5 py-8 leading-4 lg:px-0">
          <Link
            href="/blog"
            className={pathname.startsWith("/blog/") ? "" : "invisible"}
          >
            <div className="group flex gap-2">
              <IconBack className="h-4 w-3 transition-transform group-hover:-translate-x-1" />
              <span>back</span>
            </div>
          </Link>
          <div className="flex gap-4">
            {navLinks.map((link) => {
              let isActive;
              if (link.href === "/") {
                isActive = pathname === link.href;
              } else {
                isActive = pathname.startsWith(link.href);
              }

              return (
                <Link href={link.href} key={link.name}>
                  <div
                    className={
                      isActive
                        ? "text-lime-600 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-500"
                    }
                  >
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
        <motion.hr
          className="border-neutral-200 dark:border-neutral-700"
          style={{ opacity }}
        />
      </div>
    </header>
  );
}
