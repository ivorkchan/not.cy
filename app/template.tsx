"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { autoSpacing } from "@/lib/heti";

export default function Article({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [layoutPolished, setLayoutPolished] = useState<boolean>(false);

  useEffect(() => {
    const handleAutoSpacing = async () => {
      try {
        await autoSpacing();
      } finally {
        setLayoutPolished(true);
      }
    };

    setLayoutPolished(false);
    void handleAutoSpacing();
  }, [pathname]);

  return (
    <article
      className={`prose prose-neutral dark:prose-invert ${
        layoutPolished ? "block" : "hidden"
      }`}
    >
      {children}
    </article>
  );
}
