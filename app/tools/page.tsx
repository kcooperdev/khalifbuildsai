import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { tools } from "@/lib/content"

export const metadata: Metadata = {
  title: "Tools | Khalif's Console",
  description: "The tools Khalif uses to work, and why.",
}

export default function ToolsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Tools"
        title="What I work with"
        description="What I reach for to do the work, and a short note on each."
      />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <li
            key={t.name}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background">
              <Image
                src={`/logos/${t.slug}.svg`}
                alt={`${t.name} logo`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </span>
            <div>
              <h2 className="font-medium text-card-foreground">{t.name}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {t.use}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
