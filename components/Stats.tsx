"use client";

import { stats } from "@/lib/content";
import { useStats, fmt } from "@/lib/useStats";

export default function Stats() {
  const { stars, downloads } = useStats();

  return (
    <section className="stats" aria-label="Statistik Cineva">
      <div className="wrap">
        <dl className="stats-row">
          {stats.map((s) => {
            const value =
              s.id === "downloads" ? fmt(downloads) : s.id === "stars" ? fmt(stars) : s.value;
            return (
              <div className="stat" key={s.label}>
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
