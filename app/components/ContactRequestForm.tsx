"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"
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

export function ContactRequestForm({ compact = false, page = "landing" }: { compact?: boolean; page?: string }) {
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

    if (!formElement.checkValidity() || !name || !phone || !email || !privacyAccepted) {
      setStatus("error")
      setError("Rellena nombre, teléfono, email y acepta la política de privacidad.")
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
          source: "daniela_landing",
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
      className="rounded-[30px] border border-white/70 bg-white/42 p-6 shadow-[0_26px_70px_rgba(38,56,91,0.14)] backdrop-blur-xl sm:p-8"
      noValidate
    >
      <h2 className="mb-3 font-serif text-2xl font-semibold text-[#26385B]">Déjame tus datos para una primera orientación</h2>
      <p className="mb-6 leading-relaxed text-[#5D6680]">
        Te contactaré para resolver dudas, revisar disponibilidad y acordar el mejor formato para una primera sesión presencial u online.
      </p>

      <div className="grid gap-5">
        <label className="grid gap-2 font-semibold text-[#26385B]">
          Nombre
          <input
            name="name"
            required
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
            className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 font-semibold text-[#26385B]">
            Teléfono
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              aria-describedby={status === "error" ? "contact-form-status" : undefined}
              className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
            />
          </label>

          <label className="grid gap-2 font-semibold text-[#26385B]">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-describedby={status === "error" ? "contact-form-status" : undefined}
              className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
            />
          </label>
        </div>

        <label className="grid gap-2 font-semibold text-[#26385B]">
          ¿Cómo prefieres que te contacte?
          <select
            name="contactPreference"
            defaultValue="whatsapp"
            className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="llamada">Llamada</option>
            <option value="email">Email</option>
          </select>
        </label>

        <label className="grid gap-2 font-semibold text-[#26385B]">
          Modalidad preferida
          <select
            name="modality"
            defaultValue="me_da_igual"
            className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
          >
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
            <option value="me_da_igual">Me da igual</option>
          </select>
        </label>

        <label className="grid gap-2 font-semibold text-[#26385B]">
          Motivo de consulta
          <textarea
            name="reason"
            rows={compact ? 4 : 5}
            className="resize-none rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
          />
        </label>

        <label className="flex items-start gap-3 text-sm font-medium leading-relaxed text-[#5D6680]">
          <input
            type="checkbox"
            name="privacy"
            required
            aria-required="true"
            className="mt-1 h-4 w-4 shrink-0 rounded border-[#DADFD2] accent-[#26385B]"
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
          />
          <span>
            Acepto la{" "}
            <a href="/politica-privacidad" className="font-bold text-[#26385B] underline underline-offset-4">
              política de privacidad
            </a>
            {" "}(obligatorio)
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] px-6 py-4 font-bold text-white shadow-[0_18px_42px_rgba(38,56,91,0.24)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        >
          <Send className="h-5 w-5" />
          {status === "loading" ? "Enviando..." : "Enviar solicitud de información"}
        </button>

        <p className="text-sm leading-relaxed text-[#5D6680]">
          No compartas información clínica especialmente sensible en este formulario. Daniela podrá orientarte mejor en la primera sesión.
        </p>

        <div id="contact-form-status" aria-live="polite">
          {status === "success" && (
            <p className="rounded-2xl bg-[#EAF5DE] px-4 py-3 font-semibold text-[#536341]">
              Solicitud enviada. Daniela te contactará lo antes posible.
            </p>
          )}
          {status === "error" && (
            <div className="rounded-2xl bg-[#FCE8E8] px-4 py-3 font-semibold text-[#8A2E2E]">
              <p>{error}</p>
              <a
                href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
                data-event="click_whatsapp"
                data-location="contact_form_error"
                data-page={page}
                data-channel="whatsapp"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-white"
              >
                <WhatsAppLogo className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
