import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xora.id",
      priority: 1,
    },
    {
      url: "https://xora.id/products",
      priority: 0.9,
    },
    {
      url: "https://xora.id/templates",
      priority: 0.9,
    },
    {
      url: "https://xora.id/portfolio",
      priority: 0.9,
    },
    {
      url: "https://xora.id/pricing",
      priority: 0.9,
    },
    {
      url: "https://xora.id/contact",
      priority: 0.9,
    },
  ];
}