"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"

const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"

const specialties = [
  {
    title: "Ansiedad y regulación emocional",
    description:
      "Si sientes que tu mente no para, vives en alerta constante, te cuesta descansar o la ansiedad está afectando tu día a día, este espacio puede ayudarte.",
    detail:
      "En la primera sesión exploraremos lo que te está ocurriendo, identificaremos qué puede estar manteniendo ese malestar y trazaremos un plan terapéutico realista y adaptado a tus necesidades. Disponible presencialmente en Madrid y online.",
    helps: [
      "Sientes preocupación constante, anticipación excesiva o te cuesta desconectar incluso cuando no hay un motivo claro.",
      "Notas ataques de ansiedad, bloqueo, irritabilidad, insomnio o síntomas físicos que te preocupan y no sabes bien cómo manejar.",
      "La ansiedad está afectando al descanso, al trabajo, a tus relaciones o a tu capacidad para sostener el día a día con normalidad.",
    ],
  },
  {
    title: "Estado de ánimo",
    description:
      "Si últimamente sientes apatía, vacío, cansancio emocional o desconexión contigo mismo/a, en terapia encontrarás un espacio seguro para entender lo que te está pasando.",
    detail:
      "El malestar emocional no siempre se manifiesta solo como tristeza. A veces aparece como apatía, cansancio constante, desconexión emocional o sensación de vacío. Trabajaremos para comprender qué hay detrás de ese malestar, darte herramientas para gestionarlo y ayudarte a recuperar bienestar a tu ritmo.",
    helps: [
      "Sientes apatía, desmotivación o vacío persistente.",
      "Te cuesta conectar con lo que antes te sostenía.",
      "El día a día se vuelve pesado o difícil de sostener.",
    ],
  },
  {
    title: "Trauma y estrés",
    description:
      "Hay experiencias que dejan una huella profunda y pueden seguir afectando cómo te sientes, reaccionas o te relacionas.",
    detail:
      "El trauma no solo tiene que ver con lo que ocurrió, sino también con cómo esa experiencia dejó huella en tus emociones, en tu cuerpo y en tu forma de relacionarte. En terapia abordaremos ese dolor sin revivirlo de forma forzada, creando primero la seguridad necesaria para poder sanar a tu ritmo.",
    helps: [
      "Hay experiencias del pasado que siguen afectándote en el presente.",
      "Sientes bloqueos emocionales, hipervigilancia o respuestas intensas que te cuesta comprender.",
      "Algunas situaciones o relaciones activan miedo, inseguridad o sensación de desregulación emocional.",
      "Notas que ciertas heridas siguen influyendo en cómo te relacionas contigo mismo/a y con los demás.",
    ],
  },
  {
    title: "Terapia infanto-juvenil",
    description:
      "A veces los niños y adolescentes expresan su malestar a través de cambios de conducta, dificultades emocionales o problemas para gestionar lo que sienten.",
    detail:
      "En terapia trabajaremos con ellos desde sus necesidades y también incluye orientación y acompañamiento a madres, padres o cuidadores para ofrecer herramientas y favorecer su bienestar dentro y fuera de consulta.",
    helps: [
      "Notas cambios emocionales o de comportamiento que te preocupan.",
      "Existen dificultades en casa, en el colegio o en sus relaciones.",
      "Está atravesando una situación difícil y no sabe cómo gestionarla.",
      "Como familia, necesitáis orientación para acompañarle mejor.",
    ],
  },
  {
    title: "Duelo",
    description:
      "Perder a alguien, atravesar una ruptura o vivir un cambio importante puede remover muchas emociones difíciles de sostener.",
    detail:
      "La terapia de duelo puede ayudarte cuando una pérdida, una ruptura, una enfermedad o un cambio importante está generando un malestar difícil de gestionar. En terapia encontrarás un espacio seguro para comprender lo que estás viviendo, transitar el proceso emocional y recolocar esa experiencia a tu ritmo, sin presiones ni tiempos impuestos.",
    helps: [
      "Sientes que la pérdida te está desbordando.",
      "El duelo se mezcla con culpa, enfado o bloqueo.",
      "Necesitas un espacio donde poder sostenerlo con calma.",
    ],
  },
  {
    title: "Autoestima",
    description:
      "Si te cuesta poner límites, priorizarte o sueles ser muy crítico/a contigo mismo/a, puede haber heridas en tu autoestima que merecen ser revisadas.",
    detail:
      "En terapia trabajaremos para fortalecer tu autoconcepto y construir una relación más sana contigo.",
    helps: [
      "Predomina la autoexigencia o la sensación de no ser suficiente.",
      "Te cuesta poner límites o priorizarte.",
      "Tu seguridad depende mucho de la aprobación externa.",
    ],
  },
  {
    title: "Terapia de pareja",
    description:
      "La terapia de pareja no solo es útil cuando la relación está al límite. También puede ayudar cuando existe distancia emocional, conflictos repetitivos o dificultades en la comunicación.",
    detail:
      "En sesión trabajaremos para comprender lo que está ocurriendo, mejorar la comunicación y construir una relación más consciente y saludable.",
    helps: [
      "Discutís siempre por lo mismo y no encontráis salida.",
      "La distancia emocional o el desgaste se ha instalado.",
      "Queréis entender mejor qué está pasando en la relación.",
    ],
  },
]

export function SpecialtyCards() {
  const [openSpecialty, setOpenSpecialty] = useState<string | null>(null)

  return (
    <div className="grid items-start justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {specialties.map((specialty, index) => {
        const isOpen = openSpecialty === specialty.title

        return (
          <article
            key={specialty.title}
            className={`group flex h-full w-full min-h-[270px] max-w-[430px] flex-col ${cardGlass}`}
          >
            <div className="flex min-h-[190px] flex-col">
              <h3 className="mb-3 text-center text-lg font-semibold text-[#26385B] group-hover:text-[#6F6D9E]">
                {specialty.title}
              </h3>
              <p className="text-center leading-relaxed text-[#5D6680]">{specialty.description}</p>
            </div>

            {isOpen && (
              <div id={`specialty-detail-${index}`} className="mt-5 border-t border-white/55 pt-5">
                <p className="mb-4 leading-relaxed text-[#5D6680]">{specialty.detail}</p>
                <p className="mb-3 text-sm font-bold uppercase text-[#6F6D9E]">Puede ayudarte si</p>
                <ul className="space-y-3">
                  {specialty.helps.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#26385B]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7F9256]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpenSpecialty(isOpen ? null : specialty.title)}
              className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-bold text-[#9B8BD3] transition hover:text-[#26385B]"
              aria-expanded={isOpen}
              aria-controls={`specialty-detail-${index}`}
            >
              {isOpen ? "Ver menos" : "Ver más"}
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </article>
        )
      })}
    </div>
  )
}
