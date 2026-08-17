"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Consultation",
    description:
      "We walk the space, discuss what you need, and talk through what's realistic.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Measurements, materials and layout confirmed before anything is cut.",
  },
  {
    num: "03",
    title: "Crafting",
    description:
      "Built in the workshop to spec, with every joint checked as it goes.",
  },
  {
    num: "04",
    title: "Installation",
    description:
      "Fitted on site, cleanly, with respect for the rest of your home.",
  },
  {
    num: "05",
    title: "Completion",
    description:
      "A final walkthrough together — nothing signed off until you're happy.",
  },
];

export function ProcessTimeline() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="max-w-2xl mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            How We Work
          </span>
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary mt-4 mb-5 text-balance">
            Five steps, in order, every time
          </h2>
        </AnimateOnScroll>

        <div ref={sectionRef} className="relative max-w-2xl mx-auto">
          {/* Track */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          {/* Animated fill */}
          <div
            ref={lineRef}
            className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-accent"
          />

          <ol className="space-y-12">
            {steps.map((step) => (
              <li key={step.num} className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-card font-serif text-xs text-accent">
                  {step.num}
                </span>
                <h3 className="font-serif font-semibold tracking-tight text-xl text-primary mb-1.5">
                  {step.title}
                </h3>
                <p className="text-foreground/90 text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
