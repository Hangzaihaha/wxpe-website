"use client";

import { useId, useRef, useState } from "react";
import { Info, X } from "lucide-react";

const explanations: Record<string, { title: string; description: string }> = {
  BESS: {
    title: "Battery Energy Storage System",
    description: "Stores electricity for later use, helping businesses manage energy costs, support power reliability and use more renewable energy."
  },
  EMS: {
    title: "Energy Management System",
    description: "Monitors and coordinates electricity use, storage and supply to help a site operate more efficiently."
  },
  "Peak Shaving": {
    title: "Peak Shaving",
    description: "Uses stored energy or manages loads during high-demand periods, potentially reducing demand-related electricity costs."
  },
  Microgrid: {
    title: "Microgrid",
    description: "A local network that coordinates power generation, storage and electricity use. Independent operation requires an appropriately designed system."
  },
  PV: {
    title: "Solar PV — Solar Photovoltaics",
    description: "Converts sunlight into electricity, helping businesses generate renewable power and reduce reliance on grid supply."
  }
};

export function EnergyTermInfo({ term }: { term: string }) {
  const id = useId();
  const panelRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const explanation = explanations[term];
  if (!explanation) return null;

  return (
    <>
      <button
        type="button"
        popoverTarget={id}
        aria-label={`Explain ${term}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="absolute left-full top-1/2 inline-flex size-6 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={(event) => {
          const panel = panelRef.current;
          if (!panel) return;
          const rect = event.currentTarget.getBoundingClientRect();
          const width = Math.min(288, window.innerWidth - 24);
          panel.style.width = `${width}px`;
          panel.style.left = `${Math.max(12, Math.min(rect.left, window.innerWidth - width - 12))}px`;
          const placeBelow = window.innerHeight - rect.bottom >= 200;
          panel.style.top = placeBelow ? `${rect.bottom + 8}px` : "auto";
          panel.style.bottom = placeBelow ? "auto" : `${window.innerHeight - rect.top + 8}px`;
        }}
      >
        <Info className="size-3" aria-hidden="true" />
      </button>
      <span
        ref={panelRef}
        id={id}
        popover="auto"
        role="dialog"
        aria-labelledby={`${id}-heading`}
        onToggle={(event) => setOpen(event.currentTarget.matches(":popover-open"))}
        style={{ inset: "auto", margin: 0 }}
        className="fixed max-h-[calc(100dvh-24px)] overflow-auto rounded-lg border border-border bg-background p-4 text-sm font-normal normal-case leading-6 tracking-normal text-foreground shadow-sm"
      >
        <span className="flex items-start gap-3">
          <span id={`${id}-heading`} className="flex-1 font-semibold">{explanation.title}</span>
          <button type="button" popoverTarget={id} popoverTargetAction="hide" aria-label="Close explanation" className="inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <X className="size-4" aria-hidden="true" />
          </button>
        </span>
        <span className="mt-2 block text-muted-foreground">{explanation.description}</span>
      </span>
    </>
  );
}
