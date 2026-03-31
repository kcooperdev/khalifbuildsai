"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 750,
    suffix: "+",
    label: "Community Members",
    description: "AI practitioners, founders, and innovators building together",
    color: "text-amber-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "Events Hosted",
    description: "Workshops, panels, meetups, and networking sessions",
    color: "text-violet-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "Partner Organizations",
    description: "Companies and communities committed to expanding access",
    color: "text-emerald-400",
  },
  {
    value: 100,
    suffix: "+",
    label: "Career Connections",
    description: "Direct pathways from community to high-growth AI careers",
    color: "text-rose-400",
  },
];

function AnimatedCounter({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${color}`}>
      {count}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section className="relative px-5 py-20 sm:px-8 md:py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            Our Impact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Building knowledge.{" "}
            <span className="text-gradient-muted">Powering innovation.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group text-center"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                color={stat.color}
              />
              <p className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-1 hidden text-[13px] leading-relaxed text-white/35 sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
