import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectsReader } from "@/components/projects-reader"

export const metadata: Metadata = {
  title: "Projects | Khalif's Console",
  description: "Personal projects Khalif is building.",
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Things I'm building"
        description="A short, honest list. Tap any one to read the full story."
      />

      <ProjectsReader />
    </div>
  )
}
