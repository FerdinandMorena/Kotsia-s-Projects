"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/carpentry", label: "Carpentry" },
  { href: "/services/tiling", label: "Tiling" },
  { href: "/services", label: "Painting" },
  { href: "/services/rhinolite-plastering", label: "RhinoLite Plastering" },
  { href: "/services/stormwater-drainage", label: "Stormwater Drainage" },
  { href: "/services/welding", label: "Welding" },
];

// Replace with your real profile URLs
const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email provider (Mailchimp, Resend, etc.)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-accent/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-60 h-24 overflow-hidden">
                <Image
                  src="/Thabo%27s%20Logo.png"
                  alt="Kotsia's Projects — Carpentry & Building Services in Limpopo & Gauteng"
                  width={220}
                  height={64}
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional carpentry and building services across Limpopo &amp;
              Gauteng. Custom woodwork, tiling, plastering, drainage, and
              welding — delivered with skill and integrity.
            </p>
            <p className="text-muted-foreground text-xs">
              Serving Polokwane · Johannesburg · Pretoria · Sandton · Midrand ·
              Centurion · Tzaneen · Mokopane &amp; more
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {service.label}
                    {service.label === "Carpentry" && (
                      <span className="ml-2 text-accent text-xs font-medium">
                        ★ Primary
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-1 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Polokwane,+Limpopo,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  <span className="block">Limpopo, South Africa</span>
                  <span className="block">Gauteng, South Africa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Kotsia&apos;s Projects. All
              rights reserved. | Carpentry &amp; Building Services in Limpopo
              &amp; Gauteng
            </p>
            <p className="text-muted-foreground text-sm">
              Developed by Ferdinand Morena
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
