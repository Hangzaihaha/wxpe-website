import type { SVGProps } from "react";
import { ArrowRight, ExternalLink, MapPin, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { WxpeLogo } from "@/components/wxpe-logo";
import { navItems } from "@/lib/site-data";

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

const locations = [
  {
    name: "Factory",
    address: [
      "12, Jalan Subang 7/4,",
      "Taman Perindustrian Subang USJ 1,",
      "47600 Subang Jaya,",
      "Selangor, Malaysia"
    ],
    href: "https://www.google.com/maps/search/?api=1&query=12+Jalan+Subang+7%2F4+Taman+Perindustrian+Subang+USJ+1+47600+Subang+Jaya+Selangor"
  },
  {
    name: "Office",
    address: [
      "A-302, Street Mall One South,",
      "Jalan OS,",
      "Taman Serdang Perdana 6,",
      "Seri Kembangan,",
      "Selangor, Malaysia"
    ],
    href: "https://www.google.com/maps/search/?api=1&query=A-302+Street+Mall+One+South+Jalan+OS+Taman+Serdang+Perdana+6+Seri+Kembangan+Selangor"
  }
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-[72px] overflow-hidden bg-[#eef3f6] pt-24 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_32%_30%,rgba(255,255,255,0.9),rgba(238,243,246,0)_55%)]"
      />

      <div className="container relative grid gap-16 pb-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-0 lg:pb-28">
        <div className="lg:border-r lg:border-[#c8d4dc] lg:pr-16 xl:pr-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Contact Us
            </p>
            <span
              aria-hidden="true"
              className="mt-5 block h-0.5 w-11 bg-primary"
            />
            <h2
              id="contact-title"
              className="mt-9 max-w-2xl text-[2.3rem] font-[575] leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.7rem] lg:text-[3.15rem]"
            >
              <span className="block">Let&rsquo;s Discuss</span>
              <span className="block">Your Project</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground md:text-lg md:leading-8">
              Talk to our team about energy storage, solar hybrid systems,
              microgrids or electric mobility.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12 md:mt-14">
            <div className="flex items-start gap-5">
              <MessageCircle
                aria-hidden="true"
                className="mt-1 size-11 shrink-0 stroke-[1.6] text-primary md:size-14"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Sales WhatsApp
                </p>
                <a
                  href="tel:+60179951928"
                  className="mt-3 block text-[2rem] font-medium leading-none tracking-[-0.025em] text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6] sm:text-[2.35rem] md:text-[2.7rem]"
                >
                  +60 17-995 1928
                </a>
                <Button
                  asChild
                  size="lg"
                  className="group mt-7 h-14 w-full justify-between rounded-sm px-7 text-base shadow-none sm:w-80"
                >
                  <a
                    href="https://wa.me/60179951928"
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
            </div>
          </Reveal>
        </div>

        <div className="border-t border-[#c8d4dc] lg:border-t-0 lg:pl-16 xl:pl-20">
          <Reveal delay={0.06}>
            <div className="border-b border-[#c8d4dc] py-9 lg:pt-20">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Sales Email
              </p>
              <a
                href="mailto:sales@wxpgroup.com"
                className={`mt-4 inline-block break-all text-xl font-medium tracking-[-0.015em] text-foreground sm:text-2xl ${contactLinkClassName}`}
              >
                sales@wxpgroup.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-b border-[#c8d4dc] py-9 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Services &amp; Support
              </p>
              <div className="mt-4 flex flex-col items-start gap-2.5">
                <a
                  href="mailto:admin@wxpgroup.com"
                  className={`break-all text-xl font-medium tracking-[-0.015em] text-foreground sm:text-2xl ${contactLinkClassName}`}
                >
                  admin@wxpgroup.com
                </a>
                <a
                  href="tel:+601161212957"
                  className={`text-lg font-medium text-foreground sm:text-xl ${contactLinkClassName}`}
                >
                  +60 11-6121 2957
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="py-9 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Follow WXPE
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1a6p6dgs6y/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WXPE on Facebook"
                  className="flex size-11 items-center justify-center rounded-full border border-[#b9c9d3] text-foreground outline-none transition-[background-color,border-color,color] duration-200 hover:border-primary hover:bg-white/60 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
                >
                  <FacebookIcon aria-hidden="true" className="size-5" />
                </a>
                <a
                  href="https://www.instagram.com/wxpe_automotive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WXPE on Instagram"
                  className="flex size-11 items-center justify-center rounded-full border border-[#b9c9d3] text-foreground outline-none transition-[background-color,border-color,color] duration-200 hover:border-primary hover:bg-white/60 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3f6]"
                >
                  <InstagramIcon aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <section
        aria-labelledby="locations-title"
        className="container relative pb-24 md:pb-28"
      >
        <div className="border-t border-[#c8d4dc] pt-16 md:pt-20">
          <Reveal className="grid items-start gap-12 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20">
            <div className="max-w-md">
              <h3
                id="locations-title"
                className="scroll-mt-24 text-3xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-[2.5rem]"
              >
                Locations
              </h3>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                WXPE is based in Selangor, Malaysia, providing battery energy
                storage systems, solar solutions, microgrid and digital energy
                services for commercial and industrial applications.
              </p>
            </div>

            <div className="border-y border-[#c8d4dc] md:grid md:grid-cols-2">
              {locations.map((location, index) => (
                <article
                  key={location.name}
                  className={
                    index === 0
                      ? "py-9 md:pr-10"
                      : "border-t border-[#c8d4dc] py-9 md:border-l md:border-t-0 md:pl-10"
                  }
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="size-5 shrink-0 stroke-[1.7] text-primary"
                    />
                    <h4 className="text-xl font-semibold text-foreground">
                      {location.name}
                    </h4>
                  </div>

                  <address className="mt-5 min-h-32 text-sm not-italic leading-7 text-muted-foreground sm:text-base">
                    {location.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-7 rounded-sm border-[#b9c9d3] bg-transparent px-5 shadow-none hover:border-primary hover:bg-white/70 hover:text-primary"
                  >
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View WXPE ${location.name.toLowerCase()} location in Google Maps`}
                    >
                      View {location.name} Location
                      <ExternalLink aria-hidden="true" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative bg-[#07111f] px-5 py-10 text-white md:py-12">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <WxpeLogo inverted />
            <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
              Localized Energy Storage, Microgrid and Digital Energy Solutions.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navItems
              .filter((item) =>
                [
                  "Solutions",
                  "Energy-as-a-Service",
                  "Microgrid",
                  "Projects",
                  "Mobility",
                  "About Us",
                  "Contact Us"
                ].includes(item.label)
              )
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/68 outline-none transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#07111f]"
                >
                  {item.label}
                </a>
              ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
