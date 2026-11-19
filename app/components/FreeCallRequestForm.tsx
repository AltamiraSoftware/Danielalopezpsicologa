"use client"

import { FormEvent, useRef, useState } from "react"
import { Clock3, Loader2, Send, ShieldCheck } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"
type DataLayerParams = Record<string, string | number | boolean | undefined>

type FreeCallRequestFormProps = {
  compact?: boolean
  page?: string
  source?: string
  statusId?: string
}

function pushDataLayer(event: string, page: string, params: DataLayerParams = {}) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    event_category: "free_call_form",
    location: "free_call_form",
    cta_location: "free_call_form",
    page,
    channel: "form",
    page_path: window.location.pathname,
    ...params,
  })
}

const timeOptions = [
  { value: "morning", label: "Por la mañana" },
  { value: "afternoon", label: "Por la tarde" },
  { value: "indifferent", label: "Me es indiferente" },
]

export function FreeCallRequestForm({
  compact = false,
  page = "landing",
  source = "free_call",
  statusId = "free-call-form-status",
}: FreeCallRequestFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [error, setError] = useState("")
  const isSubmittingRef = useRef(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmittingRef.current) return

    const formElement = event.currentTarget
    setError("")

    if (!formElement.checkValidity()) {
      setStatus("error")
      setError("Rellena nombre, teléfono, email, tu preferencia horaria y acepta la política de privacidad.")
      formElement.reportValidity()
      pushDataLayer("free_call_form_validation_error", page, { error_type: "validation" })
      return
    }

    const form = new FormData(formElement)
    const website = String(form.get("website") ?? "").trim()

    if (website) {
      setStatus("success")
      return
    }

    isSubmittingRef.current = true
    setStatus("loading")
    pushDataLayer("free_call_form_submit_attempt", page)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? "").trim(),
          phone: String(form.get("phone") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          reason: String(form.get("reason") ?? "").trim(),
          preferredTime: String(form.get("preferredTime") ?? ""),
          privacyAccepted: form.get("privacy") === "on",
          requestType: "free_call",
          source,
          website,
        }),
      })

      if (!response.ok) throw new Error("Free call request failed")

      setStatus("success")
      formElement.reset()
      pushDataLayer("free_call_form_success", page)
    } catch {
      setStatus("error")
      setError("No se ha podido enviar la solicitud. Puedes escribir directamente por WhatsApp.")
      pushDataLayer("free_call_form_submit_error", page, { error_type: "server" })
    } finally {
      isSubmittingRef.current = false
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`glass rounded-[28px] ${compact ? "p-6" : "p-6 sm:p-8"}`} noValidate aria-label="Formulario para reservar una llamada gratuita">
      <div className="flex items-start gap-4">
        <div className="icon-box flex h-12 w-12 shrink-0 items-center justify-center">
          <Clock3 className="h-6 w-6 text-marino" aria-hidden="true" />
        </div>
        <div>
          <span className="eyebrow">Llamada de orientación</span>
          <h2 className="mt-2 font-serif text-2xl font-normal leading-tight tracking-[-0.02em] text-marino sm:text-[1.7rem]">
            Reserva tu llamada gratuita de 15 minutos
          </h2>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-texto-2">
        Un primer espacio para contar qué necesitas, resolver dudas y valorar si la terapia puede ayudarte.
      </p>

      <div className="mt-6 grid gap-5">
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />

        <label className="field-label">
          Nombre
          <input name="name" required autoComplete="name" placeholder="Tu nombre" aria-describedby={status === "error" ? statusId : undefined} className="field" />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            Teléfono
            <input name="phone" type="tel" required autoComplete="tel" placeholder="600 000 000" aria-describedby={status === "error" ? statusId : undefined} className="field" />
          </label>
          <label className="field-label">
            Email
            <input name="email" type="email" required autoComplete="email" placeholder="tu@email.com" aria-describedby={status === "error" ? statusId : undefined} className="field" />
          </label>
        </div>

        <fieldset>
          <legend className="field-label">¿Cuándo te viene mejor?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {timeOptions.map((option) => (
              <label key={option.value} className="relative cursor-pointer">
                <input type="radio" name="preferredTime" value={option.value} required defaultChecked={option.value === "indifferent"} className="peer sr-only" />
                <span className="flex h-11 items-center justify-center rounded-xl border border-linea bg-white px-3 text-center text-sm font-medium text-texto-2 transition peer-checked:border-lavanda-600 peer-checked:bg-lavanda-100 peer-checked:text-marino peer-focus-visible:ring-2 peer-focus-visible:ring-lavanda/40 peer-focus-visible:ring-offset-2">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field-label">
          ¿En qué te gustaría que te orientase? <span className="font-normal text-texto-3">(opcional)</span>
          <textarea name="reason" rows={compact ? 3 : 4} placeholder="Puedes contarlo en pocas líneas, sin necesidad de entrar en detalles." className="field resize-none" />
        </label>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-texto-2">
          <input type="checkbox" name="privacy" required aria-required="true" aria-describedby={status === "error" ? statusId : undefined} className="mt-1 h-4 w-4 shrink-0 rounded border-linea accent-marino" />
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
          {status === "loading" ? "Enviando..." : "Solicitar llamada gratuita"}
        </button>

        <p className="flex items-start gap-2 text-xs leading-relaxed text-texto-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-salvia-600" aria-hidden="true" />
          No compartas información clínica especialmente sensible en este formulario.
        </p>

        <div id={statusId} aria-live="polite">
          {status === "success" && <p className="rounded-xl border border-exito/30 bg-exito/10 px-4 py-3 text-sm font-medium text-exito">Solicitud enviada. Daniela se pondrá en contacto contigo para acordar la llamada.</p>}
          {status === "error" && <p className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm font-medium text-error">{error}</p>}
        </div>
      </div>
    </form>
  )
}
