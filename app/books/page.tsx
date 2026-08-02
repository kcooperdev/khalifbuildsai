import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { books } from "@/lib/content"

export const metadata: Metadata = {
  title: "Books | Khalif's Console",
  description: "Books that matter to Khalif, with a note on why.",
}

export default function BooksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Books"
        title="What I'm reading"
        description="Books that shaped how I think. Tap any title to go to the book."
      />

      <ul className="flex flex-col divide-y divide-border">
        {books.map((b) => (
          <li key={b.title} className="py-6 first:pt-0">
            <a
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-1.5 text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {b.title}
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden
              />
            </a>
            <p className="mt-0.5 text-sm font-medium text-primary">{b.author}</p>
            <p className="mt-2 leading-relaxed text-foreground/80 text-pretty">
              {b.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
