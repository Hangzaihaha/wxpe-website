import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate border-b border-border pt-[72px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_56%,#eef3f6_100%)]" />
      <div className="absolute inset-0 -z-10 quiet-grid opacity-35" />
      <div className="container grid min-h-[88svh] items-center gap-14 py-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:py-24 xl:gap-24">
        <Reveal className="flex max-w-3xl flex-col gap-7">
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.07] tracking-normal text-foreground sm:text-5xl lg:text-[3.7rem]">
            Localized Energy Storage & Microgrid Solutions for Malaysia
          </h1>
          <div className="flex flex-col gap-4">
            <p className="max-w-[40rem] text-[1.0625rem] leading-8 text-muted-foreground">
              WXPE helps industrial and commercial customers reduce demand
              charges, improve power resilience and adopt clean energy through
              battery storage, solar hybrid microgrids and flexible
              Energy-as-a-Service models.
            </p>
            <p className="max-w-xl text-base leading-7 text-foreground/80">
              From project feasibility and technical planning to localized
              delivery, operations support and future-ready digital energy
              assets.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#solutions">
                Explore Solutions
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Start a Pilot Project</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="rounded-[1.35rem] border border-[#d6e1e8] bg-[linear-gradient(135deg,#eef3f6,#f8fafc_54%,#e6eff4)] p-3 shadow-[0_28px_90px_rgba(11,18,32,0.11)] md:p-4">
            <div className="relative overflow-hidden rounded-[1.05rem] border border-[#cad8e1] bg-white p-2 shadow-[0_34px_95px_rgba(11,18,32,0.18)] md:p-3">
              {/*
                Temporary staging image. Replace later with approved real WXPE
                BESS, solar, factory, project photo or project video assets, then
                redesign the media module around the actual asset story.
              */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem] border border-[#d7e2e9] bg-[#eef3f6]">
                <Image
                  src="/assets/wxpe-bess-site.png"
                  alt="Battery energy storage and solar infrastructure at an industrial site"
                  fill
                  priority
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex items-center gap-4 rounded-[0.7rem] border border-[#dbe5ec] bg-white px-4 py-4 md:px-5">
                <div className="flex items-center gap-4">
                  <span className="h-10 w-px rounded-full bg-primary/35" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      C&I energy project pathway
                    </span>
                    <span className="text-sm font-medium leading-6 text-foreground">
                      Storage, solar hybrid, EMS and local delivery support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
