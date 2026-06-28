import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Factory,
  PackageCheck,
  Route,
  Store,
  Tractor,
  Truck,
  Wrench
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "EV Mobility Solutions | WXPE",
  description:
    "WXPE EV mobility solutions for Malaysia's local logistics, industrial parks, warehouses, plantations and commercial fleet applications.",
  openGraph: {
    title: "EV Mobility Solutions | WXPE",
    description:
      "Smart electric tricycles for local logistics and commercial mobility.",
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

const highlights = [
  { title: "Practical commercial mobility", icon: Route },
  { title: "Local service and after-sales support", icon: Wrench },
  { title: "Battery pack localization pathway", icon: BatteryCharging },
  { title: "Fleet and logistics applications", icon: Truck },
  { title: "Suitable for urban and industrial use cases", icon: Building2 }
] as const;

const videos = [
  {
    title: "Commercial mobility walkaround",
    src: "/assets/mobility/ev-tricycle-video-01.mp4"
  },
  {
    title: "Electric tricycle field footage",
    src: "/assets/mobility/ev-tricycle-video-02.mp4"
  }
] as const;

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.78)_0%,rgba(9,31,55,0.52)_36%,rgba(7,17,31,0.08)_72%,rgba(7,17,31,0)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[34%] bg-[linear-gradient(180deg,rgba(238,243,246,0.82)_0%,rgba(238,243,246,0.38)_36%,rgba(238,243,246,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.2)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(84svh-72px)] items-end pb-14 pt-24 md:pb-20">
          <Reveal className="max-w-2xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              EV Mobility Ecosystem
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-[3.45rem]">
              Electric Mobility for Malaysia&apos;s Local Logistics
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/78 md:text-lg">
              Smart electric tricycles for last-mile delivery, industrial parks,
              warehouse mobility, plantations, municipal use and mobile
              commerce.
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-foreground hover:bg-white/90">
              <Link href="/#contact">
                Discuss Mobility Solutions
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[#f3f6f8] py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Use Cases
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-foreground md:text-[2.5rem]">
              Local mobility applications with real operating value.
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="min-h-[172px] rounded-lg border border-[#d2dee6] bg-white p-5 shadow-[0_16px_44px_rgba(11,18,32,0.055)]">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-8 text-lg font-semibold text-foreground">
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

      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Mobility In Motion
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.35rem]">
              Optional media for product context.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              These raw clips are available on demand with controls and poster
              fallback to keep the page lightweight.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {videos.map((video, index) => (
              <Reveal key={video.src} delay={index * 0.08}>
                <article className="overflow-hidden rounded-lg border border-[#d2dee6] bg-white shadow-[0_18px_54px_rgba(11,18,32,0.075)]">
                  <video
                    className="aspect-video w-full bg-[#07111f] object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    poster="/assets/mobility/ev-tricycle-banner.jpg"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="px-5 py-4">
                    <h3 className="text-sm font-semibold text-foreground">
                      {video.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[#eef3f6] py-24 md:py-32">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why It Matters To WXPE
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.35rem]">
              Mobility as a practical localization catalyst.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-3xl text-lg leading-9 text-muted-foreground">
              EV Mobility supports local EV adoption and creates a practical
              pathway for battery pack localization, after-sales capability,
              spare parts support and commercial fleet electrification.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Capability Highlights
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.35rem]">
              Built around practical fleet and site needs.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-[#d2dee6] bg-white p-5 shadow-[0_14px_38px_rgba(11,18,32,0.055)]">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-8 text-base font-semibold leading-6 text-foreground">
                      {item.title}
                    </h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="rounded-lg border border-[#d2dee6] bg-white p-8 shadow-[0_24px_72px_rgba(11,18,32,0.08)] md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Start A Mobility Discussion
              </p>
              <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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
            </div>
          </Reveal>
        </div>

        <footer className="relative left-1/2 mt-24 w-screen -translate-x-1/2 bg-[#07111f] px-5 py-10 text-white md:py-12">
          <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <div className="text-lg font-semibold text-white">WXPE</div>
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
