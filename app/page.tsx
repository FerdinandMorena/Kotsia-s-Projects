import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { ArrowRight } from "lucide-react";
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
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />

      {/* Contact CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimateOnScroll
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
              Ready for Custom Carpentry in Limpopo or Gauteng?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Contact us today for a free consultation. Whether you need a
              skilled carpenter in Polokwane, Johannesburg, or Pretoria —
              we&apos;re here to bring your vision to life with quality
              craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-secondary-foreground"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/services/carpentry">View Carpentry Services</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
