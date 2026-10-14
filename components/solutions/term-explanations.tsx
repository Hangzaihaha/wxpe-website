import { ChevronDown, Info } from "lucide-react";
import { energyTerms, type EnergyTermKey } from "@/lib/energy-solutions";

export function TermExplanations({ terms }: { terms: readonly EnergyTermKey[] }) {
  return (
    <div className="border-t border-border pt-2">
      {terms.map((key) => {
        const term = energyTerms[key];
        return (
          <details key={key} className="group">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-medium text-primary outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              <Info className="size-4 shrink-0" aria-hidden="true" />
              <span>What is {term.label}?</span>
              <ChevronDown className="ml-auto size-4 shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="pb-4 pl-6 text-sm leading-6 text-muted-foreground">
              {term.name !== term.label && <p className="mb-1 font-medium text-foreground">{term.name}</p>}
              <p>{term.description}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
