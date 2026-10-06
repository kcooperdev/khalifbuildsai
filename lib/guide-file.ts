import { readFile } from "node:fs/promises"
import path from "node:path"
import { guide } from "@/lib/content"

export function readGuidePdf() {
  return readFile(path.join(process.cwd(), "private", guide.file))
}

export const guidePdfHeaders = {
  "Content-Type": "application/pdf",
  "Content-Disposition": `attachment; filename="${guide.file}"`,
  "Cache-Control": "private, no-store",
}
