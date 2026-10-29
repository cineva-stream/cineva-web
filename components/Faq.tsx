"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { faq, contribute } from "@/lib/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="sec">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2>
            {faq.title1}
            <br />
            <span className="outline">{faq.title2}</span>
          </h2>
          <div className="faq-links">
            {contribute.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="pill">
                {c.label}
                <Icon name="external" size={13} />
              </a>
            ))}
          </div>
        </div>

        <div className="faq-list" role="region" aria-label="Pertanyaan yang sering diajukan">
          {faq.items.map((f, i) => {
            const isOpen = openIndex === i;
            const btnId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div className="faq-item" data-open={isOpen} key={f.q}>
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
                    <p>{f.a}</p>
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
