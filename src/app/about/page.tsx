import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | khalifbuildsai",
  description:
    "The story behind khalifbuildsai — why I built this and what drives me.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            About
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hey, I&apos;m Khalif.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/40 md:text-lg md:leading-relaxed">
            <p>
              Before tech, I was a food server. A food runner. I drove Uber. I
              packed Tupperware in a warehouse for 12-hour shifts. I bounced
              around hospitality jobs doing whatever paid the bills — and
              learned to code on the side.
            </p>
            <p>
              I was a theater kid growing up. Always creating, always dreaming
              up things that didn&apos;t exist yet. I&apos;ve never believed in
              putting limits on what&apos;s possible — so when I discovered
              coding, it clicked. Here was a tool where you could literally
              build anything if you were willing to learn.
            </p>
            <p>
              Then I found AI. And the question that changed everything
              hit me: <em>how can I use this to solve problems faster, build
              things smarter, and actually make the world better?</em>
            </p>
            <p>
              That question is why khalifbuildsai exists.
            </p>
          </div>
        </div>
      </section>

      {/* My story */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="section-divider mb-10" />
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            The Story
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Why I built this.
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-white/35">
            <p>
              When I started learning AI, I looked for resources that were
              practical and didn&apos;t assume I already knew everything. Most of
              what I found was either too academic or too surface-level. Nothing
              was built for someone like me — someone starting from scratch who
              just wanted to understand it and use it.
            </p>
            <p>
              So I decided to build what I wished existed. A place where people
              could learn AI without the gatekeeping. Where you don&apos;t need a
              degree or a technical background to get started. Where someone
              actually explains things in plain language and shows you how to
              apply it to real life.
            </p>
            <p>
              That&apos;s khalifbuildsai — courses, community, and content all
              designed to help regular people learn AI and do something with it.
            </p>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="px-5 pt-14 sm:px-8 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-2xl">
          <div className="section-divider mb-10" />
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            What I&apos;ve Done
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
            I don&apos;t just talk about building. I build.
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Grew a tech community to 900+ members</h3>
              <p className="mt-1 text-[14px] text-white/30">Built an in-person tech community from scratch in under a year.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Founded Baltimore Tech Week</h3>
              <p className="mt-1 text-[14px] text-white/30">Created the first ever Baltimore Tech Week — bringing the city&apos;s tech community together.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Speaker &amp; panelist</h3>
              <p className="mt-1 text-[14px] text-white/30">Spoke at American University and panels on AI, community building, and self-teaching.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">AI workshops</h3>
              <p className="mt-1 text-[14px] text-white/30">Hands-on workshops teaching people how to use and build with artificial intelligence.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Chapter Organizer, AI Collective — Baltimore</h3>
              <p className="mt-1 text-[14px] text-white/30">Organizing the Baltimore chapter of AI Collective, bringing AI builders together locally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What drives me */}
      <section className="px-5 pt-14 sm:px-8 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-2xl">
          <div className="section-divider mb-10" />
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            What Drives Me
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Three things I believe.
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Anyone can learn this</h3>
              <p className="mt-1 text-[14px] text-white/30">
                AI isn&apos;t just for engineers. If you can use Google, you can learn AI.
                The tools are more accessible than ever — the only barrier is getting started.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Access changes everything</h3>
              <p className="mt-1 text-[14px] text-white/30">
                The difference between someone who uses AI and someone who doesn&apos;t
                isn&apos;t talent — it&apos;s exposure. My job is to close that gap.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Building beats studying</h3>
              <p className="mt-1 text-[14px] text-white/30">
                You don&apos;t learn AI by reading about it. You learn by using it on
                real problems. Everything I teach is built around doing, not just knowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-divider mb-10" />
          <p className="text-[15px] leading-relaxed text-white/35">
            If any of this resonates, come learn with me.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
            >
              Start the Free Course
            </Link>
            <Link
              href="https://discord.gg/ecQDYq8Apv" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:border-white/25 active:scale-[0.98]"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
