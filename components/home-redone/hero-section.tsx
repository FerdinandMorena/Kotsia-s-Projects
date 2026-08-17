"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoineryFrame } from "@/components/ui/joinery-mark";
import { useMagnetic } from "@/hooks/use-magnetic";
import { siteConfig } from "@/lib/site-config";

const HEADLINE = "Carpentry Built to Outlast the House Around It.";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>(0.25);

  // Word-by-word reveal on load
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const words = el.querySelectorAll("span.word-inner");
    if (reduceMotion) {
      gsap.set(words, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(words, { opacity: 0, y: "110%" });
    gsap.to(words, {
      opacity: 1,
      y: "0%",
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0,
    });
  }, []);

  // Gentle parallax on the hero image
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const handleScroll = () => {
      const y = window.scrollY;
      gsap.set(el, { y: y * 0.15 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] mt-[-15px] flex items-end overflow-hidden bg-primary">
      {/* Background image with parallax + dark overlay */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-16 h-[calc(100%+4rem)]"
      >
        <Image
          src="/hero.png"
          alt="Carpenter shaping custom wood joinery by hand, Limpopo & Gauteng"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
      </div>

      <JoineryFrame className="m-4 md:m-8" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-8 pb-16 md:pb-24 pt-40 opacity-0 animate-[fadeIn_0.6s_ease-out_0s_forwards]">
        <div className="max-w-3xl">
          <p className="mb-6 inline-block text-xs md:text-sm uppercase tracking-[0.35em] text-yellow-500 font-medium px-2  opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]">
            Carpentry &amp; Building — Limpopo &amp; Gauteng
          </p>

          <h1
            ref={headlineRef}
            className="font-serif font-semibold tracking-tight text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] md:leading-[1.15] text-white mb-8 text-balance [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]"
          >
            {HEADLINE.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.28em] align-bottom"
              >
                <span className="word-inner inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg text-white mb-10 max-w-xl leading-relaxed font-medium [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            Premium custom kitchens, built-in cupboards, wardrobes and bespoke
            woodwork for homes and businesses across Gauteng and Limpopo.
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
            <Button
              asChild
              size="lg"
              className="min-w-[190px] bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact" ref={primaryCtaRef}>
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[190px] border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services/carpentry">View Our Work</Link>
            </Button>

            <a
              href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like to enquire about your services`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-200 transition-colors ml-1"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us instead
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-3 text-white/60 text-xs uppercase tracking-[0.25em]">
        <span className="hidden sm:inline">Scroll</span>
        <span className="h-10 w-px bg-white/40 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-yellow-300 animate-[scroll-line_1.8s_ease-in-out_infinite]" />
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
