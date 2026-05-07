import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  name?: string
  contact?: string
  contactPreference?: string
  modality?: string
  reason?: string
  privacyAccepted?: boolean
  source?: string
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const name = payload.name?.trim()
  const contact = payload.contact?.trim()

  if (!name || !contact || payload.privacyAccepted !== true) {
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
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: from ?? "Daniela López Psicología <onboarding@resend.dev>",
      to,
      subject: `Nueva solicitud de información - ${name}`,
      text: [
        "Nueva solicitud desde la landing de Daniela López Meléndez.",
        "",
        `Nombre: ${name}`,
        `Contacto: ${contact}`,
        `Preferencia de contacto: ${payload.contactPreference ?? "whatsapp"}`,
        `Modalidad preferida: ${payload.modality ?? "me_da_igual"}`,
        `Motivo de consulta: ${payload.reason?.trim() || "No indicado"}`,
        `Fuente: ${payload.source ?? "daniela_landing"}`,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
