"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { capture } from "@/lib/posthog";

const upcomingEvents = [
  {
    title: "BTW Pre-Event: Tech At The Harbor",
    date: "Apr 23rd, 2026",
    time: "6:00 PM – 8:30 PM",
    type: "In-Person",
    location: "The Harbor Bank of Maryland(Fayette Branch)",
    description:
      "Tech at the Harbor is officially back as the Baltimore Tech Week Pre‑Tech Week Event, setting the tone for everything that's coming next year.",
    rsvpLink: "https://luma.com/8nr4g62o",
  },
];

export default function EventsPage() {
  const handleRsvpClick = (eventTitle: string, eventType: string) => {
    capture("event_rsvp_clicked", {
      event_title: eventTitle,
      event_type: eventType,
    });
  };

  const handleDiscordJoinClick = () => {
    capture("discord_join_clicked", {
      source: "events_page",
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Events
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Learn, connect,
              <br />
              <span className="text-gradient-warm">and grow together.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              Community-driven events, panels, workshops, and networking
              sessions. All free for community members — both in-person and
              virtual.
            </p>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Upcoming Events
              </h2>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift md:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex shrink-0 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                            event.type === "Online"
                              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                              : "border-amber-400/20 bg-amber-400/10 text-amber-400"
                          }`}
                        >
                          {event.type}
                        </span>
                        <h3 className="text-base font-semibold text-white">
                          {event.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/40">
                        {event.description}
                      </p>
                      <p className="mt-3 text-[13px] text-white/25">
                        {event.date} · {event.time} · {event.location}
                      </p>
                    </div>
                    <a
                      href={event.rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleRsvpClick(event.title, event.type)}
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-white/5 hover:border-white/30 active:scale-[0.98] sm:self-center"
                    >
                      RSVP
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Don&apos;t miss out.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/40">
              Join our community to get notified about new events, or browse
              all upcoming events on Luma.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://discord.gg/gWfhQFzbnB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDiscordJoinClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                Join the Community
              </a>
              <a
                href="https://luma.com/calendar/manage/cal-64EiCORm0LBSWtj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 hover:border-white/30 active:scale-[0.98]"
              >
                View All on Luma
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
