"use client"

import { MapPin } from "lucide-react"
import { useEffect, useState } from "react"

const STORAGE_KEY = "daniela_cookie_consent"
const CONSENT_UPDATED_EVENT = "daniela:cookie-consent-updated"

type ConsentPreferences = {
  externalContent?: boolean
}

type StoredConsent = {
  consent?: ConsentPreferences
}

function canLoadExternalContent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as StoredConsent | null

    return stored?.consent?.externalContent === true
  } catch {
    return false
  }
}

export function GoogleMapPreview({ mapQuery }: { mapQuery: string }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    if (canLoadExternalContent()) {
      setShowMap(true)
    }

    function handleConsentUpdated(event: Event) {
      const consent = (event as CustomEvent<ConsentPreferences>).detail

      setShowMap(consent?.externalContent === true)
    }

    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdated)

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdated)
    }
  }, [])

  return (
    <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white/70 bg-white/40 shadow-[0_26px_70px_rgba(38,56,91,0.14)] lg:max-w-none">
      {showMap ? (
        <iframe
          title="Mapa de la consulta de Daniela López en Chamartín"
          src={embedUrl}
          className="h-[320px] w-full border-0 sm:h-auto sm:aspect-[4/3]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(183,166,232,0.18),transparent_32%),linear-gradient(135deg,#FFFEFA_0%,#F1F5EA_100%)] px-5 py-8 text-center sm:aspect-[4/3] sm:p-8">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/72 shadow-[0_18px_36px_rgba(38,56,91,0.12)]">
            <MapPin className="h-8 w-8 text-[#7F9256]" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[#26385B]">Consulta en Chamartín</h3>
          <p className="mt-3 text-[#5D6680]">C. de Marcenado, 14, Despacho 2</p>
          <p className="text-[#5D6680]">Chamartín, 28002 Madrid</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#5D6680]/80">
            Para evitar cookies de terceros, el mapa interactivo de Google se carga solo si aceptas mapas y contenido externo o lo solicitas.
          </p>
          <div className="mt-6 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setShowMap(true)}
              data-event="view_google_map"
              data-location="map_preview"
              data-page="landing"
              data-channel="maps"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] px-6 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(127,146,86,0.24)] transition-all hover:opacity-90 sm:w-auto"
            >
              <MapPin className="h-5 w-5" />
              Ver mapa interactivo
            </button>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_google_maps"
              data-location="map_preview"
              data-page="landing"
              data-channel="maps"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#7F9256] px-6 py-3 font-semibold text-[#7F9256] transition-all hover:bg-[#B8CA82]/18 sm:w-auto"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
