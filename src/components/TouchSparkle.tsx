"use client";

import { useEffect } from "react";

export function TouchSparkle() {
  useEffect(() => {
    // Only run on touch devices
    if (!("ontouchstart" in window)) return;

    const colors = ["#F59E0B", "#F97316", "#10B981", "#8B5CF6"];

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      for (let i = 0; i < 6; i++) {
        const dot = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / 6;
        const distance = 20 + Math.random() * 15;

        Object.assign(dot.style, {
          position: "fixed",
          left: touch.clientX + "px",
          top: touch.clientY + "px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: color,
          pointerEvents: "none",
          zIndex: "9999",
          transition: "all 0.5s ease-out",
          opacity: "1",
        });

        document.body.appendChild(dot);

        requestAnimationFrame(() => {
          dot.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
          dot.style.opacity = "0";
        });

        setTimeout(() => dot.remove(), 500);
      }
    };

    document.addEventListener("touchstart", handleTouch, { passive: true });
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  return null;
}
