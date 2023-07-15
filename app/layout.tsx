import React from "react";
import { Metadata } from "next";
import { Fira_Code, Spectral } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Provider } from "@/components/provider";

import "@/styles/global.css";

const font_mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

const font_serif = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const font_cn = localFont({
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
  variable: "--font-cn",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://not.cy"),
  keywords: ["Ivork Chan", "CHENG Yue"],
  authors: [
    {
      name: "Ivork Chan",
      url: "https://not.cy",
    },
  ],
  creator: "Ivork Chan",
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
          font_cn.variable,
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
