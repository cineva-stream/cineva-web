import { Icon } from "./Icons";
import InstallTabs from "./InstallTabs";
import { install, specs, maintenance, APK_DOWNLOAD_URL, RELEASES_URL } from "@/lib/content";

export default function Install() {
  return (
    <section id="pasang" className="sec">
      <div className="wrap">
        <div className="install-grid">
          <div className="install-copy">
            <h2>{install.title}</h2>
            <p className="sec-lead">{install.lead}</p>

            <div className="install-actions">
              <a className="btn btn-primary" href={APK_DOWNLOAD_URL} target="_blank" rel="noreferrer">
                <Icon name="download" size={19} />
                Unduh APK
              </a>
              <a className="btn btn-ghost" href={RELEASES_URL} target="_blank" rel="noreferrer">
                Semua rilis
                <Icon name="external" size={16} />
              </a>
            </div>

            <dl className="specs">
              {specs.map((s) => (
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
                <b>{maintenance.badge}</b>
                <p>{maintenance.notice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
