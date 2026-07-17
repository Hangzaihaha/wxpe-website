import type { Metadata } from "next";

import { PageEntry } from "@/components/page-entry";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wxpenergy.com.my"),
  title:
    "WXPE | Battery Energy Storage, Solar Hybrid & Electric Mobility Solutions",
  description:
    "WXPE provides integrated energy solutions including BESS, solar hybrid systems, microgrids and electric mobility solutions for commercial and industrial applications in Malaysia.",
  keywords: [
    "WXPE",
    "battery energy storage Malaysia",
    "BESS Malaysia",
    "solar hybrid systems",
    "microgrids Malaysia",
    "commercial energy solutions",
    "industrial energy solutions",
    "electric mobility Malaysia"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/assets/brand/wxpe-mark.svg",
    shortcut: "/assets/brand/wxpe-mark.svg",
    apple: "/assets/brand/wxpe-mark.svg"
  },
  openGraph: {
    title:
      "WXPE | Battery Energy Storage, Solar Hybrid & Electric Mobility Solutions",
    description:
      "WXPE provides integrated energy solutions including BESS, solar hybrid systems, microgrids and electric mobility solutions for commercial and industrial applications in Malaysia.",
    url: "/",
    siteName: "WXPE",
    locale: "en_MY",
    type: "website",
    images: ["/assets/wxpe-bess-site.png"]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WXPE | Battery Energy Storage, Solar Hybrid & Electric Mobility Solutions",
    description:
      "WXPE provides integrated energy solutions including BESS, solar hybrid systems, microgrids and electric mobility solutions for commercial and industrial applications in Malaysia.",
    images: ["/assets/wxpe-bess-site.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <PageEntry>{children}</PageEntry>
      </body>
    </html>
  );
}
