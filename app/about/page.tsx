import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  CheckCircle,
  Target,
  Eye,
  Award,
  Users,
  Clock,
  Shield,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { aboutPageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Kotsia's Projects — Carpentry Specialists in Limpopo & Gauteng",
  description:
    "Learn about Kotsia's Projects, a carpentry-led construction company with over 8 years of experience in Limpopo and Gauteng. Custom woodwork, kitchen cupboards, built-ins, and full building services.",
  keywords: aboutPageKeywords,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Kotsia's Projects — Carpentry Specialists in Limpopo & Gauteng",
    description:
      "Over 8 years of carpentry experience across Limpopo & Gauteng. Custom woodwork, kitchen cupboards, and full building services.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: `${siteConfig.url}/images/53.webp`,
        alt: "About Kotsia's Projects",
      },
    ],
  },
};

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "Every piece reflects dedication to traditional woodworking techniques and modern precision.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "Direct communication and collaboration to bring your unique vision to life.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Consistent quality and dependable timelines you can count on.",
  },
  {
    icon: Shield,
    title: "Quality Materials",
    description:
      "Only the finest woods and materials to ensure lasting beauty and durability.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Carpentry Journey Begins",
    description:
      "Started specializing in custom woodwork and furniture making.",
  },
  {
    year: "2016",
    title: "First Major Projects",
    description: "Completed custom kitchen cabinetry and home renovations.",
  },
  {
    year: "2019",
    title: "500 Custom Pieces",
    description:
      "Celebrated creating 500+ custom furniture and woodwork pieces.",
  },
  {
    year: "2022",
    title: "Expanded Services",
    description: "Added supporting services to complement carpentry projects.",
  },
  {
    year: "2024",
    title: "Established Reputation",
    description:
      "Recognized as a trusted carpenter across Limpopo and Gauteng.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/52.webp"
            alt="Skilled carpenter with over 8 years experience in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              About Kotsia&apos;s Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Carpentry Specialists Serving Limpopo & Gauteng for Over a 8 years
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A passionate carpenter dedicated to bringing craftsmanship and
              precision to every custom woodwork project, creating spaces that
              enhance homes and deliver lasting value across Limpopo and
              Gauteng.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <div className="relative">
                <div className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Thabo%27s%20Logo.png"
                    alt="Kotsia's Projects — Carpentry & Building Services Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey as a carpenter began with a deep appreciation for
                  the beauty and versatility of wood. What started as a passion
                  for woodworking has evolved into a dedicated career creating
                  custom furniture, cabinetry, and structural elements that
                  bring character and functionality to homes across Limpopo and
                  Gauteng.
                </p>
                <p>
                  Over the past 8 years, I&apos;ve had the privilege of working
                  on hundreds of projects — from custom kitchen cupboards in
                  Polokwane to built-in wardrobes in Johannesburg and Sandton.
                  Each project teaches me something new and reinforces my
                  commitment to quality craftsmanship.
                </p>
                <p>
                  Today, I focus on delivering personalized carpentry services
                  that reflect my clients&apos; vision while maintaining the
                  highest standards of precision and durability. Whether
                  it&apos;s a bespoke dining table, custom built-ins, or
                  structural woodwork, I approach every piece with the same
                  attention to detail and pride in my work.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-up">
              <div className="p-8 bg-card rounded-xl border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  My Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create exceptional custom woodwork that enhances the beauty
                  and functionality of homes across Limpopo and Gauteng, using
                  traditional craftsmanship combined with modern precision to
                  deliver pieces that bring joy and lasting value to my clients.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="p-8 bg-card rounded-xl border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  My Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted carpenter in Limpopo and Gauteng, known
                  for creating custom woodwork that combines timeless
                  craftsmanship with innovative design — helping homeowners
                  achieve their dream spaces with quality that endures.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and define who we are as a
              carpentry and building services company.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimateOnScroll
                key={value.title}
                animation="fade-up"
                delay={index * 100}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Experience & Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                A 8 years of Excellence in Limpopo & Gauteng
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 8 years of experience as a carpenter and building
                services contractor, I bring expertise to every project across
                Limpopo and Gauteng. From Polokwane to Johannesburg, Pretoria to
                Sandton — my breadth of work across both provinces sets me
                apart.
              </p>

              <ul className="space-y-4">
                {[
                  "Specialized carpentry experience since 2014",
                  "Continuous training and skill development",
                  "Quality tools and premium materials",
                  "Serving Limpopo and Gauteng with equal dedication",
                  "Safety-first approach on all project sites",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground text-sm">
                    Years Experience
                  </div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Projects Done
                  </div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground text-sm">
                    Provinces Served
                  </div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Satisfaction
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
