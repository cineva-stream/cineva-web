"use client";

import { useEffect, useState } from "react";
import { ArchitectureAbi } from "./useStats";

export interface DeviceArchInfo {
  recommendedAbi: ArchitectureAbi;
  platform: "android" | "windows" | "tv";
  isAndroid: boolean;
  isWindows: boolean;
  isTv: boolean;
  isEmulatorOrPc: boolean;
  label: string;
}

export function useDeviceArch(): DeviceArchInfo {
  const [arch, setArch] = useState<DeviceArchInfo>({
    recommendedAbi: "arm64-v8a",
    platform: "android",
    isAndroid: true,
    isWindows: false,
    isTv: false,
    isEmulatorOrPc: false,
    label: "ARM64 (64-bit)",
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();

    // -------------------------------------------------------------------------
    // DETEKSI KHUSUS ANDROID TV & SMART TV (LEANBACK / GOOGLE TV / TV BOX)
    // -------------------------------------------------------------------------
    const isAndroidTv =
      ua.includes("smart-tv") ||
      ua.includes("smarttv") ||
      ua.includes("googletv") ||
      ua.includes("google-tv") ||
      ua.includes("android tv") ||
      ua.includes("android_tv") ||
      ua.includes("leanback") ||
      ua.includes("large screen") ||
      ua.includes("largescreen") ||
      ua.includes("crkey") ||
      ua.includes("aftt") ||
      ua.includes("aftm") ||
      ua.includes("aftb") ||
      ua.includes("afts") ||
      (ua.includes("android") && (ua.includes(" tv") || ua.includes("; tv") || ua.includes("tv;") || ua.includes("box") || ua.includes("mitv")));

    if (isAndroidTv) {
      setArch({
        recommendedAbi: "android-tv",
        platform: "tv",
        isAndroid: true,
        isWindows: false,
        isTv: true,
        isEmulatorOrPc: false,
        label: "Android TV & Smart TV",
      });
      return;
    }

    // -------------------------------------------------------------------------
    // ANTI-MANIPULASI DESKTOP MODE DI HANDPHONE (STEALTH DETECTION)
    // Walaupun user mengaktifkan "Situs Desktop" / "Desktop Site" di browser HP,
    // parameter hardware fisik di bawah ini tidak dapat dimanipulasi:
    // -------------------------------------------------------------------------
    let isPhysicallyMobilePhone = false;

    // 1. Deteksi GPU Mobile via WebGL Unmasked Renderer
    // Chipset HP (Snapdragon: Adreno, MediaTek/Exynos: Mali, PowerVR)
    // tidak pernah ada di PC Windows native (yang memakai NVIDIA, Intel, AMD Radeon).
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl && "getExtension" in gl) {
        const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = (gl as WebGLRenderingContext)
            .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
            .toLowerCase();
          if (
            renderer.includes("adreno") ||
            renderer.includes("mali") ||
            renderer.includes("powervr") ||
            renderer.includes("vivante")
          ) {
            isPhysicallyMobilePhone = true;
          }
        }
      }
    } catch {
      // Abaikan jika WebGL dimatikan
    }

    // 2. Deteksi Layar Sentuh Primer (Coarse Pointer & Multi-Touch)
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasMultiTouch = navigator.maxTouchPoints > 1;

    // 3. Deteksi Dimensi Fisik Layar (Lebar Ponsel umumnya <= 520px pada orientasi potret)
    const minScreenDim = Math.min(window.screen.width, window.screen.height);
    const isMobileScreenSize = minScreenDim <= 520;

    // 4. Deteksi Fitur Khusus HP (Vibration API ada di HP, namun tidak ada di browser PC Windows)
    const hasVibrateApi = "vibrate" in navigator;

    if (
      isPhysicallyMobilePhone ||
      (hasCoarsePointer && hasMultiTouch && (isMobileScreenSize || hasVibrateApi))
    ) {
      isPhysicallyMobilePhone = true;
    }

    // Jika terdeteksi fisik HP, kunci secara silent sebagai Android
    if (isPhysicallyMobilePhone) {
      setArch({
        recommendedAbi: "arm64-v8a",
        platform: "android",
        isAndroid: true,
        isWindows: false,
    isTv: false,
        isEmulatorOrPc: false,
        label: "ARM64 (64-bit)",
      });
      return;
    }

    // -------------------------------------------------------------------------
    // DETEKSI NORMAL UNTUK PERANGKAT ASLI (DESKTOP / PC / LAPTOP)
    // -------------------------------------------------------------------------
    const isAndroid = ua.includes("android");
    const isWindows = ua.includes("windows") || ua.includes("win32") || ua.includes("win64");
    const isMac = ua.includes("macintosh") || ua.includes("mac os");
    const isLinux = ua.includes("linux") && !isAndroid;
    const isEmulatorOrPc = isWindows || isMac || isLinux;

    // Check modern Client Hints API if available
    const navAny = navigator as unknown as {
      userAgentData?: {
        getHighEntropyValues?: (hints: string[]) => Promise<{
          architecture?: string;
          bitness?: string;
          platform?: string;
        }>;
      };
    };

    if (navAny.userAgentData?.getHighEntropyValues) {
      navAny.userAgentData
        .getHighEntropyValues(["architecture", "bitness", "platform"])
        .then((hints) => {
          const archHint = (hints.architecture || "").toLowerCase();
          const bitness = hints.bitness || "";
          const platformHint = (hints.platform || "").toLowerCase();
          const isWinHint = platformHint.includes("win") || isWindows;

          if (isWinHint) {
            setArch({
              recommendedAbi: "windows",
              platform: "windows",
              isAndroid: false,
              isWindows: true,
        isTv: false,
              isEmulatorOrPc: true,
              label: "Windows (Setup .exe)",
            });
            return;
          }

          if (isAndroid) {
            if (archHint === "arm" && bitness === "32") {
              setArch({
                recommendedAbi: "armeabi-v7a",
                platform: "android",
                isAndroid: true,
                isWindows: false,
    isTv: false,
                isEmulatorOrPc: false,
                label: "ARMv7 (32-bit)",
              });
              return;
            }
            if (archHint.includes("x86") || archHint.includes("amd")) {
              setArch({
                recommendedAbi: "x86_64",
                platform: "android",
                isAndroid: true,
                isWindows: false,
    isTv: false,
                isEmulatorOrPc: true,
                label: "x86_64 (Intel/AMD)",
              });
              return;
            }
            // Standard modern 64-bit Android smartphone
            setArch({
              recommendedAbi: "arm64-v8a",
              platform: "android",
              isAndroid: true,
              isWindows: false,
    isTv: false,
              isEmulatorOrPc: false,
              label: "ARM64 (64-bit)",
            });
            return;
          }

          if (isEmulatorOrPc) {
            setArch({
              recommendedAbi: isWindows ? "windows" : "x86_64",
              platform: isWindows ? "windows" : "android",
              isAndroid: false,
              isWindows,
              isTv: false,
              isEmulatorOrPc: true,
              label: isWindows ? "Windows (Setup .exe)" : "x86_64 (Emulator PC)",
            });
            return;
          }
        })
        .catch(() => {});
    }

    // Fallback based on User-Agent string
    if (isWindows) {
      setArch({
        recommendedAbi: "windows",
        platform: "windows",
        isAndroid: false,
        isWindows: true,
        isTv: false,
        isEmulatorOrPc: true,
        label: "Windows (Setup .exe)",
      });
    } else if (isAndroid) {
      if (ua.includes("x86_64") || ua.includes("x86-64") || ua.includes("amd64")) {
        setArch({
          recommendedAbi: "x86_64",
          platform: "android",
          isAndroid: true,
          isWindows: false,
    isTv: false,
          isEmulatorOrPc: true,
          label: "x86_64 (Emulator PC)",
        });
      } else if (ua.includes("armeabi") && !ua.includes("arm64") && !ua.includes("aarch64")) {
        setArch({
          recommendedAbi: "armeabi-v7a",
          platform: "android",
          isAndroid: true,
          isWindows: false,
    isTv: false,
          isEmulatorOrPc: false,
          label: "ARMv7 (32-bit)",
        });
      } else {
        // Standard modern Android smartphone
        setArch({
          recommendedAbi: "arm64-v8a",
          platform: "android",
          isAndroid: true,
          isWindows: false,
    isTv: false,
          isEmulatorOrPc: false,
          label: "ARM64 (64-bit)",
        });
      }
    } else {
      // Mac / Linux / Other Desktop
      setArch({
        recommendedAbi: "arm64-v8a",
        platform: "android",
        isAndroid: false,
        isWindows: false,
    isTv: false,
        isEmulatorOrPc: true,
        label: "ARM64 (Android)",
      });
    }
  }, []);

  return arch;
}
