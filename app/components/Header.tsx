"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "./BrandIcons"
import { SiteLogo } from "./SiteLogo"
import { HashLink } from "./HashLink"
import { treatments } from "../data/treatments"

type HeaderProps = {
  whatsappUrl: string
  doctoraliaUrl: string
  instagramUrl: string
}

export function Header({ whatsappUrl, doctoraliaUrl, instagramUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  function closeMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    let frame = 0

    function onScroll() {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8)
        frame = 0
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  return (
    <header className="site-header sticky top-0 z-40" data-scrolled={isScrolled ? "true" : "false"}>
      <div className="mx-auto flex min-h-[80px] max-w-[1120px] items-center justify-between gap-4 px-4 py-4 pt-[max(16px,env(safe-area-inset-top))] sm:min-h-[88px] sm:px-6 lg:px-8">
        <SiteLogo onClick={closeMenu} />

        <nav aria-label="Principal" className="hidden items-center gap-7 font-brand text-[15px] text-crema/75 md:flex">
          <a href="/quien-soy" aria-current={pathname === "/quien-soy" ? "page" : undefined} className={`py-3 transition-colors hover:text-crema ${pathname === "/quien-soy" ? "text-crema" : ""}`}>
            Quién soy
          </a>
          <div className="group relative">
            <button type="button" className="inline-flex items-center gap-1 py-3 transition-colors hover:text-crema">
              Tratamientos
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-1 w-[320px] -translate-x-1/2 rounded-lg border border-white/12 bg-marino-900 p-2 opacity-0 shadow-2 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid">
                {treatments.map((treatment) => (
                  <a
                    key={treatment.slug}
                    href={treatment.path}
                    className="rounded-sm px-4 py-3 text-crema/80 transition-colors hover:bg-white/8 hover:text-crema"
                  >
                    {treatment.cardTitle}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <HashLink
            targetId="reserva"
            data-event="click_prices"
            data-location="header_nav"
            data-page="landing"
            data-channel="internal_cta"
            className="py-3 transition-colors hover:text-crema"
          >
            Precios
          </HashLink>
          <HashLink targetId="faq" className="py-3 transition-colors hover:text-crema">
            Dudas
          </HashLink>
          <a href="/contacto" aria-current={pathname === "/contacto" ? "page" : undefined} className={`py-3 transition-colors hover:text-crema ${pathname === "/contacto" ? "text-crema" : ""}`}>
            Contacto
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_instagram"
            data-location="header"
            data-page="landing"
            data-channel="instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/22 transition-colors duration-200 hover:bg-white/10"
            aria-label="Instagram de Daniela López"
          >
            <InstagramLogo className="h-6 w-6" gradientId="instagram-gradient-header" />
          </a>
          <a
            href={doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_doctoralia"
            data-location="header"
            data-page="landing"
            data-channel="doctoralia"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/22 transition-colors duration-200 hover:bg-white/10"
            aria-label="Perfil de Doctoralia de Daniela López"
          >
            <DoctoraliaLogo className="h-6 w-6" />
          </a>
          <a
            href={whatsappUrl}
            data-event="click_whatsapp"
            data-location="header"
            data-page="landing"
            data-channel="whatsapp"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white transition-colors duration-200 hover:bg-whatsapp-600"
            aria-label="WhatsApp de Daniela López"
          >
            <WhatsAppLogo className="h-6 w-6" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-crema transition-colors hover:bg-white/10 sm:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${isOpen ? "grid" : "hidden"} max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-white/12 bg-marino-900 px-4 pb-6 pt-4 sm:hidden`}
      >
        <nav aria-label="Principal móvil" className="grid gap-1 font-brand text-base">
          <a href="/quien-soy" onClick={closeMenu} className="rounded-sm px-3 py-3 text-crema/80 transition-colors hover:bg-white/8 hover:text-crema">
            Quién soy
          </a>
          <div className="rounded-sm bg-white/5 px-3 py-3">
            <p className="mb-2 font-brand text-[11px] font-medium uppercase tracking-[0.14em] text-lavanda">Tratamientos</p>
            <div className="grid gap-0.5">
              {treatments.map((treatment) => (
                <a
                  key={treatment.slug}
                  href={treatment.path}
                  onClick={closeMenu}
                  className="rounded-sm py-2 text-sm text-crema/80 transition-colors hover:text-crema"
                >
                  {treatment.cardTitle}
                </a>
              ))}
            </div>
          </div>
          <HashLink
            targetId="reserva"
            data-event="click_prices"
            data-location="header_mobile_nav"
            data-page="landing"
            data-channel="internal_cta"
            onClick={closeMenu}
            className="rounded-sm px-3 py-3 text-left text-crema/80 transition-colors hover:bg-white/8 hover:text-crema"
          >
            Precios
          </HashLink>
          <HashLink
            targetId="faq"
            onClick={closeMenu}
            className="rounded-sm px-3 py-3 text-left text-crema/80 transition-colors hover:bg-white/8 hover:text-crema"
          >
            Dudas
          </HashLink>
          <a href="/contacto" onClick={closeMenu} className="rounded-sm px-3 py-3 text-crema/80 transition-colors hover:bg-white/8 hover:text-crema">
            Contacto
          </a>
        </nav>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <a
            href={whatsappUrl}
            data-event="click_whatsapp"
            data-location="header_mobile"
            data-page="landing"
            data-channel="whatsapp"
            onClick={closeMenu}
            className="inline-flex h-12 w-12 items-center justify-center justify-self-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp-600"
            aria-label="WhatsApp de Daniela López"
          >
            <WhatsAppLogo className="h-5 w-5" />
          </a>
          <a
            href={doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_doctoralia"
            data-location="header_mobile"
            data-page="landing"
            data-channel="doctoralia"
            onClick={closeMenu}
            className="inline-flex h-11 w-11 items-center justify-center justify-self-center rounded-full border border-white/22 transition-colors hover:bg-white/10"
            aria-label="Perfil de Doctoralia de Daniela López"
          >
            <DoctoraliaLogo className="h-5 w-5" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_instagram"
            data-location="header_mobile"
            data-page="landing"
            data-channel="instagram"
            onClick={closeMenu}
            className="inline-flex h-11 w-11 items-center justify-center justify-self-center rounded-full border border-white/22 transition-colors hover:bg-white/10"
            aria-label="Instagram de Daniela López"
          >
            <InstagramLogo className="h-5 w-5" gradientId="instagram-gradient-header-mobile" />
          </a>
        </div>
      </div>
    </header>
  )
}
