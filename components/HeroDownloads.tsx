"use client";

import { useEffect, useState } from "react";
import { RELEASES_URL } from "@/lib/content";

export default function HeroDownloads() {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadDownloads() {
      try {
        const res = await fetch("/api/downloads", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.total === "number") {
            setDownloads(data.total);
          }
        }
      } catch {
        // Fallback tetap tampil tanpa crash
        if (isMounted) setDownloads(1);
      }
    }
    loadDownloads();
    return () => {
      isMounted = false;
    };
  }, []);

  const countDisplay = downloads !== null ? downloads.toLocaleString("en-US") : "1";
  const label = downloads === 1 ? "Download" : "Downloads";

  return (
    <div className="hero-downloads-container">
      <a
        href={RELEASES_URL}
        target="_blank"
        rel="noreferrer"
        className="hero-downloads-text"
        title="View all releases on GitHub"
      >
        <span className="count">{countDisplay}</span> {label} across all versions
      </a>
    </div>
  );
}
