import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_VERSION = "v1.1.4";
const DEFAULT_APK_NAME = "Cineva_v1.1.4-arm64-v8a.apk";
const DEFAULT_APK_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.1.4/Cineva_v1.1.4-arm64-v8a.apk";
const DEFAULT_APK_SIZE = "35.8 MB";

const DEFAULT_WINDOWS_NAME = "Cineva_setup_v1.1.4.exe";
const DEFAULT_WINDOWS_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.1.4/Cineva_setup_v1.1.4.exe";
const DEFAULT_WINDOWS_SIZE = "28.2 MB";

interface GitHubAsset {
  name?: string;
  size?: number;
  download_count?: number;
  browser_download_url?: string;
}

interface GitHubRelease {
  tag_name?: string;
  draft?: boolean;
  prerelease?: boolean;
  assets?: GitHubAsset[];
}

export type ArchitectureAbi = "arm64-v8a" | "armeabi-v7a" | "x86_64" | "universal";

export interface ApkVariant {
  abi: ArchitectureAbi;
  label: string;
  name: string;
  url: string;
  size: string;
  sizeBytes: number;
}

export interface WindowsVariant {
  name: string;
  url: string;
  size: string;
  sizeBytes: number;
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/cineva-stream/Cineva/releases?per_page=100",
      {
        headers: {
          "User-Agent": "Cineva-Web",
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: status ${res.status}`);
    }

    const releases: GitHubRelease[] = await res.json();
    let total = 0;
    let version = DEFAULT_VERSION;
    let apkName = DEFAULT_APK_NAME;
    let apkUrl = DEFAULT_APK_URL;
    let apkSize = DEFAULT_APK_SIZE;
    const apks: ApkVariant[] = [];
    let windows: WindowsVariant | null = {
      name: DEFAULT_WINDOWS_NAME,
      url: DEFAULT_WINDOWS_URL,
      size: DEFAULT_WINDOWS_SIZE,
      sizeBytes: 29620072,
    };

    if (Array.isArray(releases) && releases.length > 0) {
      for (const r of releases) {
        for (const a of r.assets || []) {
          total += Number(a.download_count) || 0;
        }
      }

      const latest =
        releases.find((r) => !r.draft && !r.prerelease) ||
        releases.find((r) => !r.draft) ||
        releases[0];

      if (latest) {
        if (typeof latest.tag_name === "string" && latest.tag_name.trim()) {
          version = latest.tag_name.trim();
        }

        const assets = Array.isArray(latest.assets) ? latest.assets : [];
        const apkAssets = assets.filter(
          (a) => typeof a.name === "string" && a.name.toLowerCase().endsWith(".apk")
        );
        const exeAsset = assets.find(
          (a) => typeof a.name === "string" && a.name.toLowerCase().endsWith(".exe")
        );

        // Helper to format real MB string from exact bytes
        const formatSize = (bytes?: number, fallback = "35.8 MB"): string => {
          if (typeof bytes === "number" && bytes > 0) {
            const mb = bytes / (1024 * 1024);
            return `${mb.toFixed(1)} MB`;
          }
          return fallback;
        };

        if (exeAsset && exeAsset.browser_download_url) {
          windows = {
            name: exeAsset.name || `Cineva_setup_${version}.exe`,
            url: exeAsset.browser_download_url,
            size: formatSize(exeAsset.size, "28.2 MB"),
            sizeBytes: exeAsset.size || 0,
          };
        }

        // Find specific architecture variants
        const arm64Asset = apkAssets.find(
          (a) => a.name?.toLowerCase().includes("arm64-v8a") || a.name?.toLowerCase().includes("arm64")
        );
        const armv7Asset = apkAssets.find(
          (a) => a.name?.toLowerCase().includes("armeabi-v7a") || a.name?.toLowerCase().includes("armv7")
        );
        const x86_64Asset = apkAssets.find((a) => a.name?.toLowerCase().includes("x86_64"));
        const universalAsset =
          apkAssets.find((a) => {
            const n = a.name?.toLowerCase() || "";
            return (
              !n.includes("arm64") &&
              !n.includes("armeabi") &&
              !n.includes("armv7") &&
              !n.includes("x86_64")
            );
          }) || apkAssets[0];

        if (arm64Asset && arm64Asset.browser_download_url) {
          apks.push({
            abi: "arm64-v8a",
            label: "ARM64 (64-bit)",
            name: arm64Asset.name || `Cineva_${version}-arm64-v8a.apk`,
            url: arm64Asset.browser_download_url,
            size: formatSize(arm64Asset.size, "35.8 MB"),
            sizeBytes: arm64Asset.size || 0,
          });
        }

        if (armv7Asset && armv7Asset.browser_download_url) {
          apks.push({
            abi: "armeabi-v7a",
            label: "ARMv7 (32-bit)",
            name: armv7Asset.name || `Cineva_${version}-armeabi-v7a.apk`,
            url: armv7Asset.browser_download_url,
            size: formatSize(armv7Asset.size, "32.8 MB"),
            sizeBytes: armv7Asset.size || 0,
          });
        }

        if (x86_64Asset && x86_64Asset.browser_download_url) {
          apks.push({
            abi: "x86_64",
            label: "x86_64 (Intel/AMD)",
            name: x86_64Asset.name || `Cineva_${version}-x86_64.apk`,
            url: x86_64Asset.browser_download_url,
            size: formatSize(x86_64Asset.size, "40.7 MB"),
            sizeBytes: x86_64Asset.size || 0,
          });
        }

        if (universalAsset && universalAsset.browser_download_url) {
          apks.push({
            abi: "universal",
            label: "Universal (Semua CPU)",
            name: universalAsset.name || `Cineva_${version}.apk`,
            url: universalAsset.browser_download_url,
            size: formatSize(universalAsset.size, "100.1 MB"),
            sizeBytes: universalAsset.size || 0,
          });
        }

        // Default primary APK for backward compatibility (prefer arm64 if available, else universal)
        const primaryAsset = arm64Asset || universalAsset || apkAssets[0];
        if (primaryAsset) {
          apkName = primaryAsset.name?.trim() || `Cineva_${version}-arm64-v8a.apk`;
          apkUrl =
            primaryAsset.browser_download_url?.trim() ||
            `https://github.com/cineva-stream/Cineva/releases/download/${version}/${apkName}`;
          apkSize = formatSize(primaryAsset.size, "35.8 MB");
        }
      }
    }

    return NextResponse.json(
      {
        total,
        version,
        apkName,
        apkUrl,
        apkSize,
        apks,
        windows,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return NextResponse.json(
      {
        total: null,
        version: DEFAULT_VERSION,
        apkName: DEFAULT_APK_NAME,
        apkUrl: DEFAULT_APK_URL,
        apkSize: DEFAULT_APK_SIZE,
        apks: [],
        windows: {
          name: DEFAULT_WINDOWS_NAME,
          url: DEFAULT_WINDOWS_URL,
          size: DEFAULT_WINDOWS_SIZE,
          sizeBytes: 29620072,
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }
}
