import type { Metadata } from "next"
import { CheckCircle2, GraduationCap, Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Quién soy | Daniela López Meléndez",
  description: "Formación, perfil profesional y enfoque clínico de Daniela López Meléndez, Psicóloga General Sanitaria.",
}

const card = "rounded-[30px] border border-white/70 bg-white/42 p-6 shadow-[0_22px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl"
const badge = "rounded-full border border-white/70 bg-white/58 px-4 py-2 text-sm font-bold text-[#26385B] shadow-[0_10px_24px_rgba(38,56,91,0.08)]"

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
          <a href="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="" className="h-10 w-10 rounded-full object-contain" />
            <span>
              <span className="block font-serif text-xl font-semibold">Daniela López</span>
              <span className="block text-xs font-semibold text-white/70">Psicóloga General Sanitaria</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/72 md:flex">
            <a href="/quien-soy" className="text-white">Quién soy</a>
            <a href="/#reserva" className="hover:text-white">Precios</a>
            <a href="/contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/30 shadow-[0_26px_72px_rgba(38,56,91,0.16)]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GFlcl862ZrMZVDNkE5Dstf3AjlC4A.png"
              alt="Daniela López Meléndez, psicóloga en Bivalente"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-bold shadow-[0_10px_28px_rgba(38,56,91,0.10)]">
            Formación y perfil profesional
          </p>
          <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Daniela López Meléndez
          </h1>
          <p className="mb-5 text-xl font-bold text-[#6F6D9E]">Psicóloga General Sanitaria</p>
          <p className="mb-7 text-lg leading-relaxed text-[#5D6680]">
            Un resumen claro de la trayectoria, la formación académica y el enfoque clínico de Daniela.
          </p>

          <div className="mb-7 flex flex-wrap gap-3">
            {["Infanto-juvenil", "Adultos", "Crisis"].map((item) => (
              <span key={item} className={badge}>{item}</span>
            ))}
          </div>

          <div className={`${card} mb-7`}>
            <p className="mb-4 font-bold">Daniela, psicóloga en Bivalente</p>
            <p className="leading-relaxed text-[#5D6680]">
              Colegiada | Universidad Nebrija | Máster en Psicología General Sanitaria
            </p>
          </div>

          <div className="grid gap-3 text-[#5D6680] sm:grid-cols-3">
            <a href="tel:+34614412183" className="flex items-center gap-2 font-semibold hover:text-[#26385B]">
              <Phone className="h-4 w-4 text-[#9B8BD3]" />
              +34 614 412 183
            </a>
            <a href="mailto:bivalentesalud@gmail.com" className="flex items-center gap-2 font-semibold hover:text-[#26385B]">
              <Mail className="h-4 w-4 text-[#9B8BD3]" />
              Email
            </a>
            <span className="flex items-center gap-2 font-semibold">
              <MapPin className="h-4 w-4 text-[#9B8BD3]" />
              Madrid
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
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#6F6D9E]">Trayectoria</p>
          <h2 className="mb-5 font-serif text-2xl font-semibold">Mi enfoque terapéutico</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#5D6680]">
            <p>
              Soy psicóloga general sanitaria comprometida con el acompañamiento a personas que buscan comprenderse mejor, sanar sus heridas emocionales y construir relaciones más seguras consigo mismas y con los demás.
            </p>
            <p>
              Trabajo desde un enfoque integrador, combinando herramientas de diferentes corrientes psicológicas para adaptarme a la historia, las necesidades y el ritmo de cada paciente. Atiendo a adultos, adolescentes, niños y parejas, ofreciendo un espacio cercano, respetuoso y orientado al bienestar emocional.
            </p>
            <p>
              Mi experiencia incluye intervención en situaciones de crisis, atención a población infanto-juvenil y adultos. Mi compromiso es ofrecer un espacio seguro y de confianza donde puedas explorar lo que sientes con calma, fortalecer tu bienestar y desarrollar nuevas formas de relacionarte contigo y con quienes te rodean.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
