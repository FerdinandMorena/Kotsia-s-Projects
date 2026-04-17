import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Kotsia's Projects",
  description:
    "Get in touch with Kotsia's Projects for a free consultation and quote. We're here to help with all your construction and maintenance needs.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 123 456 7890", "+27 098 765 4321"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kotsiasprojects.co.za", "quotes@kotsiasprojects.co.za"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Construction Avenue", "Johannesburg, South Africa"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 7:00 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/47.webp"
            alt="Carpenter's hands working with wood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Let&apos;s Build Something Together
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your project? Get in touch with us for a free
              consultation and quote. We&apos;re here to help bring your vision
              to life.
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
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Request a Quote
                </h2>
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
                  Have questions or ready to start your project? Reach out to us
                  through any of the channels below, or fill out the form and
                  we&apos;ll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.details.map((detail) => (
                          <p
                            key={detail}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
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
              Quick answers to common questions about our services.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How do I get a quote?",
                a: "Simply fill out the contact form above or give us a call. We'll arrange a site visit to assess your project and provide a detailed quote.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer free initial consultations for all projects. We'll discuss your needs and provide expert advice.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve the Johannesburg and Pretoria metropolitan areas, but we can discuss projects in surrounding regions.",
              },
              {
                q: "Can you customize services to fit my budget?",
                a: "Absolutely. We work with clients of all budgets. We'll discuss your requirements and develop a solution that delivers quality within your financial constraints.",
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
