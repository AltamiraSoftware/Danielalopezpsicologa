"use client"

import { useEffect } from "react"
import { CalendarClock, X } from "lucide-react"
import { FreeCallRequestForm } from "./FreeCallRequestForm"

export function FreeCallWidget({ isOpen, onOpen, onClose }: { isOpen: boolean; onOpen: () => void; onClose: () => void }) {

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        data-event="open_free_call_form"
        data-location="floating"
        data-page="landing"
        data-channel="form"
        className="fixed bottom-20 right-4 z-50 hidden items-center gap-2 rounded-full border border-marino bg-marino px-5 py-3 font-brand text-sm font-medium text-white shadow-[0_18px_42px_-20px_rgba(38,56,91,0.6)] transition-all hover:-translate-y-0.5 hover:bg-marino-900 sm:bottom-6 sm:right-6 sm:inline-flex"
        aria-haspopup="dialog"
      >
        <CalendarClock className="h-5 w-5 text-lavanda" aria-hidden="true" />
        Reserva tu llamada gratuita
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-marino/45 p-4 backdrop-blur-sm sm:items-center sm:p-6" role="presentation">
          <div role="dialog" aria-modal="true" aria-labelledby="free-call-dialog-title" className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-crema shadow-[0_32px_80px_rgba(20,36,63,0.35)] sm:max-h-[calc(100vh-3rem)]">
            <div className="flex justify-end px-4 pt-4">
              <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-marino transition-colors hover:bg-lavanda-100" aria-label="Cerrar formulario de llamada gratuita">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 pb-4 sm:px-6 sm:pb-6">
              <div id="free-call-dialog-title" className="sr-only">Reserva tu llamada gratuita</div>
              <FreeCallRequestForm compact page="landing" source="free_call_floating" statusId="free-call-widget-status" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
