import Image from "next/image";
import Link from "next/link";

import { energySolutions } from "@/lib/energy-solutions";
import { TermExplanations } from "@/components/solutions/term-explanations";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            title="Core Solutions"
            description="Four focused solution pillars for industrial and commercial energy sites in Malaysia."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {energySolutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  id={item.id}
                  className="surface-card group flex h-full scroll-mt-32 flex-col overflow-hidden transition-colors duration-200 hover:border-primary/35"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#eef3f6]">
                    {/*
                      Temporary reference visual extracted from supplied PDF materials.
                      Replace with approved WXPE energy project photos later.
                    */}
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_48%,rgba(7,17,31,0.34)_100%)]" />
                    <div className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-md bg-white/90 text-primary shadow-[0_12px_30px_rgba(11,18,32,0.16)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold leading-tight tracking-normal text-foreground">
                        <Link href={item.href} scroll className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="max-w-md text-sm leading-6 text-muted-foreground">
                        {item.overview}
                      </p>
                    </div>
                    <dl className="grid gap-3 text-sm leading-6">
                      <div><dt className="font-semibold text-foreground">Business challenge</dt><dd className="text-muted-foreground">{item.challenge}</dd></div>
                      <div><dt className="font-semibold text-foreground">Potential benefit</dt><dd className="text-muted-foreground">{item.benefit}</dd></div>
                    </dl>
                    <TermExplanations terms={item.terms} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
