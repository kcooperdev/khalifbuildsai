import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { GuideDownload } from "@/components/guide-download"
import { guide } from "@/lib/content"

export const metadata: Metadata = {
  title: guide.title,
  description: guide.dek,
  robots: { index: false, follow: false },
}

export default async function GuidePage() {
  const jar = await cookies()
  if (jar.get("guide_access")?.value !== "1") {
    redirect("/#guide")
  }

  return <GuideDownload />
}
