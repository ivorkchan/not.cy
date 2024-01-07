/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"

import Zoom from "react-medium-image-zoom"

interface GraphicProps {
  src: string
  alt: string
}

export function BareGraphic({ src, alt }: GraphicProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const image = <img src={src} alt={alt} className="max-h-[64ch] rounded-md" />

  return isLargeScreen ? <Zoom>{image}</Zoom> : image
}

export function Graphic({ src, alt }: GraphicProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const image = (
    <img src={src} alt={alt} className="!mb-0 max-h-[64ch] rounded-md" />
  )

  return (
    <figure>
      {isLargeScreen ? <Zoom>{image}</Zoom> : image}
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
