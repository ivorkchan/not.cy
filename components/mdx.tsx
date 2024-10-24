"use client"

import React from "react"

import { useMDXComponent as useMDX } from "next-contentlayer/hooks"
import { Link } from "next-view-transitions"
import Balancer from "react-wrap-balancer"

import { Callout } from "@/components/mdx/Callout"
import { Date, DateDistance } from "@/components/mdx/Date"
import { BareGraphic, Graphic } from "@/components/mdx/Graphic"
import { BlogList } from "@/components/bloglist"

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type AnchorProps = React.HTMLProps<HTMLAnchorElement>

const components = {
  Callout,
  Date,
  DateDistance,
  BareGraphic,
  Graphic,
  BlogList,
  h1: (props: HeadingProps) => (
    <h1 {...props}>
      <Balancer>{props.children}</Balancer>
    </h1>
  ),
  a: (props: AnchorProps) => {
    const href = props.href
    const isInternalLink = href && href.startsWith("/")

    if (isInternalLink) {
      return <Link href={href}>{props.children}</Link>
    }

    return <a rel="noopener noreferrer" target="_blank" {...props} />
  },
}

interface MDXProps {
  readonly code: string
}

export function Mdx({ code }: MDXProps) {
  const MDXContent = useMDX(code)

  return (
    <div className="heti">
      <MDXContent components={components} />
    </div>
  )
}
