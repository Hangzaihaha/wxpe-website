import { companyTimeline } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container">
        <Reveal className="max-w-3xl">
          <SectionHeading
            title="From Manufacturing Roots to Digital Energy"
            description="Malaysia project coordination, manufacturing discipline and local delivery experience now support WXPE's transition into energy storage, microgrids and electric mobility."
          />
        </Reveal>

        <div className="relative mt-12 grid gap-0 border-y border-border md:grid-cols-5">
          <div
            className="absolute left-0 right-0 top-[2.45rem] hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {companyTimeline.map((item, index) => (
            <Reveal
              key={item.year}
              delay={index * 0.04}
              className="border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <article className="relative grid grid-cols-[92px_1fr] gap-4 py-5 md:block md:min-h-[220px] md:px-5 md:py-6">
                <div className="relative z-10 flex items-center gap-3 md:h-8">
                  <span className="size-2.5 shrink-0 rounded-full bg-primary ring-4 ring-white" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="md:mt-7">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
