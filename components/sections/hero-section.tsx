import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[88svh] overflow-hidden border-b border-border pt-[72px] md:min-h-[90svh] lg:min-h-[92svh]">
      {/*
        Approved temporary hero image. Replace with clean WXPE-owned project
        photography or video when available, then revisit the crop/composition.
      */}
      <Image
        src="/assets/energy/home-hero-energy-storage.jpg"
        alt="Solar panels and battery energy storage infrastructure"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 origin-left scale-[1.18] object-cover object-[38%_center] md:scale-[1.28] md:object-[46%_center] lg:scale-[1.36] lg:object-[50%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,18,32,0.58)_0%,rgba(4,18,32,0.42)_34%,rgba(4,18,32,0.22)_62%,rgba(4,18,32,0.08)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,18,32,0.08)_0%,rgba(4,18,32,0)_45%,rgba(4,18,32,0.24)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(4,18,32,0)_46%,rgba(4,18,32,0.12)_72%,rgba(4,18,32,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 quiet-grid opacity-[0.12]" />

      <div className="container relative z-10 flex flex-1 items-center py-14 md:py-20">
        <Reveal className="flex max-w-[42rem] flex-col gap-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9fe8c2]">
            LOCALIZED DIGITAL ENERGY
          </span>
          <h1 className="text-balance text-[3rem] font-semibold leading-[1.02] tracking-normal text-white sm:text-[3.75rem] lg:text-[4.6rem]">
            <span className="block">Localized Energy Storage</span>
            <span className="block">for Malaysia</span>
          </h1>
          <div className="flex flex-col gap-6">
            <p className="max-w-[34rem] text-[1.1rem] leading-8 text-white/85">
              Battery storage, solar hybrid microgrids and flexible energy
              deployment models.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              <span>BESS</span>
              <span>Solar Hybrid</span>
              <span>EMS</span>
              <span>Energy-as-a-Service</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#solutions">
                Explore Solutions
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white shadow-sm backdrop-blur-md hover:bg-white/20"
            >
              <a href="#contact">Start a Pilot Project</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
