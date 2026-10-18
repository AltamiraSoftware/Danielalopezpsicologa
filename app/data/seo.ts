import type { Metadata } from "next"

const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Daniela López, psicóloga sanitaria en Madrid",
}

/**
 * Open Graph por página: Next no mezcla el objeto openGraph de layout y página,
 * así que cada ruta declara el suyo con la imagen y los datos comunes.
 */
export function openGraphMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata["openGraph"] {
  return {
    title,
    description,
    url: path,
    siteName: "Daniela López Meléndez",
    locale: "es_ES",
    type: "website",
    images: [ogImage],
  }
}
