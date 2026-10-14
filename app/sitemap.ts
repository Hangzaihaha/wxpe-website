import type { MetadataRoute } from "next";
import { energySolutions } from "@/lib/energy-solutions";

const baseUrl = "https://www.wxpenergy.com.my";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/mobility`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/solutions`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...energySolutions.map((solution) => ({
      url: `${baseUrl}${solution.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.7
    }
  ];
}
