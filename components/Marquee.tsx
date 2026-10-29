import { categories, stack } from "@/lib/content";

function Row({ items, reverse, outline }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`marq${reverse ? " rev" : ""}${outline ? " is-outline" : ""}`} aria-hidden="true">
      <div className="marq-track">
        {loop.map((t, i) => (
          <span key={i} className="marq-item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="sec marquee-sec" aria-labelledby="kategori-title">
      <div className="wrap center-head">
        <h2 id="kategori-title">
          Apa pun seleramu, <span className="outline">ada di sini.</span>
        </h2>
        <p className="sec-lead">
          Pilih dari {categories.slice(0, 5).join(", ")}, lalu saring sesuai genre yang sedang kamu cari.
        </p>
      </div>

      <div className="marq-stack">
        <Row items={categories} />
        <Row items={stack} reverse outline />
      </div>
      <p className="sr-only">Teknologi yang dipakai: {stack.join(", ")}.</p>
    </section>
  );
}
