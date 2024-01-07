"use client"

import React from "react"

import { ThemeProvider } from "next-themes"
import { Provider as BalanceProvider } from "react-wrap-balancer"

type ProviderProps = {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class">
      <BalanceProvider>{children}</BalanceProvider>
    </ThemeProvider>
  )
}
