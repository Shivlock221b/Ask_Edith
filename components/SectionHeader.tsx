import { Reveal } from "./Reveal";

export function SectionHeader({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <Reveal className="section-heading">
      <p className={`eyebrow ${light ? "eyebrow-dark" : ""}`}>{eyebrow}</p>
      <h2 className={light ? "text-ink" : ""}>{title}</h2>
      {copy && <p className={`section-copy ${light ? "text-ink-muted" : ""}`}>{copy}</p>}
    </Reveal>
  );
}
