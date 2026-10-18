"use client"

import { FormEvent, useState } from "react"
import { Loader2, Send, ShieldCheck } from "lucide-react"
import { WhatsAppLogo } from "./BrandIcons"

type FormStatus = "idle" | "loading" | "success" | "error"
type DataLayerParams = Record<string, string | number | boolean | undefined>

function pushDataLayer(event: string, page: string, params: DataLayerParams = {}) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    event_category: "form",
    location: "contact_form",
    cta_location: "contact_form",
    page,
    channel: "form",
    page_path: window.location.pathname,
    ...params,
  })
}

const contactOptions = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "llamada", label: "Llamada" },
  { value: "email", label: "Email" },
]

const modalityOptions = [
  { value: "presencial", label: "Presencial" },
  { value: "online", label: "Online" },
  { value: "me_da_igual", label: "Me da igual" },
]

export function ContactRequestForm({
  compact = false,
  page = "landing",
  source = "daniela_landing",
}: {
  compact?: boolean
  page?: string
  source?: string
}) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    pushDataLayer("form_submit_attempt", page)
    setError("")
    setStatus("loading")

    const form = new FormData(formElement)
    const name = String(form.get("name") ?? "").trim()
    const phone = String(form.get("phone") ?? "").trim()
    const email = String(form.get("email") ?? "").trim()
    const contactPreference = String(form.get("contactPreference") ?? "whatsapp")
    const modality = String(form.get("modality") ?? "me_da_igual")
    const reason = String(form.get("reason") ?? "").trim()
    const privacyAccepted = form.get("privacy") === "on"

    if (!formElement.checkValidity() || !name || !phone || !privacyAccepted) {
      setStatus("error")
      setError("Rellena nombre, teléfono y acepta la política de privacidad.")
      formElement.reportValidity()
      pushDataLayer("form_validation_error", page, { error_type: "validation" })
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          contactPreference,
          modality,
          reason,
          privacyAccepted,
          source,
        }),
      })

      if (!response.ok) {
        throw new Error("Contact request failed")
      }

      setStatus("success")
      pushDataLayer("lead_form_success", page, {
        form_status: "success",
        contact_preference: contactPreference,
        modality,
      })
      formElement.reset()
    } catch {
      setStatus("error")
      setError("No se ha podido enviar la solicitud. Puedes escribir directamente por WhatsApp.")
      pushDataLayer("form_submit_error", page, { error_type: "server" })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-[28px] p-6 sm:p-8 lg:p-9"
      noValidate
      aria-label="Formulario de contacto"
    >
      <span className="eyebrow">Primera orientación</span>
      <h2 className="mt-4 max-w-md font-serif text-2xl font-normal leading-tight tracking-[-0.02em] text-marino sm:text-[1.7rem]">
        Déjame tus datos para una primera orientación
      </h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-texto-2">
        Te contactaré para resolver dudas, revisar disponibilidad y acordar el mejor formato para una primera sesión
        presencial u online.
      </p>

      <div className="mt-7 grid gap-5">
        <label className="field-label">
          Nombre
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
            className="field"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            Teléfono
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="600 000 000"
              aria-describedby={status === "error" ? "contact-form-status" : undefined}
              className="field"
            />
          </label>

          <label className="field-label">
            Email (opcional)
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              aria-describedby={status === "error" ? "contact-form-status" : undefined}
              className="field"
            />
          </label>
        </div>

        <fieldset>
          <legend className="field-label">¿Cómo prefieres que te contacte?</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {contactOptions.map((option) => (
              <label key={option.value} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="contactPreference"
                  value={option.value}
                  defaultChecked={option.value === "whatsapp"}
                  className="peer sr-only"
                />
                <span className="flex h-11 items-center justify-center rounded-xl border border-linea bg-white px-3 text-sm font-medium text-texto-2 transition peer-checked:border-lavanda-600 peer-checked:bg-lavanda-100 peer-checked:text-marino peer-focus-visible:ring-2 peer-focus-visible:ring-lavanda/40 peer-focus-visible:ring-offset-2">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="field-label">Modalidad preferida</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {modalityOptions.map((option) => (
              <label key={option.value} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="modality"
                  value={option.value}
                  defaultChecked={option.value === "me_da_igual"}
                  className="peer sr-only"
                />
                <span className="flex h-11 items-center justify-center rounded-xl border border-linea bg-white px-3 text-sm font-medium text-texto-2 transition peer-checked:border-lavanda-600 peer-checked:bg-lavanda-100 peer-checked:text-marino peer-focus-visible:ring-2 peer-focus-visible:ring-lavanda/40 peer-focus-visible:ring-offset-2">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field-label">
          Motivo de consulta
          <textarea
            name="reason"
            rows={compact ? 4 : 5}
            placeholder="Puedes contarlo en pocas líneas, sin necesidad de entrar en detalles."
            className="field resize-none"
          />
        </label>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-texto-2">
          <input
            type="checkbox"
            name="privacy"
            required
            aria-required="true"
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-linea accent-marino"
          />
          <span>
            Acepto la{" "}
            <a href="/politica-privacidad" className="font-medium text-marino underline underline-offset-4 decoration-lavanda/70">
              política de privacidad
            </a>{" "}
            (obligatorio)
          </span>
        </label>

        <button type="submit" disabled={status === "loading"} className="btn btn--primary w-full disabled:cursor-wait disabled:opacity-70">
          {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          {status === "loading" ? "Enviando..." : "Enviar solicitud de información"}
        </button>

        <p className="flex items-start gap-2 text-xs leading-relaxed text-texto-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-salvia-600" aria-hidden="true" />
          No compartas información clínica especialmente sensible en este formulario. Daniela podrá orientarte mejor en
          la primera sesión.
        </p>

        <div id="contact-form-status" aria-live="polite">
          {status === "success" && (
            <p className="rounded-xl border border-exito/30 bg-exito/10 px-4 py-3 text-sm font-medium text-exito">
              Solicitud enviada. Daniela te contactará lo antes posible.
            </p>
          )}
          {status === "error" && (
            <div className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm font-medium text-error">
              <p>{error}</p>
              <a
                href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
                data-event="click_whatsapp"
                data-location="contact_form_error"
                data-page={page}
                data-channel="whatsapp"
                className="btn btn--whatsapp btn--sm mt-3"
              >
                <WhatsAppLogo className="h-4 w-4" />
                Pedir primera sesión
              </a>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
