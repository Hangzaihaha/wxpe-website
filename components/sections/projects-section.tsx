import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  FileClock,
  SunMedium,
  Truck
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projectReferences } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const supportingCards = [
  {
    item: projectReferences[1],
    icon: SunMedium,
    surface: "bg-[#f8fafb]",
    iconSurface: "bg-[#edf2f5] text-[#385064]",
    layout: "md:col-span-2"
  },
  {
    item: projectReferences[2],
    icon: Truck,
    surface: "bg-[#f5f8f4]",
    iconSurface: "bg-[#e8f1e6] text-[#4c6a4d]",
    layout: "md:col-span-1"
  },
  {
    item: projectReferences[3],
    icon: FileClock,
    surface: "bg-[#faf8f4]",
    iconSurface: "bg-[#f2ece2] text-[#6c6252]",
    layout: "md:col-span-1"
  }
] as const;

const cardClassName =
  "group relative flex h-full flex-col rounded-3xl border border-black/[0.045] shadow-[0_16px_46px_rgba(15,23,42,0.045)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-0.5 hover:border-black/[0.075] hover:shadow-[0_20px_54px_rgba(15,23,42,0.07)]";

function ArrowControl() {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white/70 text-[#314658] transition-[transform,border-color,background-color] duration-300 group-hover:translate-x-0.5 group-hover:border-black/[0.13] group-hover:bg-white">
      <ArrowRight className="size-[18px]" aria-hidden="true" />
    </span>
  );
}

export function ProjectsSection() {
  const bessReference = projectReferences[0];

  return (
    <section id="projects" className="border-b border-border bg-[#f3f6f8] py-20 md:py-28">
      <div className="container flex flex-col gap-11 md:gap-14">
        <Reveal>
          <SectionHeading
            title="Partner Capability References"
            description="Selected technical references and project materials inform WXPE solution planning. Public case studies will be added only after approval and anonymization."
          />
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.38fr)_minmax(360px,1fr)] lg:gap-6">
          <Reveal className="h-full">
            <article
              className={cn(
                cardClassName,
                "min-h-0 overflow-hidden bg-[#fbfcfd]"
              )}
            >
              <div className="flex min-h-[250px] items-center justify-center bg-white px-4 py-6 sm:min-h-[320px] sm:px-6 sm:py-8 lg:min-h-[420px]">
                <Image
                  src="/assets/projects/bess-peak-shaving-load-profile.png"
                  alt="BESS peak shaving load profile showing charging, discharging and target maximum demand"
                  width={1547}
                  height={675}
                  sizes="(min-width: 1024px) 57vw, (min-width: 768px) 90vw, 100vw"
                  className="h-auto w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.01]"
                  priority={false}
                />
              </div>

              <div className="relative flex-1 border-t border-black/[0.055] p-7 sm:p-8 lg:p-9">
                <div className="max-w-xl pb-14 sm:pb-0">
                  <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[#eaf1f5] text-primary lg:hidden">
                    <BatteryCharging className="size-[18px]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-[1.75rem]">
                    {bessReference.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-[0.95rem] sm:leading-7">
                    {bessReference.description}
                  </p>
                </div>
                <div className="absolute bottom-7 right-7 sm:bottom-8 sm:right-8 lg:bottom-9 lg:right-9">
                  <ArrowControl />
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-rows-[minmax(248px,1fr)_minmax(248px,1fr)] lg:gap-6">
            {supportingCards.map(({ item, icon: Icon, surface, iconSurface, layout }, index) => {
              const card = (
                <article
                  className={cn(
                    cardClassName,
                    "min-h-[240px] justify-between gap-6 p-7",
                    surface
                  )}
                >
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl",
                      iconSurface
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <div className="pr-1 pb-12">
                    <div className="max-w-sm">
                      <h3 className="text-xl font-semibold leading-tight text-foreground md:text-[1.35rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-7 right-7">
                    <ArrowControl />
                  </div>
                </article>
              );

              return (
                <Reveal
                  key={item.title}
                  delay={(index + 1) * 0.035}
                  className={cn("h-full", layout)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`${item.title}: ${item.description}`}
                    >
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
