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

export async function notifyKhalif(fields: Record<string, string>) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
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
