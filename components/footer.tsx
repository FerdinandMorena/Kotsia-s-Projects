import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Carpentry",
  "Tiling",
  "Painting",
  "RhinoLite Plastering",
  "Stormwater Drainage",
  "Welding",
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-60 h-24 rounded-3xl overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/Thabo%27s%20Logo.png"
                  alt="Kotsia's Projects logo"
                  width={220}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional construction and maintenance services. Building with
              precision and trust since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +27 123 456 7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@kotsiasprojects.co.za
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Johannesburg, South Africa
                </span>
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
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
