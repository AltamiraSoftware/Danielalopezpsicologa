import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { treatments } from "../data/treatments"

const treatmentIcons = {
  ansiedad: Brain,
  trauma: ShieldCheck,
  "terapia-infanto-juvenil": UsersRound,
  duelo: Heart,
  autoestima: Sparkles,
  "terapia-pareja": HeartHandshake,
}

export function SpecialtyCards() {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment) => {
        const TreatmentIcon = treatmentIcons[treatment.slug as keyof typeof treatmentIcons] ?? Brain

        return (
          <Link
            key={treatment.slug}
            href={treatment.path}
            data-event="click_treatment_card"
            data-location="home_treatments"
            data-page="landing"
            data-channel="internal_link"
            className="group flex min-h-[290px] w-full flex-col items-center rounded-[24px] p-6 text-center glass glass-hover"
          >
            <div className="icon-box mx-auto mb-6 h-14 w-14 shrink-0">
              <TreatmentIcon className="h-6 w-6 text-marino" strokeWidth={1.6} aria-hidden="true" />
            </div>

            <h3 className="mb-3 max-w-[280px] font-serif text-xl font-medium leading-snug text-marino">
              {treatment.cardTitle}
            </h3>
            <p className="text-sm leading-relaxed text-texto-2">
              {treatment.cardDescription}
            </p>
            <span className="mt-auto block pt-6">
              <span className="btn btn--secondary btn--sm">
                Ver tratamiento
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}
