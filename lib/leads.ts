import { appendFile, mkdir } from "fs/promises"
import path from "path"
import { site } from "@/lib/content"

export async function saveLead(filename: string, record: Record<string, string>) {
  const dir = path.join(process.cwd(), "data")
  await mkdir(dir, { recursive: true })
  await appendFile(
    path.join(dir, filename),
    `${JSON.stringify({ ...record, at: new Date().toISOString() })}\n`,
  )
}

export async function saveGuideContact(email: string) {
  const apiKey = process.env.RESEND_API_KEY
  const segmentId = process.env.RESEND_SEGMENT_ID
  if (!apiKey || !segmentId) return false

  const response = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
      segments: [{ id: segmentId }],
    }),
  })

  if (response.ok) return true

  const detail = await response.text()
  if (!/already exists/i.test(detail)) {
    console.error("Resend contact was not saved", response.status)
    return false
  }

  const added = await fetch(
    `https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${encodeURIComponent(segmentId)}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
    },
  )
  if (!added.ok) console.error("Resend segment was not updated", added.status)
  return added.ok
}

export async function notifyKhalif(
  fields: Record<string, string>,
  to = site.email,
) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _captcha: "false",
        _template: "table",
        ...fields,
      }),
    },
  )
  return response.ok
}
