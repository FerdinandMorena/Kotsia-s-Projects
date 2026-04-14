import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Over 10 years of industry experience",
  "Licensed and fully insured professionals",
  "Commitment to quality and safety",
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
              Building Excellence for Over a Decade
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kotsia&apos;s Projects is a trusted name in construction and
              maintenance services. We combine traditional craftsmanship with
              modern techniques to deliver exceptional results that exceed
              expectations.
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
