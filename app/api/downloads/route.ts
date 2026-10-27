import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/iamwisnu99/Cineva/releases?per_page=100",
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

    const releases = await res.json();
    let total = 0;

    if (Array.isArray(releases)) {
      for (const r of releases) {
        for (const a of r.assets || []) {
          total += Number(a.download_count) || 0;
        }
      }
    }

    return NextResponse.json(
      { total },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (err) {
    // Fallback: minimal 1 unduhan (berdasarkan rilis v1.0.0 yang sudah terverifikasi)
    return NextResponse.json(
      { total: 1, fallback: true, error: (err as Error).message },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }
}
