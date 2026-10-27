"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { REPO_URL, APK_DOWNLOAD_URL } from "@/lib/content";

const links = [
  { href: "#tampilan", label: "Tampilan" },
  { href: "#fitur", label: "Fitur" },
  { href: "#pemutar", label: "Pemutar" },
  { href: "#pasang", label: "Pasang" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu saat layar diubah ukurannya ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#" className="brand" aria-label="Cineva, ke atas" onClick={() => setOpen(false)}>
          <img src="/icon.png" alt="" />
          Cineva
        </a>

        {/* Navigasi Desktop */}
        <nav className="nav-links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href={REPO_URL} target="_blank" rel="noreferrer">
            <Icon name="github" size={17} />
            GitHub
          </a>
          <a className="btn btn-primary btn-sm" href={APK_DOWNLOAD_URL} target="_blank" rel="noreferrer">
            Unduh APK
          </a>
        </div>

        {/* Tombol Hamburger Mobile (Tanpa Background & Border) */}
        <button
          className="menu-btn"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile Saat Hamburger Ditekan */}
      <div className={`nav-mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-mobile-content">
          <nav className="nav-mobile-links" aria-label="Navigasi menu mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-mobile-divider" />

          {/* Tombol Aksi di Menu Mobile: Unduh APK dan GitHub */}
          <div className="nav-mobile-cta">
            <a
              className="btn btn-primary btn-mobile-cta"
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <Icon name="download" size={19} />
              Unduh APK
            </a>
            <a
              className="btn btn-ghost btn-mobile-cta"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <Icon name="github" size={19} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
