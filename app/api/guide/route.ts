import { NextResponse } from "next/server"
import { guideEmailBody, site } from "@/lib/content"
import { guidePdfHeaders, readGuidePdf } from "@/lib/guide-file"
import { notifyKhalif, saveGuideContact, saveLead } from "@/lib/leads"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sameOrigin(request: Request, path: string) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  const proto = request.headers.get("x-forwarded-proto") ?? "http"
  return new URL(path, host ? `${proto}://${host}` : request.url)
}

function withGuideCookie(response: NextResponse) {
  response.cookies.set("guide_access", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  })
  return response
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? ""
  const asJson = contentType.includes("application/json")

  let email = ""
  let company = ""

  if (asJson) {
    let payload: { email?: unknown; company?: unknown }
    try {
      payload = await request.json()
    } catch {
      return NextResponse.json({ error: "Enter a real email." }, { status: 400 })
    }
    email = typeof payload.email === "string" ? payload.email : ""
    company = typeof payload.company === "string" ? payload.company : ""
  } else {
    const form = await request.formData()
    email = String(form.get("email") ?? "")
    company = String(form.get("company") ?? "")
  }

  if (company.trim() !== "") {
    return asJson
      ? NextResponse.json({ ok: true })
      : NextResponse.redirect(sameOrigin(request, "/"), 303)
  }

  email = email.trim().toLowerCase()

  if (!emailPattern.test(email) || email.length > 254) {
    if (asJson) {
      return NextResponse.json({ error: "Enter a real email." }, { status: 400 })
    }
    return NextResponse.redirect(sameOrigin(request, "/?guide=invalid"), 303)
  }

  let saved = false
  try {
    await saveLead("guide-signups.jsonl", { email })
    saved = true
  } catch {
    saved = false
  }

  try {
    const stored = await saveGuideContact(email)
    if (stored) saved = true
  } catch {
    console.error("Resend contact was not saved")
  }

  if (process.env.NODE_ENV === "production") {
    let sent = false
    try {
      sent = await notifyKhalif(
        {
          email,
          _subject: "Someone downloaded the guide",
          _autoresponse: guideEmailBody(),
          message: `${email} downloaded Use AI to Get Ahead.`,
        },
        "khalifcooper24@gmail.com",
      )
    } catch {
      sent = false
    }
    if (!sent) {
      if (asJson) {
        return NextResponse.json(
          {
            error: `Couldn't save that. Email ${site.email} and I'll send the guide.`,
          },
          { status: 502 },
        )
      }
      return NextResponse.redirect(sameOrigin(request, "/?guide=error"), 303)
    }
  } else if (!saved) {
    if (asJson) {
      return NextResponse.json(
        { error: "Couldn't save that email. Try again." },
        { status: 500 },
      )
    }
    return NextResponse.redirect(sameOrigin(request, "/?guide=error"), 303)
  }

  const pdf = await readGuidePdf()
  return withGuideCookie(new NextResponse(pdf, { headers: guidePdfHeaders }))
}
