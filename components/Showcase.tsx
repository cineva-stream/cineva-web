"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Showcase() {
  const { t } = useLanguage();
  const screens = t.showcase.screens;
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const updateActiveStep = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;
      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      setActiveIdx((prev) => (prev !== closestIdx ? closestIdx : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveStep();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (idx: number) => {
    setActiveIdx(idx);
    stepRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="tur" className="sec tour">
      <div className="wrap">
        <div className="sec-head row">
          <div>
            <h2>
              {t.showcase.title1} <span className="outline">{t.showcase.title2}</span>
            </h2>
          </div>
          <p className="sec-lead">{t.showcase.lead}</p>
        </div>

        <div className="tour-grid">
          <div className="tour-steps">
            {screens.map((s, idx) => (
              <div
                key={s.num}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`tour-step${activeIdx === idx ? " active" : ""}`}
                onClick={() => go(idx)}
              >
                <span className="tour-line" />
                <div>
                  <span className="tour-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tour-stage">
            <div className="tour-pills" role="tablist" aria-label={t.showcase.selectScreenAria}>
              {screens.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  role="tab"
                  aria-selected={activeIdx === idx}
                  className={`pill${activeIdx === idx ? " on" : ""}`}
                  onClick={() => go(idx)}
                >
                  {s.tag}
                </button>
              ))}
            </div>

            <div className="hero-device tour-device">
              <div className="phone-glow" aria-hidden="true" />
              <div className="phone-device">
                <div className="phone-camera-hole" />
                <div className="phone-screen-container">
                  {screens.map((s, idx) => (
                    <div key={s.src} className={`screen-layer${activeIdx === idx ? " active" : ""}`}>
                      <img
                        src={s.src}
                        alt={s.alt}
                        width={560}
                        height={1162}
                        decoding="async"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
