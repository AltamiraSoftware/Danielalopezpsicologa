"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "./BrandIcons"
import { HashLink } from "./HashLink"

type HeaderProps = {
  whatsappUrl: string
  doctoraliaUrl: string
  instagramUrl: string
}

export function Header({ whatsappUrl, doctoraliaUrl, instagramUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(135deg,rgba(27,41,71,0.96)_0%,rgba(38,56,91,0.94)_56%,rgba(47,63,104,0.92)_100%)] shadow-[0_14px_34px_rgba(27,41,71,0.20)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <Image src="/brand-icon.png" alt="" width={44} height={44} className="shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-semibold leading-none text-white sm:text-2xl">
              Daniela López
            </span>
            <span className="mt-1 block truncate text-xs font-semibold leading-none text-white/68 sm:text-sm">
              Psicóloga General Sanitaria · Madrid
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-white/72 md:flex">
          <a href="/quien-soy" className="transition hover:text-white">Quién soy</a>
          <HashLink targetId="reserva" data-event="click_prices" data-location="header_nav" data-page="landing" data-channel="internal_cta" className="transition hover:text-white">Precios</HashLink>
          <HashLink targetId="faq" className="transition hover:text-white">Dudas</HashLink>
          <a href="/contacto" className="transition hover:text-white">Contacto</a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="header" data-page="landing" data-channel="instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20" aria-label="Instagram de Daniela López">
            <InstagramLogo className="h-6 w-6" gradientId="instagram-gradient-header" />
          </a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="header" data-page="landing" data-channel="doctoralia" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20" aria-label="Perfil de Doctoralia de Daniela López">
            <DoctoraliaLogo className="h-6 w-6" />
          </a>
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="header" data-page="landing" data-channel="whatsapp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20BF5A]" aria-label="WhatsApp de Daniela López">
            <WhatsAppLogo className="h-6 w-6" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/28 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:bg-white/20 sm:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${isOpen ? "grid" : "hidden"} border-t border-white/10 bg-[#26385B]/98 px-4 pb-5 pt-3 text-white shadow-[0_22px_38px_rgba(27,41,71,0.24)] sm:hidden`}
      >
        <nav className="grid gap-2 text-base font-semibold">
          <a href="/quien-soy" onClick={closeMenu} className="rounded-2xl px-4 py-3 text-white/84 transition hover:bg-white/10 hover:text-white">Quién soy</a>
          <HashLink targetId="reserva" data-event="click_prices" data-location="header_mobile_nav" data-page="landing" data-channel="internal_cta" onClick={closeMenu} className="rounded-2xl px-4 py-3 text-left text-white/84 transition hover:bg-white/10 hover:text-white">Precios</HashLink>
          <HashLink targetId="faq" onClick={closeMenu} className="rounded-2xl px-4 py-3 text-left text-white/84 transition hover:bg-white/10 hover:text-white">Dudas</HashLink>
          <a href="/contacto" onClick={closeMenu} className="rounded-2xl px-4 py-3 text-white/84 transition hover:bg-white/10 hover:text-white">Contacto</a>
        </nav>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="header_mobile" data-page="landing" data-channel="whatsapp" onClick={closeMenu} className="inline-flex h-10 w-10 items-center justify-center justify-self-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.24)] transition hover:bg-[#20BF5A]" aria-label="WhatsApp de Daniela López">
            <WhatsAppLogo className="h-6 w-6" />
          </a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="header_mobile" data-page="landing" data-channel="doctoralia" onClick={closeMenu} className="inline-flex h-10 w-10 items-center justify-center justify-self-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:bg-white/20" aria-label="Perfil de Doctoralia de Daniela López">
            <DoctoraliaLogo className="h-6 w-6" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="header_mobile" data-page="landing" data-channel="instagram" onClick={closeMenu} className="inline-flex h-10 w-10 items-center justify-center justify-self-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:bg-white/20" aria-label="Instagram de Daniela López">
            <InstagramLogo className="h-6 w-6" gradientId="instagram-gradient-header-mobile" />
          </a>
        </div>
      </div>
    </header>
  )
}
