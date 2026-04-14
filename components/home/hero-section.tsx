"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Construction site at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 md:pt-20 pb-12 md:pb-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
            Professional Construction Services
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance animate-fade-in-up">
            Building with{" "}
            <span className="text-primary-foreground">Precision</span>
            {" & "}
            <span className="text-primary-foreground">Trust</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Expert construction and maintenance services tailored to your needs.
            From carpentry to welding, we deliver quality workmanship that
            stands the test of time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[180px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/20 animate-fade-in-up animation-delay-500">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                10+
              </div>
              <div className="text-sm text-white/70 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-sm text-white/70 mt-1">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-white/70 mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
