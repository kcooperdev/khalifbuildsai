import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import {
  archive,
  earlierInterview,
  featureVideo,
  podcasts,
  press,
  site,
  story,
  talks,
} from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: site.promise,
}

const roles: { org: string; role: string; link?: string }[] = [
  { org: "CarMax", role: "Software engineer", link: "https://www.carmax.com" },
  {
    org: "Bmore Tech Nights",
    role: "Founder",
    link: "https://bmoretechnights.com",
  },
  {
    org: "Baltimore Tech Week",
    role: "Founder",
    link: "https://bmoretechweek.com",
  },
  {
    org: "AI Collective, Baltimore",
    role: "Chapter lead",
    link: "https://aicollective.com/chapters/baltimore",
  },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About" title="The person behind the work" />

      <p className="text-lg leading-relaxed text-pretty">{site.credentials}</p>
      <p className="mt-4 text-lg leading-relaxed text-pretty">{site.method}</p>

      <div className="mt-5 flex flex-col gap-5 text-lg leading-relaxed text-pretty">
        {story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-foreground">
          Now
        </h2>
        <ul className="mt-4 flex flex-col divide-y-2 divide-foreground">
          {roles.map((r) => (
            <li
              key={r.org}
              className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
            >
              {r.link ? (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 font-medium text-foreground"
                >
                  {r.org}
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
              ) : (
                <span className="font-medium">{r.org}</span>
              )}
              <span className="text-right text-sm text-muted-foreground">
                {r.role}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-pretty">
          Sponsors and partners for Bmore Tech Nights and Baltimore Tech Week,{" "}
          <Link
            href="/book?kind=partner"
            className="font-medium text-foreground underline underline-offset-4"
          >
            book a conversation
          </Link>
          .
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-foreground">
          Speaking
        </h2>
        <p className="mt-3 leading-relaxed text-pretty">
          Talks at {talks.slice(0, -1).join(", ")}, and {talks[talks.length - 1]}.
        </p>
        <p className="mt-2 leading-relaxed text-pretty">
          Podcasts: {podcasts.join(" and ")}.
        </p>
        <ul className="mt-4 flex flex-col divide-y-2 divide-foreground border-t-2 border-foreground">
          {press.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-baseline justify-between gap-3 py-3"
              >
                <span>
                  <span className="block text-xs text-muted-foreground">
                    {item.outlet}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <Link
          href="/book"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-sm border-2 border-foreground bg-primary px-5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background"
        >
          Book a talk or a workshop
        </Link>
      </div>

      <section className="mt-16 border-2 border-foreground p-5">
        <h2 className="text-xs font-medium uppercase tracking-widest text-foreground">
          More
        </h2>

        <div className="mt-6">
          <h3 className="font-medium">{featureVideo.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{featureVideo.detail}</p>
          <div className="mt-4 overflow-hidden border-2 border-foreground">
            <iframe
              className="aspect-video w-full"
              src={featureVideo.embed}
              title={`${featureVideo.title}, ${featureVideo.detail}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <ul className="mt-8 flex flex-col divide-y-2 divide-foreground border-t-2 border-foreground">
          <li>
            <a
              href={earlierInterview.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-baseline justify-between gap-3 py-3"
            >
              <span>
                <span className="block text-xs text-muted-foreground">
                  {earlierInterview.outlet}
                </span>
                <span className="font-medium">{earlierInterview.label}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </li>
        </ul>

        <ul className="mt-2 flex flex-col divide-y-2 divide-foreground border-t-2 border-foreground">
          {archive.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-baseline justify-between gap-4 py-3"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-sm text-muted-foreground">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
