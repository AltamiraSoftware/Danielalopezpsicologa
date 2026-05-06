"use client"

import { useState } from "react"
import {
  MessageCircle,
  Calendar,
  MapPin,
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Heart,
  Brain,
  Sparkles,
  Home,
  Video,
  UserCheck,
  ExternalLink,
  Instagram,
  CheckCircle2,
} from "lucide-react"

const sectionHero =
  "relative overflow-hidden bg-[radial-gradient(880px_420px_at_12%_8%,rgba(164,190,123,0.18)_0%,rgba(164,190,123,0)_58%),radial-gradient(760px_360px_at_88%_16%,rgba(183,166,232,0.08)_0%,rgba(183,166,232,0)_56%),linear-gradient(180deg,#FFFEFA_0%,#F1F5EA_100%)]"

const sectionWarm =
  "relative overflow-hidden bg-[radial-gradient(820px_380px_at_8%_12%,rgba(183,166,232,0.055)_0%,rgba(183,166,232,0)_56%),radial-gradient(780px_360px_at_94%_88%,rgba(164,190,123,0.10)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#FFFEFA_0%,#FCFAF4_100%)]"

const sectionSage =
  "relative overflow-hidden bg-[radial-gradient(900px_420px_at_14%_12%,rgba(255,254,250,0.76)_0%,rgba(255,254,250,0)_56%),radial-gradient(820px_380px_at_88%_86%,rgba(164,190,123,0.28)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#F5F8EF_0%,#EAF1DE_100%)]"

const sectionCta =
  "relative overflow-hidden bg-[radial-gradient(760px_360px_at_14%_12%,rgba(164,190,123,0.20)_0%,rgba(164,190,123,0)_58%),radial-gradient(700px_340px_at_88%_18%,rgba(255,254,250,0.12)_0%,rgba(255,254,250,0)_56%),linear-gradient(135deg,#1E2D4A_0%,#26385B_62%,#536341_100%)]"

const accentLavender = "text-[#9B8BD3]"
const borderLavender = "border-[#B7A6E8]/25"
const bgLavenderSoft = "bg-[#B7A6E8]/8"

const footerDeep =
  "relative overflow-hidden bg-[linear-gradient(135deg,#1B2947_0%,#26385B_56%,#2F3F68_100%)]"

const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"

const cardGlassStrong =
  "rounded-[30px] border border-white/70 bg-white/24 p-8 shadow-[0_26px_70px_rgba(38,56,91,0.14)] backdrop-blur-2xl transition-all hover:-translate-y-1 hover:border-white/85 hover:bg-white/30 hover:shadow-[0_34px_84px_rgba(140,137,184,0.22)]"

const cardSoft =
  "rounded-[30px] border border-white/65 bg-white/30 p-6 shadow-[0_18px_46px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/34 hover:shadow-[0_28px_68px_rgba(140,137,184,0.18)]"

const cardDeepGlass =
  "rounded-[30px] border border-white/22 bg-white/10 p-8 text-white shadow-[0_30px_80px_rgba(27,41,71,0.34)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/34 hover:bg-white/14"

const miniGlass =
  "rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md"

const badgeGlass =
  "rounded-full border border-white/65 bg-white/44 px-3 py-2 text-sm font-semibold text-[#26385B] shadow-[0_8px_22px_rgba(38,56,91,0.10)] backdrop-blur-xl"

const imageGlass =
  "overflow-hidden rounded-[30px] border border-white/70 bg-white/18 shadow-[0_26px_72px_rgba(38,56,91,0.16)] backdrop-blur-xl"

const ctaGradient =
  "bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] text-white shadow-[0_18px_42px_rgba(38,56,91,0.24)]"

const iconGradient =
  "bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)]"

const iconBox =
  "inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)] shadow-[0_12px_24px_rgba(38,56,91,0.10)]"

const imageAura =
  "isolate before:absolute before:-inset-5 before:-z-10 before:rounded-[36px] before:bg-[radial-gradient(circle_at_28%_20%,rgba(183,166,232,0.10),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(164,190,123,0.30),transparent_38%),radial-gradient(circle_at_52%_52%,rgba(38,56,91,0.08),transparent_46%)] before:blur-2xl"

