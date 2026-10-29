"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useStats, fmt } from "@/lib/useStats";

export default function Stats() {
  const { lang, t } = useLanguage();
  const { stars, downloads } = useStats();

  return (
    <section className="stats" aria-label={t.stats.sectionAria}>
      <div className="wrap">
        <dl className="stats-row">
          {t.stats.items.map((s, i) => {
            const value =
              s.id === "downloads"
                ? fmt(downloads, lang)
                : s.id === "stars"
                  ? fmt(stars, lang)
                  : s.value;
            return (
              <div className="stat" key={i}>
                <dt>{s.label}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
