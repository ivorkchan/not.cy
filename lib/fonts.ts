import localFont from "next/font/local";

export const font_sans = localFont({
  src: [
    {
      path: "../public/fonts/InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../public/fonts/InterVariable-Italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const font_serif = localFont({
  src: [
    {
      path: "../public/fonts/Spectral-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/Spectral-Italic.woff2",
      style: "italic",
      weight: "400",
    },
    {
      path: "../public/fonts/Spectral-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/fonts/Spectral-SemiBoldItalic.woff2",
      style: "italic",
      weight: "600",
    },
  ],
  declarations: [
    { prop: "size-adjust", value: "115%" },
    { prop: "ascent-override", value: "85%" },
    { prop: "descent-override", value: "25%" },
    { prop: "line-gap-override", value: "0%" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const font_mono = localFont({
  src: [
    {
      path: "../public/fonts/RobotoMono-Variable.woff2",
      style: "normal",
      weight: "100 700",
    },
    {
      path: "../public/fonts/RobotoMono-Variable-Italic.woff2",
      style: "italic",
      weight: "100 700",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
