"use client"

import { useState } from "react"
import { CalendarClock, ChevronDown } from "lucide-react"
import { FreeCallRequestForm } from "./FreeCallRequestForm"

export function FreeCallPricingCard() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  if (isFormOpen) {
    return (
      <div id="llamada-gratuita" className="mt-6 scroll-mt-24">
        <div id="free-call-pricing-form">
          <FreeCallRequestForm page="landing" source="free_call_pricing" />
        </div>
      </div>
    )
  }

  return (
    <section id="llamada-gratuita" className="glass mt-6 flex min-h-[204px] scroll-mt-24 rounded-[24px] p-6 sm:p-8" aria-labelledby="free-call-pricing-title">
      <div className="flex w-full flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex items-start gap-4 lg:max-w-2xl">
          <div className="icon-box flex h-12 w-12 shrink-0 items-center justify-center">
            <CalendarClock className="h-6 w-6 text-marino" aria-hidden="true" />
          </div>
          <div>
            <span className="eyebrow">Primera orientación</span>
            <h3 id="free-call-pricing-title" className="mt-2 font-serif text-xl font-normal text-marino sm:text-2xl">Reserva tu llamada gratuita de 15 minutos</h3>
            <p className="mt-3 text-sm leading-relaxed text-texto-2">Un primer espacio para resolver tus dudas y valorar si la terapia puede ayudarte.</p>
          </div>
        </div>
        <button type="button" onClick={() => setIsFormOpen(true)} data-event="open_free_call_form" data-location="pricing" data-page="landing" data-channel="form" className="btn btn--primary w-full shrink-0 sm:w-auto" aria-expanded="false" aria-controls="free-call-pricing-form">
          Reservar llamada gratuita
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
