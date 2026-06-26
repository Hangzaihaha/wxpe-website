import { ArrowRight } from "lucide-react";

import { microgridFlow } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function MicrogridSection() {
  return (
    <section
      id="microgrid"
      className="section-padding relative isolate border-b border-border bg-[linear-gradient(180deg,#ffffff,#f3f6f8)]"
    >
      <div className="absolute inset-0 -z-10 quiet-grid opacity-55" />
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="From Infrastructure to Intelligent Energy Assets"
            description="WXPE's digital energy architecture helps convert physical energy infrastructure into intelligent, measurable and scalable energy assets."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-5 shadow-[0_22px_70px_rgba(11,18,32,0.08)] md:p-8">
            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {microgridFlow.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === microgridFlow.length - 1;

                return (
                  <div key={step.label} className="relative">
                    <div className="flex min-h-40 flex-col justify-between rounded-md border border-border bg-[#f7f9fb] p-5">
                      <Icon className="size-6 text-primary" aria-hidden="true" />
                      <h3 className="text-base font-semibold leading-snug text-foreground">
                        {step.label}
                      </h3>
                    </div>
                    {!isLast ? (
                      <ArrowRight
                        className="absolute -right-5 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-muted-foreground xl:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                The public positioning stays focused on future-ready energy asset
                platforms and scalable energy infrastructure, without overstating
                downstream commercialization pathways before they are ready.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
