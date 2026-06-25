import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "WXPE | Localized Digital Energy Solutions",
  description:
    "WXPE develops integrated green energy solutions for Malaysia's industrial and commercial sectors.",
  openGraph: {
    title: "WXPE | Building Malaysia's Localized Digital Energy Future",
    description:
      "Integrated battery energy storage, EMS, AI optimization, solar hybrid systems and localized project delivery.",
    images: ["/assets/wxpe-bess-site.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
