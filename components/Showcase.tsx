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
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIdx((prev) => (prev !== closestIdx ? closestIdx : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveIdx(idx);
    const target = stepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="tampilan" className="section showcase-section">
      <div className="wrap">
        <div className="scrolly-container">
          {/* Sisi Kiri: Daftar Teks Menyatu Background dengan Garis Putih Halus */}
          <div className="scrolly-steps-list">
            {screens.map((s, idx) => (
              <div
                key={s.num}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`scrolly-step-item ${activeIdx === idx ? "active" : ""}`}
                onClick={() => handleStepClick(idx)}
              >
                {/* Garis putih halus di sisi kiri */}
                <div className="step-line" />

                <div className="step-body">
                  <span className="step-num">{s.num}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sisi Kanan: Sticky Phone Rata Tengah Vertikal dengan Tab Pills di Atasnya */}
          <div className="scrolly-phone-col">
            {/* Pill Navigation di Atas Phone */}
            <div className="showcase-pills" aria-label="Navigasi tampilan">
              {screens.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  className={`pill-btn ${activeIdx === idx ? "active" : ""}`}
                  onClick={() => handleStepClick(idx)}
                >
                  {s.tag}
                </button>
              ))}
            </div>

            {/* Mockup Smartphone */}
            <div className="phone-wrapper">
              <div className="phone-glow" />
              <div className="phone-device">
                <div className="phone-camera-hole" />
                <div className="phone-screen-container">
                  {screens.map((s, idx) => (
                    <div
                      key={s.src}
                      className={`screen-layer ${activeIdx === idx ? "active" : ""}`}
                    >
                      <img
                        src={s.src}
                        alt={s.alt}
                        width={560}
                        height={1162}
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
