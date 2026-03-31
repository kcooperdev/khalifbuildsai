import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-5 sm:min-h-[85vh] sm:px-8">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Learn AI.
            <br />
            <span className="text-gradient-warm">Build anything.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/35 sm:mt-6 sm:text-lg">
            Free courses, a builder community, and everything you need
            to start using AI — no coding or tech background required.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/academy/free"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
            >
              Start Free AI Course
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

      {/* What you get */}
      <section className="px-5 py-14 sm:px-8 sm:py-24 md:py-32">
        <div className="section-divider absolute left-0 right-0" />
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            What You Get
          </p>
          <div className="space-y-4">
            <Link
              href="/academy/free"
              className="group flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/[0.03] p-5 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-white">Free AI Course</h3>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">FREE</span>
                </div>
                <p className="mt-1 text-[14px] text-white/30">7 lessons that take you from zero to understanding AI. No experience needed.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-emerald-400/30 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400/50"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/academy"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">More Courses</h3>
                <p className="mt-1 text-[14px] text-white/30">Prompt engineering, building with AI, and more coming soon.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="https://discord.gg/ecQDYq8Apv" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">Community</h3>
                <p className="mt-1 text-[14px] text-white/30">Join other people learning and building with AI. Free on Discord.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/speaking"
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-[#111]"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-white">Speaking</h3>
                <p className="mt-1 text-[14px] text-white/30">Keynotes, panels, and hands-on AI workshops.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-divider mb-10" />
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/35">
            The free course takes you from &quot;what is AI?&quot; to actually
            understanding how it works. Just enter your email and start learning.
          </p>
          <Link
            href="/academy/free"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Start Free AI Course
          </Link>
        </div>
      </section>
    </main>
  );
}
