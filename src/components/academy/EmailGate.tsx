"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useEmail } from "@/lib/email-context";

export function EmailGate({ children }: { children: React.ReactNode }) {
  const { hasEmail, captureEmail } = useEmail();
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (hasEmail && !success) {
    return <>{children}</>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputEmail.trim();

    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong. Try again.");
        setLoading(false);
        return;
      }

      captureEmail(trimmed);
      setSuccess(true);

      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F59E0B", "#F97316", "#10B981", "#8B5CF6", "#ffffff"],
      });
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">
            You&apos;re in!
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-white/35">
            Your free AI course is unlocked. Check your email for a welcome message.
          </p>
          <Link
            href="/academy/introduction-to-ai/what-is-ai"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Start Lesson 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Get Free Access
        </h2>
        <p className="mb-8 text-[15px] leading-relaxed text-white/35">
          Enter your email to unlock the full Introduction to AI course — 7 lessons, completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value);
              setError("");
            }}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/[0.06] bg-[#0A0A0A] px-4 py-3 text-[15px] text-white placeholder:text-white/20 outline-none transition-colors focus:border-amber-400/30"
          />
          {error && (
            <p className="text-[13px] text-red-400/80">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Setting up your access..." : "Start Learning — Free"}
          </button>
        </form>

        <p className="mt-4 text-[12px] text-white/15">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
