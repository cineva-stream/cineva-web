"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { subtitleLangs, posterWall } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

const row1Posters = [...posterWall, ...posterWall];
const shiftedWall = [...posterWall.slice(4), ...posterWall.slice(0, 4)];
const row2Posters = [...shiftedWall, ...shiftedWall];
const langCodes = ["ID", "EN", "ES", "JA", "KO"];

export default function Bento() {
  const { t } = useLanguage();
  const [activeGenre, setActiveGenre] = useState(0);
  const [activeLang, setActiveLang] = useState(0);

  return (
    <section id="fitur" className="sec">
      <div className="wrap">
        <div className="sec-head row" data-reveal="up">
          <div>
            <h2>
              {t.bento.title1} <span className="outline">{t.bento.title2}</span>
            </h2>
          </div>
          <p className="sec-lead">{t.bento.lead}</p>
        </div>

        <div className="bento">
          {/* Pencarian */}
          <article className="tile t-discover" data-reveal="up" data-delay="1">
            <div className="tile-art discover-art">
              <div className="mini-wall" aria-hidden="true">
                <div className="mini-wall-row">
                  {row1Posters.map((src, i) => (
                    <img key={`r1-${i}`} src={src} alt="" width={120} height={180} loading="lazy" />
                  ))}
                </div>
                <div className="mini-wall-row rev">
                  {row2Posters.map((src, i) => (
                    <img key={`r2-${i}`} src={src} alt="" width={120} height={180} loading="lazy" />
                  ))}
                </div>
              </div>
              <div className="discover-fade" aria-hidden="true" />
              <div className="discover-ui">
                <div className="mini-search">
                  <Icon name="search" size={16} />
                  <span className="mini-search-text">{t.bento.discover.placeholder}</span>
                  <span className="mini-search-caret" aria-hidden="true" />
                  <span className="mini-search-kbd">{t.bento.discover.kbd}</span>
                </div>
                <div className="mini-chips" role="group" aria-label={t.bento.discover.filterAria}>
                  {t.bento.discover.chips.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      className={`mini-chip-btn${activeGenre === i ? " on" : ""}`}
                      onClick={() => setActiveGenre(i)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="search" size={18} />
                </span>
                <span className="tile-tag">{t.bento.discover.tag}</span>
              </div>
              <h3>{t.bento.discover.title}</h3>
              <p>{t.bento.discover.desc}</p>
            </div>
          </article>

          {/* Pemutar */}
          <article className="tile t-player" data-reveal="up" data-delay="2">
            <div className="tile-art player-art">
              <div className="mini-player-stage">
                <div className="mini-player-frame">
                  <img src={t.player.src} alt={t.player.alt} width={1200} height={527} loading="lazy" />
                </div>
              </div>
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="player" size={18} />
                </span>
                <span className="tile-tag">{t.bento.player.tag}</span>
              </div>
              <h3>{t.bento.player.title}</h3>
              <p>{t.bento.player.desc}</p>
            </div>
          </article>

          {/* Unduhan - Under Maintenance */}
          <article className="tile t-maint" aria-label={t.bento.maint.ariaLabel} data-reveal="up" data-delay="1">
            <div className="tile-art maint-art">
              <div className="maint-visual">
                <div className="maint-ring-wrap">
                  <svg viewBox="0 0 120 120" className="ring" aria-hidden="true">
                    <circle cx="60" cy="60" r="50" className="ring-orbit" />
                    <circle cx="60" cy="60" r="42" className="ring-bg" />
                    <circle cx="60" cy="60" r="42" className="ring-fg" />
                  </svg>
                  <span className="maint-core">
                    <strong className="maint-percent">98%</strong>
                  </span>
                </div>
                <div className="maint-status-pill">
                  <span className="status-dot-online" />
                  <span>{t.bento.maint.statusOnline}</span>
                </div>
              </div>
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico maint-ico">
                  <Icon name="warning" size={18} />
                </span>
                <span className="maint-badge">
                  <Icon name="warning" size={13} />
                  {t.maintenance.badge}
                </span>
              </div>
              <h3>{t.maintenance.title}</h3>
              <p>{t.maintenance.body}</p>
            </div>
          </article>

          {/* Watchlist */}
          <article className="tile t-watch" data-reveal="up" data-delay="2">
            <div className="tile-art list-art watch-art">
              {t.bento.watch.rows.map((r, idx) => (
                <div className="row-item" key={r.title} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <img src={r.src} alt="" width={64} height={96} loading="lazy" />
                  <div className="row-info">
                    <b>{r.title}</b>
                    <span>
                      {r.meta} · {t.bento.watch.savedTag}
                    </span>
                  </div>
                  <span className="row-bookmark" aria-hidden="true">
                    <Icon name="bookmark" size={15} />
                  </span>
                </div>
              ))}
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="bookmark" size={18} />
                </span>
                <span className="tile-tag">{t.bento.watch.tag}</span>
              </div>
              <h3>{t.bento.watch.title}</h3>
              <p>{t.bento.watch.desc}</p>
            </div>
          </article>

          {/* Subtitle */}
          <article className="tile t-sub" data-reveal="up" data-delay="3">
            <div className="tile-art list-art lang-art">
              {subtitleLangs.map((l, idx) => {
                const isOn = activeLang === idx;
                return (
                  <button
                    type="button"
                    className={`lang${isOn ? " on" : ""}`}
                    key={l.name}
                    onClick={() => setActiveLang(idx)}
                  >
                    <span className="lang-code">{langCodes[idx] || "CC"}</span>
                    <span className="lang-names">
                      <b>{l.name}</b>
                      <span>{l.native}</span>
                    </span>
                    {isOn ? (
                      <span className="lang-active-badge">
                        <Icon name="check" size={14} />
                      </span>
                    ) : (
                      <span className="lang-auto-tag">{t.bento.sub.autoTag}</span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="subtitle" size={18} />
                </span>
                <span className="tile-tag">{t.bento.sub.tag}</span>
              </div>
              <h3>{t.bento.sub.title}</h3>
              <p>{t.bento.sub.desc}</p>
            </div>
          </article>

          {/* Profil */}
          <article className="tile t-profile" data-reveal="up" data-delay="1">
            <div className="profile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="user" size={18} />
                </span>
                <span className="tile-tag">{t.bento.profile.tag}</span>
              </div>
              <h3>{t.bento.profile.title}</h3>
              <p>{t.bento.profile.desc}</p>
            </div>
            <div className="profile-art">
              <div className="profile-avatar-card">
                <div className="profile-avatar-bar">
                  <span className="profile-avatar-label">{t.bento.profile.avatarLabel}</span>
                  <span className="profile-avatar-status">{t.bento.profile.avatarStatus}</span>
                </div>
                <img
                  src="/screens/avatars.webp"
                  alt={t.bento.profile.avatarAlt}
                  width={525}
                  height={98}
                  loading="lazy"
                />
              </div>
              <div className="mini-chips profile-chips">
                {t.bento.profile.perks.map((perk) => (
                  <span key={perk}>
                    <Icon name="check" size={13} /> {perk}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
