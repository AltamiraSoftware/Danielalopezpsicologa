"use client"

import Script from "next/script"
import { doctoraliaUrl } from "../data/site"

type DoctoraliaWidgetProps = {
  page?: string
  /** "big" = ficha/opiniones · "big_with_calendar" = reserva con calendario */
  type?: "big" | "big_with_calendar"
  opinion?: boolean
  label?: string
  className?: string
}

/**
 * Widget oficial de Doctoralia (Docplanner).
 *
 * El script busca el enlace `.zl-url` y lo sustituye por un iframe de Doctoralia.
 * Si el script no carga (bloqueo de terceros, consentimiento, red), el enlace
 * sigue funcionando como enlace normal al perfil de Doctoralia.
 */
export function DoctoraliaWidget({
  page = "landing",
  type = "big",
  opinion = true,
  label = "Ver opiniones en Doctoralia",
  className = "mx-auto w-full max-w-[860px] overflow-hidden rounded-[24px] border border-linea bg-white p-4 shadow-1 sm:p-6",
}: DoctoraliaWidgetProps) {
  return (
    <div className={className}>
      <div id="doctoralia-widget" className="flex w-full flex-col items-center justify-center">
        <a
          id="zl-url"
          className="zl-url btn btn--secondary inline-flex shrink-0 items-center justify-center gap-2 px-6 text-center"
          href={doctoraliaUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          data-event="click_doctoralia"
          data-location="doctoralia_widget"
          data-page={page}
          data-channel="doctoralia"
          data-zlw-doctor="daniela-lopez-melendez"
          data-zlw-type={type}
          data-zlw-opinion={opinion ? "true" : "false"}
          data-zlw-hide-branding="true"
          data-zlw-saas-only="false"
          data-zlw-a11y-title={label}
        >
          {label}
        </a>
      </div>
      <Script
        id="zl-widget-s"
        src="https://platform.docplanner.com/js/widget.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
