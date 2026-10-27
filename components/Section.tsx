import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  lead,
  children,
  tight,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`section${tight ? " tight" : ""}`}>
      <div className="wrap">
        <div className="section-head">
          <h2>{title}</h2>
          {lead && <p>{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