/* ===========================================
   HEADER
=========================================== */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(135deg,rgba(27,41,71,0.96)_0%,rgba(38,56,91,0.94)_56%,rgba(47,63,104,0.92)_100%)] shadow-[0_14px_34px_rgba(27,41,71,0.20)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img
            src="/icon.png"
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block font-serif text-xl font-semibold leading-none text-white sm:text-2xl">
              Daniela López
            </span>
            <span className="mt-1 block truncate text-xs font-semibold leading-none text-white/68 sm:text-sm">
              Psicóloga General Sanitaria · Madrid
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/72 md:flex">
          <a href="#reserva" className="transition hover:text-white">Precios</a>
          <a href="#faq" className="transition hover:text-white">Dudas</a>
          <a href="#contacto" className="transition hover:text-white">Contacto</a>
        </nav>
        <a
          href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
          data-event="click_whatsapp_daniela_header"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/65 bg-white/92 px-4 py-2.5 text-sm font-bold text-[#26385B] shadow-[0_12px_28px_rgba(27,41,71,0.20)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_38px_rgba(27,41,71,0.26)]"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}

/* ===========================================
   HERO SECTION
=========================================== */
function HeroSection() {
  return (
    <section className={`${sectionHero} text-[#26385B]`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#26385B]/12 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            {/* Trust Badge */}
            <div className={`mb-5 inline-flex items-center gap-2 ${badgeGlass}`}>
              <CheckCircle2 className="h-4 w-4" />
              Psicóloga General Sanitaria en Madrid · Colegiada M-41829
            </div>

            {/* Headline */}
            <h1 className="mb-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] text-[#26385B] sm:text-5xl lg:text-6xl text-balance">
              Daniela López | Psicóloga en Madrid especializada en ansiedad e infancia
            </h1>

            {/* Subheadline */}
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-[#5D6680] sm:text-xl text-pretty">
              Te acompaño a entender lo que te ocurre y a sentirte mejor, con un enfoque cercano, profesional y adaptado a tu momento.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
                data-event="click_whatsapp_daniela_landing"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(140,137,184,0.30)] active:scale-[0.98] ${ctaGradient}`}
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
              <a
                href="#reserva"
                data-event="click_reserva_daniela_landing"
                className={`inline-flex items-center justify-center gap-2 rounded-xl border bg-white/48 px-6 py-4 text-base font-semibold text-[#26385B] shadow-[0_14px_34px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/64 active:scale-[0.98] ${borderLavender}`}
              >
                <Calendar className="h-5 w-5" />
                Reservar primera sesión
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-3">
              {[
                "Consulta en Chamartín",
                "Online y presencial",
                "Adultos, adolescentes y familias",
              ].map((badge) => (
                <span
                  key={badge}
                  className={badgeGlass}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className={`relative ${imageAura}`}>
              {/* Main Image */}
              <div className={`relative ${imageGlass}`}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GFlcl862ZrMZVDNkE5Dstf3AjlC4A.png"
                  alt="Daniela López Meléndez, psicóloga en Madrid"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              {/* Floating Price Card */}
              <div className={`absolute -bottom-4 -left-4 ${cardGlassStrong} p-4 sm:-bottom-6 sm:-left-6 sm:p-5`}>
                <p className="text-sm font-medium text-[#5D6680]">Primera sesión desde</p>
                <p className="text-2xl font-bold text-[#6F6D9E] sm:text-3xl">40 €</p>
                <p className="text-xs text-[#5D6680]">Presencial u online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   EMPATHY / PROBLEM SECTION
=========================================== */
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
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
            Quizá no necesitas tenerlo todo claro para pedir ayuda
          </h2>
          <p className="text-lg leading-relaxed text-[#5D6680] text-pretty">
            A veces cuesta explicar lo que ocurre: ansiedad, bloqueo, desbordamiento emocional, tristeza, problemas familiares o preocupación por un hijo o hija. La primera sesión también sirve para ordenar lo que estás viviendo y valorar cómo puedo ayudarte.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={cardGlass}
            >
              <div className={`mb-4 h-12 w-12 ${iconBox}`}>
                <problem.icon className={`h-6 w-6 ${accentLavender}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#26385B]">{problem.title}</h3>
              <p className="text-[#5D6680]">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   PERSONAL TRUST SECTION
=========================================== */
function PersonalTrustSection() {
  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Column */}
          <div className={`relative ${imageAura}`}>
            <div className={imageGlass}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-l04WYjzKlSlAEyW5zrUmhCGZyFb9UR.jpeg"
                alt="Consulta de psicología en Chamartín, Madrid"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
              Un espacio de terapia cercano, seguro y adaptado a ti
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#5D6680] text-pretty">
              Soy Daniela López Meléndez, Psicóloga General Sanitaria. Trabajo desde un enfoque integrador, adaptando el proceso terapéutico a la historia, las necesidades y el ritmo de cada persona.
            </p>

            {/* Features List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Adultos",
                "Adolescentes",
                "Niños y niñas",
                "Parejas y familias",
                "Intervención en crisis",
                "Regulación emocional",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${iconGradient} shadow-[0_8px_18px_rgba(140,137,184,0.12)]`}>
                    <CheckCircle2 className="h-4 w-4 text-[#26385B]" />
                  </div>
                  <span className="font-medium text-[#26385B]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   LOCATION SECTION
=========================================== */
function LocationSection() {
  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content Column */}
          <div>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
              Consulta presencial en Chamartín, Madrid
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[#5D6680] text-pretty">
              Puedes acudir a consulta presencial en C. de Marcenado, 14, Chamartín, 28002 Madrid, en un espacio profesional, cómodo y tranquilo. También puedes realizar sesiones online si necesitas más flexibilidad.
            </p>

            {/* Address Card */}
            <div className={`mb-6 ${cardGlassStrong} p-6`}>
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 flex-shrink-0 ${iconBox}`}>
                  <MapPin className={`h-6 w-6 ${accentLavender}`} />
                </div>
                <div>
                  <p className="font-semibold text-[#26385B]">Dirección</p>
                  <p className="text-[#5D6680]">C. de Marcenado, 14</p>
                  <p className="text-[#5D6680]">Chamartín, 28002 Madrid</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#como-llegar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] shadow-[0_16px_34px_rgba(127,146,86,0.24)] px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
              >
                <MapPin className="h-5 w-5" />
                Cómo llegar
              </a>
              <a
                href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
                data-event="click_whatsapp_daniela_landing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#7F9256] px-6 py-3 font-semibold text-[#7F9256] transition-all hover:bg-[#B8CA82]/18"
              >
                <MessageCircle className="h-5 w-5" />
                Preguntar por WhatsApp
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className={`relative ${imageAura}`}>
            <div className={imageGlass}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-O5XyfjoKGpBQIYoQKYbYVF5wH1vMNT.jpeg"
                alt="Despacho profesional para terapia presencial en Madrid"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   MODALITIES SECTION
=========================================== */
function ModalitiesSection() {
  const modalities = [
    {
      icon: Home,
      title: "Terapia presencial en Madrid",
      description: "Sesiones en consulta presencial en Chamartín, en un entorno tranquilo y profesional.",
    },
    {
      icon: Video,
      title: "Terapia online",
      description: "Sesiones por videollamada para que puedas empezar el proceso desde donde estás.",
    },
    {
      icon: UserCheck,
      title: "Primera sesión de orientación",
      description: "Un primer encuentro para valorar tu situación, resolver dudas y decidir los siguientes pasos.",
    },
  ]

  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
          Elige la modalidad que mejor encaje contigo
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((modality) => (
            <div
              key={modality.title}
              className={`${cardGlass} p-8`}
            >
              <div className={`mb-6 h-14 w-14 ${iconBox}`}>
                <modality.icon className={`h-7 w-7 ${accentLavender}`} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#26385B]">{modality.title}</h3>
              <p className="leading-relaxed text-[#5D6680]">{modality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   SPECIALTIES SECTION
=========================================== */
function SpecialtiesSection() {
  const specialties = [
    {
      title: "Ansiedad",
      description: "Cuando la preocupación, la tensión o el miedo empiezan a ocupar demasiado espacio.",
    },
    {
      title: "Psicología infanto-juvenil",
      description: "Acompañamiento psicológico para niños, adolescentes y familias.",
    },
    {
      title: "Autoestima",
      description: "Para trabajar la autoexigencia, la inseguridad o la forma en la que te relacionas contigo.",
    },
    {
      title: "Duelo",
      description: "Acompañamiento en pérdidas, despedidas y cambios vitales significativos.",
    },
    {
      title: "Crisis emocional",
      description: "Cuando sientes que algo te desborda y necesitas ordenar lo que está pasando.",
    },
    {
      title: "Pareja y familia",
      description: "Para trabajar dinámicas relacionales, comunicación y conflictos.",
    },
  ]

  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
          Áreas que podemos trabajar en terapia
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className={`group ${cardGlass}`}
            >
              <h3 className="mb-2 text-lg font-semibold text-[#26385B] group-hover:text-[#6F6D9E]">
                {specialty.title}
              </h3>
              <p className="text-[#5D6680]">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   PRICING SECTION
=========================================== */
function PricingSection() {
  const prices = [
    {
      title: "Primera sesión individual presencial",
      price: "40 €",
      description: "Un primer encuentro presencial para valorar tu situación con calma y empezar a orientarte.",
      footer: "Sesiones sucesivas: 65 €",
    },
    {
      title: "Primera sesión individual online",
      price: "40 €",
      description: "La misma primera toma de contacto, con la comodidad de hacerlo online desde donde estás.",
      footer: "Sesiones sucesivas: 60 €",
      highlighted: true,
    },
    {
      title: "Terapia de pareja o familia",
      price: "75 €",
      description: "Sesiones online o presenciales para trabajar la dinámica relacional con un enfoque claro y estructurado.",
      footer: "Mismo precio desde la primera sesión",
    },
  ]

  return (
    <section id="reserva" className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Precios claros desde el primer momento
          </h2>
          <p className="text-lg text-[#5D6680]">
            Antes de empezar, sabrás cuánto cuesta cada tipo de sesión.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prices.map((price) => (
            <div
              key={price.title}
              className={`relative overflow-hidden ${
                price.highlighted
                  ? `${cardDeepGlass} bg-[radial-gradient(circle_at_18%_12%,rgba(183,166,232,0.18),transparent_28%),linear-gradient(160deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] shadow-[0_30px_80px_rgba(27,41,71,0.40)]`
                  : `${cardSoft} backdrop-blur-xl`
              }`}
            >
              {price.highlighted && (
                <div className={`absolute right-4 top-4 ${miniGlass} px-3 py-1 text-xs font-semibold`}>
                  Popular
                </div>
              )}
              {price.highlighted && (
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D8E6A3]/20 blur-3xl" />
              )}
              <h3 className={`mb-4 text-lg font-semibold ${price.highlighted ? "text-white" : "text-[#26385B]"}`}>
                {price.title}
              </h3>
              <p className={`mb-4 text-4xl font-bold ${price.highlighted ? "text-white" : accentLavender}`}>
                {price.price}
              </p>
              <p className={`mb-6 leading-relaxed ${price.highlighted ? "text-white/90" : "text-[#5D6680]"}`}>
                {price.description}
              </p>
              <p className={`text-sm font-medium ${price.highlighted ? "text-white/80" : "text-[#5D6680]/80"}`}>
                {price.footer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
            data-event="click_whatsapp_daniela_landing"
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(216,230,163,0.26)] ${ctaGradient}`}
          >
            <MessageCircle className="h-6 w-6" />
            Reservar primera sesión
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   REVIEWS SECTION
=========================================== */
function ReviewsSection() {
  const reviews = [
    {
      initials: "M.G.",
      text: "Me hizo sentir escuchada, tranquila y acompañada desde el primer día. Muy agradecida por el trato cercano y profesional.",
      source: "Reseña verificada en Doctoralia",
    },
    {
      initials: "L.R.",
      text: "Creó un ambiente seguro donde resulta fácil abrirse y hablar. Después de varias sesiones noto una mejora real.",
      source: "Reseña verificada en Doctoralia",
    },
    {
      initials: "C.P.",
      text: "Muy empática con los niños; la experiencia con mi hijo fue muy positiva. Nos ayudó a toda la familia.",
      source: "Reseña verificada en Doctoralia",
    },
  ]

  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Opiniones de pacientes
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#B8CA82] text-[#7F9256]" />
              ))}
            </div>
            <span className="text-lg font-semibold text-[#26385B]">5/5</span>
            <span className="text-[#5D6680]">en Doctoralia</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className={cardGlass}>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B8CA82] text-[#7F9256]" />
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-[#26385B]">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold text-[#5D6680] ${bgLavenderSoft}`}>
                    {review.initials}
                  </div>
                  <span className="text-sm text-[#5D6680]">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctoralia Link */}
        <div className="mt-8 text-center">
          <a
            href="https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
            data-event="click_doctoralia_daniela_landing"
            className={`inline-flex items-center gap-2 font-medium hover:underline ${accentLavender}`}
          >
            Ver perfil en Doctoralia
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   GALLERY SECTION
=========================================== */
function GallerySection() {
  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Un espacio tranquilo para hablar con calma
          </h2>
          <p className="text-lg text-[#5D6680]">
            La consulta está pensada para que puedas sentirte en un entorno cómodo, discreto y profesional.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`${imageGlass} sm:col-span-2 lg:col-span-1 lg:row-span-2`}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GFlcl862ZrMZVDNkE5Dstf3AjlC4A.png"
              alt="Daniela López Meléndez, psicóloga en Madrid"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className={imageGlass}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-l04WYjzKlSlAEyW5zrUmhCGZyFb9UR.jpeg"
              alt="Consulta de psicología en Chamartín, Madrid"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div className={imageGlass}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-O5XyfjoKGpBQIYoQKYbYVF5wH1vMNT.jpeg"
              alt="Espacio de terapia cercano y tranquilo en Madrid"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   PROCESS SECTION
=========================================== */
function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Escribes por WhatsApp o solicitas una primera sesión",
    },
    {
      number: "2",
      title: "Daniela valora contigo qué necesitas",
    },
    {
      number: "3",
      title: "Elegís modalidad presencial u online",
    },
    {
      number: "4",
      title: "Empezáis un proceso adaptado a tu situación",
    },
  ]

  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
          Cómo empezar
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className={`${cardGlass} flex items-start gap-4 p-5`}>
                <div className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl font-bold text-[#26385B] ${iconGradient} shadow-[0_12px_24px_rgba(140,137,184,0.12)]`}>
                  {step.number}
                </div>
                <p className="pt-2 font-medium text-[#26385B]">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   FAQ SECTION
=========================================== */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Puedo escribir aunque no sepa explicar bien lo que me pasa?",
      answer: "Sí. No necesitas tenerlo todo ordenado antes de pedir ayuda. La primera sesión también sirve para entender qué está ocurriendo.",
    },
    {
      question: "¿Dónde está la consulta presencial?",
      answer: "En C. de Marcenado, 14, Chamartín, 28002 Madrid.",
    },
    {
      question: "¿También haces terapia online?",
      answer: "Sí. Puedes realizar sesiones online si te resulta más cómodo o no puedes acudir presencialmente.",
    },
    {
      question: "¿Trabajas con adolescentes?",
      answer: "Sí. Daniela trabaja con población infanto-juvenil, adolescentes y familias.",
    },
    {
      question: "¿Cuánto cuesta la primera sesión?",
      answer: "La primera sesión individual presencial u online cuesta 40 €.",
    },
    {
      question: "¿Aceptas aseguradoras?",
      answer: "Actualmente la atención es privada.",
    },
    {
      question: "¿Cómo puedo reservar?",
      answer: "Puedes escribir por WhatsApp o solicitar una primera sesión desde esta página.",
    },
  ]

  return (
    <section id="faq" className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className={`overflow-hidden ${cardGlass} p-0`}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 font-semibold text-[#26385B]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#6F6D9E]" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#5D6680]" />
                )}
              </button>
              {openIndex === index && (
                <div className="border-t border-[#E6E1D3]/70 px-5 pb-5 pt-3">
                  <p className="text-[#5D6680]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   FINAL CTA SECTION
=========================================== */
function FinalCTASection() {
  return (
    <section className={`${sectionCta} py-16 lg:py-24`}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-white sm:text-3xl lg:text-4xl text-balance">
          Dar el primer paso no significa tenerlo todo claro
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-white/90 text-pretty">
          Puedes escribirme y contarme brevemente qué está pasando. A partir de ahí valoramos cuál puede ser el siguiente paso.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
            data-event="click_whatsapp_daniela_landing"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#26385B] shadow-[0_18px_42px_rgba(0,0,0,0.20)] transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_24px_54px_rgba(0,0,0,0.24)]"
          >
            <MessageCircle className="h-6 w-6" />
            Hablar por WhatsApp
          </a>
          <a
            href="#reserva"
            data-event="click_reserva_daniela_landing"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            <Calendar className="h-6 w-6" />
            Reservar primera sesión
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   FOOTER
=========================================== */
function Footer() {
  return (
    <footer id="contacto" className={`${footerDeep} py-12`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Daniela López Meléndez</h3>
            <p className="mb-2 text-sm text-white/70">Psicóloga General Sanitaria</p>
            <p className="text-sm text-white/70">Colegiada M-41829</p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/34614412183"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +34 614 412 183
              </a>
              <a
                href="#instagram"
                data-event="click_instagram_daniela_landing"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @psico.danilopez
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Consulta</h4>
            <p className="text-sm text-white/70">C. de Marcenado, 14</p>
            <p className="text-sm text-white/70">Chamartín, 28002 Madrid</p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Enlaces</h4>
            <div className="space-y-2">
              <a
                href="#doctoralia"
                data-event="click_doctoralia_daniela_landing"
                className="block text-sm text-white/70 hover:text-white"
              >
                Perfil en Doctoralia
              </a>
              <a href="#reserva" className="block text-sm text-white/70 hover:text-white">
                Reservar cita
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Daniela López Meléndez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ===========================================
   FLOATING WHATSAPP BUTTON
=========================================== */
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
      data-event="click_whatsapp_daniela_landing"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(37,211,102,0.34)] transition-all hover:scale-110 hover:shadow-[0_20px_44px_rgba(37,211,102,0.42)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  )
}

/* ===========================================
   MOBILE STICKY CTA
=========================================== */
function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E2E4D8] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(10,77,104,0.16)] backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href="https://wa.me/34614412183?text=Hola%20Daniela%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20primera%20sesi%C3%B3n."
          data-event="click_whatsapp_daniela_landing"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="#reserva"
          data-event="click_reserva_daniela_landing"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1E2D4A] via-[#26385B] to-[#536341] shadow-[0_16px_34px_rgba(38,56,91,0.20)] py-3 font-semibold text-white"
        >
          <Calendar className="h-5 w-5" />
          Reservar
        </a>
      </div>
    </div>
  )
}

/* ===========================================
   MAIN PAGE COMPONENT
=========================================== */
export default function DanielaLandingPage() {
  return (
    <main className="min-h-screen pb-20 sm:pb-0">
      <Header />
      <HeroSection />
      <EmpathySection />
      <PersonalTrustSection />
      <LocationSection />
      <ModalitiesSection />
      <SpecialtiesSection />
      <PricingSection />
      <ReviewsSection />
      <GallerySection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  )
}
