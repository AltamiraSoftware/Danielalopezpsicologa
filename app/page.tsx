import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Heart,
  Home,
  MapPin,
  Send,
  Sparkles,
  UserCheck,
  Users,
  Video,
} from "lucide-react"
import { ContactRequestForm } from "./components/ContactRequestForm"
import { ReviewsCarousel } from "./components/ReviewsCarousel"
import { DoctoraliaLogo, GoogleLogo, WhatsAppLogo } from "./components/BrandIcons"
import { FAQAccordion } from "./components/FAQAccordion"
import { HashLink } from "./components/HashLink"
import { Header as SiteHeader } from "./components/Header"
import { SpecialtyCards } from "./components/SpecialtyCards"
import { SiteFooter } from "./components/SiteFooter"
import { GoogleMapPreview } from "./components/GoogleMapPreview"
import { LocationSection as SharedLocationSection } from "./components/LocationSection"
import { ModalitySection } from "./components/ModalitySection"
import { faqs } from "./data/faq"
import { openGraphMetadata } from "./data/seo"

const whatsappMessage =
  "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`
const doctoraliaUrl = "https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
const instagramUrl = "https://www.instagram.com/psico.danilopez/"
const address = "C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid"
const mapQuery = encodeURIComponent("C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid")
const googleReviewsUrl = "https://share.google/G6F7RNyVtOPYNJKh6"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: openGraphMetadata({
    title: "Daniela López | Psicóloga sanitaria en Madrid",
    description:
      "Terapia presencial en Chamartín y online para ansiedad, duelo y terapia infantojuvenil. Primera sesión desde 40 €.",
    path: "/",
  }),
}

const sectionWarm = "section-lavanda relative border-t border-linea-fuerte"
const sectionSage = "section-salvia relative border-t border-linea-fuerte"
const sectionCta = "section-cta relative border-t border-linea-fuerte text-crema"
const cardGlass = "glass glass-hover rounded-[24px] p-6"
const iconBox = "icon-box"

