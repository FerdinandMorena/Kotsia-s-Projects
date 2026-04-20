import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { allKeywords } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Professional Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
    template: "%s | Kotsia's Projects",
  },
  description:
    "Kotsia's Projects — professional carpentry and building services in Limpopo & Gauteng, South Africa. Specializing in custom woodwork, kitchen cupboards, built-in wardrobes, tiling, RhinoLite plastering, stormwater drainage, and welding. Serving Polokwane, Johannesburg, Pretoria, Sandton, Centurion, Midrand & more.",
  keywords: allKeywords,
  authors: [{ name: "Kotsia's Projects" }],
  creator: "Kotsia's Projects",
  publisher: "Kotsia's Projects",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Professional Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert carpentry, tiling, plastering, drainage, and welding services across Limpopo & Gauteng. Custom woodwork and home improvement done right.",
    images: [
      {
        url: `${siteConfig.url}/images/53.webp`,
        width: 1200,
        height: 630,
        alt: "Kotsia's Projects — Carpentry & Building Services in Limpopo & Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Custom woodwork, kitchen cupboards, tiling, plastering, drainage, and welding in Limpopo & Gauteng, South Africa.",
    images: [`${siteConfig.url}/images/53.webp`],
  },
  icons: {
    icon: "/siteIcon.png",
    apple: "/siteIcon.png",
    shortcut: "/siteIcon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LocalBusinessJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
