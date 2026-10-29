import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CACHE = { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=900" };

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/repos/iamwisnu99/Cineva", {
      headers: { "User-Agent": "Cineva-Web", Accept: "application/vnd.github.v3+json" },
      next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 300 },
    });
    if (!res.ok) throw new Error(`GitHub API error: status ${res.status}`);
    const repo = await res.json();
    return NextResponse.json(
      {
        stars: Number(repo.stargazers_count) || 0,
        forks: Number(repo.forks_count) || 0,
      },
      { headers: CACHE }
    );
  } catch (err) {
    // Fallback: situs tetap tampil tanpa angka
    return NextResponse.json(
      { stars: null, forks: null, fallback: true, error: (err as Error).message },
      { headers: CACHE }
    );
  }
}
