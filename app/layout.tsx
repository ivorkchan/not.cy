import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";

import { cn } from "@/utils/clsx";
import { font_mono, font_sans, font_serif } from "@/utils/font";

import Nav from "@/components/ui/Nav";
import Provider from "@/components/ui/Provider";

import type { Metadata } from "next";

import "@/public/fonts/HYXinRenWenSong55W/result.css";
import "@/public/fonts/FZXSSK/result.css";
import "@/public/fonts/FZXKTK/result.css";
import "@/styles/heti.css";
import "@/styles/zoom.css";
import "@/styles/global.css";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
};

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
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
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
            font_mono.variable,
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
  );
}
