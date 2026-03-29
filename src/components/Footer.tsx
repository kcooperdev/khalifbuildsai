"use client";

import Link from "next/link";
import { Logo } from "./ui/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/events", label: "Events" },
  { href: "/academy", label: "Academy" },
  { href: "/press", label: "News" },
  { href: "/help", label: "Help Center" },
];

const socialLinks = [
  { href: "https://www.instagram.com/blktechconnect/", label: "Instagram", external: true },
  { href: "https://discord.gg/gWfhQFzbnB", label: "Discord", external: true },
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
      <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60">
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
                className="text-[14px] text-white/35 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[14px] text-white/35 transition-colors duration-200 hover:text-white/70"
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
    <footer className="bg-[#060606]">
      {/* Brand statement + links */}
      <div className="border-t border-white/[0.06] px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand column */}
            <div className="md:col-span-5">
              <Logo variant="footer" />
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/30">
                Where communities grow into innovators. Expanding access to
                technology, education, and opportunity — one city at a time.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:hello@blktechconnect.com"
                  className="text-[14px] text-white/40 transition-colors hover:text-amber-400/80"
                >
                  hello@blktechconnect.com
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-7">
              <LinkColumn title="Navigate" links={navLinks} />
              <LinkColumn title="Connect" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-white/20">
              © 2026 BLK Tech Connect. All rights reserved.
            </span>
            <span className="hidden text-[13px] text-white/10 sm:inline">
              ·
            </span>
            <span className="hidden text-[13px] text-white/20 sm:inline">
              Beyond Limits & Knowledge
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/code-of-conduct"
              className="text-[13px] text-white/20 transition-colors duration-200 hover:text-white/50"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
