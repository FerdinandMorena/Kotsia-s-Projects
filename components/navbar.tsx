"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group" aria-label="Home">
            <div className="w-64 h-28 overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/Thabo%27s%20Logo.png"
                alt="Kotsia's Projects logo"
                width={192}
                height={64}
                className="w-full h-full object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-md font-lg tracking-wide transition-colors",
                  isScrolled
                    ? pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                    : pathname === link.href
                      ? "text-white"
                      : "text-white hover:text-accent",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block md:ml-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2 transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
          >
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
