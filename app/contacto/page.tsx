import type { Metadata } from "next"
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "../components/BrandIcons"

export const metadata: Metadata = {
  title: "Contacto | Daniela López Meléndez",
  description: "Contacta con Daniela López Meléndez, Psicóloga General Sanitaria en Madrid y online.",
}

const cta =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition-all hover:-translate-y-0.5"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFEFA_0%,#EAF1DE_100%)] text-[#26385B]">
      <header className="border-b border-white/40 bg-[#26385B] text-white shadow-[0_14px_34px_rgba(27,41,71,0.18)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="" className="h-10 w-10 rounded-full object-contain" />
            <span>
              <span className="block font-serif text-xl font-semibold">Daniela López</span>
              <span className="block text-xs font-semibold text-white/70">Psicóloga General Sanitaria</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/72 md:flex">
            <a href="/quien-soy" className="hover:text-white">Quién soy</a>
            <a href="/#reserva" className="hover:text-white">Precios</a>
            <a href="/contacto" className="text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-bold text-[#26385B] shadow-[0_10px_28px_rgba(38,56,91,0.10)]">
            Contacto
          </p>
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-[#26385B] sm:text-5xl">
            Cuéntame qué necesitas
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#5D6680]">
            Puedes escribir por WhatsApp, llamar o dejar un mensaje desde el formulario. Te responderé para valorar la mejor forma de empezar.
          </p>

          <div className="grid gap-4">
            <a href="tel:+34614412183" className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/46 p-5 shadow-[0_18px_44px_rgba(38,56,91,0.10)]">
              <Phone className="h-6 w-6 text-[#9B8BD3]" />
              <span>
                <span className="block font-bold">+34 614 412 183</span>
                <span className="text-sm text-[#5D6680]">Teléfono y WhatsApp</span>
              </span>
            </a>
            <a href="mailto:bivalentesalud@gmail.com" className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/46 p-5 shadow-[0_18px_44px_rgba(38,56,91,0.10)]">
              <Mail className="h-6 w-6 text-[#9B8BD3]" />
              <span>
                <span className="block font-bold">bivalentesalud@gmail.com</span>
                <span className="text-sm text-[#5D6680]">Correo electrónico</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-[24px] border border-white/70 bg-white/46 p-5 shadow-[0_18px_44px_rgba(38,56,91,0.10)]">
              <MapPin className="h-6 w-6 text-[#9B8BD3]" />
              <span>
                <span className="block font-bold">C. de Marcenado, 14</span>
                <span className="text-sm text-[#5D6680]">Chamartín, 28002 Madrid</span>
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20quer%C3%ADa%20pedir%20informaci%C3%B3n." className={`${cta} bg-[#25D366] text-white shadow-[0_16px_34px_rgba(37,211,102,0.26)]`}>
              <WhatsAppLogo className="h-5 w-5" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/psico.danilopez" className={`${cta} border border-white/70 bg-white/58 text-[#26385B] shadow-[0_16px_34px_rgba(38,56,91,0.10)]`}>
              <InstagramLogo className="h-5 w-5" />
              Instagram
            </a>
            <a href="https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid" className={`${cta} border border-white/70 bg-white/58 text-[#26385B] shadow-[0_16px_34px_rgba(38,56,91,0.10)]`}>
              <DoctoraliaLogo className="h-5 w-5" />
              Doctoralia
            </a>
          </div>
        </div>

        <form
          action="mailto:bivalentesalud@gmail.com"
          method="post"
          encType="text/plain"
          className="rounded-[30px] border border-white/70 bg-white/42 p-6 shadow-[0_26px_70px_rgba(38,56,91,0.14)] backdrop-blur-xl sm:p-8"
        >
          <h2 className="mb-6 font-serif text-2xl font-semibold">Formulario de contacto</h2>
          <div className="grid gap-5">
            <label className="grid gap-2 font-semibold">
              Nombre
              <input name="Nombre" required className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]" />
            </label>
            <label className="grid gap-2 font-semibold">
              Email
              <input type="email" name="Email" required className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]" />
            </label>
            <label className="grid gap-2 font-semibold">
              Teléfono
              <input name="Teléfono" className="rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]" />
            </label>
            <label className="grid gap-2 font-semibold">
              Mensaje
              <textarea name="Mensaje" required rows={6} className="resize-none rounded-2xl border border-[#DADFD2] bg-white/80 px-4 py-3 font-normal outline-none transition focus:border-[#9B8BD3]" />
            </label>
            <button type="submit" className={`${cta} bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] text-white shadow-[0_18px_42px_rgba(38,56,91,0.24)]`}>
              <Send className="h-5 w-5" />
              Enviar mensaje
            </button>
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/40 shadow-[0_26px_70px_rgba(38,56,91,0.14)]">
          <iframe
            title="Mapa de la consulta en Chamartín"
            src="https://www.google.com/maps?q=C.%20de%20Marcenado%2C%2014%2C%20Chamart%C3%ADn%2C%2028002%20Madrid&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
