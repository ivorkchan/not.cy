import React, { useEffect, useState } from "react"
import Image from "next/image"

import Zoom from "react-medium-image-zoom"

interface GraphicProps {
  src: string
  alt: string
}

export function BareGraphic({ src }: GraphicProps) {
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
    <Image
      src={src}
      alt={""}
      width={0}
      height={0}
      sizes="100vw"
      className="max-h-[64ch] w-auto rounded-md"
      loading={"lazy"}
    />
  )

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
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className="!mb-0 max-h-[64ch] w-auto rounded-md"
      loading={"lazy"}
    />
  )

  return (
    <figure>
      {isLargeScreen ? <Zoom>{image}</Zoom> : image}
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
