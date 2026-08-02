import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/content"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} | Khalif's Console`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <article>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to projects
      </Link>

      <header className="mt-12 flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Project
        </span>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>
      </header>

      <div className="mt-12 flex flex-col gap-7 text-[1.0625rem] leading-[1.85] text-foreground/90 text-pretty">
        {project.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Visit project
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>

      <footer className="mt-16 border-t border-border pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to projects
        </Link>
      </footer>
    </article>
  )
}
