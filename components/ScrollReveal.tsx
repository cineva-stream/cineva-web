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
  ".install-copy",
  ".install-term",
  ".faq-head",
  ".faq-item",
  ".cta-content",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

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
        threshold: 0.1,
        rootMargin: "0px 0px -32px 0px",
      }
    );

    // Tandai elemen yang sudah berada di viewport TERLEBIH DAHULU sebelum mengaktifkan class .has-reveal
    // agar tidak terjadi efek kedip (flash) saat halaman pertama kali dibuka di tablet/mobile.
    const vh = window.innerHeight;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.95) {
        markVisible(el);
      } else {
        observer.observe(el);
      }
    });

    root.classList.add("has-reveal");

    return () => {
      observer.disconnect();
      root.classList.remove("has-reveal");
    };
  }, []);

  return null;
}
