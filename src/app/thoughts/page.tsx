import type { Metadata } from "next";
import Link from "next/link";
import { BackHome } from "@/components/BackHome";
import {
  THOUGHTS,
  THOUGHT_TOPICS,
  formatThoughtDate,
} from "@/lib/thoughts-data";

export const metadata: Metadata = {
  title: "Thoughts | kcooperdev",
  description:
    "Notes and half-formed ideas on AI, tech, and building — not a blog, just things worth writing down.",
};

export default function ThoughtsPage() {
  const sorted = [...THOUGHTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <BackHome />

      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            Notes
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Thoughts, not posts.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/40 md:text-lg">
            Scattered notes on AI, tools, tech, and whatever I&apos;m thinking
            about. No schedule, no SEO strategy — just things I wanted to write
            down before they disappeared.
          </p>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <div className="section-divider mb-10" />

          {sorted.length === 0 ? (
            <div className="rounded-xl border border-dashed border-white/[0.08] bg-[#0A0A0A]/50 px-6 py-12 text-center">
              <p className="text-[15px] text-white/35">
                Nothing here yet. Notes will show up when there&apos;s something
                worth writing down.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {sorted.map((thought) => (
                <li key={thought.slug}>
                  <Link
                    href={`/thoughts/${thought.slug}`}
                    className="group block rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-colors hover:border-white/[0.12]"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <time
                        dateTime={thought.date}
                        className="font-mono text-[12px] text-white/25"
                      >
                        {formatThoughtDate(thought.date)}
                      </time>
                      {thought.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[11px] text-white/30"
                        >
                          {THOUGHT_TOPICS[topic]}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-[16px] font-semibold text-white transition-colors group-hover:text-amber-400/90">
                      {thought.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/30">
                      {thought.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
