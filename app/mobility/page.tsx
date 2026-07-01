import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  PackageCheck,
  Store,
  Tractor,
  Truck
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

const primaryVideo = {
  title: "Commercial mobility walkaround",
  src: "/assets/mobility/ev-tricycle-video-02.mp4"
} as const;

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
