import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, GraduationCap, MapPin, Phone } from "lucide-react"
import { WhatsAppLogo } from "../components/BrandIcons"

export const metadata: Metadata = {
  title: "Quién soy | Daniela López Meléndez, psicóloga sanitaria en Madrid",
  description:
    "Conoce a Daniela López Meléndez, Psicóloga General Sanitaria en Madrid. Consulta presencial en Chamartín y terapia online para adultos, adolescentes, infancia y parejas.",
}

const card = "rounded-[30px] border border-white/70 bg-white/42 p-6 shadow-[0_22px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl"
const badge = "rounded-full border border-white/70 bg-white/58 px-4 py-2 text-sm font-bold text-[#26385B] shadow-[0_10px_24px_rgba(38,56,91,0.08)]"
const whatsappMessage = "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`

export default function AboutPage() {
  const training = [
    "Grado en Psicología - Universidad Nebrija",
    "Máster en Psicología General Sanitaria - Universidad Europea",
    "Formación en intervención en crisis - Fundación ANAR",
    "Máster en Psicología Infanto-Juvenil - Academia AMIR",
  ]

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFEFA_0%,#EAF1DE_100%)] text-[#26385B]">
      <header className="border-b border-white/40 bg-[#26385B] text-white shadow-[0_14px_34px_rgba(27,41,71,0.18)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="font-serif text-xl font-semibold">Daniela López Meléndez</a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/72 md:flex">
            <a href="/quien-soy" className="text-white">Quién soy</a>
            <a href="/#reserva" className="hover:text-white">Precios</a>
            <a href="/contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/30 shadow-[0_26px_72px_rgba(38,56,91,0.16)]">
          <Image
            src="/daniela-lopez-psicologa-sanitaria-madrid.webp"
            alt="Daniela López Meléndez, psicóloga sanitaria en Madrid"
            width={900}
            height={1125}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-bold shadow-[0_10px_28px_rgba(38,56,91,0.10)]">
            Formación y perfil profesional
          </p>
          <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Daniela López Meléndez
          </h1>
          <p className="mb-3 text-xl font-bold text-[#6F6D9E]">Psicóloga General Sanitaria</p>
          <p className="mb-6 font-semibold text-[#26385B]">Colegiada M-41829</p>
          <p className="mb-7 text-lg leading-relaxed text-[#5D6680]">
            Acompaño a adultos, adolescentes, infancia y parejas desde un enfoque integrador, cercano y respetuoso con el ritmo de cada persona.
          </p>
          <div className="mb-7 flex flex-wrap gap-3">
            {["Infanto-juvenil", "Adultos", "Crisis", "Pareja"].map((item) => (
              <span key={item} className={badge}>{item}</span>
            ))}
          </div>
          <div className={`${card} mb-7`}>
            <p className="mb-4 font-bold">Daniela López Meléndez, Psicóloga General Sanitaria</p>
            <p className="leading-relaxed text-[#5D6680]">
              Universidad Nebrija | Máster en Psicología General Sanitaria | Formación en intervención en crisis | Psicología infanto-juvenil
            </p>
          </div>
          <div className="grid gap-3 text-[#5D6680] sm:grid-cols-2">
            <a href="tel:+34614412183" className="flex items-center gap-2 font-semibold hover:text-[#26385B]">
              <Phone className="h-4 w-4 text-[#9B8BD3]" />
              +34 614 412 183
            </a>
            <span className="flex items-center gap-2 font-semibold">
              <MapPin className="h-4 w-4 text-[#9B8BD3]" />
              Chamartín, Madrid
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:pb-24">
        <div className={card}>
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-[#9B8BD3]" />
            <h2 className="font-serif text-2xl font-semibold">Formación</h2>
          </div>
          <div className="grid gap-4">
            {training.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7F9256]" />
                <p className="font-medium leading-relaxed text-[#26385B]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <p className="mb-3 text-sm font-bold uppercase text-[#6F6D9E]">Trayectoria</p>
          <h2 className="mb-5 font-serif text-2xl font-semibold">Mi enfoque terapéutico</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#5D6680]">
            <p>Soy psicóloga general sanitaria comprometida con el acompañamiento a personas que buscan comprenderse mejor, sanar sus heridas emocionales y construir relaciones más seguras consigo mismas y con los demás.</p>
            <p>Trabajo desde un enfoque integrador, combinando herramientas de diferentes corrientes psicológicas para adaptarme a la historia, las necesidades y el ritmo de cada paciente.</p>
            <p>Mi experiencia incluye intervención en situaciones de crisis, atención a población infanto-juvenil y adultos. Mi compromiso es ofrecer un espacio seguro y de confianza donde puedas explorar lo que sientes con calma.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#26385B] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h2 className="mb-4 font-serif text-3xl font-semibold">¿Quieres pedir una primera sesión?</h2>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="about_final_cta" data-page="about" data-channel="whatsapp" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#26385B] transition hover:bg-white/90">
            <WhatsAppLogo className="h-5 w-5" />
            Pedir primera sesión por WhatsApp
          </a>
          <a href="/#reserva" className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10">
            Ver precios
          </a>
        </div>
      </section>
    </main>
  )
}
