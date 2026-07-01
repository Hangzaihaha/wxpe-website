import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border pt-[72px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#fafbfd_44%,#eef3f6_100%)]" />
      <div className="absolute inset-0 -z-10 quiet-grid opacity-25" />
      <div className="container grid min-h-[90svh] items-center gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20 xl:gap-20">
        <Reveal className="flex max-w-2xl flex-col gap-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            LOCALIZED DIGITAL ENERGY
          </span>
          <h1 className="text-balance text-[2.9rem] font-semibold leading-[1.02] tracking-normal text-foreground sm:text-[3.45rem] lg:text-[4.15rem]">
            <span className="block">Localized Energy Storage</span>
            <span className="block">for Malaysia</span>
          </h1>
          <div className="flex flex-col gap-3">
            <p className="max-w-[38rem] text-[1.08rem] leading-8 text-muted-foreground">
              Battery storage, solar hybrid microgrids and flexible energy
              deployment models for industrial and commercial sites.
            </p>
            <p className="max-w-[34rem] text-base leading-7 text-foreground/80">
              From technical planning to localized delivery and long-term
              operation support.
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

        <Reveal delay={0.12} className="relative lg:-mr-6 xl:-mr-12">
          <div className="absolute -inset-x-6 -inset-y-5 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,#eef3f6_0%,#ffffff_44%,#e6eff4_100%)]" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-[#cbd9e2] bg-[#eef3f6] shadow-[0_34px_100px_rgba(11,18,32,0.16)]">
            {/*
              Temporary staging image. Replace later with approved real WXPE
              BESS, solar, factory, project photo or project video assets, then
              redesign the media module around the actual asset story.
            */}
            <div className="relative aspect-[16/11] min-h-[360px] overflow-hidden md:min-h-[500px] lg:min-h-[560px]">
              <Image
                src="/assets/energy/bess-container-site-01.jpg"
                alt="Battery energy storage equipment installed at an industrial site"
                fill
                priority
                sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_48%,rgba(5,15,28,0.34)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex max-w-[30rem] items-center gap-4 rounded-md border border-white/30 bg-[#07111f]/75 px-4 py-3 text-white shadow-[0_16px_44px_rgba(5,15,28,0.16)] backdrop-blur-md">
                  <span className="h-9 w-px rounded-full bg-[#4dd58a]/70" aria-hidden="true" />
                  <p className="text-sm font-medium leading-6 text-white/90">
                    Storage, solar hybrid, EMS and local delivery support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
