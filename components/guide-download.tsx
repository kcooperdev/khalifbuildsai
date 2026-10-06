"use client"

import { useEffect, useRef } from "react"
import { guide } from "@/lib/content"

export function GuideDownload() {
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const link = document.createElement("a")
    link.href = "/api/guide/download"
    link.download = guide.file
    document.body.appendChild(link)
    link.click()
    link.remove()
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        The PDF is downloading.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-pretty">
        If it&apos;s not,{" "}
        <a href="/api/guide/download" className="font-medium text-primary underline underline-offset-4">
          download it
        </a>
        .
      </p>
    </div>
  )
}
