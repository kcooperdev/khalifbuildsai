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
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32">
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
        </div>
      </section>

      {/* Topics */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-lg font-bold text-white">Topics I speak on</h2>
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

      {/* Book a call */}
      <section className="px-5 pt-10 pb-14 sm:px-8 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <div className="section-divider mb-8" />
          <h2 className="mb-2 text-lg font-bold text-white">Book a call</h2>
          <p className="mb-6 text-[14px] text-white/30">
            Interested in having me speak at your event? Book a 15-minute call and let&apos;s chat.
          </p>
          <div className="overflow-hidden rounded-xl border border-white/[0.06]">
            <iframe
              src="https://tidycal.com/book-a-session/khalifbuildsai"
              width="100%"
              height={450}
              frameBorder="0"
              title="Book a speaking inquiry call"
              className="bg-white sm:h-[600px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
