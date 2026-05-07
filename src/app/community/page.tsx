import type { Metadata } from "next";
import { BackHome } from "@/components/BackHome";

export const metadata: Metadata = {
  title: "Community | kcooperdev",
  description:
    "Join a growing community of AI builders learning, networking, and growing together. Free to join.",
};

export default function CommunityPage() {
  return (
    <main>
      <BackHome />
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Community
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build with
            <br />
            <span className="text-gradient-warm">other builders.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 md:text-lg">
            A growing community of people learning AI, sharing wins, asking questions,
            and helping each other grow. Free to join.
          </p>
          <a
            href="https://discord.gg/ecQDYq8Apv"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Join the Discord
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-xl font-bold text-white">What you get</h2>
          <div className="space-y-4">
            {[
              { title: "AI Discussions", description: "Daily conversations about AI tools, news, and techniques." },
              { title: "Networking", description: "Connect with builders, founders, and engineers who are all-in on AI." },
              { title: "Accountability", description: "Share what you're building. Get feedback. Stay consistent." },
              { title: "Early Access", description: "First to know about new courses, events, and opportunities." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5"
              >
                <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-[14px] text-white/30">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
