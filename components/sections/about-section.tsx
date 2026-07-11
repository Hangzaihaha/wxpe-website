import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

const heritagePoints = [
  "Manufacturing Heritage",
  "International Experience",
  "Digital Energy Transition"
] as const;

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-16 md:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About WXPE
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground md:text-[2.65rem]">
            From Manufacturing Heritage to Digital Energy
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            WXPE brings decades of Malaysian manufacturing, OEM supply and
            international partnership experience into energy storage,
            microgrids and electric mobility.
          </p>

          <div className="mt-7 border-y border-border py-5">
            {heritagePoints.map((point) => (
              <div key={point} className="flex items-center gap-3 py-1.5">
                <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            Discover Our Story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#cfdae1] bg-[#e7edf1] shadow-[0_20px_54px_rgba(11,18,32,0.09)]">
            <Image
              src="/assets/about/factory-exterior.webp"
              alt="Malaysian industrial warehouse exterior"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
