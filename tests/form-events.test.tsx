import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ContactRequestForm } from "../app/components/ContactRequestForm"
import { FreeCallRequestForm } from "../app/components/FreeCallRequestForm"

function events() {
  return (window.dataLayer ?? []) as Array<Record<string, unknown>>
}

function eventNames() {
  return events().map((entry) => entry.event)
}

function fillContactForm() {
  fireEvent.change(screen.getByPlaceholderText("Tu nombre"), { target: { value: "Prueba" } })
  fireEvent.change(screen.getByPlaceholderText("600 000 000"), { target: { value: "600000000" } })
  fireEvent.click(screen.getByRole("checkbox"))
}

function fillFreeCallForm() {
  fillContactForm()
  fireEvent.change(screen.getByPlaceholderText("tu@email.com"), { target: { value: "test@example.com" } })
}

describe("eventos de los formularios", () => {
  beforeEach(() => {
    window.dataLayer = []
    vi.stubGlobal("fetch", vi.fn())
  })

  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it("envía un único lead_form_success solo después de un HTTP exitoso", async () => {
    let resolveRequest: (response: Response) => void = () => undefined
    vi.mocked(fetch).mockImplementation(
      () => new Promise<Response>((resolve) => {
        resolveRequest = resolve
      }),
    )
    const { container } = render(<ContactRequestForm />)
    fillContactForm()

    fireEvent.submit(container.querySelector("form")!)
    fireEvent.submit(container.querySelector("form")!)

    expect(eventNames()).toEqual(["form_submit_attempt"])
    expect(eventNames()).not.toContain("lead_form_success")

    resolveRequest(new Response(null, { status: 200 }))

    await waitFor(() => expect(eventNames()).toContain("lead_form_success"))
    expect(eventNames().filter((event) => event === "lead_form_success")).toHaveLength(1)
    expect(events().find((entry) => entry.event === "lead_form_success")).not.toHaveProperty("email")
  })

  it("emite el error de validación sin realizar una petición cuando el email opcional es inválido", async () => {
    const { container } = render(<ContactRequestForm />)
    fillContactForm()
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), { target: { value: "no-es-email" } })

    fireEvent.submit(container.querySelector("form")!)

    expect(fetch).not.toHaveBeenCalled()
    expect(eventNames()).toEqual(["form_submit_attempt", "form_validation_error"])
    expect(events().find((entry) => entry.event === "form_validation_error")).toMatchObject({ error_type: "validation" })
  })

  it("emite form_submit_error y nunca un éxito cuando el servidor falla", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 500 }))
    const { container } = render(<ContactRequestForm />)
    fillContactForm()

    fireEvent.submit(container.querySelector("form")!)

    await waitFor(() => expect(eventNames()).toContain("form_submit_error"))
    expect(eventNames()).not.toContain("lead_form_success")
    expect(events().find((entry) => entry.event === "form_submit_error")).toMatchObject({ error_type: "server" })
  })

  it("emite free_call_form_success una sola vez después de un HTTP exitoso", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 200 }))
    const { container } = render(<FreeCallRequestForm />)
    fillFreeCallForm()

    fireEvent.submit(container.querySelector("form")!)
    fireEvent.submit(container.querySelector("form")!)

    await waitFor(() => expect(eventNames()).toContain("free_call_form_success"))
    expect(eventNames()).toEqual(["free_call_form_submit_attempt", "free_call_form_success"])
    expect(events().find((entry) => entry.event === "free_call_form_success")).not.toHaveProperty("email")
  })
})
