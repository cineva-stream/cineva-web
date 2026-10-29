"use client";

import { useEffect } from "react";

export default function DesignGuard() {
  useEffect(() => {
    // 1. Deteksi Headless Browser / Automated URL-to-Design Scraper secara silent
    const detectAutomatedCloner = (): boolean => {
      const w = window as unknown as Record<string, unknown>;
      const nav = window.navigator;
      const ua = (nav.userAgent || "").toLowerCase();

      if (nav.webdriver === true) return true;
      if (
        ua.includes("headlesschrome") ||
        ua.includes("phantomjs") ||
        ua.includes("electron") ||
        ua.includes("slimerjs") ||
        ua.includes("html2design")
      ) {
        return true;
      }
      if (
        "_phantom" in w ||
        "__nightmare" in w ||
        "callPhantom" in w ||
        "__pwInitScripts" in w ||
        "__playwright" in w ||
        "domAutomation" in w ||
        "domAutomationController" in w
      ) {
        return true;
      }
      return false;
    };

    // 2. Anti-Iframe Cloner (Mencegah platform copy-design merender web di dalam iframe)
    let isFramed = false;
    try {
      isFramed = window.self !== window.top;
    } catch {
      isFramed = true;
    }

    if (isFramed || detectAutomatedCloner()) {
      // Kosongkan struktur DOM & stylesheet secara silent agar tool cloner gagal mengambil desain
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach((el) => el.remove());
      document.body.innerHTML = "";
      return;
    }

    // 3. Blokir Drag & Drop aset visual (Gambar, Poster, Mockup, SVG) secara silent
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 4. Blokir Penyalinan Struktur DOM secara silent (Tombol Salin pada CodeBlock tetap berfungsi)
    const onCopyOrCut = (e: ClipboardEvent) => {
      e.preventDefault();
      window.getSelection()?.removeAllRanges();
    };

    // 5. Blokir Save Webpage Complete (Ctrl+S), View Source (Ctrl+U), Print/PDF (Ctrl+P), Select All (Ctrl+A) secara silent
    //    (F12, Inspect Element, dan Responsive Mobile Mode tetap diizinkan)
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrlOrCmd = e.ctrlKey || e.metaKey;

      if (ctrlOrCmd && !e.shiftKey && !e.altKey && ["s", "u", "p", "a", "c", "x"].includes(key)) {
        e.preventDefault();
        window.getSelection()?.removeAllRanges();
      }
    };

    window.addEventListener("dragstart", onDragStart, { capture: true });
    window.addEventListener("drop", onDragStart, { capture: true });
    window.addEventListener("copy", onCopyOrCut, { capture: true });
    window.addEventListener("cut", onCopyOrCut, { capture: true });
    window.addEventListener("keydown", onKeyDown, { capture: true });

    return () => {
      window.removeEventListener("dragstart", onDragStart, { capture: true });
      window.removeEventListener("drop", onDragStart, { capture: true });
      window.removeEventListener("copy", onCopyOrCut, { capture: true });
      window.removeEventListener("cut", onCopyOrCut, { capture: true });
      window.removeEventListener("keydown", onKeyDown, { capture: true });
    };
  }, []);

  return null;
}
