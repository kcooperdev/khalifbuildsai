import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About — Khalif's Console",
  description: "A short, plain-language bio of Khalif.",
}

const roles = [
  { org: "Soulhause", role: "Founder", link: "https://soulhause.com" },
  { org: "Baltimore Tech Week", role: "Founder", link: "https://bmoretechweek.com" },
  {
    org: "AI Collective, Baltimore",
    role: "Chapter Lead",
    link: "https://aicollective.com/chapters/baltimore",
  },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="A short bio"
        description="Who I am and how I like to work — in plain language."
      />

      <p className="text-lg font-medium text-primary text-balance">
        {"Software engineer first. Community & ecosystem builder. Founder of SoulHause + Baltimore Tech Week."}
      </p>

      <div className="mt-5 flex flex-col gap-5 text-lg leading-relaxed text-foreground/90 text-pretty">
        <p>
          {"I'm Khalif — a self-taught software engineer who's been building in tech for over a decade. Code is where I started and where I'm most at home: making small, useful things and shipping them."}
        </p>
        <p>
          {"I build quick, and I'm a solo builder at heart. But the thing I love most is creating spaces where people come together to collaborate and build — growing the communities and ecosystems around the work."}
        </p>
        <p>
          {"This site is my console: one place for my projects, my work, and my thinking — readable by anyone, technical or not."}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now
        </h2>
        <ul className="mt-4 flex flex-col divide-y divide-border">
          {roles.map((r) => (
            <li
              key={r.org}
              className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
            >
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
              >
                {r.org}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden
                />
              </a>
              <span className="text-right text-sm text-muted-foreground">
                {r.role}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Speaking
        </h2>
        <p className="mt-3 leading-relaxed text-foreground/90 text-pretty">
          {site.speaking}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          {site.email}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  )
}
