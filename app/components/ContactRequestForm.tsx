"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"
import { WhatsAppLogo } from "./BrandIcons"

type FormStatus = "idle" | "loading" | "success" | "error"

function pushDataLayer(event: string, page: string) {
  if (typeof window === "undefined") return
  ;(window as typeof window & { dataLayer?: Record<string, string>[] }).dataLayer?.push({
    event,
    location: "contact_form",
    page,
    channel: "form",
  })
}

export function ContactRequestForm({ compact = false, page = "landing" }: { compact?: boolean; page?: string }) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    pushDataLayer("form_submit", page)
    setError("")
    setStatus("loading")

    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") ?? "").trim()
    const contact = String(form.get("contact") ?? "").trim()
    const contactPreference = String(form.get("contactPreference") ?? "whatsapp")
    const modality = String(form.get("modality") ?? "me_da_igual")
    const reason = String(form.get("reason") ?? "").trim()
    const privacyAccepted = form.get("privacy") === "on"

    if (!name || !contact || !privacyAccepted) {
      setStatus("error")
      setError("No se ha podido enviar la solicitud. Puedes escribir directamente por WhatsApp.")
      pushDataLayer("form_error", page)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
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
      pushDataLayer("form_success", page)
      event.currentTarget.reset()
    } catch {
      setStatus("error")
      setError("No se ha podido enviar la solicitud. Puedes escribir directamente por WhatsApp.")
      pushDataLayer("form_error", page)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-event="form_submit"
      data-location="contact_form"
      data-page={page}
      data-channel="form"
      className="rounded-[30px] border border-white/70 bg-white/42 p-6 shadow-[0_26px_70px_rgba(38,56,91,0.14)] backdrop-blur-xl sm:p-8"
      noValidate
    >
      <h2 className="mb-3 font-serif text-2xl font-semibold text-[#26385B]">También puedes dejar tus datos</h2>
      <p className="mb-6 leading-relaxed text-[#5D6680]">
        Si prefieres no escribir por WhatsApp, puedes dejar tus datos y Daniela te contactará para orientarte sobre la primera sesión.
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

        <label className="grid gap-2 font-semibold text-[#26385B]">
          Teléfono o email
          <input
            name="contact"
            required
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
            className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]"
          />
        </label>

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
            className="mt-1 h-4 w-4 shrink-0 rounded border-[#DADFD2] accent-[#26385B]"
            aria-describedby={status === "error" ? "contact-form-status" : undefined}
          />
          <span>
            Acepto la{" "}
            <a href="/politica-privacidad" className="font-bold text-[#26385B] underline underline-offset-4">
              política de privacidad
            </a>
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
            <p data-event="form_success" data-location="contact_form" data-page={page} data-channel="form" className="rounded-2xl bg-[#EAF5DE] px-4 py-3 font-semibold text-[#536341]">
              Solicitud enviada. Daniela te contactará lo antes posible.
            </p>
          )}
          {status === "error" && (
            <div data-event="form_error" data-location="contact_form" data-page={page} data-channel="form" className="rounded-2xl bg-[#FCE8E8] px-4 py-3 font-semibold text-[#8A2E2E]">
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
