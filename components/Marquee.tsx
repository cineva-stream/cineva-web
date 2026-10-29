"use client";

import { stack } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

function Row({ items, reverse, outline }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`marq${reverse ? " rev" : ""}${outline ? " is-outline" : ""}`} aria-hidden="true">
      <div className="marq-track">
        {loop.map((t, i) => (
          <span key={i} className="marq-item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const { t } = useLanguage();
  const categories = t.marquee.categories;

  return (
    <section className="sec marquee-sec" aria-labelledby="kategori-title">
      <div className="wrap center-head">
        <h2 id="kategori-title">
          {t.marquee.title1} <span className="outline">{t.marquee.title2}</span>
        </h2>
        <p className="sec-lead">
          {t.marquee.leadPrefix} {categories.slice(0, 5).join(", ")}, {t.marquee.leadSuffix}
        </p>
      </div>

      <div className="marq-stack">
        <Row items={categories} />
        <Row items={stack} reverse outline />
      </div>
      <p className="sr-only">
        {t.marquee.srTech} {stack.join(", ")}.
      </p>
    </section>
  );
}
