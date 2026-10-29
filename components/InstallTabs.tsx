"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { RELEASES_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";

export default function InstallTabs() {
  const { t } = useLanguage();
  const { apkName } = useStats();
  const methods = t.install.methods;
  const [active, setActive] = useState(methods[0].id);
  const current = methods.find((m) => m.id === active) || methods[0];

  const codeToDisplay =
    current.id === "adb" ? `adb install -r ${apkName}` : current.code;

  return (
    <div className="term" role="group" aria-label={t.install.groupAria}>
      <div className="term-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="term-tabs" role="tablist" aria-label={t.install.tablistAria}>
          {methods.map((m) => (
            <button
              key={m.id}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={m.id === active}
              aria-controls={`panel-${m.id}`}
              className={m.id === active ? "on" : ""}
              onClick={() => setActive(m.id)}
            >
              {m.tab}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="term-body">
        {current.id === "apk" ? (
          <ol className="steps">
            {current.steps.map((s, i) => (
              <li key={i}>
                <span className="step-n">{i + 1}</span>
                <p>
                  {i === 0 ? (
                    <>
                      {t.install.apkStep1Prefix} <code className="inline">{apkName}</code>{" "}
                      {t.install.apkStep1Middle}{" "}
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
              <p className="term-note" key={s}>
                {s}
              </p>
            ))}
            <CodeBlock code={codeToDisplay} />
            {current.id === "source" && <p className="term-note">{t.install.envNote}</p>}
          </>
        )}
      </div>
    </div>
  );
}
