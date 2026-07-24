import { Nav, ScrollBits } from "@/components/interactive";
import { InsideTheBuild } from "@/components/inside-build";
import {
  Hero, Services, Work, Founder, Industries,
  Process, Pricing, Faq, Contact, Footer, Banner,
} from "@/components/sections";

/**
 * Homepage.
 *
 * Section order ek sales conversation ka shape follow karta hai:
 *   claim → what we do → proof → who it's for → how it runs →
 *   method + trust → price → objections → who you work with → ask
 *
 * Kuch decisions deliberate hain:
 * - Case studies services ke turant baad: "kya banate ho" ke baad visitor
 *   ka agla sawal "kiske liye banaya hai" hota hai.
 * - Founder FAQ ke baad, contact se pehle: sab objections clear hone ke baad
 *   chehra dekhna trust close karta hai.
 * - Pricing FAQ se pehle: visitor number dekhe, phir uske sawal answer ho
 *   jayein, aur turant CTA mile.
 */
export default function Home() {
  return (
    <>
      {/* Scroll progress bar + floating WhatsApp button */}
      <ScrollBits />
      <Nav />

      <main>
        <Hero />
        <Services />
        <Work />
        <Industries />
        <InsideTheBuild />

        <Banner
          title="Not sure if AI is even the answer?"
          body="Bring the problem to a free call. Sometimes the honest answer is a script or a process change, and we will tell you that instead of selling you a model."
          points={["Free 30 minutes", "No pitch deck", "Written plan, yours to keep"]}
          cta="Book a discovery call"
        />

        <Process />
        <Pricing />

        <Banner
          title="Nexora for teams and businesses"
          body="Multiple workflows, internal tooling, or an ongoing AI roadmap? We work as an embedded engineering partner with dedicated capacity each month."
          points={["Dedicated capacity", "Priority turnaround", "Best price for volume"]}
          cta="Talk to us"
        />

        <Faq />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </>
  );
}