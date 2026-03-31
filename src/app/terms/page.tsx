import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | khalifbuildsai",
  description: "Terms of Service for khalifbuildsai.",
};

export default function TermsPage() {
  return (
    <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-8 pt-20 sm:px-8 md:pb-12 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                By accessing and using BLK AI Connect (&quot;the
                Platform&quot;), you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                2. Description of Service
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                BLK AI Connect provides a community platform, career board,
                events, and educational resources for Black AI practitioners,
                founders, and innovators. Our services include but are not
                limited to: community forums, job listings, event management,
                newsletters, and educational content.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                3. User Accounts
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/40">
                <p>
                  You may need to create an account to access certain features.
                  You are responsible for maintaining the confidentiality of your
                  account credentials and for all activities that occur under
                  your account.
                </p>
                <p>
                  You agree to provide accurate, current, and complete
                  information and to update your information to keep it accurate
                  and current.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                4. Acceptable Use
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/40">
                <p>You agree not to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Use the platform for any unlawful purpose or in violation of
                    any applicable laws
                  </li>
                  <li>
                    Harass, abuse, or harm another person or engage in
                    discriminatory behavior
                  </li>
                  <li>
                    Post false, misleading, or fraudulent content
                  </li>
                  <li>
                    Attempt to gain unauthorized access to the platform or its
                    systems
                  </li>
                  <li>
                    Use the platform to distribute spam or unsolicited
                    communications
                  </li>
                  <li>
                    Infringe on the intellectual property rights of others
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                5. Intellectual Property
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                All content on BLK AI Connect, including text, graphics,
                logos, and software, is the property of BLK AI Connect or its
                content suppliers and is protected by intellectual property laws.
                You may not reproduce, distribute, or create derivative works
                from any content without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                6. Job Listings & Career Board
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                Job listings on our Career Board are provided for informational
                purposes. BLK AI Connect does not guarantee the accuracy of
                job listings and is not responsible for employment decisions made
                by third-party employers. We are not a party to any employment
                agreement between you and an employer.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                7. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                BLK AI Connect shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                out of or relating to your use of the platform. Our total
                liability shall not exceed the amount you paid us, if any, in
                the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                8. Termination
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We reserve the right to suspend or terminate your access to the
                platform at any time, with or without cause, and with or without
                notice. Upon termination, your right to use the platform will
                immediately cease.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                9. Changes to Terms
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to the platform. Your
                continued use of the platform following any changes constitutes
                acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-white">
                10. Contact
              </h2>
              <p className="text-sm leading-relaxed text-white/40">
                For questions about these Terms of Service, please contact us at{" "}
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
