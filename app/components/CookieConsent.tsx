"use client"

import Link from "next/link"
import { Analytics } from "@vercel/analytics/react"
import { startTransition, useEffect, useState } from "react"

const STORAGE_KEY = "daniela_cookie_consent"
const CONSENT_VERSION = 1

type ConsentPreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

type StoredConsent = {
  version: number
  consent: ConsentPreferences
  updatedAt: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const defaultConsent: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

function getGoogleConsent(consent: ConsentPreferences) {
  return {
    ad_storage: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments)
    }
}

function updateGoogleConsent(consent: ConsentPreferences) {
  ensureGtag()
  window.gtag?.("consent", "update", getGoogleConsent(consent))
}

function saveConsent(consent: ConsentPreferences) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: CONSENT_VERSION,
      consent,
      updatedAt: new Date().toISOString(),
    } satisfies StoredConsent),
  )
}

function readStoredConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as StoredConsent | null

    if (!stored || stored.version !== CONSENT_VERSION) return null

    return {
      ...defaultConsent,
      ...stored.consent,
      necessary: true,
    } satisfies ConsentPreferences
  } catch {
    return null
  }
}

function deleteCookie(name: string) {
  const hostname = window.location.hostname
  const domains = [hostname, `.${hostname}`, ".danielalopezpsicologa.es"]

  domains.forEach((domain) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`
  })

  document.cookie = `${name}=; Max-Age=0; path=/`
}

function clearGoogleCookies() {
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => /^(_ga|_gid|_gat|_gcl|_gac)/.test(name))
    .forEach(deleteCookie)
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultConsent)

  useEffect(() => {
    const storedConsent = readStoredConsent()

    if (!storedConsent) {
      clearGoogleCookies()
      startTransition(() => setIsVisible(true))
      return
    }

    startTransition(() => setPreferences(storedConsent))
    updateGoogleConsent(storedConsent)

    if (!storedConsent.analytics && !storedConsent.marketing) {
      clearGoogleCookies()
    }
  }, [])

  useEffect(() => {
    function openSettings() {
      setIsVisible(true)
      setIsSettingsOpen(true)
    }

    window.addEventListener("daniela:open-cookie-settings", openSettings)

    return () => {
      window.removeEventListener("daniela:open-cookie-settings", openSettings)
    }
  }, [])

  function applyConsent(nextConsent: ConsentPreferences) {
    const normalizedConsent = {
      ...defaultConsent,
      ...nextConsent,
      necessary: true,
    } satisfies ConsentPreferences

    setPreferences(normalizedConsent)
    saveConsent(normalizedConsent)
    updateGoogleConsent(normalizedConsent)

    if (!normalizedConsent.analytics && !normalizedConsent.marketing) {
      clearGoogleCookies()
    }

    setIsVisible(false)
    setIsSettingsOpen(false)
  }

  return (
    <>
      {preferences.analytics ? <Analytics /> : null}
      {isVisible ? (
        <div className="fixed inset-x-0 bottom-0 z-[1000] px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_24px_80px_rgba(38,56,91,0.24)] backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#536341]">
                  Privacidad y cookies
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-[#26385B]">
                  Medición solo con tu permiso
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5D6680]">
                  Usamos cookies técnicas necesarias para que la web funcione. Con tu consentimiento, también podemos usar analítica y medición publicitaria mediante Google Tag Manager para mejorar la web y las campañas.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5D6680]">
                  Puedes aceptar, rechazar o configurar tus preferencias. Podrás cambiarlas más adelante desde el pie de página.
                </p>
                <Link href="/politica-cookies" className="mt-4 inline-flex text-sm font-semibold text-[#26385B] underline underline-offset-4">
                  Ver política de cookies
                </Link>
              </div>

              <div className="border-t border-[#E2E4D8] bg-[#F5F8EF] p-6 sm:p-7 lg:border-l lg:border-t-0">
                {isSettingsOpen ? (
                  <div className="space-y-4">
                    <CookieToggle checked disabled title="Cookies técnicas" description="Necesarias para seguridad, navegación y funcionamiento básico." />
                    <CookieToggle
                      checked={preferences.analytics}
                      title="Analítica"
                      description="Medición con Google Tag Manager y Vercel Analytics para conocer visitas y rendimiento."
                      onChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))}
                    />
                    <CookieToggle
                      checked={preferences.marketing}
                      title="Marketing"
                      description="Medición de conversiones, campañas y personalización publicitaria con Google Ads."
                      onChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))}
                    />

                    <div className="grid gap-3 pt-2">
                      <button type="button" className="rounded-xl bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-5 py-3 text-sm font-bold text-white" onClick={() => applyConsent(preferences)}>
                        Guardar preferencias
                      </button>
                      <button type="button" className="rounded-xl border border-[#DADFD2] bg-white px-5 py-3 text-sm font-bold text-[#26385B]" onClick={() => applyConsent(defaultConsent)}>
                        Rechazar opcionales
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-center gap-3">
                    <button type="button" className="rounded-xl bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-5 py-3 text-sm font-bold text-white" onClick={() => applyConsent({ necessary: true, analytics: true, marketing: true })}>
                      Aceptar todas
                    </button>
                    <button type="button" className="rounded-xl border border-[#DADFD2] bg-white px-5 py-3 text-sm font-bold text-[#26385B]" onClick={() => applyConsent(defaultConsent)}>
                      Rechazar
                    </button>
                    <button type="button" className="rounded-xl border border-[#DADFD2] bg-white px-5 py-3 text-sm font-bold text-[#26385B]" onClick={() => setIsSettingsOpen(true)}>
                      Configurar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

function CookieToggle({
  checked,
  disabled = false,
  title,
  description,
  onChange,
}: {
  checked: boolean
  disabled?: boolean
  title: string
  description: string
  onChange?: (checked: boolean) => void
}) {
  return (
    <label className="flex gap-4 rounded-2xl border border-[#DADFD2] bg-white p-4">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-5 w-5 accent-[#26385B]"
      />
      <span>
        <span className="block text-sm font-bold text-[#26385B]">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-[#5D6680]">{description}</span>
      </span>
    </label>
  )
}
