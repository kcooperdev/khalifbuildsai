import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { nav, site } from "@/lib/content"

export default function HomePage() {
  const links = nav.filter((item) => item.href !== "/")

  return (
    <div>
      <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Engineer & community builder
      </span>

      <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
        Building useful things and the{" "}
        <span className="text-primary">community</span> around them.
      </h1>

      <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
        {site.intro}
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-lg font-medium tracking-tight">
                {item.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <span className="text-sm text-muted-foreground text-pretty">
              {item.note}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-primary p-6 text-primary-foreground">
        <p className="leading-relaxed text-pretty">{site.speaking}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Email me
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  )
}
