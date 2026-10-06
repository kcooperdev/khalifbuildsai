"use client"

import { useState } from "react"

const replyFor = {
  talk: "the talk",
  workshop: "the workshop",
  partner: "sponsoring or partnering",
} as const

export function BookForm({
  initialKind = "talk",
}: {
  initialKind?: "talk" | "workshop" | "partner"
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [kind, setKind] = useState<"talk" | "workshop" | "partner">(initialKind)
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setMessage("")

    const body = new FormData(event.currentTarget)
    const response = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        organization,
        kind,
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

    setStatus("done")
  }

  if (status === "done") {
    return (
      <p className="text-lg leading-relaxed text-pretty" role="status">
        Got it. I&apos;ll reply about {replyFor[kind]}.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-4">
      <label className="block text-sm font-medium" htmlFor="book-name">
        Name
      </label>
      <input
        id="book-name"
        name="name"
        type="text"
        required
        autoComplete="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="h-11 w-full rounded-sm border-2 border-foreground bg-background px-4 text-sm text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      />

      <label className="block text-sm font-medium" htmlFor="book-email">
        Email
      </label>
      <input
        id="book-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-11 w-full rounded-sm border-2 border-foreground bg-background px-4 text-sm text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      />

      <label className="block text-sm font-medium" htmlFor="book-kind">
        What do you need?
      </label>
      <select
        id="book-kind"
        name="kind"
        required
        value={kind}
        onChange={(event) =>
          setKind(event.target.value as "talk" | "workshop" | "partner")
        }
        className="h-11 w-full rounded-sm border-2 border-foreground bg-background px-4 text-sm text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <option value="talk">A talk</option>
        <option value="workshop">A workshop</option>
        <option value="partner">Sponsor or partner</option>
      </select>

      <label className="block text-sm font-medium" htmlFor="book-organization">
        Organization
      </label>
      <input
        id="book-organization"
        name="organization"
        type="text"
        required={kind === "partner"}
        autoComplete="organization"
        value={organization}
        onChange={(event) => setOrganization(event.target.value)}
        className="h-11 w-full rounded-sm border-2 border-foreground bg-background px-4 text-sm text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-11 items-center justify-center rounded-sm border-2 border-foreground bg-primary px-5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send the request"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {message}
        </p>
      ) : null}

      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
    </form>
  )
}
