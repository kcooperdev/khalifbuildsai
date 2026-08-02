"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { nav, site } from "@/lib/content"

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Lock scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="min-h-screen">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            {site.name}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {open ? (
              <>
                <X className="h-4 w-4" aria-hidden />
                Close
              </>
            ) : (
              <>
                <Menu className="h-4 w-4" aria-hidden />
                Menu
              </>
            )}
          </button>
        </div>
      </header>

      {/* Top drawer menu */}
      <div
        id="site-menu"
        className={`fixed inset-x-0 top-[57px] z-40 origin-top overflow-hidden bg-primary text-primary-foreground transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-2xl flex-col px-6 py-4"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className="group flex items-baseline justify-between gap-4 border-b border-primary-foreground/15 py-3 last:border-b-0"
              >
                <span
                  className={`text-2xl font-medium tracking-tight transition-opacity ${
                    active ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
                <span className="hidden text-sm text-primary-foreground/70 sm:block">
                  {item.note}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Backdrop */}
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[57px] z-30 bg-foreground/20"
        />
      ) : null}

      <main
        key={pathname}
        className="mx-auto max-w-2xl animate-rise-in px-6 py-16 md:py-24"
      >
        {children}
      </main>

      <footer className="mx-auto max-w-2xl px-6 pb-16">
        <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"\u00A9"} {new Date().getFullYear()} {site.author}.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1 font-medium text-primary transition-opacity hover:opacity-80"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </footer>
    </div>
  )
}
