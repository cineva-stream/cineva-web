import { Icon } from "./Icons";
import { hero, heroPosters, REPO_URL, RELEASES_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Marquee (Hanya di Sisi Kanan dengan Gradient Fade dari Kiri ke Kanan) */}
      <div className="hero-bg-marquee" aria-hidden="true">
        <div className="hero-marquee-grid">
          {heroPosters.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`hero-marquee-col ${colIdx % 2 === 0 ? "col-down" : "col-up"}`}
            >
              <div className="marquee-track">
                {[...col, ...col].map((item, itemIdx) => (
                  <div className="poster-card" key={itemIdx}>
                    <img
                      src={item.src}
                      alt={item.title}
                      width={240}
                      height={360}
                      loading={itemIdx < 4 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hero-bg-fade" />
      </div>

      <div className="wrap">
        <div className="hero-grid">
          {/* Sisi Kiri: Teks Judul, Deskripsi, Tombol Aksi, dan Badges */}
          <div className="hero-content">
            <h1>{hero.title}</h1>
            <p className="hero-sub">{hero.sub}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://github.com/iamwisnu99/Cineva/releases/download/v1.0.0/Cineva_v1.0.0.apk" target="_blank" rel="noreferrer">
                <Icon name="download" size={19} />
                Unduh APK
              </a>
              <a className="btn btn-ghost" href={REPO_URL} target="_blank" rel="noreferrer">
                <Icon name="github" size={19} />
                GitHub
              </a>
            </div>
            <div className="badges">
              {hero.badges.map((b) => (
                <span className="badge" key={b.label}>
                  <span>{b.label}</span>
                  <b>{b.value}</b>
                </span>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: 3 Mockup Screenshot Aplikasi (Melayang di atas Background) */}
          <div className="hero-phones-stage">
            <div className="phone side left">
              <img src="/screens/splash.webp" alt="Splash screen Cineva" width={560} height={1162} />
            </div>
            <div className="phone center">
              <img src="/screens/home.webp" alt="Beranda Cineva" width={560} height={1162} />
            </div>
            <div className="phone side right">
              <img src="/screens/watchlist.webp" alt="Watchlist Cineva" width={560} height={1162} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
