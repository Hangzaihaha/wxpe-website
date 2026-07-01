import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[86svh] overflow-hidden border-b border-border pt-[72px] md:min-h-[88svh] lg:min-h-[90svh]">
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
        className="absolute inset-0 -z-20 object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.82)_36%,rgba(255,255,255,0.24)_66%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_46%,rgba(6,20,36,0.13)_100%)]" />
      <div className="absolute inset-0 -z-10 quiet-grid opacity-[0.12]" />
      {/*
        This soft local mask keeps temporary third-party equipment branding
        from becoming a hero focal point.
      */}
      <div
        className="pointer-events-none absolute bottom-[25%] right-[18%] z-0 hidden h-24 w-56 rounded-full bg-[#f5f8fa]/70 blur-2xl md:block"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-1 items-center py-14 md:py-20">
        <Reveal className="flex max-w-[42rem] flex-col gap-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            LOCALIZED DIGITAL ENERGY
          </span>
          <h1 className="text-balance text-[3rem] font-semibold leading-[1.02] tracking-normal text-foreground sm:text-[3.75rem] lg:text-[4.6rem]">
            <span className="block">Localized Energy Storage</span>
            <span className="block">for Malaysia</span>
          </h1>
          <div className="flex flex-col gap-6">
            <p className="max-w-[34rem] text-[1.1rem] leading-8 text-foreground/80">
              Battery storage, solar hybrid microgrids and flexible energy
              deployment models.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/62">
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
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Start a Pilot Project</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
