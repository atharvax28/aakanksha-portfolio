import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"

const siteUrl = "https://aakankshatayadeportfolio.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ]
}
