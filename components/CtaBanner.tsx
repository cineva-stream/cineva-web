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

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Unduh Cineva">
      {/* Background Poster Wall with Deep Cinema Vignette */}
      <div className="cta-backdrop" aria-hidden="true">
        <div className="cta-poster-grid">
          <div className="cta-poster-row">
            {[...ctaPosters, ...ctaPosters].map((src, i) => (
              <div key={`r1-${i}`} className="cta-poster-item">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="cta-poster-row offset">
            {[...ctaPosters.slice().reverse(), ...ctaPosters.slice().reverse()].map((src, i) => (
              <div key={`r2-${i}`} className="cta-poster-item">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* Radial Vignette & Edge Fades */}
        <div className="cta-vignette-overlay" />
      </div>

      <div className="wrap">
        <div className="cta-content">
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
            <span>Cerita seru berikutnya,</span>
            <span className="cta-title-outline">dimulai di sini.</span>
          </h2>

          {/* Description */}
          <p className="cta-desc">
            Gratis, open source, dan siap menemani waktu santaimu kapan saja.
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
                <span className="cta-btn-meta">v1.0.4 ~90MB</span>
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
