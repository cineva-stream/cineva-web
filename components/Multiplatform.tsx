"use client";

import { useEffect, useState, useRef } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Multiplatform() {
  const { lang, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const screens = [
    {
      id: "android",
      platform: "Android",
      tabLabel: "Android",
      icon: "android",
      src: "/screens/home.webp",
      alt: lang === "en" ? "Cineva on Android Mobile" : "Tampilan Cineva di Smartphone Android",
      badge: "Mobile UI",
      isPortrait: true,
      width: 1216,
      height: 2560,
    },
    {
      id: "android-tv",
      platform: "Android TV",
      tabLabel: "Android TV",
      icon: "tv",
      src: "/screens/android_tv.webp",
      alt: lang === "en" ? "Cineva on Android TV & Smart TV" : "Tampilan Cineva di Android TV & Smart TV",
      badge: "10-Foot UI",
      isPortrait: false,
      width: 2560,
      height: 1684,
    },
    {
      id: "windows",
      platform: "Windows",
      tabLabel: "Windows",
      icon: "windows",
      src: "/screens/windows_home.webp",
      alt: lang === "en" ? "Cineva on Windows Desktop" : "Tampilan Cineva di Windows Desktop",
      badge: "Desktop UI",
      isPortrait: false,
      width: 2560,
      height: 1459,
    },
  ];

  // Dynamically calculate smooth sliding indicator dimensions
  const updateIndicator = () => {
    const container = tabsContainerRef.current;
    const activeBtn = tabBtnRefs.current[activeIdx];
    if (!container || !activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    setIndicatorStyle({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
      ready: true,
    });
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateIndicator);
    }
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIdx]);

  useEffect(() => {
    const frame = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Smooth auto-slide transition every 4.0s (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % screens.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIdx, screens.length]);

  return (
    <section id="multiplatform" className="sec sec-multiplatform" aria-label="Cineva Android, Android TV & Windows Desktop">
      <div className="wrap">
        {/* Section Header: Standard sec-head row konsisten dengan Bento & Showcase */}
        <div className="sec-head row multiplatform-head" data-reveal="up">
          <div>
            <span className="multiplatform-badge">
              <Icon name="android" size={13} />
              <span className="badge-plus">+</span>
              <Icon name="tv" size={13} />
              <span className="badge-plus">+</span>
              <Icon name="windows" size={13} />
              <span>{t.multiplatform.badge || "ANDROID, ANDROID TV & WINDOWS"}</span>
            </span>
            <h2>
              {t.multiplatform.title1} <span className="outline">{t.multiplatform.title2}</span>
            </h2>
          </div>
          <p className="sec-lead">{t.multiplatform.lead}</p>
        </div>

        {/* Section Body: Visual Showcase & Feature Cards */}
        <div className="multiplatform-grid">
          {/* Sisi Kiri / Atas: Visual Multiplatform (Tabs + Glow + Viewport + Indicators) */}
          <div
            className="multiplatform-visual"
            data-reveal="scale"
            data-delay="2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Segmented Device Selector Tabs with Smooth Sliding Indicator */}
            <div
              ref={tabsContainerRef}
              className="multiplatform-tabs"
              role="tablist"
              aria-label="Pilih Tampilan Layar"
            >
              <span
                className="multiplatform-tab-indicator"
                style={{
                  transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.ready ? 1 : 0,
                }}
                aria-hidden="true"
              />
              {screens.map((screen, idx) => (
                <button
                  key={screen.id}
                  ref={(el) => {
                    tabBtnRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIdx}
                  className={`multiplatform-tab-btn ${idx === activeIdx ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveIdx(idx);
                  }}
                >
                  <Icon name={screen.icon} size={15} />
                  <span>{screen.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Stage Mockup dengan Ambient Glow Orb & Directional Sliding Track */}
            <div className="multiplatform-stage">
              <div className="multiplatform-glow-orb" aria-hidden="true" />
              <div className="multiplatform-window-viewport">
                <div
                  className="multiplatform-window-track"
                  style={{
                    transform: `translate3d(-${activeIdx * 100}%, 0, 0)`,
                  }}
                >
                  {screens.map((screen, idx) => (
                    <div
                      key={screen.id}
                      className={`multiplatform-slide ${screen.isPortrait ? "is-portrait" : ""} ${idx === activeIdx ? "is-active" : ""}`}
                      aria-hidden={idx !== activeIdx}
                    >
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        width={screen.width}
                        height={screen.height}
                        className="multiplatform-window-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sisi Kanan / Bawah: Kartu Fitur */}
          {t.multiplatform.features && (
            <div className="multiplatform-copy" data-reveal="up">
              <ul className="multiplatform-points">
                {t.multiplatform.features.map((feat, i) => (
                  <li key={i} className="multiplatform-point-card" style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="multiplatform-point-icon">
                      <Icon name={feat.icon || "wrench"} size={16} />
                    </span>
                    <div className="multiplatform-point-text">
                      <b>{feat.title}</b>
                      <span>{feat.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
