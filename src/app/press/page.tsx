import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In The News | BLK Tech Connect — Beyond Limits & Knowledge",
  description:
    "See where BLK Tech Connect has been featured — press coverage, media appearances, and community highlights.",
};

const pressFeatures = [
  {
    outlet: "Technical.ly",
    title:
      "RealLIST Innovators 2025: Meet 15 technologists driving Maryland's innovations",
    date: "Aug 2025",
    excerpt:
      "Khalif Cooper, Founder and CEO of BLK Tech Connect, was named one of 15 RealLIST Innovators driving Maryland's tech ecosystem — recognized for building community and powering innovation well beyond the tech he builds.",
    href: "https://technical.ly/entrepreneurship/reallist-innovators-2025-maryland/",
    logo: "TL",
  },
  {
    outlet: "WMAR-2 News",
    title:
      "BLK Tech Connect is empowering Black professionals in the Baltimore tech scene",
    date: "2025",
    excerpt:
      "WMAR-2 News covered BLK Tech Connect's sold-out event at FLOCK in Baltimore, featuring a networking happy hour and a panel of Black tech entrepreneurs sharing the key things that took them far in their careers.",
    href: "https://www.wmar2news.com/local/blk-tech-connect-is-empowering-black-professionals-in-the-baltimore-tech-scene",
    logo: "W2",
  },
];

export default function PressPage() {
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
              Press & Media
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              In the{" "}
              <span className="text-gradient-warm">news.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              See where BLK Tech Connect has been featured. From local TV to
              industry publications — our mission is making waves.
            </p>
          </div>
        </section>

        {/* Press features */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5">
              {pressFeatures.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141414] hover-lift md:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {/* Outlet badge */}
                    <div className="flex shrink-0 items-center gap-3 sm:w-28">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-[11px] font-bold text-amber-400">
                        {item.logo}
                      </div>
                      <div className="sm:hidden">
                        <p className="text-[13px] font-semibold text-white/60">
                          {item.outlet}
                        </p>
                        <p className="text-[11px] text-white/25">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-1 hidden items-center gap-3 sm:flex">
                        <p className="text-[13px] font-semibold text-white/60">
                          {item.outlet}
                        </p>
                        <span className="text-white/10">&middot;</span>
                        <p className="text-[12px] text-white/25">
                          {item.date}
                        </p>
                      </div>
                      <h3 className="text-base font-semibold leading-snug text-white group-hover:text-white/90 md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/35">
                        {item.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/30 transition-colors group-hover:text-amber-400/70">
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
