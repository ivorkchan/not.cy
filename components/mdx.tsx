"use client";

import React from "react";
import Link from "next/link";

import { useMDXComponent as useMDX } from "next-contentlayer/hooks";
import Balancer from "react-wrap-balancer";

import { Callout } from "@/components/mdx/Callout";
import { Date, DateDistance } from "@/components/mdx/Date";
import { BareGraphic, Graphic } from "@/components/mdx/Graphic";
import { Blog } from "@/components/index";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

const components = {
  Callout,
  Date,
  DateDistance,
  BareGraphic,
  Graphic,
  Blog,
  h1: ({ children }: HeadingProps) => (
    <h1>
      <Balancer>{children}</Balancer>
    </h1>
  ),
  a: (props: AnchorProps) => {
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
