import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { GuideForm } from "@/components/guide-form"
import { site } from "@/lib/content"

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ guide?: string }>
}) {
  const params = await searchParams
  const guideError =
    params.guide === "invalid"
      ? "Enter a real email."
      : params.guide === "error"
        ? "Couldn't save that email. Try again."
        : ""

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        {site.label}
      </p>
      <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
        {site.headline}
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-pretty">{site.promise}</p>

      <div className="mt-8">
        <GuideForm error={guideError} />
      </div>

      <section className="mt-16 border-2 border-foreground p-5">
        <div className="flex items-center gap-4">
          <Image
            src="/khalif.jpg"
            alt="Khalif Cooper"
            width={72}
            height={72}
            className="h-[4.5rem] w-[4.5rem] shrink-0 border-2 border-foreground object-cover"
          />
          <blockquote className="text-lg font-medium leading-snug tracking-tight text-balance">
            {site.proofLine}
          </blockquote>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
          {site.credentials}
        </p>
        <Link
          href="/about"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4"
        >
          The story
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>
    </div>
  )
}
