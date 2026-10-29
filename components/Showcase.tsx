"use client";

import { useEffect, useRef, useState } from "react";
import { screens } from "@/lib/content";

export default function Showcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
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
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
              Dari penemuan <span className="outline">sampai play.</span>
            </h2>
          </div>
          <p className="sec-lead">
            Tur singkat lewat layar asli Cineva: Beranda, Pencarian, Watchlist, Subtitle, dan Profil.
          </p>
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
            <div className="tour-pills" role="tablist" aria-label="Pilih layar">
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
                      <img src={s.src} alt={s.alt} width={560} height={1162} loading={idx === 0 ? "eager" : "lazy"} />
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
