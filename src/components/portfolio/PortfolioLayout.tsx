"use client";

import { useCallback } from "react";
import { SiteFooter } from "./SiteFooter";
import { TopBar } from "./TopBar";
import { useTheme } from "./useTheme";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      {children}
      <SiteFooter />
    </>
  );
}
