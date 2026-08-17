import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { JoineryFrame } from "@/components/ui/joinery-mark";
import { ArrowRight } from "lucide-react";

const highlights = [
  "10+ years of hands-on carpentry experience",
  "Custom woodwork built to the room, not off a catalogue",
  "Every joint and finish checked before it leaves the workshop",
  "Transparent, upfront pricing — no hidden costs",
];

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateOnScroll
            animation="fade-right"
            delay={100}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl -z-10" />
              <div className="relative overflow-hidden rounded-2xl border border-primary/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/53.webp"
                    alt="Kotsia's Projects workshop — custom carpentry in progress"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/8 to-transparent" />
                  <JoineryFrame className="m-3" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-primary-foreground/15 bg-primary/40 backdrop-blur-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                    Crafted with care
                  </p>
                  <p className="mt-1.5 font-serif text-lg text-primary-foreground [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                    Every piece signed off by hand
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="order-1 lg:order-2">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary mt-4 mb-6 text-balance">
              Carpentry, done the way it used to be
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-8">
              Every project starts the same way: measured twice, discussed
              properly, and built to fit the space it's going into — not adapted
              from a standard size. That approach, over ten years, is what's
              built the reputation. It's less about the tools and more about not
              leaving a job until it's right.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground/90 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="min-w-[190px] bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
            >
              <Link href="/about">
                Learn About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
