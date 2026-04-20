import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { contactPageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Contact Us — Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Get in touch with Kotsia's Projects for a free quote on carpentry, tiling, plastering, drainage, or welding services in Limpopo & Gauteng. Serving Polokwane, Johannesburg, Pretoria & more.",
  keywords: contactPageKeywords,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kotsia's Projects — Free Quote for Carpentry & Building Services",
    description:
      "Request a free quote for carpentry, tiling, plastering, drainage, or welding in Limpopo & Gauteng. We respond quickly.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: `${siteConfig.url}/images/47.webp`, alt: "Contact Kotsia's Projects" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/47.webp"
            alt="Contact Kotsia's Projects for carpentry services in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Request a Free Quote — Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your carpentry or building project? Contact us for
              a free consultation and quote. We serve Limpopo and Gauteng with
              reliable, professional service.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-background p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Tell us about your project and we&apos;ll get back to you with
                  a free, no-obligation quote.
                </p>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll animation="fade-left">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Looking for a carpenter in Polokwane, Johannesburg, or
                  Pretoria? We&apos;re ready to help. Reach out through any of
                  the channels below or fill in the form and we&apos;ll respond
                  as soon as possible.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a
                        href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like to get a quote for your services`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-green-600 transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Areas */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Areas We Serve</h3>
                      <p className="text-muted-foreground text-sm">
                        Limpopo: Polokwane, Tzaneen, Mokopane & more
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Gauteng: Johannesburg, Pretoria, Sandton, Midrand & more
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon – Fri: 7:00 AM – 5:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sat: 8:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">
                    Our Primary Specialty
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We are a carpentry-led construction company. Whether you
                    need kitchen cupboards in Polokwane or custom wardrobes in
                    Johannesburg — carpentry is our core strength, supported by
                    tiling, plastering, drainage, and welding services.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services in Limpopo
              and Gauteng.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How do I get a quote?",
                a: "Fill in the contact form above or give us a call on 079 430 4631. We'll arrange a visit to assess your project and provide a detailed quote — at no charge.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes. We offer free initial consultations for all projects. We'll discuss your needs and provide expert advice with no obligation.",
              },
              {
                q: "Which areas do you cover?",
                a: "We serve Limpopo (Polokwane, Tzaneen, Mokopane, Makhado and more) and Gauteng (Johannesburg, Pretoria, Sandton, Midrand, Centurion and more) and surrounding areas.",
              },
              {
                q: "Is carpentry your main service?",
                a: "Yes. Carpentry is our primary specialty and the service we are most known for. We also offer tiling, RhinoLite plastering, stormwater drainage, and welding as supporting services.",
              },
            ].map((faq, index) => (
              <AnimateOnScroll
                key={faq.q}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="p-6 bg-background rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
