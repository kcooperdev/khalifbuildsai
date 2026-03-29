"use client";

import { useEffect, useRef } from "react";

const partners = [
  "The Black Founders Table",
  "Adee\u2019s Coffee & Bar",
  "Palava Hut",
  "Tech Caf\u00e9",
  "Baltimore Tech Meetup",
];

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.4;

    function animate() {
      if (!track) return;
      position -= speed;
      const singleSetWidth = track.scrollWidth / 4;
      if (Math.abs(position) >= singleSetWidth) {
        position += singleSetWidth;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const repeated = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative bg-[#0A0A0A] py-14 md:py-16 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25">
          Trusted by community partners
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex w-max items-center gap-16 md:gap-20 lg:gap-24 will-change-transform"
        >
          {repeated.map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="whitespace-nowrap text-base font-semibold text-white/30 transition-colors duration-300 hover:text-amber-400/60 md:text-lg lg:text-xl select-none cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
