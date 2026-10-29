"use client";

import { useRef } from "react";
import { Icon } from "./Icons";
import { reasons } from "@/lib/content";

export default function Reasons() {
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
              Delapan alasan untuk <span className="outline">tekan play.</span>
            </h2>
          </div>
          <div className="arrows">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Geser ke kiri">
              <Icon name="left" size={18} />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Geser ke kanan">
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>

        <div className="reasons" ref={track} tabIndex={0} aria-label="Daftar alasan, geser untuk melihat lainnya">
          {reasons.map((r, i) => (
            <article className={`reason${r.maintenance ? " is-maint" : ""}`} key={r.title}>
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
