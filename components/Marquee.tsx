"use client";

import { useLanguage } from "@/lib/LanguageContext";
import {
  platformsRow1,
  platformsRow2,
  type StreamingPlatform,
} from "@/lib/content";

function PlatformCard({ item }: { item: StreamingPlatform }) {
  return (
    <div className="platform-item">
      <div className="platform-card">
        <img
          src={item.logo}
          alt={item.alt}
          className="platform-logo"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="platform-label">{item.name}</span>
    </div>
  );
}

function PlatformRow({
  items,
  reverse,
}: {
  items: StreamingPlatform[];
  reverse?: boolean;
}) {
  // Loop 4x to ensure smooth, gapless infinite animation on widescreen displays
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`platform-marq-row${reverse ? " rev" : ""}`}
      aria-hidden="true"
    >
      <div className="platform-marq-track">
        {loop.map((item, index) => (
          <PlatformCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const { t } = useLanguage();
  const mq = t.marquee;

  return (
    <section className="sec marquee-sec" aria-labelledby="platforms-title">
      <div className="wrap center-head">
        {/* Eyebrow with Cineva amber accent & lightning spark */}
        <div className="platform-eyebrow">
          <svg
            className="platform-eyebrow-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span>{mq.eyebrow}</span>
        </div>

        {/* Section Heading & Subtitle */}
        <h2 id="platforms-title" className="platform-title">
          {mq.title}
        </h2>
        <p className="sec-lead platform-lead">{mq.subtitle}</p>
      </div>

      {/* Dual Marquee Rows Running in Opposite Directions */}
      <div className="platform-marq-wrapper">
        <PlatformRow items={platformsRow1} />
        <PlatformRow items={platformsRow2} reverse />
      </div>

      <p className="sr-only">
        {mq.srTech} {platformsRow1.map((p) => p.name).join(", ")}.
      </p>
    </section>
  );
}
