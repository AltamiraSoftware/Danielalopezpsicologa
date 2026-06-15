import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de privacidad | Daniela López Psicóloga",
  description: "Información sobre el tratamiento de datos personales en la web de Daniela López Psicóloga.",
  alternates: {
    canonical: "/politica-privacidad",
  },
}

const sections = [
  {
    title: "1. Responsable del tratamiento",
    bullets: [
      "Nombre completo: María Daniela López Meléndez",
      "NIF: Y6542205F",
      "Correo electrónico: bivalentesalud@gmail.com",
      "Teléfono de contacto: +34 614 412 183",
      "Colegiación profesional: M-41829",
      "Dirección profesional: C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid",
    ],
  },
  {
    title: "2. Finalidad del tratamiento",
    paragraphs: [
      "Los datos personales recogidos serán tratados únicamente con la finalidad de gestionar solicitudes de información, comunicaciones necesarias, servicios profesionales contratados, facturación cuando corresponda y una adecuada atención profesional.",
    ],
  },
  {
    title: "3. Datos personales tratados",
    bullets: [
      "Datos identificativos, como nombre y apellidos.",
      "Datos de contacto, como correo electrónico y teléfono.",
      "Datos necesarios para gestionar solicitudes de información o citas.",
      "Datos administrativos, de facturación y pago cuando proceda.",
      "Información relacionada con la atención profesional que el usuario facilite voluntariamente en el contexto del servicio.",
    ],
  },
  {
    title: "4. Base jurídica del tratamiento",
    paragraphs: [
      "La base legal del tratamiento es el consentimiento de la persona interesada y/o la ejecución de una relación precontractual o contractual, según la naturaleza de la solicitud y del servicio.",
    ],
  },
  {
    title: "5. Destinatarios de los datos",
    paragraphs: [
      "Los datos no serán cedidos a terceros salvo obligación legal o cuando resulte necesario para la prestación del servicio.",
      "En el funcionamiento de esta web pueden intervenir proveedores tecnológicos que actúan como encargados del tratamiento o, en su caso, como responsables independientes.",
    ],
    bullets: [
      "Resend, como servicio de envío de correos electrónicos transaccionales.",
      "Vercel, como proveedor de alojamiento y analítica técnica del sitio web.",
      "Google LLC, si la persona usuaria acepta cookies analíticas o de marketing mediante Google Tag Manager.",
    ],
  },
  {
    title: "6. Conservación de los datos",
    paragraphs: [
      "Los datos se conservarán durante el tiempo necesario para atender la solicitud, mantener la relación profesional y cumplir las obligaciones legales aplicables.",
    ],
  },
  {
    title: "7. Seguridad y confidencialidad",
    paragraphs: [
      "Se garantiza la confidencialidad de los datos personales y la adopción de medidas técnicas y organizativas adecuadas para proteger la información, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
    ],
  },
  {
    title: "8. Derechos de las personas interesadas",
    paragraphs: [
      "La persona interesada podrá ejercer sus derechos mediante solicitud escrita dirigida a la profesional responsable a través del correo electrónico bivalentesalud@gmail.com.",
      "Asimismo, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.",
    ],
    bullets: ["Acceso", "Rectificación", "Supresión", "Limitación del tratamiento", "Oposición", "Portabilidad"],
  },
  {
    title: "9. Actualización de la política",
    paragraphs: [
      "La presente política de privacidad podrá ser modificada para adaptarse a cambios normativos, técnicos o de funcionamiento del servicio. Se recomienda su revisión periódica.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Política de privacidad" title="Política de privacidad" updatedAt="Última actualización: 26 de marzo de 2026" intro="En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a las personas usuarias de esta página web sobre el tratamiento de sus datos personales." sections={sections} />
}

function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  updatedAt: string
  intro: string
  sections: Array<{ title: string; paragraphs?: string[]; bullets?: string[] }>
}) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FBF8FF_0%,#F5F8EF_100%)] text-[#26385B]">
      <section className="bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-sm font-semibold text-white/76 hover:text-white">Volver al inicio</a>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/70">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-white/78">{updatedAt}</p>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-[30px] border border-white/70 bg-white/78 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] sm:p-10">
          <p className="text-base leading-8 text-[#5D6680]">{intro}</p>
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
