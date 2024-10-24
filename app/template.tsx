"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

import { autoSpacing } from "@/lib/heti"

export default function Article({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const pathname = usePathname()
  const executedPathRef = useRef<string | null>(null)

  useEffect(() => {
    const applyAutoSpacing = async () => {
      try {
        console.log(`Applying autoSpacing for ${pathname}...`)
        await autoSpacing()
        executedPathRef.current = pathname
      } catch (error) {
        console.error("Error applying autoSpacing:", error)
      }
    }

    if (executedPathRef.current !== pathname) {
      applyAutoSpacing()
    }
  }, [pathname])

  return (
    <article className="prose prose-neutral dark:prose-invert">
      {children}
    </article>
  )
}
