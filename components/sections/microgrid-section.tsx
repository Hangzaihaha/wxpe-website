import Image from "next/image";
import { ArrowRight, BatteryCharging, Factory, Network, PlugZap, SunMedium, Zap } from "lucide-react";

import { Reveal } from "@/components/reveal";

const architecture = [
  { label: "PV", icon: SunMedium },
  { label: "BESS", icon: BatteryCharging },
  { label: "EMS", icon: Network }
] as const;

const outputs = [
  { label: "Grid", icon: Zap },
  { label: "Load", icon: Factory },
  { label: "Backup", icon: PlugZap }
] as const;

export function MicrogridSection() {
  return (
    <section
      id="microgrid"
      className="section-padding relative isolate border-b border-border bg-[linear-gradient(180deg,#ffffff,#eef3f6)]"
    >
      <div className="absolute inset-0 -z-10 quiet-grid opacity-35" />
      <div className="container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[500px] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_26px_76px_rgba(11,18,32,0.105)]">
            {/*
              Temporary reference visual extracted from supplied PDF materials.
              Replace with approved WXPE microgrid/solar hybrid imagery later.
            */}
            <Image
              src="/assets/energy/solar-rooftop-reference-01.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_36%,rgba(7,17,31,0.48)_100%)]" />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Microgrid Architecture
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.5rem]">
              PV, BESS, EMS and site loads coordinated through an integrated
              control layer.
            </h2>
          </div>

          <div className="rounded-lg border border-[#d2dee6] bg-white p-5 shadow-[0_22px_64px_rgba(11,18,32,0.075)] md:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_0.88fr] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-3">
                {architecture.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === architecture.length - 1;

                  return (
                    <div key={step.label} className="relative">
                      <div className="flex min-h-36 flex-col justify-between rounded-md border border-[#d8e2e8] bg-[#f3f6f8] p-5">
                        <Icon className="size-6 text-primary" aria-hidden="true" />
                        <span className="text-lg font-semibold text-foreground">
                          {step.label}
                        </span>
                      </div>
                      {!isLast ? (
                        <ArrowRight
                          className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-muted-foreground sm:block"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <ArrowRight
                className="hidden size-6 text-muted-foreground lg:block"
                aria-hidden="true"
              />

              <div className="grid gap-3">
                {outputs.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-md border border-[#d8e2e8] bg-background p-4"
                    >
                      <Icon className="size-5 text-accent" aria-hidden="true" />
                      <span className="text-base font-semibold text-foreground">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
