"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import LanguageSwitcher, { FlagID, FlagUK } from "./LanguageSwitcher";
import { REPO_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { apkUrl } = useStats();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#" className="brand" aria-label={t.nav.brandAria} onClick={() => setOpen(false)}>
            <img src="/icon.png" alt="" width={32} height={32} />
            Cineva
          </a>

          <nav className="nav-pills" aria-label={t.nav.mainNavAria}>
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href} className="pill">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <LanguageSwitcher />
            <span className="nav-divider" aria-hidden="true" />
            <a className="gh-pill" href={REPO_URL} target="_blank" rel="noreferrer" aria-label="GitHub Cineva">
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
            <a className="btn btn-light btn-sm" href={apkUrl} target="_blank" rel="noreferrer">
              <Icon name="download" size={16} />
              {t.nav.download}
            </a>
          </div>

          <button
            className="menu-btn"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`nav-mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="nav-mobile-content">
          <nav className="nav-mobile-links" aria-label={t.nav.mobileNavAria}>
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-mobile-lang" role="group" aria-label={t.nav.langAria}>
            <button
              type="button"
              className={`nav-mobile-lang-btn${lang === "id" ? " is-active" : ""}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setLang("id")}
            >
              <FlagID size={20} />
              <span>Indonesia</span>
            </button>
            <button
              type="button"
              className={`nav-mobile-lang-btn${lang === "en" ? " is-active" : ""}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setLang("en")}
            >
              <FlagUK size={20} />
              <span>English</span>
            </button>
          </div>

          <div className="nav-mobile-cta">
            <a
              className="btn btn-primary btn-block"
              href={apkUrl}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <Icon name="download" size={19} />
              {t.nav.downloadApk}
            </a>
            <a
              className="btn btn-ghost btn-block"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <Icon name="github" size={19} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
