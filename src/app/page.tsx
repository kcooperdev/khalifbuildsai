import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center px-5 sm:px-8">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Learn AI.
            <br />
            <span className="text-gradient-warm">Build anything.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 sm:text-lg">
            Self-taught engineer helping you learn AI, build with AI,
            and connect with other builders.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
            >
              Explore the Academy
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:border-white/25 active:scale-[0.98]"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="px-5 py-24 sm:px-8 md:py-32">
        <div className="section-divider absolute left-0 right-0" />
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            About Me
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            I taught myself to code, fell in love with AI, and built
            what I wished I had.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/35 md:text-lg md:leading-relaxed">
            <p>
              No CS degree — just curiosity, late nights, and the internet.
              When I discovered AI, everything changed. I saw a technology
              that could level the playing field for anyone willing to learn.
            </p>
            <p>
              So I built khalifbuildsai — an academy, a community, and a
              platform to help others do the same thing I did: start from
              scratch and build something real with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            Track Record
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Scaled a tech community from 0 to 900+ members offline</h3>
              <p className="mt-1 text-[14px] text-white/30">Built and grew an in-person tech community in less than a year.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Founder, Baltimore Tech Week</h3>
              <p className="mt-1 text-[14px] text-white/30">Created the first ever Baltimore Tech Week — bringing the city&apos;s tech community together.</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5">
              <h3 className="text-[15px] font-semibold text-white">Speaker & panelist</h3>
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

      {/* What I offer — 3 simple blocks */}
      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="section-divider absolute left-0 right-0" />
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            What I&apos;m Building
          </p>
          <div className="space-y-4">
            <Link
              href="/academy"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">Academy</h3>
                <p className="mt-1 text-[14px] text-white/30">AI courses for self-taught builders.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/community"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">Community</h3>
                <p className="mt-1 text-[14px] text-white/30">A growing community of AI builders on Discord.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/speaking"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">Speaking</h3>
                <p className="mt-1 text-[14px] text-white/30">Keynotes, panels, and AI workshops.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
