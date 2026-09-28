"use client";

import { useState, type CSSProperties } from "react";
import { Reveal } from "@/components/reveal";
import styles from "./energy-architecture-section.module.css";

const sources = [
  { label: "Solar PV", detail: "", color: "#FBBF24", x: 145 },
  { label: "Grid", detail: "", color: "#2563EB", x: 415 },
  { label: "BESS", detail: "", color: "#10B981", x: 685 },
  { label: "Genset", detail: "Backup Generation", color: "#EA580C", x: 955 }
] as const;

function EnergyDiagram({ mobile = false }: { mobile?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const active = hovered ?? focused ?? (mobile ? selected : null);
  const prefix = mobile ? "energy-mobile" : "energy-desktop";

  return (
    <svg viewBox={mobile ? "0 0 360 600" : "0 0 1100 400"} className={styles.diagram + (mobile ? " mx-auto w-full max-w-[420px] md:hidden" : " hidden w-full md:block")} role="group" aria-label="One coordinated energy system" aria-describedby={prefix + "-description"}>
      <desc id={prefix + "-description"}>WXPE EMS coordinates Solar PV, Grid, BESS and Genset through four independent static dotted connections. Solid energy paths serve the industrial load, with bidirectional battery charging and discharging. Select an energy node to highlight its coordination link.</desc>
      <defs>
        <marker id={prefix + "-arrow"} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M1 1 7 4 1 7" fill="none" stroke="#475569" strokeWidth="1.2" /></marker>
        {sources.map((source, i) => <marker key={source.label} id={prefix + "-arrow-" + i} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M1 1 7 4 1 7" fill="none" stroke={source.color} strokeWidth="1.2" /></marker>)}
      </defs>
      <g fill="none" stroke="#475569" strokeWidth="1.5">
        {(mobile ? ["M340 200V500", "M340 500V530H180V559"] : ["M145 300H550", "M955 300H550", "M550 300V355"]).map((d) => (
          <g key={d}>
            <path d={d} className={styles.energyFlow} markerEnd={"url(#" + prefix + "-arrow)"} />
            <path d={d} pathLength="100" className={styles.energyTrail} aria-hidden="true" />
            <path d={d} pathLength="100" className={styles.energyPulse} aria-hidden="true" />
          </g>
        ))}
      </g>
      {sources.map((source, i) => {
        const x = mobile ? 150 : source.x;
        const y = mobile ? 140 + i * 100 : 155;
        const isActive = active === source.label;
        return (
          <g key={source.label} style={{ "--node-color": source.color } as CSSProperties}>
            <path d={"M" + (mobile ? 35 + i * 40 : 475 + i * 50) + " 66L" + x + " " + y} fill="none" strokeDasharray="0.1 6" strokeLinecap="round" className={styles.coordination} data-active={isActive} data-muted={active !== null && !isActive} />
            <path d={mobile ? "M150 " + (y + 8) + "V" + (y + 60) + "H335" : "M" + x + " 228V295"} fill="none" stroke={source.color} strokeWidth="1.5" markerStart={source.label === "BESS" ? "url(#" + prefix + "-arrow-" + i + ")" : undefined} markerEnd={"url(#" + prefix + "-arrow-" + i + ")"} />
            <circle cx={mobile ? 340 : x} cy={mobile ? y + 60 : 300} r="3" fill={source.color} />
            <g role="button" tabIndex={0} aria-label={"Highlight " + source.label + " coordination"} aria-pressed={selected === source.label} className={styles.node} data-active={isActive}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(source.label); }}
              onPointerLeave={() => setHovered(null)}
              onPointerDown={() => setFocused(null)}
              onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setFocused(source.label); }} onBlur={() => setFocused(null)}
              onClick={() => { if (mobile) setSelected(selected === source.label ? null : source.label); }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") { event.preventDefault(); if (mobile) setSelected(selected === source.label ? null : source.label); }
                if (event.key === "Escape") { setSelected(null); setFocused(null); setHovered(null); }
              }}>
              <rect x={mobile ? 138 : x - 110} y={y - 16} width={mobile ? 200 : 220} height={mobile ? 61 : 80} rx="6" fill="transparent" className={styles.focusOutline} />
              <circle cx={x} cy={y} r={isActive ? 6 : 4} fill={source.color} className={styles.nodeDot} />
              <text x={mobile ? 174 : x} y={mobile ? y + 5 : 193} textAnchor={mobile ? "start" : "middle"} fill={source.color} fontSize={mobile ? 20 : 22} fontWeight="600">{source.label}</text>
              {source.detail && <text x={mobile ? 174 : x} y={mobile ? y + 27 : 215} textAnchor={mobile ? "start" : "middle"} fill="#475569" fontSize={mobile ? 13 : 16}>{source.detail}</text>}
            </g>
          </g>
        );
      })}
      <rect x={mobile ? 10 : 439} y="1" width={mobile ? 200 : 222} height="65" rx="8" fill="#f4f7f8" stroke="#1E293B" className={styles.emsBorder} />
      <g textAnchor="middle">
        <text x={mobile ? 110 : 550} y="29" fill="#1E293B" fontSize="22" fontWeight="600">WXPE EMS</text>
        <text x={mobile ? 110 : 550} y="52" fill="#475569" fontSize="16">Energy Management</text>
        <text x={mobile ? 180 : 550} y={mobile ? 589 : 386} fill="#475569" fontSize="22" fontWeight="600">Industrial Load</text>
      </g>
    </svg>
  );
}

export function EnergyArchitectureSection() {
  return (
    <section id="energy-system" aria-labelledby="energy-system-title" className="scroll-mt-20 border-b border-border bg-[#f4f7f8] py-[70px] md:py-24">
      <div className="container">
        <Reveal distance={8} duration={0.5} className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Energy System Architecture</p>
            <h2 id="energy-system-title" className="section-title mt-[14px] max-w-xl text-[#0b1f33] md:mt-4">One coordinated energy system.</h2>
          </div>
          <div className="w-full lg:justify-self-end">
            <p className="section-description text-pretty">Solar, storage, grid supply and backup generation managed around site demand.</p>
            <ul aria-label="Diagram legend" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm leading-6 text-muted-foreground">
              <li className="inline-flex items-center gap-2"><span aria-hidden="true" className="w-6 border-t-2 border-solid border-[#475569]" />Energy flow</li>
              <li className="inline-flex items-center gap-2"><span aria-hidden="true" className="w-6 border-t border-dotted border-[#64748b]" />EMS coordination</li>
              <li className="inline-flex w-full items-center gap-2"><span aria-hidden="true" className="w-6 text-center text-lg text-[#10B981]">↕</span>Bidirectional flow</li>
            </ul>
          </div>
        </Reveal>
        <figure className="mt-9 border-y border-border py-7 md:mt-12 md:py-10">
          <EnergyDiagram />
          <EnergyDiagram mobile />
        </figure>
      </div>
    </section>
  );
}
