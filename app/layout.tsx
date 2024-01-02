import React from "react";
import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Provider } from "@/components/provider";

import "@/styles/global.css";

const font_sans = localFont({
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

const font_serif = localFont({
  src: [
    {
      path: "../public/fonts/Sentient-Variable.woff2",
      style: "normal",
      weight: "200 700",
    },
    {
      path: "../public/fonts/Sentient-VariableItalic.woff2",
      style: "italic",
      weight: "200 700",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const font_mono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const font_kai_punc = localFont({
  src: "../public/fonts/HYKaiTiS.subset.woff2",
  variable: "--font-kai-punc",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://not.cy"),
  keywords: ["Ivork Chan", "CHENG Yue", "Yue Cheng"],
  authors: [
    {
      name: "CY",
      url: "https://not.cy",
    },
  ],
  creator: "CY",
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
          font_sans.variable,
          font_serif.variable,
          font_mono.variable,
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
      </body>
    </html>
  );
}
