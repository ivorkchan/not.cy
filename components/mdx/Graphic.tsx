/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"

import Zoom from "react-medium-image-zoom"

function useScreenSize(threshold = 1024) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= threshold)
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [threshold])

  return isLargeScreen
}

interface GraphicProps {
  src: string
  alt: string
}

export function BareGraphic({ src }: GraphicProps) {
  const isLargeScreen = useScreenSize()

  const image = <img src={src} alt={""} className="max-h-[64ch] rounded-md" />

  return isLargeScreen ? <Zoom>{image}</Zoom> : image
}

export function Graphic({ src, alt }: GraphicProps) {
  const isLargeScreen = useScreenSize()

  const image = (
    <img src={src} alt={alt} className="mb-0 max-h-[64ch] rounded-md" />
  )

  return (
    <figure>
      {isLargeScreen ? <Zoom>{image}</Zoom> : image}
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
