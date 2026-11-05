"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  "[data-reveal]",
  ".sec-head",
  ".center-head",
  ".stat",
  ".reasons",
  ".tile",
  ".player-copy",
  ".player-shot",
  ".multiplatform-copy",
  ".multiplatform-visual",
  ".install-copy",
  ".install-term",
  ".faq-head",
  ".faq-item",
  ".cta-content",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    const markVisible = (el: Element) => {
      el.classList.add("is-visible");
      el.setAttribute("data-visible", "true");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    // Observasi semua elemen dengan IntersectionObserver
    elements.forEach((el) => observer.observe(el));

    // MutationObserver untuk menangkap elemen dinamis yang di-mount setelah inisialisasi awal
    const mutObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(REVEAL_SELECTOR)) {
              observer.observe(node);
            }
            node.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((child) => {
              observer.observe(child);
            });
          }
        });
      }
    });

    mutObserver.observe(document.body, { childList: true, subtree: true });

    // Aktifkan class .has-reveal pada animation frame berikutnya agar animasi scroll reveal berjalan mulus
    const rafId = requestAnimationFrame(() => {
      root.classList.add("has-reveal");
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      mutObserver.disconnect();
      root.classList.remove("has-reveal");
    };
  }, []);

  return null;
}
