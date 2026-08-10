import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { contactData } from "@/lib/contact-data";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M13.55 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.55-1.46h1.66V3.96c-.29-.04-1.27-.13-2.42-.13-2.4 0-4.04 1.47-4.04 4.16V10H7.58v3h2.72v8h3.25Z"
      />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.35" cy="6.75" r="1.1" fill="currentColor" />
    </svg>
  );
}

const contactLinkClassName =
  "outline-none transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-[72px] border-t border-[#c8d4dc] bg-[#eef3f6]"
    >
      <div className="container py-16 md:py-20 lg:py-24">
        <Reveal className="grid items-center gap-11 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-20">
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
            <Link
              href="/contact"
              className={`${contactLinkClassName} group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary`}
            >
              View Contact Details
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="border-l-2 border-primary py-2 pl-6 sm:pl-8 lg:py-4 lg:pl-10">
            <div className="flex items-start gap-4">
              <a
                href={contactData.sales.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with WXPE Sales on WhatsApp"
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25d366] shadow-[0_8px_22px_rgba(37,211,102,0.2)] outline-none transition-[background-color,box-shadow] duration-200 hover:bg-[#20bd5a] hover:shadow-[0_10px_26px_rgba(37,211,102,0.28)] focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
              >
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt=""
                  width={25}
                  height={25}
                  aria-hidden="true"
                />
              </a>
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Sales WhatsApp
                </p>
                <a
                  href={contactData.sales.phoneHref}
                  className={`${contactLinkClassName} mt-4 inline-block whitespace-nowrap text-[1.85rem] font-medium leading-none tracking-[-0.03em] text-foreground sm:text-[2.4rem]`}
                >
                  {contactData.sales.whatsappDisplay}
                </a>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="group mt-7 h-14 w-full justify-between rounded-sm px-7 text-base shadow-none sm:ml-16 sm:w-[19rem]"
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
          </div>
        </Reveal>

        <div className="mt-14 border-y border-[#b9c9d3] md:mt-16 md:grid md:grid-cols-[1fr_1fr_0.68fr]">
          <Reveal className="border-b border-[#b9c9d3] py-7 md:border-b-0 md:border-r md:py-8 md:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Sales Email
            </p>
            <a
              href={contactData.sales.emailHref}
              className={`${contactLinkClassName} mt-3 inline-block break-all text-lg font-medium tracking-[-0.015em] text-foreground`}
            >
              {contactData.sales.email}
            </a>
          </Reveal>

          <Reveal
            delay={0.05}
            className="border-b border-[#b9c9d3] py-7 md:border-b-0 md:border-r md:px-8 md:py-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Services &amp; Support
            </p>
            <div className="mt-3 flex flex-col items-start gap-1.5">
              <a
                href={contactData.support.emailHref}
                className={`${contactLinkClassName} break-all text-lg font-medium tracking-[-0.015em] text-foreground`}
              >
                {contactData.support.email}
              </a>
              <a
                href={contactData.support.phoneHref}
                className={`${contactLinkClassName} text-sm text-muted-foreground`}
              >
                {contactData.support.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="py-7 md:py-8 md:pl-8 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Follow WXPE
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={contactData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit WXPE on Facebook"
                className="flex size-11 items-center justify-center rounded-full border border-[#aebfca] text-foreground outline-none transition-[background-color,border-color,color] duration-200 hover:border-primary hover:bg-white/65 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
              >
                <FacebookIcon aria-hidden="true" className="size-5" />
              </a>
              <a
                href={contactData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit WXPE on Instagram"
                className="flex size-11 items-center justify-center rounded-full border border-[#aebfca] text-foreground outline-none transition-[background-color,border-color,color] duration-200 hover:border-primary hover:bg-white/65 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
              >
                <InstagramIcon aria-hidden="true" className="size-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <SiteFooter />
    </section>
  );
}
