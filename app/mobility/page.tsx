import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Download,
  Factory,
  PackageCheck,
  Store,
  Tractor,
  Truck
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  MobilityHero,
  MobilityVideoSection
} from "@/components/sections/mobility-media-sections";
import { MobilityModels } from "@/components/sections/mobility-models";
import {
  MobilityEcosystemSection,
  MobilityEnergyTransitionSection,
  WhyEVMobiiSection
} from "@/components/sections/mobility-strategy-sections";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { WxpeLogo } from "@/components/wxpe-logo";
import { navItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "EVMobii Electric Tricycles Malaysia | WXPE",
  description:
    "EVMobii is WXPE's commercial electric mobility brand in Malaysia for electric cargo, delivery and commercial three-wheeler applications.",
  keywords: [
    "EVMobii",
    "EVMobii Malaysia",
    "WXPE EVMobii",
    "electric tricycle Malaysia",
    "electric cargo tricycle Malaysia",
    "commercial electric mobility Malaysia",
    "commercial electric tricycle",
    "electric delivery tricycle",
    "electric three-wheeler",
    "battery-powered cargo tricycle"
  ],
  alternates: {
    canonical: "/mobility"
  },
  openGraph: {
    title: "EVMobii Electric Tricycles Malaysia | WXPE",
    description:
      "EVMobii is WXPE's Malaysian commercial electric mobility brand for electric cargo, delivery and industrial three-wheeler applications.",
    url: "/mobility",
    images: ["/assets/mobility/ev-tricycle-banner.jpg"]
  }
};

const useCases = [
  {
    title: "Last-Mile Delivery",
    description: "Compact electric mobility for short-distance commercial routes.",
    icon: Truck
  },
  {
    title: "Factory & Warehouse Mobility",
    description: "Site-level transport for people, goods and daily operations.",
    icon: Factory
  },
  {
    title: "Plantation & Municipal Use",
    description: "Practical mobility for outdoor work sites and local services.",
    icon: Tractor
  },
  {
    title: "Mobile Food Cart",
    description: "Electric platforms for flexible small business operations.",
    icon: Store
  },
  {
    title: "Courier Cart",
    description: "Efficient cargo movement for urban and township delivery.",
    icon: PackageCheck
  },
  {
    title: "Industrial Park Operations",
    description: "Low-emission transport for campuses and industrial zones.",
    icon: Building2
  }
] as const;

const mobileFoodCartPoints = [
  "Customizable stainless-steel service area",
  "Supports multiple cooking and vending formats",
  "External power capability with battery options",
  "Suitable for events, night markets and commercial sites"
] as const;

const mobilityFeatures = [
  {
    title: "Automotive-grade suspension",
    description: "External spring shock absorbers support stable commercial operation.",
    image: "/assets/mobility/features/suspension.webp",
    imageAlt: "EVMobii commercial electric tricycle suspension detail"
  },
  {
    title: "High-strength cargo structure",
    description: "A reinforced liftable cargo bed supports practical loading and access.",
    image: "/assets/mobility/features/cargo-structure.webp",
    imageAlt: "Reinforced EVMobii electric cargo tricycle structure"
  },
  {
    title: "Smart digital dashboard",
    description: "A clear digital display keeps essential operating information visible.",
    image: "/assets/mobility/features/digital-dashboard.webp",
    imageAlt: "EVMobii electric tricycle digital dashboard"
  },
  {
    title: "Forward and reverse drive",
    description: "Integrated controls support precise movement in compact work areas.",
    image: "/assets/mobility/features/drive-control.webp",
    imageAlt: "Forward and reverse controls on an EVMobii electric tricycle"
  },
  {
    title: "Hill-climbing mode",
    description: "Electric drive capability supports varied site and route conditions.",
    image: "/assets/mobility/features/hill-climbing-motor.webp",
    imageAlt: "EVMobii electric tricycle drive motor for Malaysian commercial sites"
  },
  {
    title: "LED Headlight",
    description: "A front-mounted LED headlight forms part of the vehicle's lighting system.",
    image: "/assets/mobility/features/service-support.webp",
    imageAlt: "Front LED headlight and turn indicators on an EVMobii electric tricycle"
  }
] as const;

// TODO: Future media gallery can include additional compressed mobility clips after review.
// Secondary raw clip currently kept in assets: /assets/mobility/ev-tricycle-video-01.mp4

export default function MobilityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <MobilityHero />
      <MobilityModels />

      <section id="product-features" className="section-padding scroll-mt-24 border-b border-border bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Key Product Features
            </p>
            <h2 className="section-title mt-4">
              Built around everyday commercial use.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {mobilityFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.035}>
                <article className="h-full">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#eef3f6]">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 pb-3">
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-border pt-8">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
              <h3 className="text-xl font-semibold">Mobile Food Cart</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {mobileFoodCartPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[#f3f6f8] section-padding">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Use Cases
            </p>
            <h2 className="section-title mt-4">
              Commercial electric mobility applications in Malaysia.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="surface-card h-full min-h-[180px] p-6">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-10 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="mobility-local-support-title" className="section-padding border-b border-border bg-background">
        <div className="container grid gap-6 md:grid-cols-2 md:gap-12">
          <Reveal><h2 id="mobility-local-support-title" className="section-title">Local service and parts support</h2></Reveal>
          <Reveal delay={0.05}>
            <p className="section-description">WXPE is building local after-sales coordination and service capability.</p>
            <Link href="/contact" className="text-link mt-5">Discuss support for your application <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <WhyEVMobiiSection />
      <section
        aria-labelledby="mobility-real-work-title"
        className="border-b border-border bg-background py-20 md:py-28"
      >
        <div className="container">
          <Reveal className="grid gap-5 md:grid-cols-2 md:items-end md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <h2
              id="mobility-real-work-title"
              className="section-title"
            >
              Built for Real Work
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              Practical electric mobility, designed around how businesses
              actually use their vehicles every day.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-9 md:mt-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#d2dee6] bg-[#dce2e6] shadow-[0_22px_64px_rgba(11,18,32,0.08)] sm:aspect-[3/2] lg:aspect-[16/10]">
              <Image
                src="/assets/mobility/mobility-manufacturing-floor.jpg"
                alt="Industrial robotic welding equipment and steel fabrication fixtures on a mobility production floor"
                fill
                quality={95}
                sizes="(min-width: 1440px) 1280px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-[50%_52%] sm:object-[50%_44%] lg:object-[50%_36%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <MobilityVideoSection />
      <MobilityEcosystemSection />
      <MobilityEnergyTransitionSection />

      <section id="brochure" className="section-padding scroll-mt-24 border-b border-border bg-background">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-xl bg-[#f3f6f8] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Product Brochure
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground md:text-[2rem]">
                  Explore the Full EVMobii Range
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  View complete model specifications, product features and
                  application options.
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                <a
                  href="/downloads/evmobii-product-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Download Product Brochure
                  <Download className="size-4" aria-hidden="true" />
                </a>
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  PDF · 15 pages
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-8 border-t border-[#d2dee6] pt-12 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-foreground md:text-[2.4rem]">
                Interested in EVMobii mobility for your fleet or site?
              </h2>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Mobility Discussion
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <footer className="relative left-1/2 mt-24 w-screen -translate-x-1/2 bg-[#07111f] px-5 py-10 text-white md:py-12">
          <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <WxpeLogo inverted />
              <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
                Localized Energy Storage, Microgrid and Digital Energy Solutions.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/68 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </section>
    </main>
  );
}
