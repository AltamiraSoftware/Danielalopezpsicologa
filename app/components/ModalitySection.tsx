import { Home, UserCheck, Video } from "lucide-react"

const modalities = [
  {
    icon: Home,
    title: "Terapia presencial en Madrid",
    description: "Sesiones en consulta presencial en Chamartín, en un entorno tranquilo y profesional.",
  },
  {
    icon: Video,
    title: "Terapia online",
    description: "Sesiones por videollamada para empezar el proceso desde donde estés.",
  },
  {
    icon: UserCheck,
    title: "Primera sesión de orientación",
    description: "Un primer encuentro para valorar tu situación, resolver dudas y decidir siguientes pasos.",
  },
]

export function ModalityCards() {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modalities.map((modality) => (
        <article
          key={modality.title}
          className="flex h-full min-h-[245px] flex-col items-center rounded-[24px] p-6 text-center glass glass-hover"
        >
          <div className="icon-box mx-auto mb-6 h-12 w-12 shrink-0">
            <modality.icon className="h-5 w-5 text-marino" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <h3 className="mb-3 font-serif text-xl font-medium text-marino">{modality.title}</h3>
          <p className="leading-relaxed text-texto-2">{modality.description}</p>
        </article>
      ))}
    </div>
  )
}

export function ModalitySection() {
  return (
    <section className="section-lavanda border-t border-linea-fuerte py-[clamp(64px,6vw+32px,120px)]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-normal text-marino text-balance sm:text-3xl lg:text-4xl">
          Elige la modalidad que mejor encaje contigo
        </h2>
        <ModalityCards />
      </div>
    </section>
  )
}
