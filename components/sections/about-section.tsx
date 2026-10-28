import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

const heritagePoints = [
  "Manufacturing Heritage",
  "Energy Technology Partnerships",
  "Localized Clean Technology Deployment"
] as const;

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-[70px] md:py-24">
      <div className="mx-auto grid w-full max-w-[1360px] gap-[42px] px-5 md:gap-12 lg:grid-cols-[0.78fr_1.1fr] lg:items-center lg:gap-16 xl:gap-20">
        <Reveal className="max-w-xl">
          <p className="home-eyebrow">
            About WXPE
          </p>
          <h2 className="mt-[14px] text-balance text-3xl font-semibold leading-tight text-foreground md:mt-4 md:text-[2.65rem]">
            From Manufacturing Heritage to Digital Energy
          </h2>
          <p className="mt-[18px] text-base leading-8 text-muted-foreground md:mt-5">
            WXPE combines decades of Malaysian manufacturing experience,
            energy technology partnerships and localized deployment capability
            across{" "}
            <Link
              href="/solutions"
              className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
            >
              Battery Energy Storage Systems
            </Link>
            ,{" "}
            <Link
              href="/solutions"
              className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
            >
              Solar Hybrid Microgrids
            </Link>{" "}
            and{" "}
            <Link
              href="/mobility"
              className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
            >
              EVMobii commercial electric mobility
            </Link>
            .
          </p>

          <div className="mt-6 border-y border-border py-[18px] md:mt-7 md:py-5">
            {heritagePoints.map((point) => (
              <div key={point} className="flex items-center gap-3 py-1.5">
                <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="home-cta mt-6 md:mt-7"
          >
            Discover Our Story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="home-media relative bg-[#e7edf1] shadow-[0_24px_64px_rgba(11,18,32,0.11)]">
            <Image
              src="/assets/about/wxpe-team-manufacturing-site.jpg"
              alt="WXPE team at manufacturing facility in Malaysia"
              width={2048}
              height={963}
              sizes="(min-width: 1360px) 735px, (min-width: 1024px) 55vw, calc(100vw - 40px)"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
