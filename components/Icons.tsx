import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  stream: <path d="M7 4.5l12 7.5-12 7.5z" />,
  download: <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />,
  file: <path d="M7 3h7l4 4v14H7zM14 3v4h4M10 13h5M10 17h5" />,
  subtitle: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 11h4M13 11h4M7 15h2M11 15h6" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10M10 18h4" />,
  player: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5 3.5-5 3.5z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  wrench: <path d="M14.5 6.5a4 4 0 005 5L20 12l-8 8a2.1 2.1 0 01-3-3l8-8zM8 16l1 1" />,
  warning: (
    <>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  bookmark: <path d="M6 4h12v17l-6-4-6 4z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />,
  external: <path d="M7 17L17 7M9 7h8v8" />,
  play: <path d="M7 4.5l12 7.5-12 7.5z" />,
  shield: <path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />,
  github: (
    <path d="M9 19c-4 1.2-4-2-6-2.5m12 5v-3.5a3 3 0 00-.8-2.3c2.6-.3 5.3-1.3 5.3-5.7a4.4 4.4 0 00-1.2-3.1 4.1 4.1 0 00-.1-3.1s-1-.3-3.2 1.2a11 11 0 00-5.8 0C6.9 4 5.9 4.3 5.9 4.3a4.1 4.1 0 00-.1 3.1A4.4 4.4 0 004.6 10.5c0 4.4 2.7 5.4 5.3 5.7A3 3 0 009 18.5V22" />
  ),
};

export function Icon({ name, size = 22 }: { name: keyof typeof paths | string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
