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
  title: 'Daniela López Meléndez | Psicóloga en Madrid - Ansiedad, Adolescentes y Bienestar Emocional',
  description:
    'Psicóloga General Sanitaria en Madrid, especializada en ansiedad, terapia infanto-juvenil y bienestar emocional. Consulta presencial en Chamartín y online. Primera sesión desde 40 €.',
  keywords:
    'psicóloga Madrid, psicóloga Chamartín, ansiedad, terapia adolescentes, psicología infanto-juvenil, terapia online Madrid',
  openGraph: {
    images: ['/opengraph-image.png'],
    title: 'Daniela López Meléndez | Psicóloga en Madrid',
    description:
      'Psicóloga General Sanitaria especializada en ansiedad, terapia infanto-juvenil y bienestar emocional. Consulta en Chamartín.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#26385B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