function HeroSection() {
  const heroBadges = ["Primera sesión desde 40 €", "Consulta presencial en Chamartín y online", "Consulta independiente"]
  const heroTitle = "Psicóloga sanitaria en Chamartín y online para empezar terapia con calma"

  return (
    <section className="section-lavanda border-b border-linea-fuerte text-marino" data-no-reveal>
      <div className="mx-auto max-w-[1120px] px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <p className="eyebrow hero-in text-[11px] leading-[1.4] tracking-[0.12em] sm:text-[13px] sm:leading-normal sm:tracking-[0.14em]" style={{ animationDelay: "80ms" }}>Psicóloga General Sanitaria colegiada M-41829</p>
            <h1 className="max-w-[19ch] font-serif text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.02em] text-marino">
              {heroTitle.split(" ").map((word, index) => (
                <span key={`${word}-${index}`}>
                  <span className="hero-word" style={{ animationDelay: `${140 + index * 45}ms` }}>
                    {word}
                  </span>
                  {index < heroTitle.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="hero-in max-w-[68ch] text-[1.0625rem] leading-[1.6] text-texto-2 sm:text-[1.25rem]" style={{ animationDelay: "320ms" }}>
              Soy Daniela López Meléndez, Psicóloga General Sanitaria colegiada M-41829. Te ayudo a ordenar lo que estás viviendo y valorar el mejor punto de partida, con una primera sesión desde 40 € en consulta presencial u online.
            </p>
            <div className="hero-in flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "400ms" }}>
              <a href={whatsappUrl} data-event="click_whatsapp" data-location="hero" data-page="landing" data-channel="whatsapp" className="btn btn--whatsapp">
                <WhatsAppLogo className="h-4 w-4" />
                Pedir primera sesión
              </a>
              <HashLink targetId="contacto" data-event="click_contact_form" data-location="hero" data-page="landing" data-channel="internal_cta" className="btn btn--secondary">
                <Send className="h-4 w-4" aria-hidden="true" />
                Dejar mis datos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </HashLink>
            </div>
            <ul className="hero-in flex flex-wrap items-center gap-x-4 gap-y-2 font-brand text-[13px] uppercase leading-none tracking-[0.1em] text-texto-3" style={{ animationDelay: "460ms" }}>
              {heroBadges.map((badge, index) => (
                <li key={badge} className="flex items-center gap-4">
                  {index > 0 && <span className="h-1 w-1 rounded-full bg-acento" aria-hidden="true" />}
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="hero-mask mx-auto aspect-[4/5] max-h-[560px] w-full max-w-[440px] overflow-hidden rounded-lg bg-lavanda-100">
              <Image
                src="/daniela-lopez-psicologa-sanitaria-madrid.webp"
                alt="Daniela López Meléndez, psicóloga sanitaria en Madrid"
                width={900}
                height={1125}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-salvia relative scroll-mt-24 overflow-hidden border-t border-linea-fuerte py-[clamp(64px,6vw+32px,120px)]"
    >
      <div aria-hidden="true" className="contact-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1120px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-5 max-w-lg font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-marino text-balance sm:text-4xl">
            Cuéntame qué necesitas y te contacto
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-texto-2">
            Puedes escribir por WhatsApp o dejar tus datos en el formulario. Te responderé para resolver dudas, revisar disponibilidad y valorar si una primera sesión encaja contigo.
          </p>

          <div className="group relative mt-8 overflow-hidden rounded-[26px] border border-white/80 bg-white/40 shadow-[0_26px_60px_-34px_rgba(20,36,63,0.4)]">
            <Image
              src="/consulta-psicologia-chamartin-daniela-lopez.webp"
              alt="Daniela López Meléndez en su despacho de psicología en Chamartín"
              width={1600}
              height={2000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 font-brand text-[11px] font-medium uppercase tracking-[0.12em] text-marino backdrop-blur">
              Consulta en Chamartín
            </span>
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href={whatsappUrl}
              data-event="click_whatsapp"
              data-location="contact_block"
              data-page="landing"
              data-channel="whatsapp"
              className="btn btn--whatsapp w-full sm:w-auto"
            >
              <WhatsAppLogo className="h-[18px] w-[18px]" />
              Pedir primera sesión
            </a>
          </div>

          <aside className="crisis-note mt-4" role="note">
            Esta consulta no es un servicio de urgencias. Si hay riesgo inmediato, llama al <a href="tel:112">112</a>. Línea de atención a la conducta suicida: <a href="tel:024">024</a>.
          </aside>
        </div>

        <ContactRequestForm compact />
      </div>
    </section>
  )
}

function EmpathySection() {
  const problems = [
    { icon: Brain, title: "Ansiedad y preocupación constante", description: "Cuando los pensamientos no paran y cuesta desconectar" },
    { icon: Sparkles, title: "Bloqueo emocional", description: "Sentir que no avanzas o que algo te frena" },
    { icon: Heart, title: "Autoexigencia y autoestima", description: "Cuando eres muy duro/a contigo mismo/a" },
    { icon: Users, title: "Dificultades en adolescentes", description: "Cambios de conducta, aislamiento o conflictos" },
    { icon: Sparkles, title: "Duelo o cambios vitales", description: "Pérdidas, separaciones o transiciones difíciles" },
    { icon: Home, title: "Conflictos familiares o de pareja", description: "Comunicación difícil o dinámicas que se repiten" },
  ]

  return (
    <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl text-balance">
            Puede ayudarte si estás viviendo...
          </h2>
          <p className="text-lg leading-relaxed text-texto-2 text-pretty">
            La primera sesión también sirve para ordenar lo que estás viviendo y valorar cómo puedo ayudarte.
          </p>
        </div>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className={`${cardGlass} flex h-full min-h-[190px] flex-col border-linea text-center`}>
              <div className={`mx-auto mb-4 h-12 w-12 shrink-0 ${iconBox}`}>
                <problem.icon className="block h-6 w-6 text-marino" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-marino">{problem.title}</h3>
              <p className="text-texto-2">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfessionalTrustSection() {
  const points = [
    "Psicóloga General Sanitaria",
    "Colegiada M-41829",
    "Especializada en población infanto-juvenil",
    "Atención a adultos, adolescentes, parejas y familias",
    "Consulta presencial en Chamartín y online",
    "Consulta independiente dentro del centro Psicotep",
  ]

  return (
    <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="mb-5 font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl">
            Un primer paso claro, cercano y sin presión
          </h2>
          <p className="text-lg leading-relaxed text-texto-2">
            Daniela trabaja desde un enfoque integrador, adaptando cada proceso a la persona y al momento en el que se encuentra. La primera sesión sirve para entender qué está pasando, resolver dudas y valorar cómo empezar.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/65 bg-white/30 p-4 shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-exito" />
              <span className="font-medium text-marino">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className={`${sectionSage} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-6 font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl text-balance">
            Consulta presencial en Chamartín y terapia online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-texto-2 text-pretty">
            Puedes acudir a consulta presencial en {address}. Es una consulta independiente dentro del centro Psicotep. También puedes realizar sesiones online si necesitas más flexibilidad.
          </p>
          <div className={`${cardGlass} mb-6`}>
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 shrink-0 ${iconBox}`}>
                <MapPin className="block h-6 w-6 text-marino" />
              </div>
              <div>
                <p className="font-semibold text-marino">Dirección</p>
                <p className="text-texto-2">C. de Marcenado, 14, Despacho 2</p>
                <p className="text-texto-2">Chamartín, 28002 Madrid</p>
                <p className="text-sm font-medium text-texto-3">Consulta independiente dentro del centro Psicotep</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" data-event="click_google_maps" data-location="location" data-page="landing" data-channel="maps" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] px-6 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(127,146,86,0.24)] transition-all hover:opacity-90">
              <MapPin className="h-5 w-5" />
              Cómo llegar
            </a>
            <a href={whatsappUrl} data-event="click_whatsapp" data-location="location" data-page="landing" data-channel="whatsapp" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-exito px-6 py-3 font-semibold text-exito transition-all hover:bg-exito/10">
              <WhatsAppLogo className="h-5 w-5" />
              Pedir primera sesión
            </a>
          </div>
        </div>
        <GoogleMapPreview mapQuery={mapQuery} />
      </div>
    </section>
  )
}

function ModalitiesSection() {
  const modalities = [
    { icon: Home, title: "Terapia presencial en Madrid", description: "Sesiones en consulta presencial en Chamartín, en un entorno tranquilo y profesional." },
    { icon: Video, title: "Terapia online", description: "Sesiones por videollamada para empezar el proceso desde donde estés." },
    { icon: UserCheck, title: "Primera sesión de orientación", description: "Un primer encuentro para valorar tu situación, resolver dudas y decidir siguientes pasos." },
  ]

  return (
    <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl text-balance">
          Elige la modalidad que mejor encaje contigo
        </h2>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((modality) => (
            <article key={modality.title} className={`${cardGlass} flex h-full min-h-[245px] flex-col items-center p-8 text-center`} style={{ borderColor: "rgba(183, 166, 232, 0.45)" }}>
              <div className={`mx-auto mb-6 h-14 w-14 shrink-0 ${iconBox}`}>
                <modality.icon className="block h-7 w-7 text-marino" />
              </div>
              <h3 className="mb-3 text-center text-xl font-medium text-marino">{modality.title}</h3>
              <p className="text-center leading-relaxed text-texto-2">{modality.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const prices = [
    { title: "Primera sesión individual", price: "40 €", description: "Online o presencial para valorar tu caso y orientarte con calma.", footer: "Presencial u online" },
    { title: "Sesión online", price: "55 €", description: "Continuidad del proceso terapéutico por videollamada.", footer: "Sesiones individuales online" },
    { title: "Sesión presencial", price: "60 €", description: "Sesiones individuales en consulta presencial en Chamartín.", footer: "Consulta en Despacho 2" },
    { title: "Terapia de pareja o familia", price: "75 €", description: "Sesiones online o presenciales para trabajar dinámicas relacionales.", footer: "Mismo precio desde la primera sesión" },
    { title: "Bono online", price: "200 €", description: "Pack de 4 sesiones online para dar continuidad al proceso terapéutico.", footer: "4 sesiones online" },
    { title: "Bono presencial", price: "220 €", description: "Pack de 4 sesiones presenciales en consulta de Chamartín.", footer: "4 sesiones presenciales" },
  ]

  return (
    <section id="reserva" className="section-salvia relative scroll-mt-24 overflow-hidden border-t border-linea-fuerte py-[clamp(64px,6vw+32px,120px)]">
      <div aria-hidden="true" className="pricing-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Tarifas</span>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-marino text-balance sm:text-4xl">
            Precios claros desde el primer momento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-texto-2">
            Primera sesión desde 40 €. Antes de empezar, sabrás cuánto cuesta cada tipo de sesión.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prices.map((price, index) => {
            const featured = index === 0

            return (
              <article
                key={price.title}
                className={`relative flex h-full min-h-[250px] flex-col items-center overflow-hidden rounded-[24px] p-6 text-center ${
                  featured
                    ? "dark-section border border-white/10 text-crema shadow-[0_34px_70px_-36px_rgba(20,36,63,0.75)]"
                    : "glass glass-hover"
                }`}
              >
                {featured && (
                  <div className="relative mx-auto mb-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-brand text-[10px] font-semibold uppercase tracking-[0.12em] text-lavanda">
                    Primera sesión
                  </div>
                )}
                {featured && (
                  <div aria-hidden="true" className="featured-glow absolute -right-14 -top-14 h-40 w-40 rounded-full" />
                )}

                <h3 className={`relative font-serif text-lg leading-snug ${featured ? "text-crema" : "text-marino"}`}>
                  {price.title}
                </h3>
                <p className={`relative mt-5 font-brand text-[2.6rem] font-semibold leading-none tracking-[-0.03em] tabular-nums ${featured ? "text-crema" : "text-marino"}`}>
                  {price.price}
                </p>
                <p className={`relative mt-4 text-sm leading-relaxed ${featured ? "text-texto-inv-2" : "text-texto-2"}`}>
                  {price.description}
                </p>
                <p className={`relative mt-auto w-full border-t pt-4 font-brand text-[11px] font-medium uppercase tracking-[0.1em] ${featured ? "border-white/20 text-lavanda/85" : "border-linea text-texto-3"}`}>
                  {price.footer}
                </p>
              </article>
            )
          })}
        </div>

        <div className="glass mt-6 rounded-[24px] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-10">
            <div className="lg:w-[34%]">
              <span className="eyebrow">Profesionales</span>
              <h3 className="mt-4 font-serif text-xl font-normal text-marino">Supervisión de casos</h3>
              <p className="mt-3 text-sm leading-relaxed text-texto-2">
                Espacio seguro, respetuoso y colaborativo para estudiantes y profesionales de la psicología que se sienten estancados con un caso y necesitan una mirada externa.
              </p>
            </div>
            <div className="grid flex-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {[
                "Reflexionar sobre casos clínicos",
                "Resolver dudas teóricas y prácticas",
                "Trabajar bloqueos terapéuticos",
                "Revisar formulación y objetivos",
                "Cuidar el rol profesional",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-xl border border-linea/70 bg-white/60 p-3 text-sm font-medium text-marino">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-salvia-600" strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="pricing" data-page="landing" data-channel="whatsapp" className="btn btn--whatsapp">
            <WhatsAppLogo className="h-5 w-5" />
            Pedir primera sesión
          </a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="pricing" data-page="landing" data-channel="doctoralia" className="btn btn--secondary">
            <DoctoraliaLogo className="h-5 w-5" />
            Ver perfil en Doctoralia
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-lavanda-600">Opiniones</p>
          <h2 className="mb-4 font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl">
            Opiniones de pacientes en Doctoralia y Google
          </h2>
          <p className="text-lg leading-relaxed text-texto-2">
            Son opiniones reales de personas que ya han pasado por consulta. No mostramos nombres ni datos personales.
          </p>
        </div>
        <ReviewsCarousel />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="social_proof" data-page="landing" data-channel="doctoralia" className="btn btn--secondary w-full sm:w-auto">
          <DoctoraliaLogo className="h-6 w-6" />
          Ver perfil en Doctoralia
          </a>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" data-event="click_google_reviews" data-location="social_proof" data-page="landing" data-channel="google" className="btn btn--secondary w-full sm:w-auto">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white">
            <GoogleLogo className="h-4 w-4" />
          </span>
          Ver reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}

function HowToStartSection() {
  const steps = [
    "Escribes por WhatsApp con un mensaje breve.",
    "Daniela valora contigo qué necesitas y resuelve tus dudas.",
    "Elegís modalidad presencial en Chamartín u online.",
    "Si encaja, acordáis la primera sesión desde 40 €.",
  ]

  return (
    <section className={`${sectionSage} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl">
          Cómo empezar
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step} className={`${cardGlass} flex items-start gap-4 p-5`}>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-linea bg-arena font-brand font-medium text-marino">
                {index + 1}
              </span>
              <p className="pt-2 font-medium text-marino">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ObjectionsSection() {
  const objections = [
    {
      title: "No sé si mi problema es suficientemente importante",
      text: "No necesitas tenerlo claro. La primera sesión también sirve para ordenar lo que está pasando y valorar si la terapia puede ayudarte.",
    },
    {
      title: "Me cuesta explicar lo que me pasa por mensaje",
      text: "Puedes escribir solo un mensaje breve. No hace falta contar todo por WhatsApp.",
    },
    {
      title: "No sé si elegir presencial u online",
      text: "Puedes comentarlo en el primer contacto y decidir según disponibilidad, comodidad y necesidades.",
    },
  ]

  return (
    <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl">
          Antes de escribir, puede que te preguntes...
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {objections.map((item) => (
            <article key={item.title} className={`${cardGlass} h-full`}>
              <h3 className="mb-3 text-lg font-medium text-marino">{item.title}</h3>
              <p className="leading-relaxed text-texto-2">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="objections" data-page="landing" data-channel="whatsapp" className="btn btn--whatsapp">
            <WhatsAppLogo className="h-5 w-5" />
            Pedir primera sesión
          </a>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className={`${sectionCta} py-[clamp(64px,6vw+32px,120px)]`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-serif text-2xl font-normal text-white sm:text-3xl lg:text-4xl text-balance">
          Dar el primer paso no significa tenerlo todo claro
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-white/90 text-pretty">
          Puedes escribirme y contarme brevemente qué está pasando. A partir de ahí valoramos cuál puede ser el siguiente paso.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="final_cta" data-page="landing" data-channel="whatsapp" className="btn btn--whatsapp">
            <WhatsAppLogo className="h-6 w-6" />
            Pedir primera sesión
          </a>
          <HashLink targetId="reserva" data-event="click_prices" data-location="final_cta" data-page="landing" data-channel="internal_cta" className="btn btn--ghost-inverse">
            Ver precios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </HashLink>
        </div>
      </div>
    </section>
  )
}


function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} data-event="click_whatsapp" data-location="floating" data-page="landing" data-channel="whatsapp" className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-2 transition-colors hover:bg-whatsapp-600 sm:flex" aria-label="Contactar por WhatsApp">
      <WhatsAppLogo className="h-10 w-10" />
    </a>
  )
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-linea bg-crema/95 p-3 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={whatsappUrl}
          data-event="click_whatsapp"
          data-location="sticky_mobile"
          data-page="landing"
          data-channel="whatsapp"
          className="btn btn--whatsapp flex-1"
        >
          <WhatsAppLogo className="h-5 w-5" />
          Pedir primera sesión
        </a>
        <HashLink
          targetId="reserva"
          data-event="click_prices"
          data-location="sticky_mobile"
          data-page="landing"
          data-channel="internal_cta"
          className="btn btn--primary flex-1"
        >
          Ver precios
        </HashLink>
      </div>
    </div>
  )
}

function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniela López Meléndez",
    jobTitle: "Psicóloga General Sanitaria",
    identifier: "Colegiada M-41829",
    telephone: "+346****2183",
    url: "https://danielalopezpsicologia.es",
    sameAs: [instagramUrl, doctoraliaUrl],
  }
  const business = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Daniela López Meléndez Psicología",
    medicalSpecialty: "Psychology",
    priceRange: "40€-75€",
    telephone: "+346****2183",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. de Marcenado, 14, Despacho 2",
      addressLocality: "Madrid",
      postalCode: "28002",
      addressCountry: "ES",
    },
    areaServed: "Madrid",
    sameAs: [instagramUrl, doctoraliaUrl],
  }
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia psicológica presencial en Madrid y online",
    provider: { "@type": "Person", name: "Daniela López Meléndez" },
    areaServed: "Madrid",
    serviceType: ["Ansiedad", "Autoestima", "Terapia infanto-juvenil", "Duelo", "Terapia de pareja", "Trauma"],
  }
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://danielalopezpsicologia.es/",
      },
    ],
  }

  return (
    <>
      {[person, business, service, faqPage, breadcrumbs].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

export default function DanielaLandingPage() {
  return (
    <>
      <JsonLd />
      <SiteHeader whatsappUrl={whatsappUrl} doctoraliaUrl={doctoraliaUrl} instagramUrl={instagramUrl} />
      <main className="min-h-screen pb-20 sm:pb-0">
        <HeroSection />
        <ContactSection />
        <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl text-balance">
              Áreas que podemos trabajar en terapia
            </h2>
            <SpecialtyCards />
          </div>
        </section>
        <SharedLocationSection page="landing" whatsappHref={whatsappUrl} />
        <EmpathySection />
        <ProfessionalTrustSection />
        <ModalitySection />
        <PricingSection />
        <TrustSection />
        <HowToStartSection />
        <ObjectionsSection />
        <section id="faq" className={`${sectionSage} py-[clamp(64px,6vw+32px,120px)]`}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-2xl font-normal text-marino sm:text-3xl lg:text-4xl">Preguntas frecuentes</h2>
            <FAQAccordion />
          </div>
        </section>
        <FinalCTASection />
      </main>
      <SiteFooter page="landing" />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  )
}
