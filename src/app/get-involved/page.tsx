"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { capture } from "@/lib/posthog";

const ways = [
  {
    title: "Join the Community",
    description:
      "Join the BLK Tech Community — connect with members, grow your network, and be part of a growing movement of technologists, founders, and innovators building the future together.",
    cta: "Join the Community",
    href: "https://discord.gg/gWfhQFzbnB",
    external: true,
    color: "amber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Attend Events",
    description:
      "Join our monthly meetups, panels, workshops, and networking events. Learn from industry leaders and connect with peers — all events are free for community members.",
    cta: "View Events",
    href: "/events",
    external: false,
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: "Become an Ambassador",
    description:
      "Join the BLK Tech Connect Ambassadors Program. Represent the movement in your city, help run events, grow the community, and be a voice for change in tech. Ambassadors are the heartbeat of everything we do.",
    cta: "Apply Now",
    href: "https://app.youform.com/forms/brw6cy5q",
    external: true,
    color: "rose",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, string> = {
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  rose: "border-rose-400/20 bg-rose-400/10 text-rose-400",
};

export default function GetInvolvedPage() {
  const handleCtaClick = (title: string, cta: string, external: boolean) => {
    capture("get_involved_cta_clicked", {
      card_title: title,
      cta_text: cta,
      is_external: external,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Get Involved
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              There&apos;s a place
              <br />
              <span className="text-gradient-warm">for you here.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              Whether you&apos;re an aspiring technologist, a seasoned
              professional, a mentor, or a partner — join us in building a
              movement that ensures every community has a place in the future
              of technology.
            </p>
          </div>
        </section>

        {/* Ways to get involved */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {ways.map((way) => (
              <div
                key={way.title}
                className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorMap[way.color]}`}
                >
                  {way.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {way.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/40">
                  {way.description}
                </p>
                <div className="mt-6">
                  {way.external ? (
                    <a
                      href={way.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        handleCtaClick(way.title, way.cta, way.external)
                      }
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {way.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={way.href}
                      onClick={() =>
                        handleCtaClick(way.title, way.cta, way.external)
                      }
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {way.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Updated CTA */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="relative mx-auto max-w-lg text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Stay Connected
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Never miss a{" "}
              <span className="text-gradient-muted">moment.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/40">
              Follow us on Luma to stay updated on all upcoming events,
              meetups, and opportunities.
            </p>
            <a
              href="https://luma.com/blk-tech-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              Stay Updated on Events
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
