import { ArrowRight, ChevronDown } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contactData } from "@/lib/contact-data";
import { lithiumNote, mobilitySpecifications, specificationFields, type SpecificationDetail } from "@/lib/mobility-specifications";

function DetailGroup({ title, items }: { title: string; items: readonly SpecificationDetail[] }) {
  return (
    <div className="min-w-0">
      <h4 className="text-base font-semibold">{title}</h4>
      <dl className="mt-4 divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="grid gap-1 py-3 text-sm leading-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-5">
            <dt className="text-muted-foreground">{item.label}</dt>
            <dd className="tabular-nums text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function MobilityModelDetails() {
  const powerInquiry = `${contactData.sales.whatsappHref}?text=${encodeURIComponent("Hi, I’m interested in the Mobile Food Cart and would like to discuss onboard power options for my equipment.")}`;
  const lithiumInquiry = `${contactData.sales.whatsappHref}?text=${encodeURIComponent("Hi WXPE, I would like to discuss available lithium battery configurations for my vehicle and operating needs.")}`;

  return (
    <>
      <Reveal className="mt-10 md:mt-14">
        <section id="food-cart-power" aria-labelledby="food-cart-power-title" className="scroll-mt-28 rounded-xl border border-border bg-white p-6 md:p-9">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <h2 id="food-cart-power-title" className="max-w-md text-2xl font-semibold leading-tight tracking-tight md:text-3xl">Onboard Power for Your Mobile Business</h2>
            <div>
              <p className="text-base leading-7 text-muted-foreground">Explore onboard power configurations for your food cart. Contact us to discuss your equipment and power requirements.</p>
              <Button asChild className="mt-6">
                <a href={powerInquiry} target="_blank" rel="noopener noreferrer">Discuss Your Power Needs <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <section id="full-specifications" aria-labelledby="full-specifications-title" className="mt-12 scroll-mt-28 md:mt-16">
        <h2 id="full-specifications-title" className="text-2xl font-semibold tracking-tight">Full model specifications</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {mobilitySpecifications.map((model) => (
            <details key={model.id} id={`specs-${model.id}`} className="group scroll-mt-28">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold md:text-xl">{model.fullName}</h3>
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
              </summary>
              <div className="grid gap-8 pb-8 pt-3 lg:grid-cols-2 lg:gap-x-12">
                <DetailGroup title="Performance & battery" items={specificationFields.slice(0, 6).map((field) => ({ label: field.label, value: model.specifications[field.key] }))} />
                <DetailGroup title="Dimensions & cargo" items={model.dimensions} />
                <DetailGroup title="Driving & chassis" items={model.driving} />
                <div>
                  <DetailGroup title="Features & options" items={model.features} />
                  {model.id === "mobile-food-cart" && <a href="#food-cart-power" className="text-link mt-3">Explore onboard power <ArrowRight className="size-4" aria-hidden="true" /></a>}
                  <a href="#lithium-battery-options" className="text-link mt-3 flex w-fit">Lithium battery options <ArrowRight className="size-4" aria-hidden="true" /></a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="lithium-battery-options" aria-labelledby="lithium-battery-title" className="mt-8 scroll-mt-28 border-l-2 border-primary pl-5 md:mt-10 md:pl-7">
        <h2 id="lithium-battery-title" className="text-xl font-semibold">Lithium battery options</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{lithiumNote}</p>
        <a href={lithiumInquiry} target="_blank" rel="noopener noreferrer" className="text-link mt-3">Discuss Battery Options <ArrowRight className="size-4" aria-hidden="true" /></a>
      </section>
    </>
  );
}
