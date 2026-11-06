"use client";

import { Icon } from "./Icons";
import HeroPhone from "./HeroPhone";
import { posterWall, EXE_DOWNLOAD_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";
import { useDeviceArch } from "@/lib/useDeviceArch";

// Susun 6 kolom poster dengan urutan berbeda agar dinding terlihat acak
const cols = Array.from({ length: 6 }, (_, i) => {
  const shift = (i * 3) % posterWall.length;
  return [...posterWall.slice(shift), ...posterWall.slice(0, shift)];
});

export default function Hero() {
  const { lang, t } = useLanguage();
  const stats = useStats();
  const deviceArch = useDeviceArch();

  const isWindows = deviceArch.isWindows;
  const isTv = deviceArch.isTv;
  const platformName = isWindows ? "Windows" : isTv ? "Android TV" : "Android";
  const platformIcon: "windows" | "android" | "tv" = isWindows ? "windows" : isTv ? "tv" : "android";

  const matchedApk = stats.apks?.find((a) => a.abi === deviceArch.recommendedAbi);
  const targetUrl = isWindows
    ? (stats.windows?.url || stats.exeUrl || EXE_DOWNLOAD_URL)
    : (matchedApk?.url || stats.apkUrl);

  const targetSize = isWindows
    ? (stats.windows?.size || "28.2 MB")
    : (matchedApk?.size || (deviceArch.recommendedAbi === "universal" ? "100.1 MB" : "35.8 MB"));

  const topText = lang === "en" ? `Download for ${platformName}` : `Unduh untuk ${platformName}`;
  const subText = `${stats.version} - ${targetSize}`;

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
            <a
              className="btn btn-light btn-xl hero-main-download-btn"
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="download-ico-badge" aria-hidden="true">
                <Icon name={platformIcon} size={20} />
              </span>
              <span className="btn-stack">
                <strong className="btn-stack-title">{topText}</strong>
                <small className="btn-stack-sub">{subText}</small>
              </span>
            </a>

            <a className="btn btn-glass btn-xl" href="#pasang">
              <Icon name="download" size={18} />
              {lang === "en" ? "Platforms & Guide" : "Pilihan Platform & Panduan"}
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
