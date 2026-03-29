"use client";

import Button from "./ui/Button";
import { capture } from "@/lib/posthog";

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-amber-400/[0.04] via-violet-400/[0.03] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
          Join the Movement
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Innovation{" "}
          <span className="text-gradient-warm">starts with us.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg md:leading-relaxed">
          BLK Tech Connect is more than a community — it&apos;s a catalyst for
          growth, a launchpad for talent, and a movement to ensure every city
          has a place in the future of technology. Whether you&apos;re a
          first-time coder, a seasoned engineer, or a founder building your
          next venture — you belong here.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="primary"
            as="a"
            href="/get-involved"
            className="px-8 py-3.5 text-base"
            onClick={() =>
              capture("hero_cta_clicked", {
                cta_text: "Find Your Place",
                destination: "/get-involved",
              })
            }
          >
            Find Your Place
          </Button>
          <Button
            variant="secondary"
            as="a"
            href="https://luma.com/blk-tech-connect"
            className="px-8 py-3.5 text-base"
          >
            Stay Updated on Events
          </Button>
        </div>

        {/* Mission quote */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
          <blockquote className="text-base leading-relaxed text-white/50 italic md:text-lg">
            &ldquo;We exist to close the gap. Through consistent programming,
            hands-on learning, and community-driven events, we help residents
            build the skills, confidence, and networks needed to thrive in a
            rapidly changing world.&rdquo;
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/30" />
            <span className="text-sm font-medium text-white/40">
              Beyond Limits & Knowledge
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
