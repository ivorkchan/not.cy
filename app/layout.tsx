import React from "react";
import { Metadata } from "next";
import { Fira_Code, Spectral } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { Provider } from "@/components/provider";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

import "@/styles/global.css";

const fira_code = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const font_cn = localFont({
  src: [
    { path: "../public/fonts/HYXinRenWenSong55W.woff2", style: "normal" },
    { path: "../public/fonts/HYXinRenWenSong55W.woff2", style: "italic" },
  ],
  variable: "--font-cn",
});

export const metadata: Metadata = {
  title: "Ivork Chan",
  description: "Sensibility is the end of rationality.",
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
  openGraph: {
    title: "Ivork Chan",
    description: "Sensibility is the end of rationality.",
    url: "https://not.cy",
    images: [{ url: "https://not.cy/og" }],
  },
  twitter: {
    title: "Ivork Chan",
    description: "Sensibility is the end of rationality.",
    creator: "@ivorkchan",
    images: ["https://not.cy/og"],
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
          fira_code.variable,
          spectral.variable,
          font_cn.variable
        )}
      >
        <Provider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
