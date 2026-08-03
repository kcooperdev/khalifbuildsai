import type { Metadata } from "next"
import Image from "next/image"
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
          <li key={b.title} className="flex items-start gap-5 py-8 first:pt-0 sm:gap-7">
            <a
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block shrink-0"
              tabIndex={-1}
              aria-hidden
            >
              <Image
                src={b.image}
                alt={`Cover of ${b.title} by ${b.author}`}
                width={96}
                height={144}
                className="aspect-[2/3] w-20 rounded-lg border border-border object-cover shadow-sm sm:w-24"
              />
            </a>
            <div className="min-w-0">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
