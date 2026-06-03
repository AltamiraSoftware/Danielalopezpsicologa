import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  name?: string
  phone?: string
  email?: string
  contactPreference?: string
  modality?: string
  reason?: string
  privacyAccepted?: boolean
  source?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const name = payload.name?.trim()
  const phone = payload.phone?.trim()
  const email = payload.email?.trim()

  if (!name || !phone || !email || !isValidEmail(email) || payload.privacyAccepted !== true) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  // Required environment variables:
  // RESEND_API_KEY: API key for Resend.
  // CONTACT_TO_EMAIL: destination inbox for contact requests.
  // CONTACT_FROM_EMAIL: verified sender/domain in Resend. Required in production.
  if (!apiKey || !to || (process.env.NODE_ENV === "production" && !from)) {
    console.error("Contact form email configuration is incomplete", {
      hasApiKey: Boolean(apiKey),
      hasTo: Boolean(to),
      hasFrom: Boolean(from),
      nodeEnv: process.env.NODE_ENV,
    })
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from: from ?? "Daniela López Psicología <onboarding@resend.dev>",
      to,
      subject: `Nueva solicitud de información - ${name}`,
      text: [
        "Nueva solicitud desde la landing de Daniela López Meléndez.",
        "",
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        `Preferencia de contacto: ${payload.contactPreference ?? "whatsapp"}`,
        `Modalidad preferida: ${payload.modality ?? "me_da_igual"}`,
        `Motivo de consulta: ${payload.reason?.trim() || "No indicado"}`,
        `Fuente: ${payload.source ?? "daniela_landing"}`,
      ].join("\n"),
    })

    if (result.error) {
      console.error("Resend contact form error", {
        name: result.error.name,
        message: result.error.message,
        statusCode: result.error.statusCode,
      })
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Unexpected contact form error", {
      message: error instanceof Error ? error.message : "Unknown error",
    })
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
