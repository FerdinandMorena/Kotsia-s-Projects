import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Over 8 years of carpentry experience",
  "Specialized in custom woodwork and home improvement",
  "Attention to detail in every piece of craftsmanship",
  "Transparent pricing with no hidden costs",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <AnimateOnScroll animation="fade-left">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Expert Carpentry with a Personal Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a skilled carpenter with over a decade of experience, I
              specialize in custom woodwork and home improvement projects. Every
              piece I create reflects my passion for craftsmanship, attention to
              detail, and commitment to quality that goes beyond just building –
              it&apos;s about creating something that lasts and brings joy to
              your home.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
