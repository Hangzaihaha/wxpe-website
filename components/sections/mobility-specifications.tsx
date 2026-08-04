"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

import { Reveal } from "@/components/reveal";

const specificationFields = [
  { key: "motorPower", label: "Motor power" },
  { key: "estimatedRange", label: "Estimated range" },
  { key: "maximumLoad", label: "Maximum load" },
  { key: "vehicleDimensions", label: "Vehicle dimensions" },
  { key: "chargingTime", label: "Charging time" }
] as const;

type SpecificationKey = (typeof specificationFields)[number]["key"];

type MobilitySpecification = {
  model: string;
  specifications: Record<SpecificationKey, string>;
};

const mobilitySpecifications = [
  {
    model: "Flag Ship",
    specifications: {
      motorPower: "1,800 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 1,200 kg",
      vehicleDimensions: "3300 × 1299 × 1460 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Black Panther",
    specifications: {
      motorPower: "1,500 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 800 kg",
      vehicleDimensions: "3070 × 1180 × 1410 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Warrior",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Courier Cart",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Mobile Food Cart",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  }
] satisfies readonly MobilitySpecification[];

const specificationNote =
  "Specifications are reference values and may vary by configuration and future product updates.";

export function MobilitySpecifications() {
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState(
    mobilitySpecifications[0].model
  );

  const selectedSpecifications =
    mobilitySpecifications.find((item) => item.model === selectedModel) ??
    mobilitySpecifications[0];

  return (
    <Reveal delay={0.08} className="mt-10 md:mt-16">
      <details
        className="group border-y border-[#c8d6df] bg-[#f8fafb] px-5 md:px-8"
        onToggle={(event) => {
          if (event.currentTarget.open && desktopScrollRef.current) {
            desktopScrollRef.current.scrollLeft = 0;
          }
        }}
      >
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-4 text-base font-semibold text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8fafb] md:py-6 md:text-lg">
          Compare model specifications
          <ChevronDown
            aria-hidden="true"
            className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
          />
        </summary>

        <div className="border-t border-border pb-7">
          <div className="pt-5 md:hidden">
            <label
              htmlFor="mobility-model-selector"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              Select model
            </label>
            <div className="relative mt-2">
              <select
                id="mobility-model-selector"
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
                className="min-h-11 w-full appearance-none rounded-lg border border-[#c8d6df] bg-white px-4 pr-11 text-sm font-semibold text-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25"
              >
                {mobilitySpecifications.map((item) => (
                  <option key={item.model} value={item.model}>
                    {item.model}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-primary"
              />
            </div>

            <dl className="mt-5 divide-y divide-border border-y border-border">
              {specificationFields.map((field) => (
                <div
                  key={field.key}
                  className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 py-4"
                >
                  <dt className="text-sm leading-6 text-muted-foreground">
                    {field.label}
                  </dt>
                  <dd className="text-right text-sm font-medium leading-6 text-foreground">
                    {selectedSpecifications.specifications[field.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden md:block">
            <div
              ref={desktopScrollRef}
              className="overflow-x-auto overscroll-x-contain"
            >
              <table className="w-full min-w-[980px] border-collapse text-left">
                <thead className="sticky top-0 z-20 bg-[#f8fafb] shadow-[0_1px_0_0_#d2dee6]">
                  <tr>
                    <th className="sticky left-0 z-30 w-[28%] bg-[#f8fafb] py-5 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Specification
                    </th>
                    {mobilitySpecifications.map((item) => (
                      <th
                        key={item.model}
                        className="py-5 pr-6 text-sm font-semibold text-foreground"
                      >
                        {item.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specificationFields.map((field) => (
                    <tr
                      key={field.key}
                      className="group/row border-t border-border transition-colors hover:bg-primary/[0.045]"
                    >
                      <th className="sticky left-0 z-10 bg-[#f8fafb] py-4 pr-6 text-sm font-medium text-muted-foreground transition-colors group-hover/row:bg-[#eef5f9]">
                        {field.label}
                      </th>
                      {mobilitySpecifications.map((item) => (
                        <td
                          key={item.model}
                          className="py-4 pr-6 text-sm text-foreground"
                        >
                          {item.specifications[field.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-muted-foreground">
            {specificationNote}
          </p>
        </div>
      </details>
    </Reveal>
  );
}
