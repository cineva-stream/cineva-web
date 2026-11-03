"use client";

import { useEffect, useState } from "react";
import { ArchitectureAbi } from "./useStats";

export interface DeviceArchInfo {
  recommendedAbi: ArchitectureAbi;
  isAndroid: boolean;
  isWindows: boolean;
  isEmulatorOrPc: boolean;
  label: string;
}

export function useDeviceArch(): DeviceArchInfo {
  const [arch, setArch] = useState<DeviceArchInfo>({
    recommendedAbi: "arm64-v8a",
    isAndroid: true,
    isWindows: false,
    isEmulatorOrPc: false,
    label: "ARM64 (64-bit)",
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isWindows = ua.includes("windows");
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

          if (isAndroid) {
            if (archHint === "arm" && bitness === "32") {
              setArch({
                recommendedAbi: "armeabi-v7a",
                isAndroid: true,
                isWindows: false,
                isEmulatorOrPc: false,
                label: "ARMv7 (32-bit)",
              });
              return;
            }
            if (archHint.includes("x86") || archHint.includes("amd")) {
              setArch({
                recommendedAbi: "x86_64",
                isAndroid: true,
                isWindows: false,
                isEmulatorOrPc: true,
                label: "x86_64 (Intel/AMD)",
              });
              return;
            }
            // Almost all modern Android phones are 64-bit ARM
            setArch({
              recommendedAbi: "arm64-v8a",
              isAndroid: true,
              isWindows: false,
              isEmulatorOrPc: false,
              label: "ARM64 (64-bit)",
            });
            return;
          }

          if (isEmulatorOrPc) {
            setArch({
              recommendedAbi: "x86_64",
              isAndroid: false,
              isWindows,
              isEmulatorOrPc: true,
              label: "x86_64 (Emulator PC)",
            });
            return;
          }
        })
        .catch(() => {});
    }

    // Fallback based on User-Agent string
    if (isAndroid) {
      if (ua.includes("x86_64") || ua.includes("x86-64") || ua.includes("amd64")) {
        setArch({
          recommendedAbi: "x86_64",
          isAndroid: true,
          isWindows: false,
          isEmulatorOrPc: true,
          label: "x86_64 (Emulator PC)",
        });
      } else if (ua.includes("armeabi") && !ua.includes("arm64") && !ua.includes("aarch64")) {
        setArch({
          recommendedAbi: "armeabi-v7a",
          isAndroid: true,
          isWindows: false,
          isEmulatorOrPc: false,
          label: "ARMv7 (32-bit)",
        });
      } else {
        // Standard modern Android smartphone
        setArch({
          recommendedAbi: "arm64-v8a",
          isAndroid: true,
          isWindows: false,
          isEmulatorOrPc: false,
          label: "ARM64 (64-bit)",
        });
      }
    } else {
      // Desktop / PC / Laptop
      setArch({
        recommendedAbi: "arm64-v8a", // Default recommend for when sending to phone
        isAndroid: false,
        isWindows,
        isEmulatorOrPc: true,
        label: "ARM64 (Disarankan untuk HP)",
      });
    }
  }, []);

  return arch;
}

