"use client"

import { useState } from "react"
import { guide } from "@/lib/content"

export function GuideForm({
  id = "guide",
  error = "",
}: {
  id?: string
  error?: string
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    error ? "error" : "idle",
  )
  const [message, setMessage] = useState(error)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setMessage("")

    const body = new FormData(event.currentTarget)
    const response = await fetch("/api/guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        company: String(body.get("company") ?? ""),
      }),
    })

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as {
        error?: string
      } | null
      setStatus("error")
      setMessage(data?.error ?? "Something went wrong. Try again.")
      return
    }

    const type = response.headers.get("content-type") ?? ""
    if (!type.includes("application/pdf")) {
      setStatus("idle")
      return
    }

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = guide.file
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
    setStatus("done")
  }

  return (
    <form
      id={id}
      method="post"
      action="/api/guide"
      onSubmit={onSubmit}
      className="relative rounded-sm border-2 border-foreground bg-card p-5 sm:p-6"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        Free AI guide
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance">
        {guide.title}
      </h2>
      <p className="mt-3 leading-relaxed text-pretty">{guide.dek}</p>
      <p className="mt-4 text-sm font-medium">{guide.lead}</p>
      <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed">
        {guide.points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 shrink-0 bg-foreground" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
        {guide.close}
      </p>

      {status === "done" ? (
        <div className="mt-5" role="status">
          <p className="text-lg leading-relaxed">The PDF is downloading.</p>
          <p className="mt-2 text-sm leading-relaxed">
            If it&apos;s not,{" "}
            <a
              href="/api/guide/download"
              className="font-medium text-foreground underline underline-offset-4"
            >
              download it
            </a>
            .
          </p>
        </div>
      ) : (
        <>
          <label htmlFor={`${id}-email`} className="mt-5 block text-sm font-medium">
            Email
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              className="h-11 w-full rounded-sm border-2 border-foreground bg-background px-4 text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-primary px-5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Downloading…" : "Download the PDF"}
            </button>
          </div>
          {status === "error" ? (
            <p className="mt-2 text-sm text-destructive" role="alert">
              {message}
            </p>
          ) : null}
        </>
      )}

      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
    </form>
  )
}
