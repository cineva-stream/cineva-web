"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/content";

export function FlagID({ size = 18 }: { size?: number }) {
  const h = Math.round((size * 14) / 20);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
      className="flag-svg"
    >
      <rect width="20" height="14" rx="3" fill="#F4F2EE" />
      <path d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V7H0V3Z" fill="#E11D48" />
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="13"
        rx="2.5"
        stroke="rgba(255,255,255,0.22)"
      />
    </svg>
  );
}

export function FlagUK({ size = 18 }: { size?: number }) {
  const h = Math.round((size * 14) / 20);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
      className="flag-svg"
    >
      <clipPath id="uk-clip">
        <rect width="20" height="14" rx="3" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="20" height="14" fill="#012169" />
        <path d="M0 0L20 14M20 0L0 14" stroke="#FFFFFF" strokeWidth="2.8" />
        <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.4" />
        <path d="M10 0V14M0 7H20" stroke="#FFFFFF" strokeWidth="4.4" />
        <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.6" />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="13"
        rx="2.5"
        stroke="rgba(255,255,255,0.22)"
      />
    </svg>
  );
}

const LANG_OPTIONS: { code: Locale; short: string; full: string }[] = [
  { code: "id", short: "ID", full: "Indonesia" },
  { code: "en", short: "EN", full: "English" },
];

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const current = LANG_OPTIONS.find((o) => o.code === lang) || LANG_OPTIONS[0];

  return (
    <div className="lang-switch-wrap" ref={wrapRef}>
      <button
        type="button"
        className="lang-switch-btn"
        data-open={open}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.langAria}
        onClick={() => setOpen((v) => !v)}
      >
        {current.code === "id" ? <FlagID size={19} /> : <FlagUK size={19} />}
        <span className="lang-switch-code">{current.short}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className="lang-switch-chevron"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className="lang-dropdown"
        data-open={open}
        role="listbox"
        aria-label={t.nav.langAria}
        aria-hidden={!open}
      >
        {LANG_OPTIONS.map((opt) => {
          const active = opt.code === lang;
          return (
            <button
              key={opt.code}
              type="button"
              role="option"
              aria-selected={active}
              className={`lang-dropdown-item${active ? " is-active" : ""}`}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setLang(opt.code);
                setOpen(false);
              }}
            >
              <span className="lang-dropdown-flag">
                {opt.code === "id" ? <FlagID size={20} /> : <FlagUK size={20} />}
              </span>
              <span className="lang-dropdown-name">{opt.full}</span>
              <span className="lang-dropdown-check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

