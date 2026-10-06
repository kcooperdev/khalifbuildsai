"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { nav, site } from "@/lib/content"

function SocialIcon({
  className,
  path,
}: {
  className?: string
  path: string
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  )
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kcooperdev/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z",
  },
  {
    label: "X",
    href: "https://x.com/kcooperdev",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/techwithkhalif.bsky.social",
    path: "M5.2 3.1C8 5.1 10.9 9.4 12 11.5c1.1-2.1 4-6.4 6.8-8.4 2-1.5 5.4-2.6 5.4 1 0 .7-.4 6.1-.7 7-.8 3-3.9 3.8-6.6 3.4 4.8.8 6 3.5 3.4 6.2-5 5.1-7.1-2.9-7.7-3.7-.2-.3-.3-.4-.6-.4s-.4.1-.6.4c-.6.8-2.7 8.8-7.7 3.7-2.6-2.7-1.4-5.4 3.4-6.2-2.7.4-5.8-.4-6.6-3.4-.3-.9-.7-6.3-.7-7 0-3.6 3.4-2.5 5.4-1z",
  },
  {
    label: "GitHub",
    href: "https://github.com/kcooperdev",
    path: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z",
  },
]

function closeMenu(event: React.MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open")
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="inline-block h-2.5 w-2.5 bg-primary" />
            {site.name}
          </Link>

          <details className="group">
            <summary className="flex h-9 cursor-pointer list-none items-center gap-2 rounded-sm border-2 border-foreground bg-background px-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4 group-open:hidden" aria-hidden />
              <X className="hidden h-4 w-4 group-open:block" aria-hidden />
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Close</span>
            </summary>
            <div className="fixed inset-x-0 bottom-0 top-16 z-40 border-t-2 border-foreground bg-background text-foreground">
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
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="group/item flex items-baseline justify-between gap-4 border-b-2 border-foreground py-3 last:border-b-0"
                    >
                      <span
                        className={`text-2xl font-medium tracking-tight ${
                          active ? "opacity-100" : "opacity-80 group-hover/item:opacity-100"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="hidden text-sm text-muted-foreground sm:block">
                        {item.note}
                      </span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main
        key={pathname}
        className="mx-auto max-w-2xl px-6 py-12 md:py-16"
      >
        {children}
      </main>

      <footer className="mx-auto max-w-2xl px-6 pb-16">
        <div className="flex flex-col gap-6 border-t-2 border-foreground pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p>
              {"\u00A9"} {new Date().getFullYear()} {site.author}.
            </p>
            <nav aria-label="Social" className="flex items-center gap-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  <SocialIcon className="h-4 w-4" path={item.path} />
                </a>
              ))}
            </nav>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-1 font-medium text-primary transition-opacity hover:opacity-80"
          >
            Book a talk
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </footer>
    </div>
  )
}
