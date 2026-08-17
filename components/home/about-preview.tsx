import Link from "next/link";
import Image from "next/image";
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
          <AnimateOnScroll animation="fade-left">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Expert Carpentry with a Personal Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a skilled carpenter with over 8 years of experience, I
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

          <AnimateOnScroll animation="fade-right" delay={150}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#c9a227]/20 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#c9a227]/20 bg-[#1c1712] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/53.webp"
                    alt="Crafted carpentry and home improvement detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1712]/80 via-[#1c1712]/20 to-transparent" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d9b64e]">
                    Crafted with care
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Bespoke interiors, built to last
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
