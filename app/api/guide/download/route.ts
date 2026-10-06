import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { guide } from "@/lib/content"
import { guidePdf } from "@/lib/guide-pdf"

export async function GET(request: Request) {
  const jar = await cookies()
  if (jar.get("guide_access")?.value !== "1") {
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
    const proto = request.headers.get("x-forwarded-proto") ?? "http"
    const home = new URL("/", host ? `${proto}://${host}` : request.url)
    return NextResponse.redirect(home, 303)
  }

  const pdf = guidePdf()
  return new NextResponse(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${guide.file}"`,
      "Cache-Control": "private, no-store",
    },
  })
}
