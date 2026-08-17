import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Image
        src="/hero.png"
        alt="Custom carpentry workshop"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary-foreground mb-6 text-balance">
            Let's build something that lasts.
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-10 leading-relaxed font-medium">
            Tell us what you're planning and we'll give you a straight answer —
            what's possible, what it costs, and how long it takes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary — gold fill needs dark text, not white, to pass contrast */}
            <Button
              asChild
              size="lg"
              className="min-w-[190px] bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
            >
              <Link href="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Secondary — outline at rest, solid cream fill on hover so the
                state change is unmistakable instead of a faint tint */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[190px] border-2 border-primary-foreground/70 bg-transparent text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground"
            >
              <Link href="/services/carpentry">View Carpentry Services</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
