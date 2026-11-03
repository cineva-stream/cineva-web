"use client";

import { Icon } from "./Icons";
import InstallTabs from "./InstallTabs";
import DownloadPicker from "./DownloadPicker";
import { RELEASES_URL } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";
import { useStats } from "@/lib/useStats";
import { useDeviceArch } from "@/lib/useDeviceArch";

export default function Install() {
  const { t } = useLanguage();
  const stats = useStats();
  const deviceArch = useDeviceArch();

  const matchedApk = stats.apks?.find((a) => a.abi === deviceArch.recommendedAbi);
  const recommendedSize = matchedApk?.size || stats.apkSize;

  const dynamicSpecs = [
    { k: t.install.specLabels.version, v: stats.version },
    { k: t.install.specLabels.size, v: `${recommendedSize} (${deviceArch.label})` },
    { k: t.install.specLabels.os, v: "Android 5.0+" },
    { k: t.install.specLabels.cpu, v: "arm64-v8a, armeabi-v7a, x86_64, Universal" },
    { k: t.install.specLabels.pkg, v: "com.primadev.cineva" },
  ];

  return (
    <section id="pasang" className="sec">
      <div className="wrap">
        <div className="install-grid">
          <div className="install-copy">
            <h2>{t.install.title}</h2>
            <p className="sec-lead">{t.install.lead}</p>

            <div className="install-actions">
              <DownloadPicker variant="install" />
              <a className="btn btn-ghost btn-xl" href={RELEASES_URL} target="_blank" rel="noreferrer">
                {t.install.allReleases}
                <Icon name="external" size={16} />
              </a>
            </div>

            <dl className="specs">
              {dynamicSpecs.map((s) => (
                <div key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="install-term">
            <InstallTabs />
            <div className="notice" role="note">
              <span className="notice-ico">
                <Icon name="warning" size={20} />
              </span>
              <div>
                <b>{t.maintenance.badge}</b>
                <p>{t.maintenance.notice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
