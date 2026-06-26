import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate border-b border-border pt-[72px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_62%,#f3f6f8_100%)]" />
      <div className="absolute inset-0 -z-10 quiet-grid opacity-45" />
      <div className="container grid min-h-[86svh] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <Reveal className="flex max-w-3xl flex-col gap-7">
          <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-normal text-foreground md:text-6xl">
            Building Malaysia&apos;s Localized Digital Energy Future
          </h1>
          <div className="flex flex-col gap-4">
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              WXPE develops integrated green energy solutions combining battery
              energy storage, EMS, AI optimization, solar hybrid systems and
              localized project delivery for Malaysia&apos;s industrial and
              commercial sectors.
            </p>
            <p className="max-w-xl text-base leading-7 text-foreground/80">
              From physical energy infrastructure to intelligent, scalable and
              future-ready energy assets.
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
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_80px_rgba(11,18,32,0.12)]">
            {/*
              Temporary staging image. When WXPE provides real photos or video,
              redesign the hero media composition around the actual asset story
              instead of simply swapping this file.
            */}
            <div className="image-vignette relative aspect-[4/3]">
              <Image
                src="/assets/wxpe-bess-site.png"
                alt="Battery energy storage and solar infrastructure at an industrial site"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 border-t border-border/80 bg-white/86 p-4 backdrop-blur-md">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Integrated site strategy
                </span>
                <span className="text-sm font-medium text-foreground">
                  Storage, solar hybrid, controls and local delivery
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
