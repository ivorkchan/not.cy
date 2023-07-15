/* eslint-disable @next/next/no-img-element */

export function Graphic({ src, alt }) {
  return (
    <figure>
      <img src={src} alt={alt} className="max-h-[45ch]" />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}
