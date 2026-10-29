import Link from "next/link";
import { credit, disclaimer, REPO_URL, RELEASES_URL, ISSUES_URL, LICENSE_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-brand-wrap">
            <Link href="/" className="brand">
              <img src="/icon.png" alt="" width={32} height={32} />
              Cineva
            </Link>
            <p className="footer-subtext">Nonton film dan serial TV favoritmu, gratis dan tanpa iklan.</p>
          </div>

          <nav className="footer-cols" aria-label="Tautan footer">
            <div className="footer-col">
              <h4>Jelajahi</h4>
              <a href="/#alasan">Alasan</a>
              <a href="/#fitur">Fitur</a>
              <a href="/#tur">Tur</a>
              <a href="/#pasang">Pasang</a>
              <a href="/#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Proyek</h4>
              <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub</a>
              <a href={RELEASES_URL} target="_blank" rel="noreferrer">Releases</a>
              <a href={ISSUES_URL} target="_blank" rel="noreferrer">Issues</a>
              <a href={LICENSE_URL} target="_blank" rel="noreferrer">Lisensi GPL-3.0</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link href="/syarat-penggunaan">Syarat Penggunaan</Link>
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">{disclaimer}</p>
          <p className="copyright">© 2026 Cineva Group. {credit}</p>
        </div>
      </div>
    </footer>
  );
}
