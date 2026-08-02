import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ThoughtsReader } from "@/components/thoughts-reader"

export const metadata: Metadata = {
  title: "Thoughts — Khalif's Console",
  description: "Short blog posts, founder logs, and reflections.",
}

export default function ThoughtsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Thoughts"
        title="Notes to myself"
        description="Short posts and founder logs. Tap any one to read the full thing."
      />

      <ThoughtsReader />
    </div>
  )
}
