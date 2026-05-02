"use client";

import Link from "next/link";
import { Logo } from "./ui/Logo";

const navLinks = [
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://www.instagram.com/khalifbuildsai/", label: "Instagram", external: true },
  { href: "https://discord.gg/ecQDYq8Apv", label: "Discord", external: true },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/30 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[14px] text-white/30 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#030303]">
      <div className="border-t border-white/[0.04] px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand column */}
            <div className="md:col-span-5">
              <Logo variant="footer" />
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/20">
                Self-taught engineer. AI builder. Helping others learn, build,
                and grow with artificial intelligence.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:hello@khalifbuildsai.com"
                  className="text-[14px] text-white/30 transition-colors hover:text-amber-400/80"
                >
                  hello@khalifbuildsai.com
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-7">
              <LinkColumn title="Explore" links={navLinks} />
              <LinkColumn title="Follow" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.03] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-[13px] text-white/15">
            © 2026 khalifbuildsai. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/code-of-conduct"
              className="text-[13px] text-white/15 transition-colors duration-200 hover:text-white/40"
            >
              Code of Conduct
            </Link>
            <Link
              href="/privacy"
              className="text-[13px] text-white/15 transition-colors duration-200 hover:text-white/40"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
