import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_VERSION = "v1.0.8";
const DEFAULT_APK_NAME = "Cineva_v1.0.8.apk";
const DEFAULT_APK_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.0.8/Cineva_v1.0.8.apk";
const DEFAULT_APK_SIZE = "~98 MB";

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
        const apkAsset =
          assets.find(
            (a) => typeof a.name === "string" && a.name.toLowerCase().endsWith(".apk")
          ) || assets[0];

        if (apkAsset) {
          if (typeof apkAsset.name === "string" && apkAsset.name.trim()) {
            apkName = apkAsset.name.trim();
          } else {
            apkName = `Cineva_${version}.apk`;
          }

          if (
            typeof apkAsset.browser_download_url === "string" &&
            apkAsset.browser_download_url.trim()
          ) {
            apkUrl = apkAsset.browser_download_url.trim();
          } else {
            apkUrl = `https://github.com/cineva-stream/Cineva/releases/download/${version}/${apkName}`;
          }

          if (typeof apkAsset.size === "number" && apkAsset.size > 0) {
            const mb = Math.max(1, Math.round(apkAsset.size / (1024 * 1024)));
            apkSize = `~${mb} MB`;
          }
        } else {
          apkName = `Cineva_${version}.apk`;
          apkUrl = `https://github.com/cineva-stream/Cineva/releases/download/${version}/${apkName}`;
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
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        total: 1,
        version: DEFAULT_VERSION,
        apkName: DEFAULT_APK_NAME,
        apkUrl: DEFAULT_APK_URL,
        apkSize: DEFAULT_APK_SIZE,
        fallback: true,
        error: (err as Error).message,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }
}
