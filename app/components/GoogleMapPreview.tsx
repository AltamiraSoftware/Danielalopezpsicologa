"use client"

import { ExternalLink, MapPin } from "lucide-react"
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
    <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-lg border border-linea bg-white shadow-1 lg:max-w-none">
      {showMap ? (
        <div className="relative">
          <iframe
            title="Mapa de la consulta de Daniela López en Chamartín"
            src={embedUrl}
            className="block h-[320px] w-full border-0 sm:h-auto sm:aspect-[4/3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_google_maps"
            data-location="map_embed"
            data-page="landing"
            data-channel="maps"
            className="flex items-center justify-end gap-1.5 border-t border-linea bg-white px-3.5 py-2 text-xs font-medium text-marino transition-colors hover:bg-lavanda-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lavanda"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            Abrir en Google Maps
          </a>
        </div>
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center bg-lavanda-100/70 px-5 py-8 text-center sm:aspect-[4/3] sm:p-8">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-lavanda-100">
            <MapPin className="h-6 w-6 text-marino" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <h3 className="font-serif text-xl font-medium text-marino">Consulta en Chamartín</h3>
          <p className="mt-3 text-texto-2">C. de Marcenado, 14, Despacho 2</p>
          <p className="text-texto-2">Chamartín, 28002 Madrid</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-texto-3">
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
              className="btn btn--primary w-full sm:w-auto"
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
              className="btn btn--secondary w-full sm:w-auto"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
