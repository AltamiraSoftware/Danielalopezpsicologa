import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TreatmentLanding } from "@/app/tratamientos/_components/TreatmentLanding"
import { getTreatment, treatments } from "@/app/data/treatments"
import { danielaProfile, doctoraliaUrl, instagramUrl, siteUrl } from "@/app/data/site"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatment(slug)

  if (!treatment) {
    return {}
  }

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: {
      canonical: treatment.path,
    },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url: treatment.path,
      type: "website",
      locale: "es_ES",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${treatment.navLabel} con Daniela López`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      images: ["/opengraph-image.png"],
    },
  }
}

function TreatmentJsonLd({ slug }: { slug: string }) {
  const treatment = getTreatment(slug)

  if (!treatment) {
    return null
  }

  const absoluteUrl = `${siteUrl}${treatment.path}`
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.heroTitle,
    description: treatment.metaDescription,
    url: absoluteUrl,
    serviceType: treatment.serviceType,
    areaServed: "Madrid",
    provider: {
      "@type": "Person",
      name: danielaProfile.name,
      jobTitle: danielaProfile.role,
      identifier: `Colegiada ${danielaProfile.collegiateNumber}`,
      telephone: danielaProfile.phone,
      sameAs: [instagramUrl, doctoraliaUrl],
    },
  }
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: treatment.navLabel,
        item: absoluteUrl,
      },
    ],
  }

  return (
    <>
      {[service, faqPage, breadcrumbs].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params
  const treatment = getTreatment(slug)

  if (!treatment) {
    notFound()
  }

  return (
    <>
      <TreatmentJsonLd slug={slug} />
      <TreatmentLanding treatment={treatment} />
    </>
  )
}
