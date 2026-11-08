import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Figtree, Jost, Source_Serif_4 } from 'next/font/google'
import { AnalyticsEvents } from './components/AnalyticsEvents'
import { CookieConsent } from './components/CookieConsent'
import { ScrollReveal } from './components/ScrollReveal'
import './globals.css'

const GTM_ID = 'GTM-KXRQXQ7D'
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.danielalopezpsicologa.es')

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Daniela López Psicología',
  title: 'Daniela López Meléndez | Psicóloga General Sanitaria en Madrid y online',
  description:
    'Daniela López Meléndez, Psicóloga General Sanitaria colegiada M-41829. Terapia presencial en Madrid (Chamartín) y online para ansiedad, autoestima, duelo, infancia, adolescencia y pareja.',
  keywords: [
    'Daniela López Meléndez', 'psicóloga general sanitaria Madrid',
    'psicóloga Chamartín', 'psicóloga online', 'terapia ansiedad Madrid',
    'psicología infanto-juvenil', 'terapia autoestima', 'terapia de pareja Madrid',
  ],
  creator: 'Daniela López Meléndez',
  publisher: 'Daniela López Psicología',
  authors: [{ name: 'Daniela López Meléndez', url: siteUrl.toString() }],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '16x16 32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Daniela López Meléndez | Psicóloga General Sanitaria en Madrid',
    description: 'Consulta presencial en Madrid y terapia online. Ansiedad, autoestima, duelo, terapia infantojuvenil y pareja. Colegiada M-41829.',
    url: siteUrl.toString(),
    siteName: 'Daniela López Psicología',
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: 'Daniela López, psicóloga general sanitaria en Madrid y online. Isotipo botánico verde.',
    }],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniela López Meléndez | Psicóloga General Sanitaria',
    description: 'Terapia presencial en Madrid y online. Atención a adultos, adolescentes, infancia y parejas.',
    images: ['/opengraph-image'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1F2E4D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-crema scroll-smooth">
      <head>
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
      </head>
      <body className={`${figtree.variable} ${jost.variable} ${sourceSerif.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnalyticsEvents />
        {children}
        <ScrollReveal />
        <CookieConsent />
      </body>
    </html>
  )
}
