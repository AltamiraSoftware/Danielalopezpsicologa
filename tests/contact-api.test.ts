import { beforeEach, describe, expect, it, vi } from "vitest"

const { sendEmail } = vi.hoisted(() => ({ sendEmail: vi.fn() }))

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendEmail }
  },
}))

import { POST } from "../app/api/contact/route"

function request(payload: Record<string, unknown>) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}

const contactPayload = {
  name: "Prueba",
  phone: "600000000",
  privacyAccepted: true,
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "test-key"
    process.env.CONTACT_TO_EMAIL = "inbox@example.com"
    process.env.CONTACT_FROM_EMAIL = "Site <sender@example.com>"
    sendEmail.mockReset()
  })

  it("acepta el contacto sin email y conserva el email opcional en el mensaje", async () => {
    sendEmail.mockResolvedValue({ data: { id: "email-id" } })

    const response = await POST(request(contactPayload))

    expect(response.status).toBe(200)
    expect(sendEmail).toHaveBeenCalledOnce()
    expect(sendEmail.mock.calls[0][0].text).toContain("Email: No indicado")
  })

  it("rechaza emails opcionales con formato inválido", async () => {
    const response = await POST(request({ ...contactPayload, email: "email-invalido" }))

    expect(response.status).toBe(400)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it("exige email para solicitudes de llamada gratuita", async () => {
    const response = await POST(request({ ...contactPayload, requestType: "free_call" }))

    expect(response.status).toBe(400)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it("devuelve un error de servidor si Resend rechaza el envío", async () => {
    sendEmail.mockResolvedValue({ error: { name: "api_error", message: "rejected", statusCode: 500 } })

    const response = await POST(request(contactPayload))

    expect(response.status).toBe(500)
  })
})
