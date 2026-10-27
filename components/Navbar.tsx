"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { REPO_URL, RELEASES_URL } from "@/lib/content";

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

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#" className="brand" aria-label="Cineva, ke atas">
          <img src="/icon.png" alt="" />
          Cineva
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href={REPO_URL} target="_blank" rel="noreferrer">
            <Icon name="github" size={17} />
            GitHub
          </a>
          <a className="btn btn-primary btn-sm" href="https://github.com/iamwisnu99/Cineva/releases/download/v1.0.0/Cineva_v1.0.0.apk" target="_blank" rel="noreferrer">
            Unduh APK
          </a>
        </div>
        <button
          className="menu-btn"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
