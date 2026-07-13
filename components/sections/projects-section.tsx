import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  FileClock,
  SunMedium,
  Truck
} from "lucide-react";

import { projectReferences } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const cardLayouts = [
  "md:col-span-2 lg:col-span-6 lg:row-span-2",
  "md:col-span-2 lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3"
] as const;

const cardSurfaces = [
  "bg-[#e8f0f4]",
  "bg-white",
  "bg-[#f6f8f9]",
  "bg-[#eef3f5]"
] as const;

const cardIcons = [BatteryCharging, SunMedium, Truck, FileClock] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border bg-[#f3f6f8] py-20 md:py-28">
      <div className="container flex flex-col gap-12 md:gap-14">
        <Reveal>
          <SectionHeading
            title="Partner Capability References"
            description="Selected technical references and project materials inform WXPE solution planning. Public case studies will be added only after approval and anonymization."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:auto-rows-[minmax(210px,auto)] lg:grid-cols-12 md:gap-6">
          {projectReferences.map((item, index) => {
            const Icon = cardIcons[index];
            const featured = index < 2;
            const card = (
              <article
                className={cn(
                  "group flex h-full min-h-56 flex-col justify-between gap-8 rounded-3xl p-7 shadow-[0_18px_55px_rgba(11,18,32,0.045)] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_22px_64px_rgba(11,18,32,0.065)] md:p-8",
                  cardSurfaces[index]
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/75 text-primary shadow-[0_8px_24px_rgba(11,18,32,0.04)]">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-[18px] text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className={cn("flex flex-col gap-3", featured && "max-w-xl")}>
                  <h3
                    className={cn(
                      "font-semibold leading-tight text-foreground",
                      index === 0
                        ? "text-2xl md:text-3xl"
                        : featured
                          ? "text-2xl"
                          : "text-xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground md:text-[0.95rem] md:leading-7">
                    {item.description}
                  </p>
                </div>
              </article>
            );

            return (
              <Reveal
                key={item.title}
                delay={index * 0.035}
                className={cn("h-full", cardLayouts[index])}
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
    </section>
  );
}
