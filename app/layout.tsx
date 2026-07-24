import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { faq } from "@/lib/content";
import { Stars } from "@/components/interactive";
import "./globals.css";

/**
 * Root layout.
 *
 * Fonts next/font se self-hosted hain — koi external request nahi, aur zero
 * layout shift. Saara metadata aur schema yahan hai taaki aage jab aur pages
 * add hon, wo automatically inherit kar lein.
 */

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans-src",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.tagline} | ${site.contact.city}`,
  description: site.description,
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Production AI systems, scoped in days and live in two weeks. Fixed price from ₹45,000. Jaipur, India.",
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Production AI systems, scoped in days and live in two weeks. Fixed price from ₹45,000.",
  },

  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Business schema — Google ko batata hai ye kya hai, kahan hai, kitne ka hai.
 * Local search ("AI agency Jaipur") ke liye address aur openingHours zaroori
 * hain; makesOffer se pricing search results me dikh sakti hai.
 */
const businessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "AI engineering studio building agents, workflow automation, and web applications for startups and businesses.",
  url: site.url,
  email: site.contact.email,
  telephone: `+${site.contact.whatsapp}`,

  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: "Software Engineer",
    url: site.socials.portfolio,
    sameAs: [site.socials.linkedin, site.socials.instagram],
  },

  sameAs: [site.socials.linkedin, site.socials.instagram, site.socials.portfolio],

  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.city,
    addressRegion: site.contact.region,
    addressCountry: site.contact.country,
  },

  areaServed: ["IN", "US", "GB", "AE", "SG"],
  priceRange: "₹45,000 - ₹2,00,000+",

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },

  makesOffer: [
    { "@type": "Offer", name: "AI Agent", priceCurrency: "INR", price: "85000" },
    { "@type": "Offer", name: "AI Automation", priceCurrency: "INR", price: "45000" },
    { "@type": "Offer", name: "Custom AI and SaaS", priceCurrency: "INR", price: "200000" },
    { "@type": "Offer", name: "Web App", priceCurrency: "INR", price: "70000" },
  ],
};

/**
 * FAQ schema content se hi banta hai, alag se likha nahi hai — isliye schema
 * kabhi page ke content se out of sync nahi ho sakta.
 */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (faq as string[][]).map((f) => ({
    "@type": "Question",
    name: f[0],
    acceptedAnswer: { "@type": "Answer", text: f[1] },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="top" className={`${sans.variable} ${mono.variable}`}>
      <head>
        {/* Inline SVG favicon — koi extra request nahi, aur har size pe sharp */}
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%2310b981'/%3E%3Crect x='9' y='9' width='14' height='14' rx='4' fill='%2304070a'/%3E%3C/svg%3E"
        />
      </head>

      <body>
        {/* Keyboard users sabse pehle yahan land karte hain */}
        <a href="#services" className="skipl">
          Skip to content
        </a>

        {/* Fixed background layer — star field, grid, aur floating blobs.
            Fixed isliye hai ki scroll pe redraw na ho aur GPU pe hi rahe. */}
        <div aria-hidden className="bgfx">
          <Stars />
          <div className="gridfx" />
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </body>
    </html>
  );
}