import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Section from "@/components/Section";
import InstallTabs from "@/components/InstallTabs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { features, player, stack, install, specs, notice } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />

        <Section id="fitur" title="Semua yang kamu butuhkan, tanpa ribet">
          <div className="bento">
            {features.map((f) => (
              <article className="tile" key={f.title}>
                <div className="ico">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p className="body">{f.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section id="pemutar" className="section">
          <div className="wrap split wide">
            <div>
              <h2 className="h2">{player.title}</h2>
              <ul className="checks" style={{ marginTop: 28 }}>
                {player.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <figure className="player-shot">
              <div className="phone land">
                <img src={player.src} alt={player.alt} width={1200} height={527} loading="lazy" />
              </div>
              <span className="callout">Subtitle Indonesia otomatis</span>
            </figure>
          </div>
        </section>

        <section className="stack-band" aria-label="Teknologi">
          <div className="wrap">
            <div className="chips center">
              {stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Section id="pasang" title={install.title}>
          <InstallTabs />
          <dl className="specs">
            {specs.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
          <div className="notice" role="note">
            <div className="ico">
              <Icon name="warning" />
            </div>
            <p>{notice}</p>
          </div>
        </Section>
      </main>
      <CtaBanner />
      <Footer />
    </>
  );
}
