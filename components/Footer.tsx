"use client";

import Link from "next/link";
import { REPO_URL, RELEASES_URL, ISSUES_URL, LICENSE_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-brand-wrap">
            <Link href="/" className="brand">
              <img src="/icon.png" alt="" width={32} height={32} />
              Cineva
            </Link>
            <p className="footer-subtext">{t.footer.subtext}</p>
          </div>

          <nav className="footer-cols" aria-label={t.footer.navAria}>
            <div className="footer-col">
              <h4>{t.footer.colExplore}</h4>
              {t.nav.links.map((l) => (
                <a key={l.href} href={`/${l.href}`}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="footer-col">
              <h4>{t.footer.colProject}</h4>
              <a href={REPO_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={RELEASES_URL} target="_blank" rel="noreferrer">
                Releases
              </a>
              <a href={ISSUES_URL} target="_blank" rel="noreferrer">
                Issues
              </a>
              <a href={LICENSE_URL} target="_blank" rel="noreferrer">
                {t.footer.licenseLabel}
              </a>
            </div>
            <div className="footer-col">
              <h4>{t.footer.colLegal}</h4>
              <Link href="/syarat-penggunaan">{t.footer.termsLabel}</Link>
              <Link href="/kebijakan-privasi">{t.footer.privacyLabel}</Link>
              <Link href="/disclaimer">{t.footer.disclaimerLabel}</Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">{t.footer.disclaimer}</p>
          <p className="copyright">
            © 2026 Cineva Group. {t.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
