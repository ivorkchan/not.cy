"use client";

import React from "react";

import { ThemeProvider } from "next-themes";
import { Provider as BalanceProvider } from "react-wrap-balancer";

export function Provider({ children }: { readonly children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BalanceProvider>{children}</BalanceProvider>
    </ThemeProvider>
  );
}
