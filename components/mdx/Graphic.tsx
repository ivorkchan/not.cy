/* eslint-disable @next/next/no-img-element */

import Zoom from "react-medium-image-zoom";

export function BareGraphic({ src, alt }) {
  return (
    <Zoom>
      <img src={src} alt={alt} className="max-h-[48ch] rounded-md" />
    </Zoom>
  );
}

export function Graphic({ src, alt }) {
  return (
    <figure>
      <Zoom>
        <img src={src} alt={alt} className="!mb-0 max-h-[48ch] rounded-md" />
      </Zoom>
      <figcaption>{alt}</figcaption>
    </figure>
  );
}
