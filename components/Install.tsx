"use client";

import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { RELEASES_URL, EXE_DOWNLOAD_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";
import { useDeviceArch } from "@/lib/useDeviceArch";

export default function Install() {
  const { lang, t } = useLanguage();
  const stats = useStats();
  const deviceArch = useDeviceArch();

  const [activePlatform, setActivePlatform] = useState<"android" | "windows">("android");

  // Sinkronkan tab awal dengan deteksi OS (Windows PC -> tab Windows, lainnya -> tab Android)
  useEffect(() => {
    if (deviceArch.platform === "windows") {
      setActivePlatform("windows");
    } else {
      setActivePlatform("android");
    }
  }, [deviceArch.platform]);

  const inst = t.install;

  // URLs & sizes untuk varian Android
  const tvApk = stats.apks?.find((a) => a.abi === "android-tv");
  const arm64Apk = stats.apks?.find((a) => a.abi === "arm64-v8a");
  const armv7Apk = stats.apks?.find((a) => a.abi === "armeabi-v7a");
  const x86Apk = stats.apks?.find((a) => a.abi === "x86_64");
  const universalApk = stats.apks?.find((a) => a.abi === "universal");

  const tvUrl = tvApk?.url || stats.apkUrl.replace(/-[a-z0-9_-]+\.apk$/, "-android-tv.apk").replace(".apk", "-android-tv.apk");
  const tvSize = tvApk?.size || "15.8 MB";
  const arm64Url = arm64Apk?.url || stats.apkUrl.replace(".apk", "-arm64-v8a.apk");
  const arm64Size = arm64Apk?.size || "35.8 MB";

  const armv7Url = armv7Apk?.url || stats.apkUrl.replace(".apk", "-armeabi-v7a.apk");
  const armv7Size = armv7Apk?.size || "32.8 MB";

  const x86Url = x86Apk?.url || stats.apkUrl.replace(".apk", "-x86_64.apk");
  const x86Size = x86Apk?.size || "40.7 MB";

  const universalUrl = universalApk?.url || stats.apkUrl;
  const universalSize = universalApk?.size || (stats.apkSize || "100.1 MB");

  // URLs & sizes untuk Windows
  const windowsUrl = stats.windows?.url || stats.exeUrl || EXE_DOWNLOAD_URL;
  const windowsSize = stats.windows?.size || "28.2 MB";
  const windowsFileName = stats.windows?.name || `Cineva_setup_${stats.version}.exe`;

  const androidVariants = [
    {
      id: "android-tv",
      icon: "tv",
      name: "Android TV & Smart TV",
      note: inst.androidVariants?.tv?.note || (lang === "en" ? "Smart TV, TV Box, Mi Stick & Leanback (Lightweight)" : "Smart TV, TV Box, Mi Stick & Leanback (Super Ringan)"),
      size: tvSize,
      url: tvUrl,
      isRecommended: deviceArch.isTv || deviceArch.recommendedAbi === "android-tv",
      isFeatured: true,
    },
    {
      id: "arm64-v8a",
      name: "ARM64 (64-bit)",
      note: inst.androidVariants?.arm64?.note || "Ponsel & tablet Android modern",
      size: arm64Size,
      url: arm64Url,
      isRecommended: !deviceArch.isTv && (deviceArch.recommendedAbi === "arm64-v8a" || deviceArch.platform === "android"),
      isFeatured: false,
      icon: "android",
    },
    {
      id: "armeabi-v7a",
      name: "ARMv7 (32-bit)",
      note: inst.androidVariants?.armv7?.note || "HP Android lawas / 32-bit",
      size: armv7Size,
      url: armv7Url,
      isRecommended: false,
    },
    {
      id: "x86_64",
      name: "x86_64",
      note: inst.androidVariants?.x86?.note || "Emulator PC & Chromebook",
      size: x86Size,
      url: x86Url,
      isRecommended: false,
    },
    {
      id: "universal",
      name: "Universal",
      note: inst.androidVariants?.universal?.note || "Kompatibel semua jenis prosesor",
      size: universalSize,
      url: universalUrl,
      isRecommended: false,
    },
  ];

  return (
    <section id="pasang" className="sec sec-install" aria-label="Instalasi Cineva">
      <div className="wrap">
        {/* Section Header */}
        <div className="install-header" data-reveal="up">
          <h2 className="install-title">{inst.title}</h2>
          <p className="sec-lead install-lead">{inst.lead}</p>
        </div>

        {/* Segmented Platform Switcher */}
        <div className="install-platform-switcher" role="tablist" aria-label="Pilih Platform">
          <button
            type="button"
            role="tab"
            aria-selected={activePlatform === "android"}
            className={`platform-switch-btn ${activePlatform === "android" ? "is-active" : ""}`}
            onClick={() => setActivePlatform("android")}
          >
            <Icon name="android" size={20} />
            <div className="platform-btn-text">
              <span className="platform-btn-title">{inst.platformAndroid || "Android"}</span>
              <span className="platform-btn-sub">{inst.platformAndroidSub || "Ponsel & Tablet"}</span>
            </div>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activePlatform === "windows"}
            className={`platform-switch-btn ${activePlatform === "windows" ? "is-active" : ""}`}
            onClick={() => setActivePlatform("windows")}
          >
            <Icon name="windows" size={20} />
            <div className="platform-btn-text">
              <span className="platform-btn-title">{inst.platformWindows || "Windows"}</span>
              <span className="platform-btn-sub">{inst.platformWindowsSub || "PC & Laptop (64-bit)"}</span>
            </div>
          </button>
        </div>

        {/* Platform Content Panes */}
        <div className="install-hub-content">
          {/* ============================================================= */}
          {/* TAB 1: ANDROID PLATFORM                                       */}
          {/* ============================================================= */}
          {activePlatform === "android" && (
            <div className="install-platform-view">
              {/* Kolom Kiri: 4 Kartu Varian APK Terpampang Jelas */}
              <div className="install-variants-column">
                <div className="install-column-header">
                  <h3 className="install-col-title">{lang === "en" ? "Select APK Variant" : "Pilih Varian APK"}</h3>
                  <span className="install-col-version">{stats.version}</span>
                </div>

                <div className="install-variants-grid">
                  {androidVariants.map((v) => (
                    <div
                      key={v.id}
                      className={`install-variant-card ${v.isRecommended ? "is-recommended" : ""} ${v.isFeatured ? "is-featured" : ""}`}
                    >
                      <div className="variant-card-top">
                        <div className="variant-name-group">
                          <span className="variant-name">{v.name}</span>
                          {v.isRecommended && (
                            <span className="variant-rec-tag">
                              {lang === "en" ? "Recommended" : "Disarankan"}
                            </span>
                          )}
                        </div>
                        <span className="variant-size">{v.size}</span>
                      </div>

                      <p className="variant-note">{v.note}</p>

                      <a
                        href={v.url}
                        target="_blank"
                        rel="noreferrer"
                        className="variant-dl-btn"
                        aria-label={`Unduh ${v.name}`}
                      >
                        <Icon name={v.icon || "android"} size={16} />
                        <span>{lang === "en" ? `Download (${v.size})` : `Unduh (${v.size})`}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Panduan Langkah Instalasi Android */}
              <div className="install-guide-column">
                <div className="install-column-header">
                  <h3 className="install-col-title">{inst.guideTitle || "Panduan Langkah Instalasi"}</h3>
                </div>

                <div className="install-steps-list">
                  {inst.androidSteps?.map((s) => (
                    <div key={s.step} className="install-step-card">
                      <div className="step-num-badge">{s.step}</div>
                      <div className="step-text-group">
                        <h4 className="step-item-title">{s.title}</h4>
                        <p className="step-item-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 2: WINDOWS PLATFORM                                       */}
          {/* ============================================================= */}
          {activePlatform === "windows" && (
            <div className="install-platform-view">
              {/* Kolom Kiri: Kartu Installer Utama Windows */}
              <div className="install-variants-column">
                <div className="install-column-header">
                  <h3 className="install-col-title">{lang === "en" ? "Official Installer Package" : "Paket Installer Resmi"}</h3>
                  <span className="install-col-version">{stats.version}</span>
                </div>

                <div className="install-windows-hero-card">
                  <div className="windows-card-header">
                    <div className="windows-icon-box">
                      <Icon name="windows" size={28} />
                    </div>
                    <div>
                      <h4 className="windows-card-title">{inst.windowsCard?.title || "Cineva Windows Desktop (64-bit)"}</h4>
                      <p className="windows-file-name">{windowsFileName}</p>
                    </div>
                  </div>

                  <p className="windows-card-desc">
                    {inst.windowsCard?.desc ||
                      "Instalasi mandiri satu berkas (.exe) untuk PC dan Laptop berbasis Windows 10 & 11."}
                  </p>

                  <dl className="windows-specs-list">
                    <div className="windows-spec-row">
                      <dt>{inst.specLabels?.os || "Target OS"}</dt>
                      <dd>Windows 10 / 11 (64-bit)</dd>
                    </div>
                    <div className="windows-spec-row">
                      <dt>{inst.specLabels?.cpu || "Arsitektur"}</dt>
                      <dd>x86_64 (Intel & AMD)</dd>
                    </div>
                    <div className="windows-spec-row">
                      <dt>{inst.specLabels?.size || "Ukuran Berkas"}</dt>
                      <dd>{windowsSize}</dd>
                    </div>
                    <div className="windows-spec-row">
                      <dt>{lang === "en" ? "License" : "Lisensi"}</dt>
                      <dd>GPL-3.0 ({lang === "en" ? "Free & Open Source" : "Gratis & Open Source"})</dd>
                    </div>
                  </dl>

                  <a
                    href={windowsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="windows-main-dl-btn"
                  >
                    <Icon name="windows" size={20} />
                    <span className="windows-dl-btn-text">
                      <span className="windows-dl-btn-title">
                        {inst.windowsCard?.dlBtn || (lang === "en" ? "Download for Windows" : "Unduh untuk Windows")}
                      </span>
                      <span className="windows-dl-btn-size">({windowsSize})</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Panduan Langkah Instalasi Windows */}
              <div className="install-guide-column">
                <div className="install-column-header">
                  <h3 className="install-col-title">{inst.guideTitle || "Panduan Langkah Instalasi"}</h3>
                </div>

                <div className="install-steps-list">
                  {inst.windowsSteps?.map((s) => (
                    <div key={s.step} className="install-step-card">
                      <div className="step-num-badge">{s.step}</div>
                      <div className="step-text-group">
                        <h4 className="step-item-title">{s.title}</h4>
                        <p className="step-item-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="install-smartscreen-section">
                  <div className="install-smartscreen-header">
                    {/* @ts-ignore */}
                    <h4 className="install-smartscreen-title">{inst.smartScreenGuide?.title || (lang === "en" ? "Windows SmartScreen Notice" : "Panduan Windows SmartScreen")}</h4>
                    {/* @ts-ignore */}
                    <p className="install-smartscreen-desc">{inst.smartScreenGuide?.desc || (lang === "en" ? "If the 'Windows protected your PC' dialog appears, follow these 2 simple steps:" : "Jika muncul peringatan 'Windows protected your PC' (Windows melindungi PC Anda), ikuti 2 langkah mudah berikut:")}</p>
                  </div>

                  <div className="install-steps-list">
                    {/* @ts-ignore */}
                    {(inst.smartScreenGuide?.steps || [
                      {
                        step: 1,
                        title: lang === "en" ? 'Click "More info"' : 'Klik "More info"',
                        desc: lang === "en" ? 'Click the "More info" (Info selengkapnya) text link inside the dialog.' : 'Klik teks tautan "More info" (Info selengkapnya) pada dialog Windows SmartScreen.',
                      },
                      {
                        step: 2,
                        title: lang === "en" ? 'Select "Run anyway"' : 'Pilih "Run anyway"',
                        desc: lang === "en" ? 'Click the "Run anyway" (Tetap jalankan) button at the bottom.' : 'Klik tombol "Run anyway" (Tetap jalankan) yang muncul di bagian bawah.',
                      },
                    ]).map((s: any) => (
                      <div key={s.step} className="install-step-card">
                        <div className="step-num-badge">{s.step}</div>
                        <div className="step-text-group">
                          <h4 className="step-item-title">{s.title}</h4>
                          <p className="step-item-desc">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer GitHub Link */}
        <div className="install-footer-action">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="install-github-link"
          >
            <span>{inst.allReleases || "Semua Rilis GitHub"}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
