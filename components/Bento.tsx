"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { discover, subtitleLangs, watchlistRows, posterWall, maintenance, player } from "@/lib/content";

const row1Posters = [...posterWall, ...posterWall, ...posterWall, ...posterWall];
const shiftedWall = [...posterWall.slice(4), ...posterWall.slice(0, 4)];
const row2Posters = [...shiftedWall, ...shiftedWall, ...shiftedWall, ...shiftedWall];
const langCodes = ["ID", "EN", "ES", "JA", "KO"];

export default function Bento() {
  const [activeGenre, setActiveGenre] = useState(0);
  const [activeLang, setActiveLang] = useState(0);

  return (
    <section id="fitur" className="sec">
      <div className="wrap">
        <div className="sec-head row" data-reveal="up">
          <div>
            <h2>
              Seluruh tontonanmu, <span className="outline">tertata rapi.</span>
            </h2>
          </div>
          <p className="sec-lead">
            Cineva bukan sekadar katalog. Di sinilah kamu menemukan, menonton, menyimpan, dan kembali ke cerita favoritmu.
          </p>
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
                  <span className="mini-search-text">{discover.placeholder}</span>
                  <span className="mini-search-caret" aria-hidden="true" />
                  <span className="mini-search-kbd">Instan</span>
                </div>
                <div className="mini-chips" role="group" aria-label="Filter genre">
                  {discover.chips.map((c, i) => (
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
                <span className="tile-tag">Eksplorasi &amp; Filter</span>
              </div>
              <h3>Temukan tanpa scroll tanpa ujung.</h3>
              <p>Tren, rating, dan genre dari Indonesia, Anime, Hollywood, Korea, sampai Bollywood. Riwayat pencarian muncul instan.</p>
            </div>
          </article>

          {/* Pemutar */}
          <article className="tile t-player" data-reveal="up" data-delay="2">
            <div className="tile-art player-art">
              <div className="mini-player-stage">
                <div className="mini-player-frame">
                  <img src={player.src} alt={player.alt} width={1200} height={527} loading="lazy" />
                </div>
              </div>
            </div>
            <div className="tile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="player" size={18} />
                </span>
                <span className="tile-tag">Media Kit Engine</span>
              </div>
              <h3>Pemutar yang bicara bahasamu.</h3>
              <p>Subtitle multi-bahasa, kecepatan 0.5x - 2.0x, dan Next Episode otomatis tanpa jeda.</p>
            </div>
          </article>

          {/* Unduhan - Under Maintenance */}
          <article className="tile t-maint" aria-label="Unduhan: Under Maintenance" data-reveal="up" data-delay="1">
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
                  <span>Streaming online berjalan normal</span>
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
                  {maintenance.badge}
                </span>
              </div>
              <h3>{maintenance.title}</h3>
              <p>{maintenance.body}</p>
            </div>
          </article>

          {/* Watchlist */}
          <article className="tile t-watch" data-reveal="up" data-delay="2">
            <div className="tile-art list-art watch-art">
              {watchlistRows.map((r, idx) => (
                <div className="row-item" key={r.title} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <img src={r.src} alt="" width={64} height={96} loading="lazy" />
                  <div className="row-info">
                    <b>{r.title}</b>
                    <span>{r.meta} · Tersimpan</span>
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
                <span className="tile-tag">Penyimpanan Lokal</span>
              </div>
              <h3>Simpan di sini, lanjut di mana saja.</h3>
              <p>Watchlist tersimpan di ponselmu dan tetap bisa dibuka kapan pun saat offline.</p>
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
                      <span className="lang-auto-tag">Auto</span>
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
                <span className="tile-tag">OpenSubtitles + Auto Translate</span>
              </div>
              <h3>Subtitle selalu ada.</h3>
              <p>Tidak ada di database? Diterjemahkan otomatis ke bahasa utamamu.</p>
            </div>
          </article>

          {/* Profil */}
          <article className="tile t-profile" data-reveal="up" data-delay="1">
            <div className="profile-copy">
              <div className="tile-head">
                <span className="tile-ico">
                  <Icon name="user" size={18} />
                </span>
                <span className="tile-tag">Privasi Penuh</span>
              </div>
              <h3>Profil lokal, tanpa akun.</h3>
              <p>
                Pilih avatar karakter sinema dan mulai menonton. Tidak ada registrasi, email, atau nomor telepon. Datamu
                tinggal sepenuhnya di ponselmu.
              </p>
            </div>
            <div className="profile-art">
              <div className="profile-avatar-card">
                <div className="profile-avatar-bar">
                  <span className="profile-avatar-label">Pilih Avatar Karakter</span>
                  <span className="profile-avatar-status">100% Lokal di Perangkat</span>
                </div>
                <img
                  src="/screens/avatars.webp"
                  alt="Pilihan avatar sinema di profil Cineva"
                  width={525}
                  height={98}
                  loading="lazy"
                />
              </div>
              <div className="mini-chips profile-chips">
                <span>
                  <Icon name="check" size={13} /> Tanpa email
                </span>
                <span>
                  <Icon name="check" size={13} /> Tanpa nomor telepon
                </span>
                <span>
                  <Icon name="check" size={13} /> Tanpa registrasi
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
