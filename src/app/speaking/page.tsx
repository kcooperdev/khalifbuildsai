import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking | khalifbuildsai",
  description:
    "Book Khalif Cooper for keynotes, panels, and workshops on AI, self-teaching, and community building.",
};

const topics = [
  {
    title: "AI for Everyone",
    description: "How non-technical people and communities can start using AI today — no coding required.",
  },
  {
    title: "The Self-Taught Path",
    description: "How I taught myself to code and build with AI — and how you can too.",
  },
  {
    title: "Building with AI",
    description: "Live demos and workshops on building real products with AI tools and APIs.",
  },
  {
    title: "Community & Economic Mobility",
    description: "How AI communities can drive workforce development and create opportunity in underserved cities.",
  },
];

export default function SpeakingPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:pb-24 md:pt-32">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Speaking
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Book me to
            <br />
            <span className="text-gradient-warm">speak.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/35 md:text-lg">
            Keynotes, panels, workshops, and fireside chats. I talk about
            AI, self-teaching, and building community.
          </p>
          <a
            href="mailto:speaking@khalifbuildsai.com"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Topics */}
      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-xl font-bold text-white">Topics I speak on</h2>
          <div className="space-y-4">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-5"
              >
                <h3 className="text-[15px] font-semibold text-white">{topic.title}</h3>
                <p className="mt-1 text-[14px] text-white/30">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past speaking */}
      <section className="relative px-5 pb-24 sm:px-8 md:pb-32">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-2xl pt-16 text-center md:pt-24">
          <p className="text-[13px] text-white/20">
            Previously featured at Technical.ly&apos;s RealLIST Innovators
            and WMAR-2 News Baltimore.
          </p>
        </div>
      </section>
    </main>
  );
}
