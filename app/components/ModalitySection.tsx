import { Home, UserCheck, Video } from "lucide-react"

const sectionWarm =
  "relative overflow-hidden bg-[radial-gradient(820px_380px_at_8%_12%,rgba(183,166,232,0.055)_0%,rgba(183,166,232,0)_56%),radial-gradient(780px_360px_at_94%_88%,rgba(164,190,123,0.10)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#FFFEFA_0%,#FCFAF4_100%)]"
const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"
const iconBox =
  "inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)] shadow-[0_12px_24px_rgba(38,56,91,0.10)]"

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
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {modalities.map((modality) => (
        <article
          key={modality.title}
          className={`${cardGlass} flex h-full min-h-[245px] flex-col items-center p-8 text-center`}
          style={{ borderColor: "rgba(183, 166, 232, 0.45)" }}
        >
          <div className={`mx-auto mb-6 h-14 w-14 shrink-0 ${iconBox}`}>
            <modality.icon className="block h-7 w-7 text-[#9B8BD3]" />
          </div>
          <h3 className="mb-3 text-center text-xl font-semibold text-[#26385B]">{modality.title}</h3>
          <p className="text-center leading-relaxed text-[#5D6680]">{modality.description}</p>
        </article>
      ))}
    </div>
  )
}

export function ModalitySection() {
  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] text-balance sm:text-3xl lg:text-4xl">
          Elige la modalidad que mejor encaje contigo
        </h2>
        <ModalityCards />
      </div>
    </section>
  )
}
