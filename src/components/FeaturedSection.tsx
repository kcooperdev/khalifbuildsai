"use client";

import Link from "next/link";
import { capture } from "@/lib/posthog";

const featured = [
  {
    label: "Academy",
    title: "Introduction to AI",
    description:
      "Understand the fundamentals of artificial intelligence — what it is, how it works, and how to use it to level up your career.",
    href: "/academy",
    accent: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  },
  {
    label: "Academy",
    title: "Prompt Engineering & AI Tools",
    description:
      "Master the art of prompting. Learn to use ChatGPT, Claude, Midjourney, and other AI tools to 10x your productivity.",
    href: "/academy",
    accent: "bg-violet-400/10 border-violet-400/20 text-violet-400",
  },
  {
    label: "Community",
    title: "750+ AI Builders on Discord",
    description:
      "Join the community — connect with members, grow your network, and be part of a growing movement of people building with AI.",
    href: "https://discord.gg/ecQDYq8Apv",
    accent: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
    external: true,
  },
];

export function FeaturedSection() {
  return (
    <section className="relative bg-[var(--surface-1)] px-5 py-14 sm:px-8 sm:py-24 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Featured
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start here.
            </h2>
          </div>
          <Link
            href="/academy"
            className="group flex items-center gap-1.5 text-sm text-white/30 transition-colors hover:text-white md:shrink-0"
          >
            View all courses
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((item) => {
            const CardInner = (
              <>
                <span
                  className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${item.accent}`}
                >
                  {item.label}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/35">
                  {item.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/30 transition-colors group-hover:text-white/60">
                  {item.external ? "Join" : "Learn more"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                    {item.external ? (
                      <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>
                    ) : (
                      <path d="m9 18 6-6-6-6" />
                    )}
                  </svg>
                </div>
              </>
            );

            if (item.external) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    capture("featured_card_clicked", { title: item.title })
                  }
                  className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[var(--surface-2)] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[var(--surface-3)] hover-lift"
                >
                  {CardInner}
                </a>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() =>
                  capture("featured_card_clicked", { title: item.title })
                }
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[var(--surface-2)] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[var(--surface-3)] hover-lift"
              >
                {CardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
