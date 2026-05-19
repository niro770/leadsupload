import "./globals.css";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { Nav, Footer } from "../components/Chrome";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://leadsupload.example"),
  title: {
    default: "LeadsUpload — Intent-Filtered Lead Intelligence for Outbound Teams",
    template: "%s | LeadsUpload",
  },
  description:
    "Real-time, intent-scored lead streams for finance, insurance, solar, real estate, and home services. Structured intent — not static databases. Free sample.",
  keywords: [
    "buy business loan leads",
    "buy insurance leads",
    "buy solar leads",
    "live transfer leads usa",
    "aged business leads",
    "b2b leads usa",
  ],
  openGraph: {
    title: "LeadsUpload — Intent-Filtered Lead Intelligence",
    description:
      "Structured, intent-filtered lead streams designed for outbound conversion performance.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeadsUpload",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Intent-filtered lead intelligence platform delivering real-time, scored, consent-verified lead streams for outbound sales teams.",
    offers: { "@type": "Offer", category: "Lead Intelligence Subscription" },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
