"use client";

import { useEffect, useState } from "react";
import type { Theme } from "./useTheme";

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: "/#projects", label: "projects" },
  { href: "/#about", label: "about" },
  { href: "/thoughts", label: "thoughts" },
  { href: "/#contact", label: "contact" },
];

export function TopBar({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="topbar" data-open={open ? "true" : "false"}>
      <div className="shell topbar-inner">
        <button
          className="topbar-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "close menu" : "open menu"}
          aria-expanded={open}
          aria-controls="topbar-nav"
        >
          <span className="burger-bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav id="topbar-nav" className="topbar-nav">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="toggle theme"
        >
          <span className="dot" />
          <span className="theme-toggle-label">{theme}</span>
        </button>
      </div>
    </header>
  );
}
