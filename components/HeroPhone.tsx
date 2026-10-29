"use client";

import { useEffect, useState } from "react";
import { heroScreens } from "@/lib/content";

export default function HeroPhone() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % heroScreens.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  const getPositionClass = (index: number) => {
    const total = heroScreens.length;
    const diff = (index - activeIdx + total) % total;
    if (diff === 0) return "is-center";
    if (diff === 1) return "is-right";
    return "is-left";
  };

  return (
    <div
      className="hero-device hero-trio-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="phone-glow" aria-hidden="true" />

      <div className="phone-trio">
        {heroScreens.map((s, i) => {
          const posClass = getPositionClass(i);
          const isCenter = posClass === "is-center";
          return (
            <div
              key={s.src}
              className={`phone-trio-item ${posClass}`}
              onClick={() => setActiveIdx(i)}
              role="button"
              tabIndex={0}
              aria-label={`Tampilkan layar ${s.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdx(i);
                }
              }}
            >
              <div className="phone-device">
                <div className="phone-camera-hole" />
                <div className="phone-screen-container">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={560}
                    height={1162}
                    loading="eager"
                    className="trio-screen-img"
                  />
                </div>
              </div>
              <span className={`trio-label${isCenter ? " on" : ""}`}>{s.label}</span>
            </div>
          );
        })}
      </div>

      <div className="hero-dots" role="tablist" aria-label="Pilih tampilan">
        {heroScreens.map((s, i) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={s.label}
            className={i === activeIdx ? "on" : ""}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
