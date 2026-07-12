import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Features } from "@/components/site/Features";
import { InboundOutbound } from "@/components/site/InboundOutbound";
import { Industries } from "@/components/site/Industries";
import { Integrations } from "@/components/site/Integrations";
import { WhyChoose } from "@/components/site/WhyChoose";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { GlobalSpotlight } from "@/components/site/GlobalSpotlight";

export default function Page() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-ink font-body overflow-x-hidden">
      <GlobalSpotlight />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Features />
        <InboundOutbound />
        <Industries />
        <Integrations />
        <WhyChoose />
        <HowItWorks />
        <ClosingCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

