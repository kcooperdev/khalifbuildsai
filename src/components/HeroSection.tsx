"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { capture } from "@/lib/posthog";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--glow-x", `${x}%`);
      section.style.setProperty("--glow-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#050505] px-5 sm:px-8"
    >
      {/* Background effects */}
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(245,158,11,0.06), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="hero-glow" aria-hidden />
      <div className="hero-glow-violet" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Status pill */}
        <div className="animate-fade-up">
          <Link
            href="/academy"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-white/60 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/80"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse-glow" aria-hidden />
            <span>Academy cohorts launching fall &apos;26</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/30 transition-transform group-hover:translate-x-0.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Name — the brand */}
        <h1 className="animate-fade-up delay-100 mt-10 text-[3.5rem] font-bold leading-[1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-white">khalif</span>
          <span className="text-gradient-warm">builds</span>
          <span className="text-white/40">ai</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg md:text-xl">
          Self-taught engineer sharing everything I learn about AI.
          <br className="hidden sm:block" />
          The tools. The builds. The community.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            variant="primary"
            as="a"
            href="/get-involved"
            className="px-8 py-3.5 text-base"
            onClick={() =>
              capture("hero_cta_clicked", {
                cta_text: "Join the Community",
                destination: "/get-involved",
              })
            }
          >
            Join the Community
          </Button>
          <Button
            variant="secondary"
            as="a"
            href="/academy"
            className="px-8 py-3.5 text-base"
            onClick={() =>
              capture("hero_cta_clicked", {
                cta_text: "Explore the Academy",
                destination: "/academy",
              })
            }
          >
            Explore the Academy
          </Button>
        </div>

        {/* Social proof strip */}
        <div className="animate-fade-up delay-500 mt-20 flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/20 sm:gap-8">
          <span>750+ community members</span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>10+ events hosted</span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>Featured in Technical.ly & WMAR-2</span>
        </div>
      </div>
    </section>
  );
}
