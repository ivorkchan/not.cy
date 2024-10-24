import React, { useEffect, useState } from "react"
import Image from "next/image"

import Zoom from "react-medium-image-zoom"

function useScreenSize(threshold = 1_024) {
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
  readonly src: string
  readonly alt: string
}

export function BareGraphic({ src, alt }: GraphicProps) {
  const isLargeScreen = useScreenSize()

  const image = (
    <Image
      alt={alt}
      className="rounded-md"
      height={540}
      placeholder="empty"
      src={src}
      width={960}
    />
  )

  return isLargeScreen ? <Zoom>{image}</Zoom> : image
}

export function Graphic({ src, alt }: GraphicProps) {
  const isLargeScreen = useScreenSize()

  const image = (
    <Image
      alt={alt}
      className="mb-0 rounded-md"
      height={540}
      placeholder="empty"
      src={src}
      width={960}
    />
  )

  return (
    <figure>
      {isLargeScreen ? <Zoom>{image}</Zoom> : image}
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
