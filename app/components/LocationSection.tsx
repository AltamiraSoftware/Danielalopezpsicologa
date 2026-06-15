import { MapPin } from "lucide-react"
import { GoogleMapPreview } from "./GoogleMapPreview"
import { WhatsAppLogo } from "./BrandIcons"
import { address, mapQuery, whatsappUrl } from "../data/site"

const sectionSage =
  "relative overflow-hidden bg-[radial-gradient(900px_420px_at_14%_12%,rgba(255,254,250,0.76)_0%,rgba(255,254,250,0)_56%),radial-gradient(820px_380px_at_88%_86%,rgba(164,190,123,0.28)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#F5F8EF_0%,#EAF1DE_100%)]"
const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"
const iconBox =
  "inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)] shadow-[0_12px_24px_rgba(38,56,91,0.10)]"

type LocationSectionProps = {
  page?: string
  whatsappHref?: string
}

export function LocationSection({ page = "landing", whatsappHref = whatsappUrl }: LocationSectionProps) {
  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26385B] text-balance sm:text-3xl lg:text-4xl">
            Consulta presencial en Chamartín y terapia online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#5D6680] text-pretty">
            Puedes acudir a consulta presencial en {address}. Es una consulta independiente dentro del centro Psicotep. También puedes realizar sesiones online si necesitas más flexibilidad.
          </p>
          <div className={`${cardGlass} mb-6`}>
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 shrink-0 ${iconBox}`}>
                <MapPin className="block h-6 w-6 text-[#9B8BD3]" />
              </div>
              <div>
                <p className="font-semibold text-[#26385B]">Dirección</p>
                <p className="text-[#5D6680]">C. de Marcenado, 14, Despacho 2</p>
                <p className="text-[#5D6680]">Chamartín, 28002 Madrid</p>
                <p className="text-sm font-medium text-[#5D6680]/80">Consulta independiente dentro del centro Psicotep</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_google_maps"
              data-location="location"
              data-page={page}
              data-channel="maps"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] px-6 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(127,146,86,0.24)] transition-all hover:opacity-90"
            >
              <MapPin className="h-5 w-5" />
              Cómo llegar
            </a>
            <a
              href={whatsappHref}
              data-event="click_whatsapp"
              data-location="location"
              data-page={page}
              data-channel="whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#7F9256] px-6 py-3 font-semibold text-[#7F9256] transition-all hover:bg-[#B8CA82]/18"
            >
              <WhatsAppLogo className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <GoogleMapPreview mapQuery={mapQuery} />
      </div>
    </section>
  )
}
