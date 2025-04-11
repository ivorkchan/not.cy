"use client";

import React from "react";
import { useMDXComponent } from "@content-collections/mdx/react";
import { Link } from "next-view-transitions";
import Balancer from "react-wrap-balancer";

import { Callout } from "@/components/mdx/Callout";
import { Date, DateDistance } from "@/components/mdx/Date";
import { Graphic } from "@/components/mdx/Graphic";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

const components = {
  Callout,
  Date,
  DateDistance,
  Graphic,
  h1: (props: HeadingProps) => (
    <h1 {...props}>
      <Balancer>{props.children}</Balancer>
    </h1>
  ),
  a: (props: AnchorProps) => {
    const href = props.href;
    const isInternalLink = href?.startsWith("/");

    if (!href) return null;

    if (isInternalLink) {
      return <Link href={href}>{props.children}</Link>;
    }

    return <a rel="noopener noreferrer" target="_blank" {...props} />;
  },
};

type MDXProps = {
  readonly code: string;
};

export function MdxProvider({ code }: MDXProps) {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="heti">
      <MDXContent components={components} />
    </div>
  );
}
