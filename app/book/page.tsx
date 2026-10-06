import type { Metadata } from "next"
import { BookForm } from "@/components/book-form"
import { PageHeader } from "@/components/page-header"
const description =
  "Talks and workshops on practical AI, career growth, and community building. Sponsors and partners for Bmore Tech Nights and Baltimore Tech Week can use this form too."

export const metadata: Metadata = {
  title: "Book",
  description,
}

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>
}) {
  const params = await searchParams
  const kind =
    params.kind === "workshop" || params.kind === "partner" ? params.kind : "talk"

  return (
    <div>
      <PageHeader
        eyebrow="Book"
        title="A talk, a workshop, or a partnership"
        description={description}
      />
      <BookForm initialKind={kind} />
    </div>
  )
}
