"use client";

import { useEffect, useState } from "react";

export type Stats = {
  stars: number | null;
  downloads: number | null;
};

const empty: Stats = { stars: null, downloads: null };
let cache: Promise<Stats> | null = null;

async function getJson(url: string) {
  try {
    const res = await fetch(url);
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

function load(): Promise<Stats> {
  if (!cache) {
    cache = Promise.all([getJson("/api/repo"), getJson("/api/downloads")]).then(([repo, dl]) => ({
      stars: typeof repo?.stars === "number" ? repo.stars : null,
      downloads: typeof dl?.total === "number" ? dl.total : null,
    }));
  }
  return cache;
}

/** Statistik repositori dibagi lintas komponen (satu kali fetch). */
export function useStats(): Stats {
  const [stats, setStats] = useState<Stats>(empty);
  useEffect(() => {
    let alive = true;
    load().then((s) => alive && setStats(s));
    return () => {
      alive = false;
    };
  }, []);
  return stats;
}

export const fmt = (n: number | null) => (n === null ? "-" : n.toLocaleString("id-ID"));
