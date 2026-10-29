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
      <mask id="uk-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="14">
        <rect width="20" height="14" rx="3" fill="#FFFFFF" />
      </mask>
      <g mask="url(#uk-mask)">
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

export function FlagUS({ size = 18 }: { size?: number }) {
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
      <mask id="us-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="14">
        <rect width="20" height="14" rx="3" fill="#FFFFFF" />
      </mask>
      <g mask="url(#us-mask)">
        <rect width="20" height="14" fill="#F4F2EE" />
        <path
          d="M0 0H20V2H0V0ZM0 4H20V6H0V4ZM0 8H20V10H0V8ZM0 12H20V14H0V12Z"
          fill="#B22234"
        />
        <rect width="9.5" height="8" fill="#3C3B6E" />
        <circle cx="2.3" cy="2" r="0.65" fill="#FFFFFF" />
        <circle cx="4.8" cy="2" r="0.65" fill="#FFFFFF" />
        <circle cx="7.3" cy="2" r="0.65" fill="#FFFFFF" />
        <circle cx="3.55" cy="4" r="0.65" fill="#FFFFFF" />
        <circle cx="6.05" cy="4" r="0.65" fill="#FFFFFF" />
        <circle cx="2.3" cy="6" r="0.65" fill="#FFFFFF" />
        <circle cx="4.8" cy="6" r="0.65" fill="#FFFFFF" />
        <circle cx="7.3" cy="6" r="0.65" fill="#FFFFFF" />
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

export function FlagES({ size = 18 }: { size?: number }) {
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
      <rect width="20" height="14" rx="3" fill="#FFC400" />
      <path d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V3.6H0V3Z" fill="#C60B1E" />
      <path d="M0 10.4H20V11C20 12.6569 18.6569 14 17 14H3C1.34315 14 0 12.6569 0 11V10.4Z" fill="#C60B1E" />
      <rect x="4.5" y="5.2" width="2.2" height="3.6" rx="1" fill="#C60B1E" opacity="0.85" />
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

export function FlagJP({ size = 18 }: { size?: number }) {
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
      <circle cx="10" cy="7" r="3.8" fill="#BC002D" />
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

export function FlagKR({ size = 18 }: { size?: number }) {
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
      <circle cx="10" cy="7" r="3.4" fill="#CD2E3A" />
      <path
        d="M6.6 7C6.6 8.87777 8.12223 10.4 10 10.4C11.8778 10.4 13.4 8.87777 13.4 7C13.4 6.06 12.64 5.3 11.7 5.3C10.76 5.3 10 6.06 10 7C10 7.94 9.24 8.7 8.3 8.7C7.36 8.7 6.6 7.94 6.6 7Z"
        fill="#0047A0"
      />
      <path d="M4.2 3.2L5.6 2.1M4.7 3.9L6.1 2.8" stroke="#18181D" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M14.4 2.1L15.8 3.2M13.9 2.8L15.3 3.9" stroke="#18181D" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M4.2 10.8L5.6 11.9M4.7 10.1L6.1 11.2" stroke="#18181D" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M14.4 11.9L15.8 10.8M13.9 11.2L15.3 10.1" stroke="#18181D" strokeWidth="0.75" strokeLinecap="round" />
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

