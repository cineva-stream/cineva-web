import { Icon } from "./Icons";
import { APK_DOWNLOAD_URL, RELEASES_URL } from "@/lib/content";

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

const row1 = [...ctaPosters, ...ctaPosters, ...ctaPosters, ...ctaPosters];
const reversed = [...ctaPosters].reverse();
const row2 = [...reversed, ...reversed, ...reversed, ...reversed];
const shifted = [...ctaPosters.slice(3), ...ctaPosters.slice(0, 3)];
const row3 = [...shifted, ...shifted, ...shifted, ...shifted];

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Unduh Cineva">
      {/* Background Poster Wall with Smooth Marquee & Semi-Transparent Black Backdrop */}
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
        </div>
        {/* Semi-Transparent Black Backdrop Overlay */}
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
            <span>Cerita seru berikutnya</span>
            <span className="cta-title-outline">dimulai di sini.</span>
          </h2>

          {/* Description */}
          <p className="cta-desc">
            Gratis, open source, dan siap menemani waktumu kapan saja.
          </p>

          {/* Action Buttons */}
          <div className="cta-actions">
            <a
              href={APK_DOWNLOAD_URL}
              className="cta-btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cta-btn-ico">
                <Icon name="download" size={24} />
              </div>
              <div className="cta-btn-text">
                <span className="cta-btn-meta">v1.0.8 ~98MB</span>
                <span className="cta-btn-title">Unduh untuk Android</span>
              </div>
            </a>

            <a
              href={RELEASES_URL}
              className="cta-btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <span>Semua rilis</span>
              <span className="cta-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
