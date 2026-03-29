"use client";

import { useState, useEffect } from "react";
import { Logo } from "./ui/Logo";
import { NavLink } from "./ui/NavLink";
import Button from "./ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/events", label: "Events" },
  { href: "/academy", label: "Academy" },
  { href: "/press", label: "News" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            as="a"
            href="/get-involved"
            className="px-5 py-2 text-[13px]"
          >
            Get Involved
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden animate-fade-in">
          <nav className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="block py-3 text-[15px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <Button
                variant="primary"
                as="a"
                href="/get-involved"
                className="w-full justify-center px-5 py-2.5 text-sm"
              >
                Get Involved
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
