import React from "react";
import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Provider } from "@/components/provider";

import "@/styles/zoom.css";
import "@/styles/heti.css";
import "@/styles/global.css";

const font_mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

const font_serif = localFont({
  src: [
    {
      path: "../public/fonts/Spectral-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Spectral-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Spectral-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Spectral-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  declarations: [
    { prop: "size-adjust", value: "106%" },
    { prop: "ascent-override", value: "85%" },
    { prop: "descent-override", value: "22%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

const font_hei = localFont({
  src: [
    {
      path: "../public/fonts/FZYouHK_508R.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FZYouHK_508R.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/FZYouHK_512B.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FZYouHK_512B.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-hei",
});

const font_kai = localFont({
  src: "../public/fonts/FZXKTK.woff2",
  variable: "--font-kai",
});

const font_kai_punc = localFont({
  src: "../public/fonts/HYKaiTiS.subset.woff2",
  variable: "--font-kai-punc",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://not.cy"),
  keywords: ["Ivork Chan", "CHENG Yue", "Yue Cheng"],
  authors: [
    {
      name: "CHENG Yue",
      url: "https://not.cy",
    },
  ],
  creator: "CHENG Yue",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "font-sans",
          font_mono.variable,
          font_serif.variable,
          font_hei.variable,
          font_kai.variable,
          font_kai_punc.variable,
        )}
      >
        <Provider>
          <main>
            <div className="main-grid">
              <Nav />
              {children}
            </div>
          </main>
        </Provider>
        <Analytics />
        <script src="/scripts/heti-addon.js" defer />
        <script src="/scripts/heti-init.js" defer />
      </body>
    </html>
  );
}
