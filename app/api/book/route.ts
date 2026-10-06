import { NextResponse } from "next/server"
import { site } from "@/lib/content"
import { notifyKhalif, saveLead } from "@/lib/leads"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: {
    name?: unknown
    email?: unknown
    organization?: unknown
    kind?: unknown
    company?: unknown
  }
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Check the form and try again." }, { status: 400 })
  }

  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : ""
  const email =
    typeof payload.email === "string" ? payload.email.trim().toLowerCase() : ""
  const kind =
    payload.kind === "workshop" || payload.kind === "talk" || payload.kind === "partner"
      ? payload.kind
      : ""
  const organization =
    typeof payload.organization === "string" ? payload.organization.trim() : ""

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 })
  }
  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a real email." }, { status: 400 })
  }
  if (!kind) {
    return NextResponse.json(
      { error: "Choose a talk, a workshop, or a partnership." },
      { status: 400 },
    )
  }
  if (organization.length > 120 || (kind === "partner" && organization.length < 2)) {
    return NextResponse.json({ error: "Enter your organization." }, { status: 400 })
  }

  const label =
    kind === "workshop"
      ? "a workshop"
      : kind === "partner"
        ? "sponsoring or partnering"
        : "a talk"

  try {
    await saveLead("bookings.jsonl", {
      name,
      email,
      kind,
      ...(organization ? { organization } : {}),
    })
  } catch {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        { error: "Couldn't save that. Try again." },
        { status: 500 },
      )
    }
  }

  if (process.env.NODE_ENV === "production") {
    let sent = false
    try {
      sent = await notifyKhalif({
        email,
        name,
        _subject: `Booking request: ${label}`,
        _autoresponse: `Got it, ${name}. I'll reply about ${label}.`,
        message: organization
          ? `${name} at ${organization} (${email}) asked about ${label}.`
          : `${name} (${email}) asked about ${label}.`,
      })
    } catch {
      sent = false
    }
    if (!sent) {
      return NextResponse.json(
        { error: `Couldn't send that. Email ${site.email} and I'll reply.` },
        { status: 502 },
      )
    }
  }

  return NextResponse.json({ ok: true })
}
