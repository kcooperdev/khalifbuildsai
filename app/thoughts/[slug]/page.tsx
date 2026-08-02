import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { thoughts, formatDate } from "@/lib/content"

export function generateStaticParams() {
  return thoughts.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const thought = thoughts.find((t) => t.slug === slug)
  if (!thought) return {}
  return {
    title: `${thought.title} | Khalif's Console`,
    description: thought.excerpt,
  }
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const thought = thoughts.find((t) => t.slug === slug)
  if (!thought) notFound()

  return (
    <article>
      <Link
        href="/thoughts"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to thoughts
      </Link>

      <header className="mt-12 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <time
            dateTime={thought.date}
            className="text-xs font-semibold uppercase tracking-wide text-primary"
          >
            {formatDate(thought.date)}
          </time>
          <span
            className="h-1 w-1 rounded-full bg-muted-foreground/40"
            aria-hidden
          />
          <span className="text-xs text-muted-foreground">
            {thought.readingTime}
          </span>
        </div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          {thought.title}
        </h1>
      </header>

      <div className="mt-12 flex flex-col gap-7 text-[1.0625rem] leading-[1.85] text-foreground/90 text-pretty">
        {thought.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-8">
        <Link
          href="/thoughts"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to thoughts
        </Link>
      </footer>
    </article>
  )
}
