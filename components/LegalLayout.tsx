"use client";

import Link from "next/link";
import Footer from "./Footer";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLegalUi, type LegalDocument } from "@/lib/legal";
import { useLanguage } from "@/lib/LanguageContext";

interface LegalLayoutProps {
  doc: LegalDocument;
  currentSlug: "syarat-penggunaan" | "kebijakan-privasi" | "disclaimer";
}

export default function LegalLayout({ doc, currentSlug }: LegalLayoutProps) {
  const { lang } = useLanguage();
  const ui = getLegalUi(lang);
  const activeDoc = ui.docs[currentSlug] || doc;

  return (
    <div className="legal-page">
      {/* Top Header Navigation */}
      <header className="legal-header">
        <div className="wrap legal-header-inner">
          <Link href="/" className="brand" aria-label={ui.backHomeAria}>
            <img src="/icon.png" alt="Cineva" width={30} height={30} />
            <span>Cineva</span>
          </Link>

          <div className="legal-header-actions">
            <LanguageSwitcher />
            <span className="nav-divider" aria-hidden="true" />
            <Link href="/" className="legal-back-link">
              <span>←</span>
              <span>{ui.backHome}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Full-Screen Article (Markdown Format, Tanpa Card) */}
      <main className="legal-main">
        <div className="wrap">
          <div className="legal-article">
            {/* Navigasi Dokumen Antar Tab */}
            <nav className="legal-tabs-nav" aria-label={ui.tabsAria}>
              {ui.tabs.map((tab) => (
                <Link
                  key={tab.slug}
                  href={`/${tab.slug}`}
                  className={`legal-tab-btn ${currentSlug === tab.slug ? "active" : ""}`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>

            {/* Header Dokumen */}
            <header className="legal-doc-header">
              <span className="legal-kicker">{ui.kicker}</span>
              <h1 className="legal-title">{activeDoc.title}</h1>
              <p className="legal-subtitle">{activeDoc.subtitle}</p>

              {/* Callout Ringkasan / Peringatan */}
              <div className="legal-callout" role="note">
                <div className="legal-callout-indicator" />
                <p className="legal-callout-text">{activeDoc.calloutSummary}</p>
              </div>
            </header>

            {/* Isi Pasal / Sections dalam Format Rapi Seperti Markdown */}
            <div className="legal-body">
              {activeDoc.sections.map((section) => (
                <section key={section.number} className="legal-section-block">
                  <h2 className="legal-section-heading">
                    <span className="legal-section-badge">{section.number}</span>
                    <span>{section.title}</span>
                  </h2>

                  <p className="legal-section-text">{section.body}</p>

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="legal-section-bullets">
                      {section.bulletPoints.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Catatan Penutup */}
            <div className="legal-conclusion-box">
              <p>{activeDoc.concludingNotice}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
