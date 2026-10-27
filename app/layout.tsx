import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cineva.primadev.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cineva - Nonton Film & Serial TV Favorit Tanpa Batas",
    template: "%s | Cineva",
  },
  description:
    "Unduh Cineva APK - Aplikasi streaming & unduhan film dan serial TV modern berbasis Flutter untuk Android. Kualitas HD & 4K, streaming P2P super cepat, subtitle Indonesia otomatis, tanpa iklan, dan 100% gratis.",
  applicationName: "Cineva",
  authors: [{ name: "Wisnu", url: "https://github.com/iamwisnu99" }],
  generator: "Next.js",
  keywords: [
    "Cineva",
    "Cineva APK",
    "Cineva Stream",
    "Download Cineva",
    "Unduh Cineva APK",
    "Aplikasi Nonton Film Gratis",
    "Streaming Film Sub Indo",
    "Nonton Serial TV Gratis",
    "Aplikasi Film Android",
    "Streaming Film Tanpa Iklan",
    "Nonton Film HD",
    "Streaming P2P",
    "Film Subtitle Indonesia",
    "Aplikasi Flutter Streaming",
    "Cineva Android",
    "cineva.primadev.id",
  ],
  creator: "Wisnu (iamwisnu99)",
  publisher: "Primadev",
  category: "entertainment",
  classification: "Entertainment, Video Streaming, Android Application",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Cineva",
    title: "Cineva - Nonton Film & Serial TV Favorit Tanpa Batas",
    description:
      "Aplikasi streaming dan pengunduh film & serial TV modern untuk Android. Kualitas HD & 4K, subtitle Indonesia otomatis, bebas iklan, dan 100% gratis. Unduh APK sekarang!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cineva - Nonton Film & Serial TV Favorit Tanpa Batas di Android",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cineva - Nonton Film & Serial TV Favorit Tanpa Batas",
    description:
      "Aplikasi streaming dan pengunduh film & serial TV modern untuk Android. Kualitas HD & 4K, subtitle otomatis, bebas iklan, dan 100% gratis.",
    images: ["/og-image.png"],
    creator: "@iamwisnu99",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cineva",
  url: "https://cineva.primadev.id",
  description: "Situs resmi Cineva - Aplikasi streaming dan unduhan film & serial TV Android tanpa iklan.",
  inLanguage: "id-ID",
  publisher: {
    "@type": "Organization",
    name: "Cineva",
    url: "https://cineva.primadev.id",
    logo: "https://cineva.primadev.id/icon.png",
  },
};

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cineva",
  operatingSystem: "Android 5.0+",
  applicationCategory: "EntertainmentApplication",
  applicationSubCategory: "Video Streaming & Downloader",
  description:
    "Aplikasi streaming dan pengunduh Film & Serial TV modern berbasis Flutter untuk Android. Pengalaman sinematik premium: kualitas Ultra HD, streaming P2P super cepat, subtitle bahasa Indonesia otomatis, tanpa iklan, dan 100% gratis.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  downloadUrl: "https://cineva.primadev.id/#unduh",
  installUrl: "https://github.com/iamwisnu99/Cineva/releases",
  screenshot: "https://cineva.primadev.id/screens/home.webp",
  softwareVersion: "1.0.0",
  fileSize: "35MB",
  author: {
    "@type": "Person",
    name: "Wisnu",
    url: "https://github.com/iamwisnu99",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1280",
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cineva",
  url: "https://cineva.primadev.id",
  logo: "https://cineva.primadev.id/icon.png",
  sameAs: ["https://github.com/iamwisnu99/Cineva"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
