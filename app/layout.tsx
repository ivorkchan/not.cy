import React from "react";
import { Metadata } from "next";
import { Literata, Roboto_Mono } from "next/font/google";
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

const font_serif = Literata({
  variable: "--font-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const font_mono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const font_kai_punc = localFont({
  src: "../public/fonts/HYKaiTiS.subset.woff2",
  variable: "--font-kai-punc",
  display: "swap",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
  fit: "cover",
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
