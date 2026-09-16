import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { MobilitySpecifications } from "@/components/sections/mobility-specifications";
import { MobilityModelDetails } from "@/components/sections/mobility-model-details";
import { contactData } from "@/lib/contact-data";
import { mobilitySpecifications, cardSpecificationFields, rangeNote } from "@/lib/mobility-specifications";

const modelContent = {
  "Flag Ship": {
    description: "Higher-load electric logistics tricycle for industrial sites, municipalities, warehouses and commercial delivery.",
    image: "/assets/mobility/models/flag-ship.webp",
    imageAlt: "Flag Ship EVMobii electric three-wheeler for Malaysian industrial logistics"
  },
  "Black Panther": {
    description: "Compact electric logistics tricycle for urban delivery, campuses, factories and flexible site operations.",
    image: "/assets/mobility/models/black-panther.webp",
    imageAlt: "Black Panther EVMobii commercial electric tricycle in Malaysia"
  },
  Warrior: {
    description: "Versatile electric cargo tricycle for local delivery, small businesses and short-haul operations.",
    image: "/assets/mobility/models/warrior.webp",
    imageAlt: "Warrior EVMobii battery-powered cargo tricycle for commercial operations"
  },
  "Courier Cart": {
    description: "Enclosed electric delivery vehicle for parcels, protected cargo and last-mile logistics.",
    image: "/assets/mobility/models/warrior-courier-cart.webp",
    imageAlt: "Courier Cart EVMobii electric delivery tricycle for last-mile logistics"
  },
  "Mobile Food Cart": {
    description: "A flexible electric vending platform for food operators, night markets, commercial districts and mobile catering.",
    image: "/assets/mobility/models/warrior-mobile-food-cart.webp",
    imageAlt: "EVMobii Warrior electric mobile food cart in Malaysia"
  }
} satisfies Record<(typeof mobilitySpecifications)[number]["model"], {
  description: string;
  image: string;
  imageAlt: string;
}>;

export function MobilityModels() {
  return (
    <section id="models" aria-labelledby="evmobii-product-models-title" className="section-padding scroll-mt-24 border-b border-border bg-secondary">
      <div className="container">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">EVMobii Product Models</p>
          <h2 id="evmobii-product-models-title" className="section-title mt-4">
            Electric tricycles for Malaysian commercial operations.
          </h2>
          <p className="section-description mt-5">
            Explore EVMobii electric cargo tricycles and commercial electric vehicles for logistics, industrial sites, plantations and last-mile operations in Malaysia.
          </p>
          <Link href="#model-comparison" className="text-link mt-5">
            Compare specifications <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mobilitySpecifications.map((model, index) => {
            const content = modelContent[model.model];
            const inquiry = `${contactData.sales.whatsappHref}?text=${encodeURIComponent(`Hi WXPE, I would like to ask about the EVMobii ${model.model} and suitable configurations for my business.`)}`;
            return (
              <Reveal key={model.model} delay={(index % 3) * 0.04} className="h-full">
                <article data-model={model.model} className="surface-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[3/2] w-full bg-[#eaf0f4]">
                    <Image src={content.image} alt={content.imageAlt} fill quality={95}
                      sizes="(min-width: 1280px) 364px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                      className="object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">{model.model}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground md:min-h-[84px]">{content.description}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-border py-5">
                      {cardSpecificationFields.map((field) => (
                        <div key={field.key} className="min-w-0 text-sm leading-6">
                          <dt className="text-xs leading-5 text-muted-foreground">{field.label}</dt>
                          <dd className="mt-1 font-semibold tabular-nums">{model.specifications[field.key]}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link href={`#specs-${model.id}`} className="text-link mt-4 self-start" aria-label={`Full specifications for ${model.model}`}>
                      Full specifications <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                    <a href={inquiry} target="_blank" rel="noopener noreferrer"
                      aria-label={`Ask about ${model.model} on WhatsApp`}
                      className="text-link mt-auto self-start pt-2">
                      Ask on WhatsApp <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">{rangeNote}</p>
        <MobilitySpecifications />
        <MobilityModelDetails />
      </div>
    </section>
  );
}
