"use client";

import { useRef } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Reasons() {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(320, el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section id="alasan" className="sec">
      <div className="wrap">
        <div className="sec-head row">
          <div>
            <h2>
              {t.reasons.title1} <span className="outline">{t.reasons.title2}</span>
            </h2>
          </div>
          <div className="arrows">
            <button type="button" onClick={() => scrollBy(-1)} aria-label={t.reasons.prevAria}>
              <Icon name="left" size={18} />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label={t.reasons.nextAria}>
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>

        <div className="reasons" ref={track} tabIndex={0} aria-label={t.reasons.listAria}>
          {t.reasons.items.map((r, i) => (
            <article className={`reason${r.maintenance ? " is-maint" : ""}`} key={i}>
              <span className="reason-num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="reason-card">
                <img src={r.src} alt="" width={342} height={513} loading="lazy" />
                {r.badge && <span className={`reason-badge${r.maintenance ? " maint" : ""}`}>{r.badge}</span>}
                <div className="reason-text">
                  <h3>{r.title}</h3>
                  <p>{r.sub}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
