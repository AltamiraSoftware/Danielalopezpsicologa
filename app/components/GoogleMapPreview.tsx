"use client"

import { MapPin } from "lucide-react"
import { useState } from "react"

export function GoogleMapPreview({ mapQuery }: { mapQuery: string }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/40 shadow-[0_26px_70px_rgba(38,56,91,0.14)]">
      {showMap ? (
        <iframe
          title="Mapa de la consulta de Daniela López en Chamartín"
          src={embedUrl}
          className="aspect-[4/3] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex aspect-[4/3] min-h-[320px] flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(183,166,232,0.18),transparent_32%),linear-gradient(135deg,#FFFEFA_0%,#F1F5EA_100%)] p-8 text-center">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/72 shadow-[0_18px_36px_rgba(38,56,91,0.12)]">
            <MapPin className="h-8 w-8 text-[#7F9256]" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[#26385B]">Consulta en Chamartín</h3>
          <p className="mt-3 text-[#5D6680]">C. de Marcenado, 14, Despacho 2</p>
          <p className="text-[#5D6680]">Chamartín, 28002 Madrid</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#5D6680]/80">
            Para evitar cookies de terceros, el mapa interactivo de Google se carga solo si lo solicitas.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] px-6 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(127,146,86,0.24)] transition-all hover:opacity-90"
            >
              <MapPin className="h-5 w-5" />
              Ver mapa interactivo
            </button>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#7F9256] px-6 py-3 font-semibold text-[#7F9256] transition-all hover:bg-[#B8CA82]/18"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
