"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Learn",
    description:
      "AI courses and tutorials for self-taught builders. From prompt engineering to building full AI-powered apps.",
    href: "/academy",
    color: "text-amber-400",
    borderHover: "hover:border-amber-400/20",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Real projects, real builds, shipped with AI. I share what I'm building and how — so you can build too.",
    href: "/ecosystem",
    color: "text-violet-400",
    borderHover: "hover:border-violet-400/20",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Community events, networking, and mentorship. 750+ builders learning and growing together.",
    href: "/get-involved",
    color: "text-emerald-400",
    borderHover: "hover:border-emerald-400/20",
  },
];

export function WhatIDoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = section.querySelectorAll<HTMLElement>(".card-glow");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            What I Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Learn AI. Build with AI.{" "}
            <span className="text-gradient-muted">Connect with builders.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`card-glow group rounded-2xl border border-white/[0.06] bg-[var(--surface-2)] p-8 transition-all duration-300 ${pillar.borderHover} hover:bg-[var(--surface-3)] md:p-10`}
            >
              <span className={`text-sm font-mono font-bold ${pillar.color}`}>
                {pillar.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/35">
                {pillar.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors group-hover:text-white/70">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
