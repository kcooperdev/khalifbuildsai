import type { Metadata } from "next";
import { BackHome } from "@/components/BackHome";

export const metadata: Metadata = {
  title: "Privacy | kcooperdev",
  description: "Privacy Policy for kcooperdev.",
};

export default function PrivacyPage() {
  return (
    <main>
        <BackHome />
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-8 pt-20 sm:px-8 md:pb-12 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-[14px] text-white/40">
              Last updated: February 10, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                1. Information We Collect
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/40">
                <p>
                  We collect information you provide directly, including your
                  name, email address, and any other information you choose to
                  share when signing up for our community, newsletter, events,
                  or career board.
                </p>
                <p>
                  We also collect certain information automatically when you
                  visit our website, including your IP address, browser type,
                  device information, and usage data through cookies and similar
                  technologies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                2. How We Use Your Information
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/40">
                <p>We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you newsletters, event updates, and job listings</li>
                  <li>
                    Communicate with you about your account, events, and community
                    updates
                  </li>
                  <li>
                    Analyze usage patterns to improve the user experience
                  </li>
                  <li>
                    Protect against fraud and ensure the security of our platform
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                3. Information Sharing
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist us in operating our platform, conducting our
                business, or serving our community, so long as those parties
                agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                4. Data Security
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. However,
                no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                5. Your Rights
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/40">
                <p>You have the right to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                6. Cookies
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can set your browser to refuse all
                or some cookies, or to alert you when websites set or access
                cookies.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                7. Changes to This Policy
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                8. Contact Us
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                If you have any questions about this privacy policy, please
                contact us at{" "}
                <a
                  href="mailto:hello@blktechconnect.com"
                  className="text-white/60 underline decoration-white/10 underline-offset-4 hover:text-white hover:decoration-white/30 transition-colors"
                >
                  hello@blktechconnect.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
