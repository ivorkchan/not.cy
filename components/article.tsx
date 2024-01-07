"use client"

import { FC, PropsWithChildren, useEffect, useState } from "react"

import { autoSpacing } from "@/lib/heti"
import { cn } from "@/lib/utils"

import "@/public/fonts/HYXinRenWenSong55W/result.css"
import "@/public/fonts/FZXSSK/result.css"
import "@/public/fonts/FZXKTK/result.css"
import "@/styles/zoom.css"
import "react-medium-image-zoom/dist/styles.css"
import "@/styles/heti.css"

export const Article: FC<PropsWithChildren> = ({ children }) => {
  const [layoutPolished, setLayoutPolished] = useState<boolean>(false)

  useEffect(() => {
    autoSpacing().finally(() => setLayoutPolished(true))
  }, [])

  return (
    <article
      className={cn(
        "heti prose prose-neutral dark:prose-invert",
        layoutPolished ? "block" : "hidden"
      )}
    >
      {children}
    </article>
  )
}
