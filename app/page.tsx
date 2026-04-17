import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { ArrowRight } from "lucide-react";

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
              Ready for Custom Woodwork?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Contact me today for a free consultation. Let&apos;s discuss your
              custom carpentry project and bring your vision to life with
              quality craftsmanship.
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
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
