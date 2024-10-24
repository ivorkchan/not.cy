import React from "react"
import { Metadata } from "next"
import localFont from "next/font/local"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from "next-view-transitions"

import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"
import { Provider } from "@/components/provider"

import "@/public/fonts/HYXinRenWenSong55W/result.css"
import "@/public/fonts/FZXSSK/result.css"
import "@/public/fonts/FZXKTK/result.css"
import "@/styles/heti.css"
import "@/styles/zoom.css"
import "@/styles/global.css"

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
})

const font_serif = localFont({
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
})

const font_mono = localFont({
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
})

/* eslint-disable-next-line react-refresh/only-export-components */
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
}

/* eslint-disable-next-line react-refresh/only-export-components */
export const metadata: Metadata = {
  metadataBase: new URL("https://not.cy"),
  keywords: ["Ivork Chan", "CHENG Yue", "Yue Cheng"],
  authors: [
    {
      name: "cy",
      url: "https://not.cy",
    },
  ],
  creator: "cy",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "font-sans",
            font_sans.variable,
            font_serif.variable,
            font_mono.variable
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
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}
