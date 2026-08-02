import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { thoughts, formatDate } from "@/lib/content"

export function ThoughtsReader() {
  const sorted = [...thoughts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <ul className="flex flex-col gap-16">
      {sorted.map((t) => (
        <li key={t.slug}>
          <article>
            <Link
              href={`/thoughts/${t.slug}`}
              className="group flex flex-col items-start gap-3"
            >
              <div className="flex items-center gap-2.5">
                <time
                  dateTime={t.date}
                  className="text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {formatDate(t.date)}
                </time>
                <span
                  className="h-1 w-1 rounded-full bg-muted-foreground/40"
                  aria-hidden
                />
                <span className="text-xs text-muted-foreground">
                  {t.readingTime}
                </span>
              </div>
              <h2 className="text-2xl font-medium leading-snug tracking-tight text-foreground text-balance transition-colors group-hover:text-primary">
                {t.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                {t.excerpt}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read post
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
