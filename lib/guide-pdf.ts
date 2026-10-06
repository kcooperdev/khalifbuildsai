import { guide } from "@/lib/content"

type Line = { text: string; size: number; font: "F1" | "F2"; gap: number }

function plain(text: string) {
  return text
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201c|\u201d/g, '"')
    .replace(/\u2013|\u2014/g, "-")
    .replace(/[^\x20-\x7E]/g, "")
}

function wrap(text: string, width: number) {
  const words = plain(text).split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let line = ""
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > width && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

function pdfText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
}

function guideLines(): Line[] {
  const lines: Line[] = [
    { text: "Khalif Cooper", size: 11, font: "F1", gap: 18 },
    { text: guide.title, size: 22, font: "F2", gap: 16 },
    ...wrap(guide.dek, 78).map((text) => ({
      text,
      size: 11,
      font: "F1" as const,
      gap: 15,
    })),
    { text: "", size: 11, font: "F1", gap: 10 },
  ]

  guide.tools.forEach((tool, index) => {
    lines.push({
      text: `${index + 1}. ${tool.name}`,
      size: 14,
      font: "F2",
      gap: 16,
    })
    for (const text of wrap(tool.use, 82)) {
      lines.push({ text, size: 11, font: "F1", gap: 15 })
    }
    lines.push({ text: "Paste this.", size: 11, font: "F2", gap: 15 })
    for (const text of wrap(tool.today, 82)) {
      lines.push({ text, size: 11, font: "F1", gap: 15 })
    }
    lines.push({ text: "", size: 11, font: "F1", gap: 8 })
  })

  lines.push({ text: guide.project.title, size: 14, font: "F2", gap: 16 })
  for (const text of wrap(guide.project.intro, 82)) {
    lines.push({ text, size: 11, font: "F1", gap: 15 })
  }
  lines.push({ text: "", size: 11, font: "F1", gap: 6 })
  guide.project.steps.forEach((step, index) => {
    const wrapped = wrap(`${index + 1}. ${step}`, 82)
    wrapped.forEach((text, lineIndex) => {
      lines.push({
        text: lineIndex === 0 ? text : `   ${text}`,
        size: 11,
        font: "F1",
        gap: 15,
      })
    })
  })

  return lines
}

function pageStream(lines: Line[]) {
  const commands = ["BT", "72 740 Td"]
  let font = ""
  let size = 0
  for (const line of lines) {
    if (line.font !== font || line.size !== size) {
      commands.push(`/${line.font} ${line.size} Tf`)
      font = line.font
      size = line.size
    }
    commands.push(`0 -${line.gap} Td`)
    commands.push(`(${pdfText(line.text)}) Tj`)
  }
  commands.push("ET")
  return commands.join("\n")
}

export function guidePdf() {
  const pages: Line[][] = [[]]
  let y = 740
  for (const line of guideLines()) {
    if (y - line.gap < 64) {
      pages.push([])
      y = 740
    }
    pages[pages.length - 1].push(line)
    y -= line.gap
  }

  const objects: string[] = []
  const pageIds: number[] = []
  let nextId = 3

  const fontRegular = nextId++
  const fontBold = nextId++
  objects[fontRegular] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`
  objects[fontBold] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`

  for (const lines of pages) {
    const contentId = nextId++
    const pageId = nextId++
    const stream = pageStream(lines)
    objects[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
    objects[pageId] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> >>`
    pageIds.push(pageId)
  }

  objects[1] = `<< /Type /Catalog /Pages 2 0 R >>`
  objects[2] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`

  let body = "%PDF-1.4\n"
  const offsets = [0]
  for (let id = 1; id < objects.length; id++) {
    offsets[id] = body.length
    body += `${id} 0 obj\n${objects[id]}\nendobj\n`
  }
  const xref = body.length
  body += `xref\n0 ${objects.length}\n`
  body += "0000000000 65535 f \n"
  for (let id = 1; id < objects.length; id++) {
    body += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`
  }
  body += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`
  return new TextEncoder().encode(body)
}
