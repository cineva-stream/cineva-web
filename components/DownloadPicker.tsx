"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";
import { useDeviceArch } from "@/lib/useDeviceArch";
import { EXE_DOWNLOAD_URL } from "@/lib/content";

interface DownloadPickerProps {
  variant?: "hero" | "install" | "cta";
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

interface DownloadOption {
  id: string;
  name: string;
  note: string;
  badge: string;
  isRecommended: boolean;
  url: string;
  size: string;
  icon: "windows" | "android";
}

export default function DownloadPicker({
  variant = "hero",
  className = "",
  onOpenChange,
}: DownloadPickerProps) {
  const { lang, t } = useLanguage();
  const stats = useStats();
  const deviceArch = useDeviceArch();
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<"bottom" | "top">("bottom");
  const containerRef = useRef<HTMLDivElement>(null);
  const flyoutRef = useRef<HTMLDivElement>(null);

  const setOpenState = useCallback(
    (next: boolean | ((prev: boolean) => boolean)) => {
      setIsOpen((prev) => {
        const val = typeof next === "function" ? next(prev) : next;
        if (onOpenChange) onOpenChange(val);
        return val;
      });
    },
    [onOpenChange]
  );

  // Auto-flip placement detection based on viewport boundary
  useEffect(() => {
    if (!isOpen) return;

    const updatePlacement = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const flyoutHeight = flyoutRef.current?.offsetHeight || 360;
      const spaceBelow = window.innerHeight - rect.bottom - 16;
      const spaceAbove = rect.top - 16;

      if (spaceBelow < flyoutHeight && spaceAbove > spaceBelow) {
        setPlacement("top");
      } else {
        setPlacement("bottom");
      }
    };

    updatePlacement();
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement);
    };
  }, [isOpen]);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenState(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenState(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setOpenState]);

  const isWindows = deviceArch.isWindows;
  const platformName = isWindows ? "Windows" : "Android";
  const platformIcon: "windows" | "android" = isWindows ? "windows" : "android";

  const matchedApk = stats.apks?.find((a) => a.abi === deviceArch.recommendedAbi);
  const targetUrl = isWindows
    ? (stats.windows?.url || stats.exeUrl || EXE_DOWNLOAD_URL)
    : (matchedApk?.url || stats.apkUrl);

  const targetSize = isWindows
    ? (stats.windows?.size || "28.2 MB")
    : (matchedApk?.size || (deviceArch.recommendedAbi === "universal" ? "100.1 MB" : "35.8 MB"));

  const topText = lang === "en" ? `Download for ${platformName}` : `Unduh untuk ${platformName}`;
  const subText = `${stats.version} - ${targetSize}`;

  const m = t.archModal;

  const options: DownloadOption[] = [
    {
      id: "windows",
      name: "Windows Setup (64-bit)",
      note: lang === "en" ? "Windows 10 / 11 (PC & Laptop)" : "Windows 10 / 11 (PC & Laptop)",
      badge: lang === "en" ? "Recommended" : "Disarankan",
      isRecommended: isWindows,
      url: stats.windows?.url || stats.exeUrl || EXE_DOWNLOAD_URL,
      size: stats.windows?.size || "28.2 MB",
      icon: "windows",
    },
    {
      id: "arm64-v8a",
      name: "Android (arm64-v8a)",
      note: lang === "en" ? "Modern Android (64-bit)" : "HP Android modern (64-bit)",
      badge: lang === "en" ? "Recommended" : "Disarankan",
      isRecommended: !isWindows && deviceArch.recommendedAbi === "arm64-v8a",
      url: stats.apks?.find((a) => a.abi === "arm64-v8a")?.url || stats.apkUrl.replace(".apk", "-arm64-v8a.apk"),
      size: stats.apks?.find((a) => a.abi === "arm64-v8a")?.size || "35.8 MB",
      icon: "android",
    },
    {
      id: "armeabi-v7a",
      name: "Android (armeabi-v7a)",
      note: lang === "en" ? "Older / 32-bit Android" : "HP Android lawas / 32-bit",
      badge: lang === "en" ? "Recommended" : "Disarankan",
      isRecommended: !isWindows && deviceArch.recommendedAbi === "armeabi-v7a",
      url: stats.apks?.find((a) => a.abi === "armeabi-v7a")?.url || stats.apkUrl.replace(".apk", "-armeabi-v7a.apk"),
      size: stats.apks?.find((a) => a.abi === "armeabi-v7a")?.size || "32.8 MB",
      icon: "android",
    },
    {
      id: "x86_64",
      name: "Android (x86_64)",
      note: lang === "en" ? "PC Emulator & Chromebook" : "Emulator PC & Chromebook",
      badge: lang === "en" ? "Recommended" : "Disarankan",
      isRecommended: !isWindows && deviceArch.recommendedAbi === "x86_64",
      url: stats.apks?.find((a) => a.abi === "x86_64")?.url || stats.apkUrl.replace(".apk", "-x86_64.apk"),
      size: stats.apks?.find((a) => a.abi === "x86_64")?.size || "40.7 MB",
      icon: "android",
    },
    {
      id: "universal",
      name: "Android Universal",
      note: lang === "en" ? "All Android CPUs (compatible)" : "Semua CPU Android (kompatibel)",
      badge: lang === "en" ? "Recommended" : "Disarankan",
      isRecommended: !isWindows && deviceArch.recommendedAbi === "universal",
      url: stats.apks?.find((a) => a.abi === "universal")?.url || stats.apkUrl,
      size: stats.apks?.find((a) => a.abi === "universal")?.size || (stats.apkSize || "100.1 MB"),
      icon: "android",
    },
  ];

  return (
    <div
      className={`download-picker-wrap ${isOpen ? "is-menu-open" : ""} ${className}`}
      ref={containerRef}
    >
      <div className={`download-split-btn download-split-${variant} ${isOpen ? "is-active" : ""}`}>
        <a
          className="btn btn-light btn-xl download-main-action"
          href={targetUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="download-ico-badge" aria-hidden="true">
            <Icon name={platformIcon} size={20} />
          </span>
          <span className="btn-stack">
            <strong className="btn-stack-title">{topText}</strong>
            <small className="btn-stack-sub">{subText}</small>
          </span>
        </a>
        <button
          type="button"
          className={`download-split-toggle download-split-toggle-${variant} ${isOpen ? "is-active" : ""}`}
          onClick={() => setOpenState((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-label={m.openSelectorBtn}
          title={m.openSelectorBtn}
        >
          <span className="split-toggle-icon">
            <Icon name="chevron-down" size={16} />
          </span>
        </button>
      </div>

      {/* Sleek Minimalist Flyout Dropdown */}
      {isOpen && (
        <div
          ref={flyoutRef}
          className={`download-flyout-menu placement-${placement}`}
          role="menu"
        >
          <div className="flyout-header">
            <span className="flyout-title">{m.title}</span>
            <span className="flyout-version-badge">{stats.version}</span>
          </div>
          <div className="flyout-list">
            {options.map((opt) => (
              <a
                key={opt.id}
                href={opt.url}
                className={`flyout-item ${opt.isRecommended ? "is-recommended" : ""}`}
                role="menuitem"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenState(false)}
              >
                <div className="flyout-item-lead" aria-hidden="true">
                  <Icon name={opt.icon} size={16} />
                </div>
                <div className="flyout-item-main">
                  <div className="flyout-item-top">
                    <span className="flyout-abi-name">{opt.name}</span>
                    {opt.isRecommended && (
                      <span className="flyout-badge-recommended">
                        {opt.badge || (lang === "en" ? "Recommended" : "Disarankan")}
                      </span>
                    )}
                  </div>
                  <span className="flyout-abi-note">{opt.note}</span>
                </div>
                <div className="flyout-item-end">
                  <span className="flyout-abi-size">{opt.size}</span>
                  <span className="flyout-download-icon" aria-hidden="true">
                    <Icon name="download" size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="flyout-footer">
            <p>{m.guideDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
