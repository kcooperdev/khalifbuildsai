"use client";

import { useEffect, useRef } from "react";
import { AlertBanner } from "./AlertBanner";
import Button from "./ui/Button";
import { capture } from "@/lib/posthog";

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

export function HeroSection() {
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

  const handleHeroCtaClick = (ctaText: string, destination: string) => {
    capture("hero_cta_clicked", {
      cta_text: ctaText,
      destination: destination,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0A0A] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 md:pb-36 md:pt-32 lg:pb-44 lg:pt-36"
    >
      {/* Background dot grid */}
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />

      {/* Primary warm glow */}
      <div className="hero-glow" aria-hidden />
      {/* Secondary violet glow */}
      <div className="hero-glow-violet" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up">
            <AlertBanner text="Academy cohorts launching fall '26" href="/academy" />
          </div>

          <h1 className="animate-fade-up delay-100 mt-10 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Where Communities
            <br />
            <span className="text-gradient-warm">Grow Into Innovators.</span>
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg md:text-xl md:leading-relaxed">
            BLK Tech Connect empowers communities to go beyond limits and build
            the knowledge needed to become the next generation of tech talent,
            innovators, and founders.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="primary"
              icon={<SparkleIcon />}
              iconPosition="left"
              as="a"
              href="/get-involved"
              className="px-8 py-3.5 text-base"
              onClick={() => handleHeroCtaClick("Get Involved", "/get-involved")}
            >
              Get Involved
            </Button>
            <Button
              variant="secondary"
              as="a"
              href="/partners"
              className="px-8 py-3.5 text-base"
              onClick={() => handleHeroCtaClick("Become a Partner", "/partners")}
            >
              Become a Partner
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              <span className="text-sm font-medium">750+ Members</span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <span className="text-sm font-medium">50+ Events</span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse-glow" style={{ animationDelay: "2s" }} />
              <span className="text-sm font-medium">30+ Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
