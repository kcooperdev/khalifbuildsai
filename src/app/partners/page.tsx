"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { capture } from "@/lib/posthog";

const currentPartners = [
  {
    name: "The Black Founders Table",
    description:
      "A community and resource hub for Black entrepreneurs building tech-enabled businesses.",
    type: "Community Partner",
  },
  {
    name: "Adee\u2019s Coffee & Bar",
    description:
      "Baltimore's favorite gathering spot and our go-to venue for in-person networking events.",
    type: "Venue Partner",
  },
  {
    name: "Palava Hut",
    description:
      "A cultural hub supporting African and diaspora entrepreneurs in the Baltimore tech scene.",
    type: "Community Partner",
  },
  {
    name: "Tech Caf\u00e9",
    description:
      "Co-working space and event venue supporting Baltimore's growing tech community.",
    type: "Venue Partner",
  },
  {
    name: "Baltimore Tech Meetup",
    description:
      "Baltimore's largest technology community — co-hosting events and expanding reach together.",
    type: "Event Partner",
  },
];

const partnerBenefits = [
  {
    title: "Access Talent Pipeline",
    description:
      "Connect directly with 750+ skilled technologists, designers, product managers, and founders. Reach talent you won't find anywhere else.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  },
  {
    title: "Event Sponsorship",
    description:
      "Sponsor our community events. Put your brand in front of engaged technologists and build meaningful, lasting relationships.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    color: "bg-violet-400/10 border-violet-400/20 text-violet-400",
  },
  {
    title: "Brand Visibility",
    description:
      "Get featured across our platform, social media, and events. Show your commitment to expanding access and opportunity in tech.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    color: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
  },
  {
    title: "Community Impact",
    description:
      "Make a tangible impact on economic mobility. Your partnership directly supports mentorship, education, and career development in emerging communities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    color: "bg-rose-400/10 border-rose-400/20 text-rose-400",
  },
];

const typeColors: Record<string, string> = {
  "Community Partner": "border-amber-400/20 bg-amber-400/10 text-amber-400",
  "Venue Partner": "border-violet-400/20 bg-violet-400/10 text-violet-400",
  "Event Partner": "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
};

export default function PartnersPage() {
  const handlePartnerInquiryClick = () => {
    capture("partner_inquiry_clicked", {
      source: "partners_page",
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Partners
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Building together,
              <br />
              <span className="text-gradient-warm">growing together.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              Our partners help us expand access, create opportunities, and
              build the foundation for inclusive, future-ready innovation
              ecosystems — one community at a time.
            </p>
          </div>
        </section>

        {/* Current partners */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse-glow" />
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Our Partners
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {currentPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
                >
                  <span
                    className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${typeColors[partner.type]}`}
                  >
                    {partner.type}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/40">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Partnership Benefits
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Why partner{" "}
              <span className="text-gradient-muted">with us?</span>
            </h2>
            <p className="mb-10 text-base text-white/40 md:text-lg">
              Partnering with BLK Tech Connect means joining a movement to
              expand access and create opportunity in communities that need it
              most.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {partnerBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift"
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/40">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-5 py-16 sm:px-8 md:py-24">
          <div className="section-divider absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Become a partner.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/40">
              Ready to make an impact? Let&apos;s discuss how we can work
              together to strengthen local talent pipelines and expand access
              to opportunity.
            </p>
            <a
              href="https://discord.gg/gWfhQFzbnB"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePartnerInquiryClick}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
