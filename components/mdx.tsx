"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { useMDXComponent as useMDX } from "next-contentlayer/hooks"
import Balancer from "react-wrap-balancer"

import { autoSpacing } from "@/lib/heti"
import { cn } from "@/lib/utils"
import { Callout } from "@/components/mdx/Callout"
import { Date, DateDistance } from "@/components/mdx/Date"
import { BareGraphic, Graphic } from "@/components/mdx/Graphic"
import { Blog } from "@/components/index"

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type AnchorProps = React.HTMLProps<HTMLAnchorElement>

const components = {
  Callout,
  Date,
  DateDistance,
  BareGraphic,
  Graphic,
  Blog,
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

    return <a target="_blank" rel="noopener noreferrer" {...props} />
  },
}

interface MDXProps {
  code: string
}

export function MDX({ code }: MDXProps) {
  const MDXContent = useMDX(code)
  const [layoutPolished, setLayoutPolished] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      autoSpacing().finally(() => setLayoutPolished(true))
    }, 100)

    return () => clearTimeout(timer)
  })

  return (
    <div className={cn("heti ", layoutPolished ? "block" : "hidden")}>
      <MDXContent components={components} />
    </div>
  )
}
