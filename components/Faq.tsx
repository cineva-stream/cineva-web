import { Icon } from "./Icons";
import { faq, contribute } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="sec">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2>
            {faq.title1}
            <br />
            <span className="outline">{faq.title2}</span>
          </h2>
          <div className="faq-links">
            {contribute.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="pill">
                {c.label}
                <Icon name="external" size={13} />
              </a>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {faq.items.map((f, i) => (
            <details className="faq-item" key={f.q} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-ico" aria-hidden="true">
                  <Icon name="plus" size={16} />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
