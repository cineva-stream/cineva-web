"use client";

import { Icon } from "./Icons";
import HeroPhone from "./HeroPhone";
import { posterWall } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";

// Susun 6 kolom poster dengan urutan berbeda agar dinding terlihat acak
const cols = Array.from({ length: 6 }, (_, i) => {
  const shift = (i * 3) % posterWall.length;
  return [...posterWall.slice(shift), ...posterWall.slice(0, shift)];
});

export default function Hero() {
  const { t } = useLanguage();
  const { version, apkSize, apkUrl } = useStats();

  return (
    <section className="hero">
      <div className="hero-wall" aria-hidden="true">
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
                  loading={j < 3 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="wall-fade" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>
            <span>{t.hero.line1}</span>
            <span className="outline">{t.hero.line2}</span>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>

          <div className="hero-actions">
            <a className="btn btn-light btn-xl" href={apkUrl} target="_blank" rel="noreferrer">
              <Icon name="download" size={22} />
              <span className="btn-stack">
                <small>{`${version} · ${apkSize}`}</small>
                {t.hero.downloadBtn}
              </span>
            </a>
            <a className="btn btn-glass btn-xl" href="#tur">
              <Icon name="play" size={18} />
              {t.hero.tourBtn}
            </a>
          </div>

          <ul className="hero-perks">
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
