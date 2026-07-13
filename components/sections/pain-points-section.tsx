import { painPoints } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function PainPointsSection() {
  const cardSurfaces = ["bg-white", "bg-[#f7f9fa]", "bg-[#f1f5f7]", "bg-[#f8faf9]"];

  return (
    <section id="pain-points" className="border-b border-border bg-[#f4f7f8] py-20 md:py-28">
      <div className="container flex flex-col gap-12 md:gap-14">
        <Reveal>
          <SectionHeading
            title="Customer Problems WXPE Helps Solve"
            description="A sharper starting point for C&I energy strategy: cost, reliability and execution."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.035} className="h-full">
                <article
                  className={`group flex h-full min-h-[17rem] flex-col justify-between gap-10 rounded-3xl p-8 shadow-[0_18px_55px_rgba(11,18,32,0.045)] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_22px_60px_rgba(11,18,32,0.065)] md:p-9 ${cardSurfaces[index]}`}
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-[#e8f0f4] text-primary transition-colors duration-300 group-hover:bg-[#dfeaf0]">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div className="max-w-xl space-y-3">
                    <h3 className="text-2xl font-semibold leading-tight tracking-normal text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-[0.95rem] leading-7 text-muted-foreground">
                      {item.description}
                    </p>
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
