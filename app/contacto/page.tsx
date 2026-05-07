import type { Metadata } from "next"
import { MapPin, Phone } from "lucide-react"
import { ContactRequestForm } from "../components/ContactRequestForm"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "../components/BrandIcons"

export const metadata: Metadata = {
  title: "Contacto | Daniela López Meléndez, psicóloga sanitaria en Madrid",
  description:
    "Contacta con Daniela López Meléndez, Psicóloga General Sanitaria en Madrid. Primera sesión por WhatsApp, consulta presencial en Chamartín y terapia online.",
}

const whatsappMessage = "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`
const doctoraliaUrl = "https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
const instagramUrl = "https://www.instagram.com/psico.danilopez/"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFEFA_0%,#EAF1DE_100%)] text-[#26385B]">
      <header className="border-b border-white/40 bg-[#26385B] text-white shadow-[0_14px_34px_rgba(27,41,71,0.18)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="font-serif text-xl font-semibold">Daniela López Meléndez</a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/72 md:flex">
            <a href="/quien-soy" className="hover:text-white">Quién soy</a>
            <a href="/#reserva" className="hover:text-white">Precios</a>
            <a href="/contacto" className="text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-bold shadow-[0_10px_28px_rgba(38,56,91,0.10)]">
            Contacto
          </p>
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Pide información sobre una primera sesión
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#5D6680]">
            WhatsApp es el canal principal para contactar con Daniela. El formulario queda como alternativa secundaria si prefieres dejar tus datos.
          </p>

          <div className="grid gap-4">
            <a href={whatsappUrl} data-event="click_whatsapp" data-location="contact_page_top" data-page="contact" data-channel="whatsapp" className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-[#25D366] p-5 font-bold text-white shadow-[0_18px_44px_rgba(37,211,102,0.20)]">
              <WhatsAppLogo className="h-7 w-7" />
              Pedir primera sesión por WhatsApp
            </a>
            <a href="tel:+34614412183" className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/46 p-5 shadow-[0_18px_44px_rgba(38,56,91,0.10)]">
              <Phone className="h-6 w-6 text-[#9B8BD3]" />
              <span><span className="block font-bold">+34 614 412 183</span><span className="text-sm text-[#5D6680]">Teléfono</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/46 p-5 shadow-[0_18px_44px_rgba(38,56,91,0.10)]">
              <MapPin className="h-6 w-6 text-[#9B8BD3]" />
              <span>
                <span className="block font-bold">C. de Marcenado, 14, Despacho 2</span>
                <span className="text-sm text-[#5D6680]">Chamartín, 28002 Madrid</span>
                <span className="block text-sm font-medium text-[#5D6680]/80">Consulta independiente dentro del centro Psicotep</span>
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="contact_block" data-page="contact" data-channel="instagram" className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/58 px-5 py-3 font-bold text-[#26385B] shadow-[0_16px_34px_rgba(38,56,91,0.10)]">
              <InstagramLogo className="h-5 w-5" />
              Instagram
            </a>
            <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="contact_block" data-page="contact" data-channel="doctoralia" className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/58 px-5 py-3 font-bold text-[#26385B] shadow-[0_16px_34px_rgba(38,56,91,0.10)]">
              <DoctoraliaLogo className="h-5 w-5" />
              Doctoralia
            </a>
          </div>
        </div>

        <ContactRequestForm page="contact" />
      </section>
    </main>
  )
}
