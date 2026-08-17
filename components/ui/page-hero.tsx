"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { JoineryFrame } from "@/components/ui/joinery-mark";

type PageHeroProps = {
  /** Small gold label above the headline. */
  eyebrow: string;
  /** Page H1. Revealed word by word on load. */
  headline: string;
  subcopy: string;
  image: string;
  imageAlt: string;
  /** Short inline facts shown on the gold rule beneath the copy. */
  meta?: string[];
};

/**
 * Secondary page hero — the homepage hero's smaller sibling.
 * Same language (scrim, joinery corners, gold eyebrow, word reveal) at 70svh
 * so the full-screen treatment stays unique to the homepage.
 */
export function PageHero({
  eyebrow,
  headline,
  subcopy,
  image,
  imageAlt,
  meta,
}: PageHeroProps) {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  // Word-by-word reveal on load
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const words = el.querySelectorAll("span.word-inner");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

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
    });
  }, []);

  // Gentle parallax on the background plate
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleScroll = () => {
      gsap.set(el, { y: window.scrollY * 0.15 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-[#241a13]">
      {/* Background plate with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-16 h-[calc(100%+4rem)]"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <JoineryFrame className="m-4 md:m-8" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-40 pb-14 md:pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.35em] text-accent opacity-0 animate-[heroFade_0.6s_ease-out_0.1s_forwards] md:text-sm">
            {eyebrow}
          </p>

          <h1
            ref={headlineRef}
            className="mb-6 text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[3.5rem]"
          >
            {/* Each word is masked for the reveal, but the spaces between them
                stay real text nodes so the accessible name and search-engine
                text extraction read as a normal sentence. */}
            {headline.split(" ").map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span className="inline-block overflow-hidden align-bottom">
                  <span className="word-inner inline-block">{word}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>

          <p className="max-w-xl text-base font-medium leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] opacity-0 animate-[heroFade_0.6s_ease-out_0.25s_forwards] md:text-lg">
            {subcopy}
          </p>

          {meta && meta.length > 0 && (
            <div className="mt-9 max-w-2xl opacity-0 animate-[heroFade_0.6s_ease-out_0.4s_forwards]">
              <div className="h-px w-full bg-gradient-to-r from-accent/80 via-accent/25 to-transparent" />
              <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/75 md:text-xs">
                {meta.map((item, i) => (
                  <li key={item} className="flex items-center gap-4">
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent/70"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(16px);
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
