"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CodeBlock({ code, label }: { code: string; label?: string }) {
  const { t } = useLanguage();
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <div className="code">
      <button className={`copy${done ? " done" : ""}`} onClick={copy} aria-live="polite">
        {done ? t.install.copiedLabel : label || t.install.copyLabel}
      </button>
      <pre>
        <code>
          {code.split("\n").map((line, i) => (
            <span key={i} className={line.startsWith("#") ? "cm" : undefined}>
              {line}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
