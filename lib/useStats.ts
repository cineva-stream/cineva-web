"use client";

import { useEffect, useState } from "react";
import { APK_DOWNLOAD_URL } from "./content";

export type ArchitectureAbi = "arm64-v8a" | "armeabi-v7a" | "x86_64" | "universal";

export type ApkVariant = {
  abi: ArchitectureAbi;
  label: string;
  name: string;
  url: string;
  size: string;
  sizeBytes: number;
};

export type Stats = {
  stars: number | null;
  downloads: number | null;
  version: string;
  apkName: string;
  apkUrl: string;
  apkSize: string;
  apks: ApkVariant[];
};

const DEFAULT_STATS: Stats = {
  stars: null,
  downloads: null,
  version: "v1.1.1",
  apkName: "Cineva_v1.1.1.apk",
  apkUrl: APK_DOWNLOAD_URL,
  apkSize: "~38 MB",
  apks: [],
};

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
      version: typeof dl?.version === "string" && dl.version ? dl.version : DEFAULT_STATS.version,
      apkName: typeof dl?.apkName === "string" && dl.apkName ? dl.apkName : DEFAULT_STATS.apkName,
      apkUrl: typeof dl?.apkUrl === "string" && dl.apkUrl ? dl.apkUrl : DEFAULT_STATS.apkUrl,
      apkSize: typeof dl?.apkSize === "string" && dl.apkSize ? dl.apkSize : DEFAULT_STATS.apkSize,
      apks: Array.isArray(dl?.apks) ? dl.apks : [],
    }));
  }
  return cache;
}

/** Statistik & info rilis repositori dibagi lintas komponen (satu kali fetch). */
export function useStats(): Stats {
  const [stats, setStats] = useState<Stats>(DEFAULT_STATS);
  useEffect(() => {
    let alive = true;
    load().then((s) => alive && setStats(s));
    return () => {
      alive = false;
    };
  }, []);
  return stats;
}

export const fmt = (n: number | null, lang: "id" | "en" = "id") =>
  n === null ? "-" : n.toLocaleString(lang === "en" ? "en-US" : "id-ID");
