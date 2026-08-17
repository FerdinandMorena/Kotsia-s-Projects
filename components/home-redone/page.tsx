import type { Metadata } from "next";
import { HeroSection } from "@/components/home-redone/hero-section";
import { TrustStats } from "@/components/home-redone/trust-stats";
import { ServicesPreview } from "@/components/home-redone/services-preview";
import { AboutPreview } from "@/components/home-redone/about-preview";
import { WhyChooseUs } from "@/components/home-redone/why-choose-us";
import { PortfolioShowcase } from "@/components/home-redone/portfolio-showcase";
import { ProcessTimeline } from "@/components/home-redone/process-timeline";
import { Testimonials } from "@/components/home-redone/testimonials";
import { CtaBanner } from "@/components/home-redone/cta-banner";
import { siteConfig } from "@/lib/site-config";
import { homePageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Professional Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Kotsia's Projects — expert carpentry services in Limpopo & Gauteng. Custom kitchen cupboards, built-in wardrobes, doors, tiling, plastering, stormwater drainage & welding. Serving Polokwane, Johannesburg, Pretoria, Sandton, Centurion, Midrand & more.",
  keywords: homePageKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Professional Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert carpentry and home improvement services across Limpopo & Gauteng. Custom woodwork, kitchen cupboards, tiling, plastering, and more.",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/53.webp`,
        width: 1200,
        height: 630,
        alt: "Kotsia's Projects Carpentry Services",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <PortfolioShowcase />
      <ProcessTimeline />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
