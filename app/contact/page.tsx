import type { Metadata } from "next";
import type { SVGProps } from "react";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  MapPin
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { contactData } from "@/lib/contact-data";

const title = "Contact WXPE | Energy Solutions Malaysia";
const description =
  "Contact WXPE for battery energy storage, solar, microgrid and electric mobility solutions in Malaysia. Find our sales contacts, support details, factory and office locations in Selangor.";
const canonicalUrl = "https://www.wxpenergy.com.my/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "WXPE",
    locale: "en_MY",
    type: "website",
    images: ["/assets/wxpe-bess-site.png"]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/wxpe-bess-site.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

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
  "outline-none transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WXPE",
  url: "https://www.wxpenergy.com.my",
  logo: "https://www.wxpenergy.com.my/assets/brand/wxpe-mark.svg",
  email: contactData.sales.email,
  telephone: contactData.sales.whatsappDisplay,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: contactData.sales.whatsappDisplay,
      email: contactData.sales.email,
      areaServed: "MY",
      availableLanguage: ["English"]
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: contactData.support.phoneDisplay,
      email: contactData.support.email,
      areaServed: "MY",
      availableLanguage: ["English"]
    }
  ],
  address: contactData.locations.map((location) => ({
    "@type": "PostalAddress",
    ...location.schemaAddress
  })),
  sameAs: [contactData.social.facebook, contactData.social.instagram]
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")
        }}
      />

      <section className="border-b border-border bg-white pb-20 pt-[128px] md:pb-24 md:pt-[152px]">
        <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(330px,0.65fr)] lg:gap-20">
          <Reveal>
            <h1 className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-[3.6rem] lg:text-[4.35rem]">
              Let&rsquo;s Build the Right Energy Solution
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Talk to the WXPE team about battery energy storage, commercial
              solar, microgrids and electric mobility solutions in Malaysia.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Button
                asChild
                size="lg"
                className="group h-14 w-full justify-between rounded-sm px-7 text-base shadow-none sm:w-64"
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
              <a
                href="#locations"
                className={`${contactLinkClassName} inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary focus-visible:ring-offset-white`}
              >
                Explore Our Locations
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border-l-2 border-primary py-5 pl-7 md:pl-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sales WhatsApp
            </p>
            <a
              href={contactData.sales.phoneHref}
              className={`${contactLinkClassName} mt-4 inline-block whitespace-nowrap text-[1.9rem] font-medium leading-none tracking-[-0.025em] text-foreground focus-visible:ring-offset-white sm:text-[2.15rem]`}
            >
              {contactData.sales.whatsappDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-channels-title"
        className="border-b border-[#c8d4dc] bg-[#eef3f6] py-20 md:py-24"
      >
        <div className="container grid gap-12 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <Reveal className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contact the Right Team
            </p>
            <h2
              id="contact-channels-title"
              className="mt-5 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground md:text-[2.65rem]"
            >
              Direct access, clearly organised.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Reach the right team for sales, support and general enquiries.
            </p>
          </Reveal>

          <div className="border-y border-[#b9c9d3]">
            <Reveal>
              <div className="border-b border-[#b9c9d3] py-8 md:grid md:grid-cols-[180px_1fr] md:gap-8 md:py-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Sales Email
                </p>
                <a
                  href={contactData.sales.emailHref}
                  className={`${contactLinkClassName} mt-4 inline-block break-all text-xl font-medium tracking-[-0.015em] text-foreground focus-visible:ring-offset-[#eef3f6] md:mt-0 md:text-2xl`}
                >
                  {contactData.sales.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="border-b border-[#b9c9d3] py-8 md:grid md:grid-cols-[180px_1fr] md:gap-8 md:py-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Services &amp; Support
                </p>
                <div className="mt-4 flex flex-col items-start gap-2.5 md:mt-0">
                  <a
                    href={contactData.support.emailHref}
                    className={`${contactLinkClassName} break-all text-xl font-medium tracking-[-0.015em] text-foreground focus-visible:ring-offset-[#eef3f6] md:text-2xl`}
                  >
                    {contactData.support.email}
                  </a>
                  <a
                    href={contactData.support.phoneHref}
                    className={`${contactLinkClassName} text-lg font-medium text-foreground focus-visible:ring-offset-[#eef3f6]`}
                  >
                    {contactData.support.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="py-8 md:grid md:grid-cols-[180px_1fr] md:items-center md:gap-8 md:py-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Follow WXPE
                </p>
                <div className="mt-5 flex items-center gap-3 md:mt-0">
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="locations"
        aria-labelledby="locations-title"
        className="scroll-mt-[96px] bg-white py-20 md:py-24 lg:py-28"
      >
        <div className="container">
          <Reveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2
              id="locations-title"
              className="text-[2.25rem] font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[2.8rem]"
            >
              Our Locations in Selangor
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              WXPE operates from its factory and office locations in Selangor,
              Malaysia, supporting battery energy storage, solar, microgrid and
              electric mobility projects for commercial and industrial
              applications.
            </p>
          </Reveal>

          <div className="mt-12 border-y border-[#c8d4dc] md:grid md:grid-cols-2">
            {contactData.locations.map((location, index) => (
              <Reveal
                key={location.name}
                delay={index * 0.06}
                className={
                  index === 0
                    ? "py-10 md:pr-12 lg:py-12 lg:pr-16"
                    : "border-t border-[#c8d4dc] py-10 md:border-l md:border-t-0 md:pl-12 lg:py-12 lg:pl-16"
                }
              >
                <article>
                  <div className="flex items-center gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="size-5 shrink-0 stroke-[1.7] text-primary"
                    />
                    <h3 className="text-2xl font-semibold text-foreground">
                      {location.name}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    {location.descriptor}
                  </p>
                  <address className="mt-5 text-sm not-italic leading-7 text-foreground/80 sm:text-base">
                    {location.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={location.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View WXPE ${location.name.toLowerCase()} location in Google Maps`}
                    className={`${contactLinkClassName} group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary focus-visible:ring-offset-white`}
                  >
                    View {location.name} Location
                    <ExternalLink
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-closing-title"
        className="bg-[#071a2f] px-5 py-14 text-white md:py-16"
      >
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2
              id="contact-closing-title"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.45rem]"
            >
              Planning a battery storage, solar or microgrid project in Malaysia?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-[3.25rem] w-full rounded-sm border-white/55 bg-transparent px-6 text-white shadow-none hover:bg-white hover:text-[#071a2f] md:w-auto"
            >
              <a
                href={contactData.sales.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to the WXPE Team
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
