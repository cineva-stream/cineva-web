import { Icon } from "./Icons";
import HeroPhone from "./HeroPhone";
import { hero, posterWall, APK_DOWNLOAD_URL } from "@/lib/content";

// Susun 6 kolom poster dengan urutan berbeda agar dinding terlihat acak
const cols = Array.from({ length: 6 }, (_, i) => {
  const shift = (i * 3) % posterWall.length;
  return [...posterWall.slice(shift), ...posterWall.slice(0, shift)];
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wall" aria-hidden="true">
        {cols.map((col, i) => (
          <div key={i} className={`wall-col ${i % 2 === 0 ? "down" : "up"}`}>
            <div className="wall-track">
              {[...col, ...col].map((src, j) => (
                <img key={j} src={src} alt="" width={240} height={360} loading={j < 3 ? "eager" : "lazy"} />
              ))}
            </div>
          </div>
        ))}
        <div className="wall-fade" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>
            <span>{hero.line1}</span>
            <span className="outline">{hero.line2}</span>
          </h1>
          <p className="hero-sub">{hero.sub}</p>

          <div className="hero-actions">
            <a className="btn btn-light btn-xl" href={APK_DOWNLOAD_URL} target="_blank" rel="noreferrer">
              <Icon name="download" size={22} />
              <span className="btn-stack">
                <small>{hero.meta}</small>
                Unduh untuk Android
              </span>
            </a>
            <a className="btn btn-glass btn-xl" href="#tur">
              <Icon name="play" size={18} />
              Lihat tur
            </a>
          </div>

          <ul className="hero-perks">
            {hero.perks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <HeroPhone />
      </div>
    </section>
  );
}
