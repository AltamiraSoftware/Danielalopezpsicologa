import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danielalopezpsicologa.es"

const routes = [
  "",
  "/quien-soy",
  "/contacto",
  "/politica-privacidad",
  "/politica-cookies",
  "/aviso-legal",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contacto" ? 0.8 : 0.6,
  }))
}
