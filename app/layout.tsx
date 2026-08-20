import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Gabarito, Hanken_Grotesk, Kalam } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { site } from "@/site.config";
import "./globals.css";
import "./redesign.css";

const display = Gabarito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const note = Kalam({
  variable: "--font-note",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | AI That Actually Pays`, template: `%s | ${site.name}` },
  description: site.tagline,
  applicationName: site.legalName,
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | AI That Actually Pays`,
    description: site.tagline,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sheila Kwan, AI that actually pays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | AI That Actually Pays`,
    description: site.tagline,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F6F3",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: site.legalName,
      url: site.url,
      email: site.email,
      areaServed: "North America",
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      sameAs: [site.linkedin],
      jobTitle: "AI implementation and customer success consultant",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${note.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={businessJsonLd} />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
