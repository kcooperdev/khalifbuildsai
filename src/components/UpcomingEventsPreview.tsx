"use client";

import Link from "next/link";
import { capture } from "@/lib/posthog";

const events = [
  {
    title: "Cocktails & Community",
    date: "Apr 25",
    type: "In-Person",
    location: "Baltimore, MD",
    rsvpLink: "https://luma.com/r57c0odc",
  },
  {
    title: "BTW Pre-Event: Tech At The Harbor",
    date: "Apr 23",
    type: "In-Person",
    location: "Baltimore, MD",
    rsvpLink: "https://luma.com/8nr4g62o",
  },
];

export function UpcomingEventsPreview() {
  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Upcoming
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Events
            </h2>
          </div>
          <Link
            href="/events"
            className="group flex items-center gap-1.5 text-sm text-white/30 transition-colors hover:text-white md:shrink-0"
          >
            View all events
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                capture("event_rsvp_clicked", {
                  event_title: event.title,
                  event_type: event.type,
                })
              }
              className="group flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[var(--surface-2)] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[var(--surface-3)] sm:flex-row sm:items-center sm:justify-between md:p-7"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <span className="text-[11px] font-semibold uppercase text-amber-400/80">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-lg font-bold leading-none text-amber-400">
                    {event.date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/30">
                    {event.type} · {event.location}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-5 py-2 text-[13px] font-medium text-white/60 transition-all group-hover:border-white/25 group-hover:bg-white/5 group-hover:text-white sm:self-center">
                RSVP
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
