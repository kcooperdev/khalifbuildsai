import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | BLK Tech Connect — Beyond Limits & Knowledge",
  description:
    "Get answers to common questions about BLK Tech Connect, membership, events, and more.",
};

const faqs = [
  {
    question: "What is BLK Tech Connect?",
    answer:
      "BLK Tech Connect (Beyond Limits & Knowledge Tech Connect) is a grassroots innovation and workforce development initiative dedicated to expanding access to technology, education, and entrepreneurial opportunity in emerging or under-resourced communities.",
  },
  {
    question: "How do I join the community?",
    answer:
      "Joining is free! Visit our Get Involved page to join the BLK Tech Community, where you'll connect with members, grow your network, and get access to mentorship opportunities, job listings, and event invitations.",
  },
  {
    question: "Are events free?",
    answer:
      "Yes — all BLK Tech Connect events are free for community members. We host monthly meetups, panels, workshops, and networking events both in-person (Baltimore area) and virtual.",
  },
  {
    question: "When is the Academy launching?",
    answer:
      "BLK Tech Connect Academy is scheduled to launch in fall 2026. It will feature hands-on courses in coding, design, and leadership taught by industry professionals. Sign up for notifications on the Academy page.",
  },
  {
    question: "How can I become a partner or sponsor?",
    answer:
      "We partner with companies, organizations, and individuals who share our mission of expanding access and opportunity. Email partners@blktechconnect.com or join the BLK Tech Community to discuss partnership opportunities.",
  },
  {
    question: "I'm not in Baltimore. Can I still participate?",
    answer:
      "Absolutely! While we're based in Baltimore, the BLK Tech Community and our virtual events are open to technologists everywhere. We host online panels, workshops, and networking events regularly.",
  },
  {
    question: "How can I volunteer or contribute?",
    answer:
      "We're always looking for mentors, speakers, event organizers, and ambassadors. Head to the Get Involved page or join the BLK Tech Community to get started.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Help Center
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              How can we{" "}
              <span className="text-gradient-warm">help?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              Find answers to common questions about BLK Tech Connect, events,
              partnerships, and more.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] md:p-7"
                >
                  <h3 className="text-base font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/40">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still need help */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/40">
              Can&apos;t find what you&apos;re looking for? Reach out to our
              team directly.
            </p>
            <a
              href="https://discord.gg/gWfhQFzbnB"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]"
            >
              Join the Community
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
