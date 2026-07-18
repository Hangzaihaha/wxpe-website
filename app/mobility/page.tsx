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
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { WxpeLogo } from "@/components/wxpe-logo";
import { navItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "EV Mobility Solutions | WXPE",
  description:
    "WXPE EV mobility solutions for Malaysia's local logistics, industrial parks, warehouses, plantations and commercial fleet applications.",
  alternates: {
    canonical: "/mobility"
  },
  openGraph: {
    title: "EV Mobility Solutions | WXPE",
    description:
      "Smart electric tricycles for local logistics and commercial mobility.",
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

const primaryVideo = {
  title: "Commercial mobility walkaround",
  src: "/assets/mobility/ev-tricycle-video-02.mp4"
} as const;

const mobilityModels = [
  {
    name: "Flag Ship",
    description:
      "Higher-load electric logistics tricycle for industrial sites, municipalities, warehouses and commercial delivery.",
    image: "/assets/mobility/models/flag-ship.webp"
  },
  {
    name: "Black Panther",
    description:
      "Compact electric logistics tricycle for urban delivery, campuses, factories and flexible site operations.",
    image: "/assets/mobility/models/black-panther.webp"
  },
  {
    name: "Warrior",
    description:
      "Versatile electric cargo tricycle for local delivery, small businesses and short-haul operations.",
    image: "/assets/mobility/models/warrior.webp"
  },
  {
    name: "Warrior Courier Cart",
    description:
      "Enclosed electric delivery vehicle for parcels, protected cargo and last-mile logistics.",
    image: "/assets/mobility/models/warrior-courier-cart.webp"
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
    image: "/assets/mobility/features/suspension.webp"
  },
  {
    title: "High-strength cargo structure",
    description: "A reinforced liftable cargo bed supports practical loading and access.",
    image: "/assets/mobility/features/cargo-structure.webp"
  },
  {
    title: "Smart digital dashboard",
    description: "A clear digital display keeps essential operating information visible.",
    image: "/assets/mobility/features/digital-dashboard.webp"
  },
  {
    title: "Forward and reverse drive",
    description: "Integrated controls support precise movement in compact work areas.",
    image: "/assets/mobility/features/drive-control.webp"
  },
  {
    title: "Hill-climbing mode",
    description: "Electric drive capability supports varied site and route conditions.",
    image: "/assets/mobility/features/hill-climbing-motor.webp"
  },
  {
    title: "Local service and parts support",
    description: "WXPE is building local after-sales coordination and service capability.",
    image: "/assets/mobility/features/service-support.webp"
  }
] as const;

const specificationLabels = [
  "Motor power",
  "Estimated range",
  "Maximum load",
  "Vehicle dimensions",
  "Charging time"
] as const;

const mobilitySpecifications = [
  {
    model: "Flag Ship",
    values: [
      "1,800 W",
      "60-80 km",
      "Up to 1,200 kg",
      "3300 x 1299 x 1460 mm",
      "6-8 hours"
    ]
  },
  {
    model: "Black Panther",
    values: [
      "1,500 W",
      "60-80 km",
      "Up to 800 kg",
      "3070 x 1180 x 1410 mm",
      "6-8 hours"
    ]
  },
  {
    model: "Warrior",
    values: [
      "1,200 W",
      "60-80 km",
      "Up to 500 kg",
      "2910 x 1070 x 1365 mm",
      "6-8 hours"
    ]
  },
  {
    model: "Courier Cart",
    values: [
      "1,200 W",
      "60-80 km",
      "Up to 500 kg",
      "2910 x 1070 x 1365 mm",
      "6-8 hours"
    ]
  },
  {
    model: "Mobile Food Cart",
    values: [
      "1,200 W",
      "60-80 km",
      "Up to 500 kg",
      "2910 x 1070 x 1365 mm",
      "6-8 hours"
    ]
  }
] as const;

// TODO: Future media gallery can include additional compressed mobility clips after review.
// Secondary raw clip currently kept in assets: /assets/mobility/ev-tricycle-video-01.mp4

export default function MobilityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate min-h-[760px] border-b border-border pt-[72px]">
        <Image
          src="/assets/mobility/ev-tricycle-banner.jpg"
          alt="Electric tricycles for Malaysia local logistics"
          fill
          priority
          sizes="100vw"
          className="origin-bottom scale-[1.18] object-cover object-bottom md:scale-[1.1]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.76)_0%,rgba(9,31,55,0.48)_34%,rgba(7,17,31,0.07)_70%,rgba(7,17,31,0)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,rgba(238,243,246,0.94)_0%,rgba(238,243,246,0.62)_34%,rgba(238,243,246,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.12)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(84svh-72px)] items-end pb-14 pt-24 md:pb-20">
          <Reveal className="max-w-[480px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              EV MOBILITY ECOSYSTEM
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-[3.05rem]">
              Electric Mobility for Local Logistics
            </h1>
            <p className="mt-5 text-base leading-8 text-white/78">
              Smart electric tricycles for commercial mobility across logistics,
              industrial parks and mobile commerce.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-[2.6rem]">
              Mobility in Motion
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              A closer look at practical electric mobility for commercial and
              industrial use cases.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mx-auto mt-12 w-full max-w-[1120px]">
            <article className="overflow-hidden rounded-xl border border-[#d2dee6] bg-white p-2 shadow-[0_30px_90px_rgba(11,18,32,0.14)] md:p-3">
              <video
                className="aspect-video w-full rounded-lg bg-[#07111f] object-cover"
                controls
                muted
                playsInline
                preload="metadata"
                poster="/assets/mobility/ev-tricycle-banner.jpg"
              >
                <source src={primaryVideo.src} type="video/mp4" />
              </video>
              <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {primaryVideo.title}
                </h3>
                <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                  Controlled playback
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[#f3f6f8] py-24 md:py-32">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Product Models
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.45rem]">
              Practical platforms for local logistics.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {mobilityModels.map((model, index) => (
              <Reveal key={model.name} delay={index * 0.06}>
                <article className="h-full overflow-hidden rounded-lg border border-[#d2dee6] bg-white shadow-[0_18px_54px_rgba(11,18,32,0.07)]">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#dce8f2]">
                    <Image
                      src={model.image}
                      alt={`${model.name} electric logistics tricycle`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Product Reference
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">
                      {model.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                      {model.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10 md:mt-14">
            <article className="grid overflow-hidden rounded-xl border border-[#d2dee6] bg-white shadow-[0_24px_70px_rgba(11,18,32,0.08)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <div className="relative min-h-[320px] overflow-hidden bg-[#dbe7ef] sm:min-h-[420px] lg:min-h-[520px]">
                <Image
                  src="/assets/mobility/models/warrior-mobile-food-cart.webp"
                  alt="Warrior electric mobile food cart"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.015]"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Commercial Mobility
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.35rem]">
                  Mobile Food Cart
                </h3>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  A flexible electric vending platform for food operators, night
                  markets, commercial districts and mobile catering.
                </p>
                <ul className="mt-8 space-y-4">
                  {mobileFoodCartPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/80">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e5f1eb] text-[#2f7457]">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Key Product Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.45rem]">
              Built around everyday commercial use.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {mobilityFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.035}>
                <article>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#eef3f6]">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08} className="mt-16">
            <details className="group border-y border-[#c8d6df] bg-[#f8fafb] px-5 md:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold text-foreground marker:content-none">
                Compare model specifications
                <span
                  className="text-2xl font-light text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="overflow-x-auto border-t border-border pb-7 pt-5">
                <table className="w-full min-w-[980px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="w-[28%] pb-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Specification
                      </th>
                      {mobilitySpecifications.map((item) => (
                        <th
                          key={item.model}
                          className="pb-4 pr-6 text-sm font-semibold text-foreground"
                        >
                          {item.model}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specificationLabels.map((label, rowIndex) => (
                      <tr key={label} className="border-t border-border">
                        <th className="py-4 pr-6 text-sm font-medium text-muted-foreground">
                          {label}
                        </th>
                        {mobilitySpecifications.map((item) => (
                          <td key={item.model} className="py-4 pr-6 text-sm text-foreground">
                            {item.values[rowIndex]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-5 text-xs leading-6 text-muted-foreground">
                  Specifications are reference values and may vary by configuration and future product updates.
                </p>
              </div>
            </details>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[#f3f6f8] py-24 md:py-32">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Use Cases
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.45rem]">
              Focused applications for local commercial mobility.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full min-h-[180px] rounded-lg border border-[#d2dee6] bg-white p-6 shadow-[0_16px_44px_rgba(11,18,32,0.055)]">
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

      <section className="border-b border-border bg-[#eef3f6] py-24 md:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-[2.35rem]">
              A Practical Entry Point for Local Electrification
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-3xl text-lg leading-9 text-muted-foreground">
              EV Mobility supports local commercial electrification while
              creating a pathway for battery pack localization, service
              capability, spare parts support and future fleet energy
              integration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 md:py-24">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-xl bg-[#f3f6f8] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Product Brochure
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground md:text-[2rem]">
                  Explore the Full EV Mobility Range
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
                Interested in EV mobility for your fleet or site?
              </h2>
              <Button asChild size="lg">
                <Link href="/#contact">
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
