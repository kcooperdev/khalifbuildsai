"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

const THEME_EVENT = "kbai-theme-change";

function subscribeTheme(cb: () => void): () => void {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export function useTheme(): [Theme, (t: Theme) => void] {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      window.localStorage.setItem("kbai-theme", t);
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);
  return [theme, setTheme];
}
