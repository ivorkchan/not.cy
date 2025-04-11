"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider as BalanceProvider } from "react-wrap-balancer";

const Provider: React.FC<{ readonly children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeProvider>
    <BalanceProvider>{children}</BalanceProvider>
  </ThemeProvider>
);

export default Provider;
