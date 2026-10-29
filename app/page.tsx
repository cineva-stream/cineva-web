import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Reasons from "@/components/Reasons";
import Bento from "@/components/Bento";
import Showcase from "@/components/Showcase";
import PlayerSection from "@/components/PlayerSection";
import Marquee from "@/components/Marquee";
import Install from "@/components/Install";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { faq } from "@/lib/content";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Reasons />
        <Bento />
        <Showcase />
        <PlayerSection />
        <Marquee />
        <Install />
        <Faq />
      </main>
      <CtaBanner />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </>
  );
}
