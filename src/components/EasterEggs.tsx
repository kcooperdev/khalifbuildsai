"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function EasterEggs() {
  useEffect(() => {
    // Small confetti burst when clicking the logo
    const logo = document.querySelector("[aria-label='kcooperdev homepage']");
    if (!logo) return;

    const handleClick = () => {
      const rect = logo.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 30,
        spread: 50,
        startVelocity: 20,
        origin: { x, y },
        colors: ["#F59E0B", "#F97316", "#10B981", "#8B5CF6"],
        gravity: 0.8,
        scalar: 0.8,
      });
    };

    logo.addEventListener("click", handleClick);
    return () => logo.removeEventListener("click", handleClick);
  }, []);

  return null;
}
