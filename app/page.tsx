import ContactSection from "@/components/ContactSection";
import ExhibitionBar from "@/components/ExhibitionBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstitutionSection from "@/components/InstitutionSection";
import MilestoneStrip from "@/components/MilestoneStrip";
import Mission from "@/components/Mission";
import NewsSection from "@/components/NewsSection";
import ProgramsSection from "@/components/ProgramsSection";
import RevealObserver from "@/components/RevealObserver";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import { site } from "@/content/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  alternateName: "뉴아미",
  email: site.contactEmail,
  ...(site.canonicalUrl ? { url: site.canonicalUrl } : {}),
};

export default function HomePage() {
  return (
    <>
      <ExhibitionBar />
      <Header />
      <main>
        <Hero />
        <MilestoneStrip />
        <Mission />
        <ServiceSection />
        <InstitutionSection />
        <NewsSection />
        <TeamSection />
        <ProgramsSection />
        <ContactSection />
      </main>
      <Footer />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </>
  );
}
