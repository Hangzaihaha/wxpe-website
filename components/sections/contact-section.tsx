import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { contactData } from "@/lib/contact-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-[72px] border-t border-[#c8d4dc] bg-[#eef3f6]"
    >
      <div className="container py-20 md:py-24 lg:py-28">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(310px,0.65fr)] lg:gap-16">
          <div className="max-w-3xl">
            <h2
              id="contact-title"
              className="text-balance text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.8rem] lg:text-[3.35rem]"
            >
              Planning an Energy Project in Malaysia?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Talk to WXPE about battery energy storage, solar, microgrid and
              electric mobility solutions for commercial and industrial
              applications.
            </p>
          </div>

          <div className="border-t border-[#b9c9d3] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Button
              asChild
              size="lg"
              className="group h-14 w-full justify-between rounded-sm px-7 text-base shadow-none"
            >
              <a
                href={contactData.sales.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Sales
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>
            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary outline-none transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
            >
              View Contact Details
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      <SiteFooter />
    </section>
  );
}
