import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso legal | Daniela López Psicóloga",
  description: "Información legal de la web de Daniela López Psicóloga.",
  alternates: {
    canonical: "/aviso-legal",
  },
}

const sections = [
  {
    title: "1. Titularidad del sitio web",
    bullets: [
      "Nombre comercial: Daniela López Psicóloga.",
      "Titular: María Daniela López Meléndez.",
      "NIF: Y6542205F.",
      "Colegiación profesional: M-41829.",
      "Correo electrónico: [PENDIENTE: EMAIL LEGAL].",
      "Dirección profesional: C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid.",
      "Dirección fiscal: [PENDIENTE: DIRECCIÓN FISCAL].",
    ],
  },
  {
    title: "2. Objeto del sitio web",
    paragraphs: [
      "Esta página web tiene carácter informativo y permite solicitar información sobre servicios profesionales de psicología sanitaria prestados por Daniela López Meléndez, en modalidad presencial en Chamartín y online.",
    ],
  },
  {
    title: "3. Condiciones de uso",
    paragraphs: [
      "La persona usuaria se compromete a utilizar esta web de forma lícita, diligente y respetuosa con la normativa aplicable, evitando cualquier uso que pueda impedir el normal funcionamiento del sitio o afectar a derechos de terceros.",
    ],
  },
  {
    title: "4. Propiedad intelectual",
    paragraphs: [
      "Los textos, imágenes, diseño, estructura y demás contenidos de esta web están protegidos por derechos de propiedad intelectual o industrial. No se permite su reproducción, distribución o transformación sin autorización previa, salvo en los casos legalmente permitidos.",
    ],
  },
  {
    title: "5. Responsabilidad",
    paragraphs: [
      "La información publicada en esta web no sustituye una valoración profesional individualizada. La titular no se hace responsable de decisiones tomadas exclusivamente a partir de la información general publicada en el sitio.",
    ],
  },
  {
    title: "6. Enlaces externos",
    paragraphs: [
      "Esta web puede incluir enlaces a WhatsApp, Doctoralia, Instagram u otros servicios externos. La titular no controla sus contenidos, condiciones de uso, políticas de privacidad o cookies.",
    ],
  },
  {
    title: "7. Legislación aplicable",
    paragraphs: [
      "Este aviso legal se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que resulten competentes conforme a la normativa vigente.",
    ],
  },
]

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FBF8FF_0%,#F5F8EF_100%)] text-[#26385B]">
      <section className="bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-sm font-semibold text-white/76 hover:text-white">Volver al inicio</a>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/70">Aviso legal</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Aviso legal</h1>
          <p className="mt-4 text-lg text-white/78">Última actualización: 10 de abril de 2026</p>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-[30px] border border-white/70 bg-white/78 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] sm:p-10">
          <div className="space-y-10">
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
