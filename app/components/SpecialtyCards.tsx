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

const cardGlass =
  "relative isolate overflow-hidden rounded-[30px] border border-white/65 bg-white/22 p-6 text-center shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/85 hover:bg-white/30 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"

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
    <div className="grid items-stretch justify-center gap-4 overflow-visible sm:grid-cols-2 lg:grid-cols-3">
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
            className={`group mx-auto flex min-h-[310px] w-full max-w-[430px] flex-col items-center ${cardGlass}`}
          >
            <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#B7A6E8]/70 to-transparent" />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 h-20 w-20 text-[#B7A6E8]/26 transition group-hover:text-[#B7A6E8]/40"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path d="M18 44C25 21 52 18 62 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M23 56C35 46 50 48 58 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M36 19C42 27 42 36 36 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.86)_0%,rgba(247,243,255,0.78)_45%,rgba(216,230,163,0.28)_100%)] shadow-[0_18px_34px_rgba(111,109,158,0.16)]">
              <span className="absolute inset-2 rounded-[20px] border border-[#B7A6E8]/22" />
              <TreatmentIcon className="relative h-9 w-9 text-[#8F7DD6] transition group-hover:scale-105 group-hover:text-[#6F6D9E]" strokeWidth={1.8} />
            </div>

            <h3 className="mb-3 max-w-[280px] text-center text-xl font-semibold leading-tight text-[#26385B] transition group-hover:text-[#6F6D9E]">
              {treatment.cardTitle}
            </h3>
            <p className="max-w-[330px] text-center text-sm leading-relaxed text-[#5D6680] sm:text-base">
              {treatment.cardDescription}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {treatment.heroBadges.slice(0, 2).map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#B7A6E8]/28 bg-white/48 px-3 py-1 text-xs font-semibold text-[#6F6D9E] shadow-[0_8px_18px_rgba(111,109,158,0.08)]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#B7A6E8]/36 bg-white/56 px-5 py-3 text-sm font-bold text-[#7D6CC7] shadow-[0_14px_30px_rgba(111,109,158,0.12)] transition group-hover:border-[#B7A6E8]/58 group-hover:bg-white/76 group-hover:text-[#26385B]">
              Ver tratamiento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
