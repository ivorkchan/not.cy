"use client";

import React from "react";
import Link from "next/link";

import { useMDXComponent as useMDX } from "next-contentlayer/hooks";

import { BlogList } from "@/components/mdx/BlogList";
import { Callout } from "@/components/mdx/Callout";
import { Date } from "@/components/mdx/Date";
import { Graphic } from "@/components/mdx/Graphic";

const components = {
  BlogList,
  Callout,
  Date,
  Graphic,
  a: (props: React.HTMLProps<HTMLAnchorElement>) => {
    const href = props.href;
    const isInternalLink = href && href.startsWith("/");

    if (isInternalLink) {
      return <Link href={href}>{props.children}</Link>;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  },
};

interface MDXProps {
  code: string;
}

export function MDX({ code }: MDXProps) {
  const MDXContent = useMDX(code);

  return <MDXContent components={components} />;
}
