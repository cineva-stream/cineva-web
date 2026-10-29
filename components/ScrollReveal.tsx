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
    root.classList.add("has-reveal");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("has-reveal");
    };
  }, []);

  return null;
}

