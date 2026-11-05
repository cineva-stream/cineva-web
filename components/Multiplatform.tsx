"use client";

import { useEffect, useState, useRef } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Multiplatform() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const screens = [
    {
      src: "/screens/windows_home.webp",
      alt: "Cineva Home on Windows Desktop",
    },
    {
      src: "/screens/windows_details.webp",
      alt: "Cineva Details on Windows Desktop",
    },
  ];

  // Smooth auto-slide transition every 4.5s (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section id="multiplatform" className="sec sec-multiplatform" aria-label="Cineva Windows Desktop">
      <div className="wrap multiplatform-grid">
        {/* Sisi Kiri: Gambar Windows (Auto Crossfade Slideshow) */}
        <div
          className="multiplatform-visual"
          data-reveal="scale"
          data-delay="2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Windows Screenshot Container (Clean Tanpa Background) */}
          <div className="multiplatform-window-viewport">
            {screens.map((screen, idx) => (
              <div
                key={screen.src}
                className={`multiplatform-slide ${idx === activeIdx ? "is-active" : ""}`}
                aria-hidden={idx !== activeIdx}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  width={2560}
                  height={1459}
                  className="multiplatform-window-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Minimalist Slide Indicators */}
          <div className="multiplatform-indicators" role="tablist" aria-label="Slide Indicator">
            {screens.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === activeIdx}
                aria-label={`Slide ${idx + 1}`}
                className={`multiplatform-dot ${idx === activeIdx ? "is-active" : ""}`}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
              />
            ))}
          </div>
        </div>

        {/* Sisi Kanan: Judul, Deskripsi & Fitur */}
        <div className="multiplatform-copy" data-reveal="up">
          <h2 className="multiplatform-title">
            <span>{t.multiplatform.title1}</span>{" "}
            <span className="outline">{t.multiplatform.title2}</span>
          </h2>

          <p className="sec-lead multiplatform-lead">
            {t.multiplatform.lead}
          </p>

          {t.multiplatform.features && (
            <ul className="multiplatform-points">
              {t.multiplatform.features.map((feat, i) => (
                <li key={i} className="multiplatform-point-card">
                  <span className="multiplatform-point-icon">
                    {i === 0 && <Icon name="player" size={16} />}
                    {i === 1 && <Icon name="stream" size={16} />}
                    {i === 2 && <Icon name="subtitle" size={16} />}
                    {i === 3 && <Icon name="download" size={16} />}
                  </span>
                  <div className="multiplatform-point-text">
                    <b>{feat.title}</b>
                    <span>{feat.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
