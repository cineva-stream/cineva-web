import { NextRequest, NextResponse } from "next/server";

// Daftar bot resmi (SEO, Social Preview, Performance Audit) yang tetap diizinkan penuh
const ALLOWED_BOTS = [
  "googlebot",
  "google-inspectiontool",
  "adsbot-google",
  "apis-google",
  "mediapartners-google",
  "bingbot",
  "msnbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandex",
  "applebot",
  "twitterbot",
  "facebookexternalhit",
  "facebot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "discordbot",
  "slackbot",
  "pinterest",
  "vkshare",
  "lighthouse",
  "pagespeed",
  "gtmetrix",
  "vercel",
];

// Daftar User-Agent platform URL-to-Design, Web Cloner, AI Scraper & Headless Extractor
const CLONER_SIGNATURES = [
  "httrack",
  "webcopy",
  "cyotek",
  "sitesucker",
  "teleport",
  "webstripper",
  "webzip",
  "offline explorer",
  "website extractor",
  "saveweb2zip",
  "singlefile",
  "firecrawl",
  "jina",
  "crawl4ai",
  "diffbot",
  "scrapingbee",
  "scraperapi",
  "zenrows",
  "brightdata",
  "browserless",
  "headlesschrome",
  "phantomjs",
  "nightmare",
  "puppeteer",
  "playwright",
  "selenium",
  "html2design",
  "html.to.design",
  "builder.io",
  "locofy",
  "teleporthq",
  "anima",
  "gptbot",
  "chatgpt-user",
  "oai-searchbot",
  "claudebot",
  "anthropic-ai",
  "perplexitybot",
  "cohere-ai",
  "bytespider",
  "ccbot",
  "omgilibot",
  "python-requests",
  "python-urllib",
  "aiohttp",
  "httpx",
  "scrapy",
  "go-http-client",
  "colly",
  "java/",
  "okhttp",
  "libwww-perl",
  "wget",
  "curl/",
];

const ALLOWED_HOSTS = [
  "cineva.primadev.id",
  "localhost",
  "127.0.0.1",
  ".vercel.app",
];

function isAllowedOriginOrReferer(headerValue: string | null, currentHost: string): boolean {
  if (!headerValue) return true;
  try {
    const url = new URL(headerValue);
    const hostname = url.hostname.toLowerCase();
    if (hostname === currentHost.split(":")[0].toLowerCase()) return true;
    return ALLOWED_HOSTS.some((h) =>
      h.startsWith(".") ? hostname.endsWith(h) : hostname === h
    );
  } catch {
    return false;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  const host = req.headers.get("host") || "";
  const referer = req.headers.get("referer");
  const origin = req.headers.get("origin");

  // 1. Izinkan penuh bot SEO & Social Preview resmi
  if (ALLOWED_BOTS.some((bot) => ua.includes(bot))) {
    return NextResponse.next();
  }

  // 2. Proteksi aset CSS, Font, dan Gambar dari pengambilan lintas domain (Remote Cloner / Proxy)
  const isProtectedAsset =
    pathname.startsWith("/_next/static/") ||
    pathname.startsWith("/screens/") ||
    pathname.startsWith("/posters/") ||
    pathname.startsWith("/fonts/");

  if (isProtectedAsset) {
    if (
      !isAllowedOriginOrReferer(referer, host) ||
      !isAllowedOriginOrReferer(origin, host)
    ) {
      return new NextResponse(null, { status: 403 });
    }
  }

  // 3. Deteksi Platform Copy-Design / Web Cloner / Scraper otomatis (Silent Decoy Response)
  const isClonerBot =
    !ua ||
    CLONER_SIGNATURES.some((sig) => ua.includes(sig)) ||
    req.headers.has("x-cors-grida-api-key") ||
    req.headers.has("x-prerender-token") ||
    req.headers.has("x-scraper-url");

  if (isClonerBot && !pathname.startsWith("/api/")) {
    // Kembalikan halaman decoy kosong secara silent agar tool cloner tidak mendapatkan struktur desain
    const decoyHtml = `<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cineva</title></head><body style="margin:0;background:#0a0a0c;"></body></html>`;
    return new NextResponse(decoyHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/image|favicon.ico|favicon.svg|favicon-96x96.png|apple-touch-icon.png|og-image.png|opengraph-image.png|icon.png|site.webmanifest|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)",
  ],
};

