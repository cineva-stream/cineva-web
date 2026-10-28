"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { install, RELEASES_URL } from "@/lib/content";

export default function InstallTabs() {
  const [active, setActive] = useState(install.methods[0].id);
  const current = install.methods.find((m) => m.id === active)!;

  return (
    <div className="install">
      <div className="tabs" role="tablist" aria-label="Metode instalasi">
        {install.methods.map((m) => (
          <button
            key={m.id}
            role="tab"
            id={`tab-${m.id}`}
            aria-selected={m.id === active}
            aria-controls={`panel-${m.id}`}
            className="tab"
            onClick={() => setActive(m.id)}
          >
            {m.tab}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="tabpanel">
        {current.id === "apk" ? (
          <ol className="steps">
            {current.steps.map((s, i) => (
              <li className="step" key={i}>
                <p>
                  {i === 0 ? (
                    <>
                      Unduh <code className="inline">Cineva_v1.0.6.apk</code> dari{" "}
                      <a className="inline-link" href={RELEASES_URL} target="_blank" rel="noreferrer">
                        Releases
                      </a>
                      .
                    </>
                  ) : (
                    s
                  )}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <>
            {current.steps.map((s) => (
              <p className="body" key={s} style={{ marginBottom: 14 }}>
                {s}
              </p>
            ))}
            <CodeBlock code={current.code} />
            {current.id === "source" && <p className="body" style={{ marginTop: 14 }}>{install.envNote}</p>}
          </>
        )}
      </div>
    </div>
  );
}
