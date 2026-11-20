"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";

const AUTO_SLIDE_MS = 5000;

/**
 * Section "Nonton Bareng / Watch Party".
 * Visual (tab, stage, track, dot) memakai kelas `multiplatform-*` agar identik dengan section Multiplatform;
 * langkah di sisi kanan terhubung dua arah dengan tab yang aktif.
 */
export default function WatchParty() {
  const { t } = useLanguage();
  const wp = t.watchParty;
  const steps = wp.steps;

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, ready: false });

  const updateIndicator = () => {
    const container = tabsContainerRef.current;
    const activeBtn = tabBtnRefs.current[activeIdx];
    if (!container || !activeBtn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    setIndicatorStyle({ left: btnRect.left - containerRect.left, width: btnRect.width, ready: true });
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateIndicator);
    }
    return () => window.removeEventListener("resize", updateIndicator);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, t]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [isPaused, reduceMotion, activeIdx, steps.length]);

  return (
    <section id="nobar" className="sec sec-party" aria-label={wp.sectionAria}>
      <div className="wrap">
        <div className="sec-head row party-head" data-reveal="up">
          <div>
            <span className="party-badge">
              <Icon name="users" size={13} />
              <span>{wp.badge}</span>
              <span className="party-badge-beta">{wp.beta}</span>
            </span>
            <h2>
              {wp.title1} <span className="outline">{wp.title2}</span>
            </h2>
          </div>
          <p className="sec-lead">{wp.lead}</p>
        </div>

        <div className="party-grid">
          {/* Kiri: visual bertab (identik dengan Multiplatform) */}
          <div
            className="multiplatform-visual"
            data-reveal="scale"
            data-delay="2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div ref={tabsContainerRef} className="multiplatform-tabs" role="tablist" aria-label={wp.tabsAria}>
              <span
                className="multiplatform-tab-indicator"
                style={{
                  transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.ready ? 1 : 0,
                }}
                aria-hidden="true"
              />
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  ref={(el) => {
                    tabBtnRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIdx}
                  className={`multiplatform-tab-btn ${idx === activeIdx ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span>{step.tab}</span>
                </button>
              ))}
            </div>

            <div className="multiplatform-stage">
              <div className="multiplatform-glow-orb" aria-hidden="true" />
              <div className="multiplatform-window-viewport">
                <div className="multiplatform-window-track" style={{ transform: `translate3d(-${activeIdx * 100}%, 0, 0)` }}>
                  {steps.map((step, idx) => (
                    <div
                      key={step.num}
                      className={`multiplatform-slide ${step.isPortrait ? "is-portrait" : ""} ${idx === activeIdx ? "is-active" : ""}`}
                      aria-hidden={idx !== activeIdx}
                    >
                      <img
                        src={step.src}
                        alt={step.alt}
                        width={step.width}
                        height={step.height}
                        className="multiplatform-window-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="multiplatform-indicators" role="tablist" aria-label={wp.slideAria}>
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIdx}
                  aria-label={`${wp.slideAria} ${idx + 1}`}
                  className={`multiplatform-dot ${idx === activeIdx ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>
          </div>

          {/* Kanan: langkah-langkah, sinkron dengan tab */}
          <ol className="party-steps" data-reveal="up">
            {steps.map((step, idx) => (
              <li key={step.num}>
                <button
                  type="button"
                  className={`party-step ${idx === activeIdx ? "is-active" : ""}`}
                  aria-current={idx === activeIdx ? "step" : undefined}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="party-step-num">{step.num}</span>
                  <span className="party-step-text">
                    <b>{step.title}</b>
                    <span>{step.desc}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <ul className="party-features">
          {wp.features.map((f, i) => (
            <li key={f.title} className="multiplatform-point-card" data-reveal="up" data-delay={String((i % 3) + 1)}>
              <span className="multiplatform-point-icon">
                <Icon name={f.icon} size={16} />
              </span>
              <div className="multiplatform-point-text">
                <b>{f.title}</b>
                <span>{f.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <aside className="party-note" role="note" data-reveal="up">
          <span className="party-note-icon">
            <Icon name="info" size={16} />
          </span>
          <div>
            <div className="party-note-head">
              <span className="party-badge-beta">{wp.beta}</span>
              <b>{wp.note.title}</b>
            </div>
            <p>{wp.note.desc}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
