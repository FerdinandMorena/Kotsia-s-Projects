import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kotsia's Projects | Carpentry & Home Maintenance Services",
  description:
    "Skilled carpenter offering professional carpentry, tiling, painting, RhinoLite plastering, stormwater drainage, and welding services. Quality workmanship you can trust.",
  keywords: [
    "carpentry",
    "carpenter",
    "woodwork",
    "home maintenance",
    "tiling",
    "painting",
    "plastering",
    "welding",
    "drainage",
  ],
  icons: {
    icon: "/siteIcon.png",
    apple: "/siteIcon.png",
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
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
