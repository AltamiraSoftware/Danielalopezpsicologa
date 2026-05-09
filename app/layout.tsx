import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { CookieConsent } from './components/CookieConsent'
import './globals.css'

const GTM_ID = 'GTM-KXRQXQ7D'

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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
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
      <Script id="google-consent-mode-default" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
