import { limpopoCities, gautengCities } from "@/lib/seo";
import type { MetadataRoute } from "next";

export const siteServices: {
  slug: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { slug: "carpentry", changeFrequency: "weekly", priority: 1.0 },
  { slug: "tiling", changeFrequency: "monthly", priority: 0.85 },
  { slug: "painting", changeFrequency: "monthly", priority: 0.85 },
  { slug: "rhinolite-plastering", changeFrequency: "monthly", priority: 0.85 },
  { slug: "stormwater-drainage", changeFrequency: "monthly", priority: 0.85 },
  { slug: "welding", changeFrequency: "monthly", priority: 0.85 },
];

export const siteConfig = {
  name: "Kotsia's Projects",
  url: "https://www.kotsiasprojects.co.za",
  /** Displayed on the UI, e.g. in footer and contact page */
  phone: "079 430 4631",
  /** Used in tel: href links */
  phoneRaw: "+27794304631",
  /** Used in WhatsApp wa.me links (no leading +) */
  phoneWhatsApp: "27794304631",
  /** Email address */
  email: "Mogalethabo23@gmail.com",
  description:
    "Professional carpentry and building services in Limpopo and Gauteng, South Africa. Specializing in custom woodwork, kitchen cupboards, doors, tiling, plastering, drainage, and welding.",
  ogImage: "/images/53.webp",
};

export const serviceAreas = {
  limpopo: limpopoCities,
  gauteng: gautengCities,
};

export const allServiceCities = [
  ...serviceAreas.limpopo,
  ...serviceAreas.gauteng,
];
