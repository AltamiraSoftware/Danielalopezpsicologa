import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
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
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
