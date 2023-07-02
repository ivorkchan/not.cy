"use client";

import { ThemeProvider } from "next-themes";
import { Provider as BalanceProvider } from "react-wrap-balancer";

export function Provider({ children }) {
  return (
    <ThemeProvider attribute="class">
      <BalanceProvider>{children}</BalanceProvider>
    </ThemeProvider>
  );
}
