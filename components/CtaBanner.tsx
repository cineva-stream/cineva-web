"use client";

import { Icon } from "./Icons";
import { RELEASES_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";

const ctaPosters = [
  "/posters/squid_game.webp",
  "/posters/spiderman_brand_new_day.webp",
  "/posters/breaking_bad.webp",
  "/posters/stranger_things.webp",
  "/posters/house_of_the_dragon.webp",
  "/posters/peaky_blinders.webp",
  "/posters/chernobyl.webp",
  "/posters/game_of_thrones.webp",
];

const basePosters = [...ctaPosters, ...ctaPosters];
const row1 = [...basePosters, ...basePosters];
const reversed = [...basePosters].reverse();
const row2 = [...reversed, ...reversed];
const shifted = [...basePosters.slice(3), ...basePosters.slice(0, 3)];
const row3 = [...shifted, ...shifted];
const shifted2 = [...basePosters.slice(5), ...basePosters.slice(0, 5)];
const row4 = [...shifted2, ...shifted2];

export default function CtaBanner() {
  const { t } = useLanguage();
  const { version, apkSize, apkUrl } = useStats();

  return (
    <section className="cta-banner-section" aria-label={t.cta.sectionAria}>
      {/* Background Poster Wall with Smooth Marquee & Deep Obsidian Vignette */}
      <div className="cta-backdrop" aria-hidden="true">
        <div className="cta-poster-grid">
          <div className="cta-poster-row">
            {row1.map((src, i) => (
              <div key={`r1-${i}`} className="cta-poster-item">
                <img src={src} alt="" width={180} height={270} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="cta-poster-row offset">
            {row2.map((src, i) => (
              <div key={`r2-${i}`} className="cta-poster-item">
                <img src={src} alt="" width={180} height={270} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="cta-poster-row slow">
            {row3.map((src, i) => (
              <div key={`r3-${i}`} className="cta-poster-item">
                <img src={src} alt="" width={180} height={270} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="cta-poster-row offset">
            {row4.map((src, i) => (
              <div key={`r4-${i}`} className="cta-poster-item">
                <img src={src} alt="" width={180} height={270} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* Deep Obsidian Top/Bottom & Radial Vignette Overlay */}
        <div className="cta-vignette-overlay" />
      </div>

      <div className="wrap">
        <div className="cta-content" data-reveal="up">
          {/* Logo Cineva Transparan Tanpa Background */}
          <img
            src="/Cineva_transparent.png"
            alt="Cineva"
            className="cta-logo-img"
            width={104}
            height={104}
          />

          {/* Dual-styled Heading */}
          <h2 className="cta-title">
            <span>{t.cta.title1}</span>
            <span className="cta-title-outline">{t.cta.title2}</span>
          </h2>

          {/* Description */}
          <p className="cta-desc">{t.cta.desc}</p>

          {/* Action Buttons */}
          <div className="cta-actions">
            <a
              href={apkUrl}
              className="cta-btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cta-btn-ico">
                <Icon name="download" size={24} />
              </div>
              <div className="cta-btn-text">
                <span className="cta-btn-meta">{`${version} ${apkSize}`}</span>
                <span className="cta-btn-title">{t.cta.downloadBtn}</span>
              </div>
            </a>

            <a
              href={RELEASES_URL}
              className="cta-btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <span>{t.cta.allReleases}</span>
              <span className="cta-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
