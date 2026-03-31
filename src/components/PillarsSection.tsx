"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const pillars = [
  {
    title: "Community & Connection",
    description:
      "Join the BLK AI Community — connect with members, grow your network, and be part of a support system that extends beyond the screen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "from-amber-400/20 to-amber-400/5",
    iconBg: "bg-amber-400/10 border-amber-400/20 text-amber-400",
    href: "https://discord.gg/ecQDYq8Apv",
    cta: "Join the Community",
    external: true,
  },
  {
    title: "Events & Workshops",
    description:
      "Monthly AI meetups, panels, happy hours, and hands-on workshops — both in-person and virtual. Learn from AI leaders and grow your network in a supportive environment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    color: "from-violet-400/20 to-violet-400/5",
    iconBg: "bg-violet-400/10 border-violet-400/20 text-violet-400",
    href: "/events",
    cta: "View Events",
    external: false,
  },
  {
    title: "Academy & Education",
    description:
      "Hands-on courses in AI fundamentals, prompt engineering, building with AI, and AI for business. Building the skills and confidence to thrive in the age of AI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "from-emerald-400/20 to-emerald-400/5",
    iconBg: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
    href: "/academy",
    cta: "Explore Academy",
    external: false,
  },
  {
    title: "Career Pathways",
    description:
      "Direct access to AI career opportunities from partner companies. Resume reviews, interview prep, and a talent pipeline that connects community to career in AI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    color: "from-rose-400/20 to-rose-400/5",
    iconBg: "bg-rose-400/10 border-rose-400/20 text-rose-400",
    href: "/get-involved",
    cta: "Get Started",
    external: false,
  },
];

export function PillarsSection() {
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
    <section ref={sectionRef} className="relative px-5 py-20 sm:px-8 md:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            What We Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient-muted">go beyond limits.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
            Through consistent programming, hands-on learning, and
            community-driven events, we help residents build the skills,
            confidence, and networks needed to thrive.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card-glow group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift md:p-8"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${pillar.iconBg}`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/40">
                {pillar.description}
              </p>
              <div className="mt-6">
                {pillar.external ? (
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {pillar.cta}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {pillar.cta}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
