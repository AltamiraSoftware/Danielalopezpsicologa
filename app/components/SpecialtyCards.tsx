import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { treatments } from "../data/treatments"

const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"

export function SpecialtyCards() {
  return (
    <div className="grid items-stretch justify-center gap-4 overflow-visible sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment) => (
        <Link
          key={treatment.slug}
          href={treatment.path}
          data-event="click_treatment_card"
          data-location="home_treatments"
          data-page="landing"
          data-channel="internal_link"
          className={`group flex min-h-[275px] w-full max-w-[430px] flex-col ${cardGlass}`}
        >
          <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)] shadow-[0_12px_24px_rgba(38,56,91,0.10)]">
            <CheckCircle2 className="h-6 w-6 text-[#7F9256]" />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-[#26385B] transition group-hover:text-[#6F6D9E]">
            {treatment.cardTitle}
          </h3>
          <p className="text-sm leading-relaxed text-[#5D6680] sm:text-base">
            {treatment.cardDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {treatment.heroBadges.slice(0, 2).map((badge) => (
              <span key={badge} className="rounded-full border border-white/65 bg-white/42 px-3 py-1 text-xs font-semibold text-[#5D6680]">
                {badge}
              </span>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#9B8BD3] transition group-hover:text-[#26385B]">
            Ver tratamiento
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  )
}
