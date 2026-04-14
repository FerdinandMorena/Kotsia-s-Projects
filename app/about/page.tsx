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

export const metadata: Metadata = {
  title: "About Us | Kotsia's Projects",
  description:
    "Learn about Kotsia's Projects - your trusted partner in construction and maintenance services with over 10 years of experience.",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project, never compromising on quality.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Our skilled team works together to deliver outstanding results.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We keep our promises and deliver on time, every time.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest communication and transparent pricing are our foundation.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description:
      "Started with a vision to provide quality construction services.",
  },
  {
    year: "2016",
    title: "Team Expansion",
    description: "Grew our team to 10 skilled professionals.",
  },
  {
    year: "2019",
    title: "500 Projects",
    description: "Celebrated completing 500 successful projects.",
  },
  {
    year: "2022",
    title: "Service Expansion",
    description: "Added welding and drainage services to our offerings.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Recognized as a trusted name in the construction industry.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-about.jpg"
            alt="Our professional team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Building Dreams Into Reality
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              For over a decade, Kotsia&apos;s Projects has been the trusted
              choice for construction and maintenance services, delivering
              quality craftsmanship that stands the test of time.
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
                    alt="Kotsia's Projects logo"
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
                  Founded with a passion for quality craftsmanship,
                  Kotsia&apos;s Projects began as a small family business
                  dedicated to providing exceptional construction and
                  maintenance services to the local community.
                </p>
                <p>
                  Over the years, we&apos;ve grown into a full-service
                  construction company, but we&apos;ve never lost sight of what
                  made us successful in the first place: attention to detail,
                  honest communication, and a commitment to exceeding our
                  clients&apos; expectations.
                </p>
                <p>
                  Today, we proudly serve homeowners, businesses, and
                  contractors across the region, bringing the same dedication
                  and expertise to every project, no matter the size.
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
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional construction and maintenance services
                  that transform our clients&apos; visions into reality, while
                  maintaining the highest standards of quality, safety, and
                  professionalism in every project we undertake.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="p-8 bg-card rounded-xl border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted name in construction and maintenance
                  services, known for our unwavering commitment to excellence,
                  innovative solutions, and lasting relationships with our
                  clients and community.
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
              company.
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
                A Decade of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 10 years of experience in the construction industry,
                our team brings unmatched expertise to every project. We&apos;ve
                worked on residential homes, commercial properties, and
                industrial facilities, giving us a breadth of knowledge that
                sets us apart.
              </p>

              <ul className="space-y-4">
                {[
                  "Licensed and certified professionals",
                  "Continuous training and skill development",
                  "State-of-the-art tools and equipment",
                  "Comprehensive insurance coverage",
                  "Safety-first approach on all sites",
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    10+
                  </div>
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Team Members
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
