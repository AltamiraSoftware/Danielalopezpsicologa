import { MapPin } from "lucide-react"
import { GoogleMapPreview } from "./GoogleMapPreview"
import { WhatsAppLogo } from "./BrandIcons"
import { address, mapQuery, whatsappUrl } from "../data/site"

type LocationSectionProps = {
  page?: string
  whatsappHref?: string
}

export function LocationSection({ page = "landing", whatsappHref = whatsappUrl }: LocationSectionProps) {
  return (
    <section className="section-salvia border-t border-linea-fuerte py-[clamp(64px,6vw+32px,120px)]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-6 font-serif text-2xl font-normal text-marino text-balance sm:text-3xl lg:text-4xl">
            Consulta presencial en Chamartín y terapia online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-texto-2 text-pretty">
            Puedes acudir a consulta presencial en {address}. Es una consulta independiente dentro del centro Psicotep. También puedes realizar sesiones online si necesitas más flexibilidad.
          </p>
          <div className="glass mb-6 rounded-[24px] p-6">
            <div className="flex items-start gap-4">
              <div className="icon-box h-12 w-12 shrink-0">
                <MapPin className="h-5 w-5 text-marino" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-marino">Dirección</p>
                <p className="text-texto-2">C. de Marcenado, 14, Despacho 2</p>
                <p className="text-texto-2">Chamartín, 28002 Madrid</p>
                <p className="mt-1 text-sm text-texto-3">Consulta independiente dentro del centro Psicotep</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_google_maps"
              data-location="location"
              data-page={page}
              data-channel="maps"
              className="btn btn--secondary w-full sm:w-auto"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Cómo llegar
            </a>
            <a
              href={whatsappHref}
              data-event="click_whatsapp"
              data-location="location"
              data-page={page}
              data-channel="whatsapp"
              className="btn btn--whatsapp w-full sm:w-auto"
            >
              <WhatsAppLogo className="h-4 w-4" />
              Pedir primera sesión
            </a>
          </div>
        </div>
        <GoogleMapPreview mapQuery={mapQuery} />
      </div>
    </section>
  )
}
