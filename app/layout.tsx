import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Daniela López Meléndez | Psicóloga sanitaria en Madrid y online',
  description:
    'Psicóloga General Sanitaria colegiada M-41829 en Madrid. Consulta presencial en Chamartín y terapia online para ansiedad, autoestima, duelo, adolescentes, pareja y familia. Primera sesión desde 40 €.',
  keywords:
    'psicóloga sanitaria Madrid, psicóloga Chamartín, psicóloga ansiedad Madrid, psicóloga adolescentes Madrid, psicología infanto-juvenil Madrid, terapia online Madrid, terapia autoestima Madrid',
  openGraph: {
    title: 'Daniela López | Psicóloga en Madrid',
    description:
      'Terapia presencial en Chamartín y online para ansiedad, duelo y terapia infantojuvenil. Primera sesión desde 40 €.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniela López, psicóloga sanitaria en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniela López | Psicóloga en Madrid',
    description:
      'Terapia presencial en Chamartín y online. Primera sesión desde 40 €.',
    images: ['/opengraph-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#26385B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#fffefa] scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
