"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";

export default function Faq() {
  const { t } = useLanguage();
  const { apkName } = useStats();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="sec">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2>
            {t.faq.title1}
            <br />
            <span className="outline">{t.faq.title2}</span>
          </h2>
          <div className="faq-links">
            {t.faq.contribute.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="pill">
                {c.label}
                <Icon name="external" size={13} />
              </a>
            ))}
          </div>
        </div>

        <div className="faq-list" role="region" aria-label={t.faq.regionAria}>
          {t.faq.items.map((f, i) => {
            const isOpen = openIndex === i;
            const btnId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;
            const answerText = f.a.replace("{apkName}", apkName);

            return (
              <div className="faq-item" data-open={isOpen} key={i}>
                <button
                  type="button"
                  id={btnId}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(i)}
                >
                  <span className="faq-q">{f.q}</span>
                  <span className="faq-ico" aria-hidden="true">
                    <Icon name="plus" size={16} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!isOpen}
                  className="faq-panel"
                >
                  <div className="faq-panel-inner">
                    <p>{answerText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
