import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { guidePdfHeaders, readGuidePdf } from "@/lib/guide-file"

export async function GET(request: Request) {
  const jar = await cookies()
  if (jar.get("guide_access")?.value !== "1") {
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
    const proto = request.headers.get("x-forwarded-proto") ?? "http"
    const home = new URL("/", host ? `${proto}://${host}` : request.url)
    return NextResponse.redirect(home, 303)
  }

  const pdf = await readGuidePdf()
  return new NextResponse(pdf, { headers: guidePdfHeaders })
}
