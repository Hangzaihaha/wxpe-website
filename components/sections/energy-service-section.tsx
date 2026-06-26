import { CheckCircle2 } from "lucide-react";

import {
  commercialModels,
  flexibleModel,
  traditionalModel
} from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function EnergyServiceSection() {
  return (
    <section id="eaas" className="section-padding border-b border-border bg-[#f7f9fb]">
      <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            title="Flexible Energy-as-a-Service Models"
            description="Lower CAPEX. Lower Risk. Faster Adoption."
          />
          <p className="text-base leading-8 text-muted-foreground">
            Not every customer wants to invest heavily upfront. WXPE supports
            flexible commercial models designed to reduce capital burden,
            simplify decision-making and accelerate clean energy adoption.
          </p>
          <div className="flex flex-wrap gap-3">
            {commercialModels.map((model) => (
              <span
                key={model}
                className="rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground shadow-sm"
              >
                {model}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid overflow-hidden rounded-lg border border-border bg-border shadow-[0_22px_70px_rgba(11,18,32,0.08)] md:grid-cols-2">
            <ModelPanel
              title="Traditional CAPEX Model"
              items={traditionalModel}
              tone="muted"
            />
            <ModelPanel
              title="WXPE Flexible Energy Model"
              items={flexibleModel}
              tone="accent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ModelPanel({
  title,
  items,
  tone
}: {
  title: string;
  items: readonly string[];
  tone: "muted" | "accent";
}) {
  return (
    <article className="flex min-h-[420px] flex-col gap-8 bg-card p-7">
      <div className="flex flex-col gap-3">
        <span
          className={
            tone === "accent"
              ? "h-1 w-16 rounded-sm bg-accent"
              : "h-1 w-16 rounded-sm bg-muted-foreground/45"
          }
        />
        <h3 className="text-2xl font-semibold tracking-normal text-foreground">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
            <CheckCircle2
              className={tone === "accent" ? "mt-1 size-4 text-accent" : "mt-1 size-4 text-muted-foreground"}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
