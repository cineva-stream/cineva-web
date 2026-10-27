import Link from "next/link";
import { credit, disclaimer, REPO_URL, RELEASES_URL, LICENSE_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-brand-wrap">
            <Link href="/" className="brand">
              <img src="/icon.png" alt="" />
              Cineva
            </Link>
            <p className="footer-subtext">
              Streaming & unduhan film dan serial TV modern berbasis Flutter untuk Android.
            </p>
          </div>

          {/* Navlink 2 Kolom: Tautan Proyek & Dokumen Legalitas */}
          <nav className="footer-nav-2col" aria-label="Tautan navigasi footer">
            <div className="footer-col">
              <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub</a>
              <a href={RELEASES_URL} target="_blank" rel="noreferrer">Releases</a>
              <a href={LICENSE_URL} target="_blank" rel="noreferrer">Lisensi MIT</a>
            </div>

            <div className="footer-col">
              <Link href="/syarat-penggunaan">Syarat Penggunaan</Link>
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </nav>
        </div>

        <p className="disclaimer">{disclaimer}</p>
        <p className="footer-bottom">© 2026 Cineva Group · {credit}</p>
      </div>
    </footer>
  );
}
