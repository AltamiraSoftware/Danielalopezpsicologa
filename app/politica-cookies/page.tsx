import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de cookies | Daniela López Psicóloga",
  description: "Información sobre el uso de cookies y tecnologías similares en la web de Daniela López Psicóloga.",
}

const sections = [
  {
    title: "1. Qué son las cookies",
    paragraphs: [
      "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Su finalidad puede ser técnica, analítica, publicitaria o de personalización, dependiendo de su función.",
    ],
  },
  {
    title: "2. Cookies técnicas necesarias",
    paragraphs: [
      "Esta web utiliza cookies técnicas necesarias para permitir la navegación, recordar la preferencia de consentimiento y facilitar el correcto funcionamiento de formularios y servicios integrados.",
      "Estas cookies no requieren consentimiento previo, ya que son necesarias para prestar el servicio solicitado por el usuario.",
    ],
    bullets: [
      "Recordar la preferencia de consentimiento de cookies.",
      "Permitir el funcionamiento técnico del formulario de contacto.",
      "Garantizar seguridad, navegación y rendimiento básico de la página.",
    ],
  },
  {
    title: "3. Cookies analíticas",
    paragraphs: [
      "Con el consentimiento del usuario, esta web puede utilizar Google Analytics 4 a través de Google Tag Manager y Vercel Analytics para medir visitas, páginas consultadas, interacciones generales y rendimiento de contenidos.",
      "Estas cookies y tecnologías similares se utilizan con finalidad estadística y de mejora del sitio web. El consentimiento se gestiona mediante Google Consent Mode v2.",
    ],
    bullets: [
      "Proveedor: Google LLC y Vercel Inc.",
      "Servicios: Google Tag Manager, Google Analytics 4 y Vercel Analytics.",
      "ID de contenedor: GTM-KXRQXQ7D.",
      "ID de medición GA4: [PENDIENTE: ID DE MEDICIÓN GA4 SI APLICA].",
      "Finalidad: analítica web y medición de rendimiento.",
    ],
  },
  {
    title: "4. Cookies de marketing",
    paragraphs: [
      "La web puede utilizar cookies o tecnologías de marketing para medir conversiones, optimizar campañas publicitarias o personalizar anuncios, siempre que el usuario lo acepte expresamente.",
      "Si el usuario rechaza esta categoría, los consentimientos ad_storage, ad_user_data y ad_personalization permanecen en denied.",
    ],
  },
  {
    title: "5. Servicios de terceros",
    paragraphs: [
      "Google Tag Manager: permite gestionar etiquetas de medición y marketing respetando la configuración de consentimiento del usuario.",
      "Vercel Analytics: permite medir rendimiento y uso general de la web cuando el usuario acepta cookies analíticas.",
      "Google Maps: permite mostrar el mapa interactivo de la consulta dentro de la web cuando el usuario acepta mapas y contenido externo o solicita expresamente cargar el mapa.",
      "Resend: servicio de envío de correos electrónicos transaccionales. No se utiliza para instalar cookies de navegación ordinaria.",
      "Doctoralia, Instagram y WhatsApp: enlaces externos que pueden aplicar sus propias políticas de privacidad y cookies al abrir sus páginas o aplicaciones.",
    ],
  },
  {
    title: "6. Gestión del consentimiento",
    paragraphs: [
      "Al acceder a la web, el usuario puede aceptar, rechazar o configurar las cookies opcionales desde el banner de consentimiento.",
      "El usuario puede modificar su decisión en cualquier momento desde el enlace Configurar cookies disponible en el pie de página.",
      "Por defecto, Google Consent Mode v2 se configura con ad_storage, analytics_storage, ad_user_data y ad_personalization en denied hasta que el usuario acepte las categorías correspondientes.",
      "La carga de Google Maps se gestiona de forma independiente desde la categoría Mapas y contenido externo.",
    ],
  },
  {
    title: "7. Actualizaciones de la política",
    paragraphs: [
      "Esta política puede actualizarse en función de cambios normativos, técnicos o de los servicios utilizados. Se recomienda revisarla periódicamente.",
    ],
  },
]

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FBF8FF_0%,#F5F8EF_100%)] text-[#26385B]">
      <section className="bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-sm font-semibold text-white/76 hover:text-white">Volver al inicio</a>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/70">Política de cookies</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Política de cookies</h1>
          <p className="mt-4 text-lg text-white/78">Última actualización: 10 de abril de 2026</p>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-[30px] border border-white/70 bg-white/78 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] sm:p-10">
          <p className="text-base leading-8 text-[#5D6680]">
            La presente Política de Cookies explica qué son las cookies, qué tipo de cookies utiliza esta página web y cómo pueden gestionarse, de conformidad con el artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
          </p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl font-semibold text-[#26385B]">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#5D6680]">{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3 rounded-[24px] border border-[#DADFD2] bg-[#F8FAF4] px-5 py-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-[#5D6680]">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9B8BD3]" />
                          <span className="leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
