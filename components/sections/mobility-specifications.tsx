"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { batteryNote, chargingNote, mobilitySpecifications, rangeNote, specificationFields, specificationNote } from "@/lib/mobility-specifications";

export function MobilitySpecifications() {
  const [selectedModel, setSelectedModel] = useState<string>(
    mobilitySpecifications[0].model
  );

  const selectedSpecifications =
    mobilitySpecifications.find((item) => item.model === selectedModel) ??
    mobilitySpecifications[0];

  return (
    <Reveal className="mt-14 md:mt-20">
      <section id="model-comparison" aria-labelledby="model-comparison-title" className="scroll-mt-28 rounded-xl border border-border bg-[#f8fafb] px-5 md:px-8">
        <h2 id="model-comparison-title" className="py-6 text-2xl font-semibold tracking-tight">
          Compare model specifications
        </h2>

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
                  <dd className="text-right text-sm font-medium leading-6 tabular-nums text-foreground">
                    {selectedSpecifications.specifications[field.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden md:block">
            <div
              tabIndex={0}
              role="region"
              aria-label="Model specifications comparison table"
              className="overflow-x-auto overscroll-x-contain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <table aria-describedby="model-specification-note" className="w-full min-w-[960px] table-fixed border-collapse text-left">
                <caption className="sr-only">EVMobii model specifications</caption>
                <thead className="sticky top-0 z-20 bg-[#f8fafb] shadow-[0_1px_0_0_#d2dee6]">
                  <tr>
                    <th scope="col" className="sticky left-0 z-30 w-[18%] bg-[#f8fafb] py-5 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Specification
                    </th>
                    {mobilitySpecifications.map((item) => (
                      <th
                        key={item.model}
                        scope="col"
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
                      <th scope="row" className="sticky left-0 z-10 bg-[#f8fafb] py-4 pr-6 text-sm font-medium text-muted-foreground transition-colors group-hover/row:bg-[#eef5f9]">
                        {field.label}
                      </th>
                      {mobilitySpecifications.map((item) => (
                        <td
                          key={item.model}
                          className="py-4 pr-4 text-sm leading-6 tabular-nums text-foreground"
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

          <div id="model-specification-note" className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
            <p>{rangeNote}</p>
            <p>{chargingNote}</p>
            <p>{batteryNote}</p>
            <p>{specificationNote}</p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
