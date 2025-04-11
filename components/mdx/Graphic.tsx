import React, { useEffect, useState } from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

type CustomImageProps = {
  alt: string;
  className?: string;
  height?: number;
  layout?: string;
  loading?: any;
  placeholder?: any;
  src: string;
  width?: number;
};

const commonImageProps: Omit<CustomImageProps, "alt" | "src"> = {
  height: 0,
  width: 0,
  layout: "responsive",
  loading: "lazy",
  placeholder: "empty",
  className: "rounded-md mb-0 object-contain",
};

function useScreenSize(threshold = 1_024) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= threshold);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [threshold]);

  return isLargeScreen;
}

type GraphicProps = {
  readonly alt: string;
  readonly src: string;
};

export function Graphic({ src, alt }: GraphicProps) {
  const isLargeScreen = useScreenSize();
  const image = <Image {...commonImageProps} alt={alt} src={src} />;

  return (
    <figure>
      {isLargeScreen ? <Zoom>{image}</Zoom> : image}
      <figcaption>{alt}</figcaption>
    </figure>
  );
}
