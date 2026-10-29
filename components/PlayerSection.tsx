import { Icon } from "./Icons";
import { player } from "@/lib/content";

export default function PlayerSection() {
  return (
    <section id="pemutar" className="sec">
      <div className="wrap player-grid">
        <div className="player-copy" data-reveal="up">
          <h2>{player.title}</h2>
          <p className="sec-lead">{player.lead}</p>
          <ul className="player-points">
            {player.points.map((p, idx) => (
              <li key={p.t} className="player-point-card" style={{ transitionDelay: `${idx * 60}ms` }}>
                <span className="tick">
                  <Icon name="check" size={14} />
                </span>
                <div>
                  <b>{p.t}</b>
                  <span>{p.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="player-shot" data-reveal="scale" data-delay="2">
          <div className="player-glow-orb" aria-hidden="true" />
          <div className="landscape-device">
            <span className="landscape-cam" aria-hidden="true" />
            <div className="landscape-screen">
              <img src={player.src} alt={player.alt} width={1200} height={527} loading="lazy" />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
