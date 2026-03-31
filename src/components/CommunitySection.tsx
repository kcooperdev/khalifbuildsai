"use client";

import Button from "./ui/Button";
import { capture } from "@/lib/posthog";

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-24 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/[0.04] via-violet-400/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
          Let&apos;s Build Together
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          The future of AI is{" "}
          <span className="text-gradient-warm">for everyone.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/35 md:text-lg md:leading-relaxed">
          I&apos;m building this in the open — the courses, the community,
          the events. If you&apos;re curious about AI and willing to start,
          there&apos;s a place for you here.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="primary"
            as="a"
            href="https://discord.gg/ecQDYq8Apv"
            className="px-8 py-3.5 text-base"
            onClick={() =>
              capture("hero_cta_clicked", {
                cta_text: "Join the Discord",
                destination: "discord",
              })
            }
          >
            Join the Discord
          </Button>
          <Button
            variant="secondary"
            as="a"
            href="https://www.instagram.com/khalifbuildsai/"
            className="px-8 py-3.5 text-base"
          >
            Follow on Instagram
          </Button>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
          <blockquote className="text-base leading-relaxed text-white/40 italic md:text-lg">
            &ldquo;I taught myself to code, fell in love with AI, and built
            what I wished I had — a community where anyone can learn, build,
            and grow.&rdquo;
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/20" />
            <span className="text-sm font-medium text-white/30">
              Khalif Cooper
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
