import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wxpe-website.vercel.app"),
  title: "WXPE | Localized Energy Storage & Microgrid Solutions",
  description:
    "WXPE develops localized battery energy storage, solar hybrid microgrid and digital energy solutions for Malaysia's industrial and commercial sectors.",
  openGraph: {
    title: "WXPE | Localized Energy Storage & Microgrid Solutions",
    description:
      "Battery storage, solar hybrid microgrid, EMS and flexible Energy-as-a-Service pathways for Malaysia.",
    images: ["/assets/wxpe-bess-site.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
