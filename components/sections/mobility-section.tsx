import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { mobilityUseCases } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function MobilitySection() {
  return (
    <section
      id="mobility"
      className="section-padding border-b border-border bg-[#f3f6f8]"
    >
      <div className="container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-[#d2dee6] bg-card shadow-[0_26px_76px_rgba(11,18,32,0.105)]">
            {/*
              Clean temporary EV mobility visual. Replace later with approved
              WXPE EV tricycle photos/videos, avoiding raw brochure pages,
              legacy brochure branding, and unapproved supplier marks.
            */}
            <div className="relative aspect-[16/11]">
              <Image
                src="/assets/wxpe-ev-mobility.png"
                alt="Electric cargo tricycle at an industrial logistics site"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-8">
          <SectionHeading
            title="Electric Mobility as Part of the Local Energy Ecosystem"
            description="WXPE's EV mobility program supports local electric vehicle adoption across last-mile logistics, industrial parks, plantations, warehouses and mobile commerce. It also creates an early pathway for localized battery pack assembly, after-sales capability and commercial fleet electrification."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {mobilityUseCases.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                <CheckCircle2 className="mt-1 size-4 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
