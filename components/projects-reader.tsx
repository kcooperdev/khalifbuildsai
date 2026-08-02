import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/content"

export function ProjectsReader() {
  return (
    <ul className="flex flex-col gap-16">
      {projects.map((p) => (
        <li key={p.slug}>
          <article>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex flex-col items-start gap-3"
            >
              <h2 className="text-2xl font-medium leading-snug tracking-tight text-foreground text-balance transition-colors group-hover:text-primary">
                {p.name}
              </h2>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                {p.description}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read the story
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
