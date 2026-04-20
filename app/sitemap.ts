import type { MetadataRoute } from "next";
import { siteConfig, siteServices } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const serviceEntries: MetadataRoute.Sitemap = siteServices.map(
    ({ slug, changeFrequency, priority }) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    ...serviceEntries,
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
