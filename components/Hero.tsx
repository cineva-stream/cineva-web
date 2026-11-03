"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import HeroPhone from "./HeroPhone";
import DownloadPicker from "./DownloadPicker";
import { posterWall } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

// Susun 6 kolom poster dengan urutan berbeda agar dinding terlihat acak
const cols = Array.from({ length: 6 }, (_, i) => {
  const shift = (i * 3) % posterWall.length;
  return [...posterWall.slice(shift), ...posterWall.slice(0, shift)];
});

export default function Hero() {
  const { t } = useLanguage();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <section className="hero">
      <div className="hero-wall-viewport" aria-hidden="true">
        <div className="hero-wall">
          {cols.map((col, i) => (
            <div key={i} className={`wall-col ${i % 2 === 0 ? "down" : "up"}`}>
              <div className="wall-track">
                {[...col, ...col].map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt=""
                    width={240}
                    height={360}
                    decoding="async"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="wall-fade" />
        </div>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>
            <span>{t.hero.line1}</span>
            <span className="outline">{t.hero.line2}</span>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>

          <div className="hero-actions">
            <DownloadPicker variant="hero" onOpenChange={setIsPickerOpen} />
            <a className="btn btn-glass btn-xl" href="#tur">
              <Icon name="play" size={18} />
              {t.hero.tourBtn}
            </a>
          </div>

          <ul className={`hero-perks ${isPickerOpen ? "is-hidden" : ""}`}>
            {t.hero.perks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <HeroPhone />
      </div>
    </section>
  );
}
