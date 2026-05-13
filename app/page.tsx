import Image from "next/image"
import {
  Brain,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Heart,
  Home,
  MapPin,
  Phone,
  Sparkles,
  UserCheck,
  Users,
  Video,
} from "lucide-react"
import { ContactRequestForm } from "./components/ContactRequestForm"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "./components/BrandIcons"
import { FAQAccordion } from "./components/FAQAccordion"
import { HashLink } from "./components/HashLink"
import { Header as SiteHeader } from "./components/Header"
import { SpecialtyCards } from "./components/SpecialtyCards"
import { CookieSettingsButton } from "./components/CookieSettingsButton"
import { GoogleMapPreview } from "./components/GoogleMapPreview"
import { faqs } from "./data/faq"

const whatsappMessage =
  "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`
const doctoraliaUrl = "https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
const instagramUrl = "https://www.instagram.com/psico.danilopez/"
const address = "C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid"
const mapQuery = encodeURIComponent("C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid")

const sectionHero =
  "relative overflow-hidden bg-[radial-gradient(880px_420px_at_12%_8%,rgba(164,190,123,0.14)_0%,rgba(164,190,123,0)_58%),radial-gradient(780px_380px_at_88%_14%,rgba(183,166,232,0.20)_0%,rgba(183,166,232,0)_58%),linear-gradient(180deg,#FBF8FF_0%,#F4F0FB_46%,#F1F5EA_100%)]"
const sectionWarm =
  "relative overflow-hidden bg-[radial-gradient(820px_380px_at_8%_12%,rgba(183,166,232,0.055)_0%,rgba(183,166,232,0)_56%),radial-gradient(780px_360px_at_94%_88%,rgba(164,190,123,0.10)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#FFFEFA_0%,#FCFAF4_100%)]"
const sectionSage =
  "relative overflow-hidden bg-[radial-gradient(900px_420px_at_14%_12%,rgba(255,254,250,0.76)_0%,rgba(255,254,250,0)_56%),radial-gradient(820px_380px_at_88%_86%,rgba(164,190,123,0.28)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#F5F8EF_0%,#EAF1DE_100%)]"
const sectionCta =
  "relative overflow-hidden bg-[radial-gradient(760px_360px_at_14%_12%,rgba(164,190,123,0.20)_0%,rgba(164,190,123,0)_58%),radial-gradient(700px_340px_at_88%_18%,rgba(255,254,250,0.12)_0%,rgba(255,254,250,0)_56%),linear-gradient(135deg,#1E2D4A_0%,#26385B_62%,#536341_100%)]"
const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/24 hover:shadow-[0_30px_76px_rgba(140,137,184,0.20)]"
const cardSoft =
  "rounded-[30px] border border-white/65 bg-white/30 p-6 shadow-[0_18px_46px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/80 hover:bg-white/34 hover:shadow-[0_28px_68px_rgba(140,137,184,0.18)]"
const cardDeep =
  "rounded-[30px] border border-white/22 bg-[radial-gradient(circle_at_18%_12%,rgba(183,166,232,0.18),transparent_28%),linear-gradient(160deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] p-6 text-white shadow-[0_30px_80px_rgba(27,41,71,0.40)]"
const badgeGlass =
  "rounded-full border border-white/65 bg-white/44 px-3 py-2 text-sm font-semibold text-[#26385B] shadow-[0_8px_22px_rgba(38,56,91,0.10)] backdrop-blur-xl"
const ctaGradient =
  "bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] text-white shadow-[0_18px_42px_rgba(38,56,91,0.24)]"
const iconBox =
  "inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,254,250,0.78)_0%,rgba(216,230,163,0.34)_72%,rgba(183,166,232,0.10)_100%)] shadow-[0_12px_24px_rgba(38,56,91,0.10)]"

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(135deg,rgba(27,41,71,0.96)_0%,rgba(38,56,91,0.94)_56%,rgba(47,63,104,0.92)_100%)] shadow-[0_14px_34px_rgba(27,41,71,0.20)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <Image src="/brand-icon.png" alt="" width={44} height={44} className="shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block font-serif text-xl font-semibold leading-none text-white sm:text-2xl">
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
        <div className="flex shrink-0 items-center gap-2">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="header" data-page="landing" data-channel="instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20" aria-label="Instagram de Daniela López">
            <InstagramLogo className="h-6 w-6" />
          </a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="header" data-page="landing" data-channel="doctoralia" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white shadow-[0_12px_28px_rgba(27,41,71,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 sm:inline-flex" aria-label="Perfil de Doctoralia de Daniela López">
            <DoctoraliaLogo className="h-6 w-6" />
          </a>
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="header" data-page="landing" data-channel="whatsapp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20BF5A]" aria-label="WhatsApp de Daniela López">
            <WhatsAppLogo className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className={`${sectionHero} text-[#26385B]`}>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className={`mb-5 inline-flex items-center gap-2 ${badgeGlass}`}>
              <CheckCircle2 className="h-4 w-4" />
              Psicóloga General Sanitaria colegiada M-41829
            </div>
            <h1 className="mb-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] text-[#26385B] sm:text-5xl lg:text-6xl text-balance">
              Psicóloga sanitaria en Madrid para ansiedad, autoestima y terapia infanto-juvenil
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-[#5D6680] sm:text-xl text-pretty">
              Soy Daniela López Meléndez, Psicóloga General Sanitaria colegiada M-41829. Atiendo en consulta presencial en Chamartín y online, con una primera sesión desde 40 € para valorar tu caso y orientarte con calma.
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href={whatsappUrl} data-event="click_whatsapp" data-location="hero" data-page="landing" data-channel="whatsapp" className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all hover:-translate-y-0.5 ${ctaGradient}`}>
                <WhatsAppLogo className="h-5 w-5" />
                Pedir primera sesión por WhatsApp
              </a>
              <HashLink targetId="reserva" data-event="click_prices" data-location="hero" data-page="landing" data-channel="internal_cta" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B7A6E8]/25 bg-white/48 px-6 py-4 text-base font-semibold text-[#26385B] shadow-[0_14px_34px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/64">
                <Calendar className="h-5 w-5" />
                Ver precios
              </HashLink>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Primera sesión desde 40 €", "Consulta presencial en Chamartín y online", "Consulta independiente dentro del centro Psicotep"].map((badge) => (
                <span key={badge} className={badgeGlass}>{badge}</span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/18 shadow-[0_26px_72px_rgba(38,56,91,0.16)]">
              <Image
                src="/daniela-lopez-psicologa-sanitaria-madrid.webp"
                alt="Daniela López Meléndez, psicóloga sanitaria en Madrid"
                width={900}
                height={1125}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
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
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
            Puede ayudarte si estás viviendo...
          </h2>
          <p className="text-lg leading-relaxed text-[#5D6680] text-pretty">
            La primera sesión también sirve para ordenar lo que estás viviendo y valorar cómo puedo ayudarte.
          </p>
        </div>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className={`${cardGlass} flex h-full min-h-[190px] flex-col border-[#B7A6E8]/45 text-center`}>
              <div className={`mx-auto mb-4 h-12 w-12 shrink-0 ${iconBox}`}>
                <problem.icon className="block h-6 w-6 text-[#9B8BD3]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#26385B]">{problem.title}</h3>
              <p className="text-[#5D6680]">{problem.description}</p>
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
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="mb-5 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Un primer paso claro, cercano y sin presión
          </h2>
          <p className="text-lg leading-relaxed text-[#5D6680]">
            Daniela trabaja desde un enfoque integrador, adaptando cada proceso a la persona y al momento en el que se encuentra. La primera sesión sirve para entender qué está pasando, resolver dudas y valorar cómo empezar.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/65 bg-white/30 p-4 shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7F9256]" />
              <span className="font-semibold text-[#26385B]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
            Consulta presencial en Chamartín y terapia online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#5D6680] text-pretty">
            Puedes acudir a consulta presencial en {address}. Es una consulta independiente dentro del centro Psicotep. También puedes realizar sesiones online si necesitas más flexibilidad.
          </p>
          <div className={`${cardGlass} mb-6`}>
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 shrink-0 ${iconBox}`}>
                <MapPin className="block h-6 w-6 text-[#9B8BD3]" />
              </div>
              <div>
                <p className="font-semibold text-[#26385B]">Dirección</p>
                <p className="text-[#5D6680]">C. de Marcenado, 14, Despacho 2</p>
                <p className="text-[#5D6680]">Chamartín, 28002 Madrid</p>
                <p className="text-sm font-medium text-[#5D6680]/80">Consulta independiente dentro del centro Psicotep</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" data-event="click_google_maps" data-location="location" data-page="landing" data-channel="maps" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8CA82] to-[#7F9256] px-6 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(127,146,86,0.24)] transition-all hover:opacity-90">
              <MapPin className="h-5 w-5" />
              Cómo llegar
            </a>
            <a href={whatsappUrl} data-event="click_whatsapp" data-location="location" data-page="landing" data-channel="whatsapp" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#7F9256] px-6 py-3 font-semibold text-[#7F9256] transition-all hover:bg-[#B8CA82]/18">
              <WhatsAppLogo className="h-5 w-5" />
              Hablar por WhatsApp
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
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
          Elige la modalidad que mejor encaje contigo
        </h2>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((modality) => (
            <article key={modality.title} className={`${cardGlass} flex h-full min-h-[245px] flex-col items-center p-8 text-center`} style={{ borderColor: "rgba(183, 166, 232, 0.45)" }}>
              <div className={`mx-auto mb-6 h-14 w-14 shrink-0 ${iconBox}`}>
                <modality.icon className="block h-7 w-7 text-[#9B8BD3]" />
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-[#26385B]">{modality.title}</h3>
              <p className="text-center leading-relaxed text-[#5D6680]">{modality.description}</p>
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
    <section id="reserva" className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Precios claros desde el primer momento
          </h2>
          <p className="text-lg text-[#5D6680]">Primera sesión desde 40 €. Antes de empezar, sabrás cuánto cuesta cada tipo de sesión.</p>
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prices.map((price, index) => (
            <article key={price.title} className={`relative flex h-full min-h-[260px] flex-col overflow-hidden ${index === 0 ? cardDeep : cardSoft}`}>
              {index === 0 && <div className="absolute right-4 top-4 rounded-2xl border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">Primera sesión</div>}
              <h3 className={`mb-4 pr-20 text-lg font-semibold ${index === 0 ? "text-white" : "text-[#26385B]"}`}>{price.title}</h3>
              <p className={`mb-4 text-4xl font-bold ${index === 0 ? "text-white" : "text-[#9B8BD3]"}`}>{price.price}</p>
              <p className={`mb-6 leading-relaxed ${index === 0 ? "text-white/90" : "text-[#5D6680]"}`}>{price.description}</p>
              <p className={`mt-auto text-sm font-medium ${index === 0 ? "text-white/80" : "text-[#5D6680]/80"}`}>{price.footer}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[30px] border border-white/65 bg-white/28 p-6 shadow-[0_18px_46px_rgba(38,56,91,0.10)] backdrop-blur-xl">
          <h3 className="mb-3 font-serif text-2xl font-semibold text-[#26385B]">Supervisión de casos</h3>
          <p className="mb-4 leading-relaxed text-[#5D6680]">
            Espacio seguro, respetuoso y colaborativo para estudiantes y profesionales de la psicología que se sienten estancados con un caso y necesitan una mirada externa.
          </p>
          <div className="grid gap-3 text-sm font-medium text-[#26385B] sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Reflexionar sobre casos clínicos",
              "Resolver dudas teóricas y prácticas",
              "Trabajar bloqueos terapéuticos",
              "Revisar formulación y objetivos",
              "Cuidar el rol profesional",
            ].map((item) => (
              <div key={item} className="flex gap-2 rounded-2xl bg-white/40 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7F9256]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="pricing" data-page="landing" data-channel="whatsapp" className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold transition-all hover:-translate-y-0.5 ${ctaGradient}`}>
            <WhatsAppLogo className="h-6 w-6" />
            Pedir primera sesión por WhatsApp
          </a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="pricing" data-page="landing" data-channel="doctoralia" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B7A6E8]/25 bg-white/48 px-8 py-4 text-lg font-semibold text-[#26385B] shadow-[0_14px_34px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/64">
            <DoctoraliaLogo className="h-6 w-6" />
            Ver perfil en Doctoralia
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const reviews = [
    {
      initials: "P.L",
      date: "14 de abril de 2026",
      verification: "Número de teléfono verificado",
      text: "Daniela es maravillosa, me he sentido muy escuchada y vista. Siento que he mejorado mucho desde que la veo y no puedo estar más contenta",
    },
    {
      initials: "R M",
      date: "9 de abril de 2026",
      verification: "Cita verificada",
      text: "Me ha encantado excelente profesional tiene mucha empatía y llegas a conectar muy fácilmente de verdad que la recomiendo 100% Es un 10 de 10",
    },
    {
      initials: "R.S.",
      date: "8 de abril de 2026",
      verification: "Número de teléfono verificado",
      text: "Me ayudó a parar y a entender mis emociones. Gracias a Daniela he conseguido comprender qué me pasaba y aprender a aceptar mis emociones, en lugar de intentar controlarlas. Me he sentido muy acompañada en el proceso, así que la recomiendo al 100% si estáis buscando una psicóloga cercana, empática y profesional.",
    },
  ]

  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">Puedes consultar su perfil profesional antes de contactar</h2>
          <p className="text-lg leading-relaxed text-[#5D6680]">
          En Doctoralia puedes ver información profesional y opiniones de pacientes antes de pedir una primera sesión.
          </p>
        </div>
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.initials} className={`${cardGlass} flex h-full flex-col bg-white/26`}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B7A6E8]/18 font-bold text-[#6F6D9E]">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-[#26385B]">{review.initials}</p>
                  <p className="text-xs font-semibold text-[#5D6680]">{review.verification}</p>
                </div>
              </div>
              <p className="mb-5 grow leading-relaxed text-[#26385B]">“{review.text}”</p>
              <p className="text-sm font-semibold text-[#5D6680]">{review.date}</p>
              <p className="mt-1 text-xs text-[#5D6680]/80">Consulta online · Consulta de Psicología Sanitaria</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="social_proof" data-page="landing" data-channel="doctoralia" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B7A6E8]/25 bg-white/48 px-6 py-4 font-bold text-[#26385B] shadow-[0_14px_34px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/64">
          <DoctoraliaLogo className="h-6 w-6" />
          Ver perfil en Doctoralia
          <ExternalLink className="h-4 w-4" />
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
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
          Cómo empezar
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step} className={`${cardGlass} flex items-start gap-4 p-5`}>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/70 font-bold text-[#26385B] shadow-[0_12px_24px_rgba(38,56,91,0.10)]">
                {index + 1}
              </span>
              <p className="pt-2 font-semibold text-[#26385B]">{step}</p>
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
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
          Antes de escribir, puede que te preguntes...
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {objections.map((item) => (
            <article key={item.title} className={`${cardGlass} h-full`}>
              <h3 className="mb-3 text-lg font-semibold text-[#26385B]">{item.title}</h3>
              <p className="leading-relaxed text-[#5D6680]">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="objections" data-page="landing" data-channel="whatsapp" className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition-all hover:-translate-y-0.5 ${ctaGradient}`}>
            <WhatsAppLogo className="h-5 w-5" />
            Pedir primera sesión por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className={`${sectionCta} py-16 lg:py-24`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-white sm:text-3xl lg:text-4xl text-balance">
          Dar el primer paso no significa tenerlo todo claro
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-white/90 text-pretty">
          Puedes escribirme y contarme brevemente qué está pasando. A partir de ahí valoramos cuál puede ser el siguiente paso.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={whatsappUrl} data-event="click_whatsapp" data-location="final_cta" data-page="landing" data-channel="whatsapp" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#26385B] shadow-[0_18px_42px_rgba(0,0,0,0.20)] transition-all hover:-translate-y-0.5 hover:bg-white/90">
            <WhatsAppLogo className="h-6 w-6" />
            Pedir primera sesión por WhatsApp
          </a>
          <HashLink targetId="reserva" data-event="click_prices" data-location="final_cta" data-page="landing" data-channel="internal_cta" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10">
            Ver precios
          </HashLink>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#1B2947_0%,#26385B_56%,#2F3F68_100%)] py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm text-white/70 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Daniela López Meléndez</h2>
          <p>Psicóloga General Sanitaria</p>
          <p>Colegiada M-41829</p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Contacto</h2>
          <a href="tel:+34614412183" className="mb-3 flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" />+34 614 412 183</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="footer" data-page="landing" data-channel="instagram" className="flex items-center gap-2 hover:text-white"><InstagramLogo className="h-4 w-4" />@psico.danilopez</a>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Consulta</h2>
          <p>C. de Marcenado, 14, Despacho 2</p>
          <p>Chamartín, 28002 Madrid</p>
          <p className="mt-2 text-white/55">Consulta independiente dentro del centro Psicotep</p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Enlaces</h2>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="footer" data-page="landing" data-channel="doctoralia" className="mb-2 block hover:text-white">Doctoralia</a>
          <a href="/quien-soy" className="mb-2 block hover:text-white">Quién soy</a>
          <a href="/contacto" className="mb-2 block hover:text-white">Contacto</a>
          <HashLink targetId="reserva" data-event="click_prices" data-location="footer" data-page="landing" data-channel="internal_cta" className="mb-2 block text-left hover:text-white">Precios</HashLink>
          <a href="/politica-privacidad" className="mb-2 block hover:text-white">Política de privacidad</a>
          <a href="/politica-cookies" className="mb-2 block hover:text-white">Política de cookies</a>
          <a href="/aviso-legal" className="mb-2 block hover:text-white">Aviso legal</a>
          <CookieSettingsButton className="block text-left hover:text-white" />
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} data-event="click_whatsapp" data-location="floating" data-page="landing" data-channel="whatsapp" className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.30)] transition-all hover:-translate-y-1 hover:scale-105 hover:bg-[#22C55E] sm:flex" aria-label="Contactar por WhatsApp">
      <WhatsAppLogo className="h-10 w-10" />
    </a>
  )
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E2E4D8] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(38,56,91,0.16)] backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={whatsappUrl}
          data-event="click_whatsapp"
          data-location="sticky_mobile"
          data-page="landing"
          data-channel="whatsapp"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"
        >
          <WhatsAppLogo className="h-5 w-5" />
          WhatsApp
        </a>
        <HashLink
          targetId="reserva"
          data-event="click_prices"
          data-location="sticky_mobile"
          data-page="landing"
          data-channel="internal_cta"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1E2D4A] via-[#26385B] to-[#536341] py-3 font-semibold text-white shadow-[0_16px_34px_rgba(38,56,91,0.20)]"
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
    telephone: "+34614412183",
    url: "https://danielalopezpsicologia.es",
    sameAs: [instagramUrl, doctoraliaUrl],
  }
  const business = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Daniela López Meléndez Psicología",
    medicalSpecialty: "Psychology",
    priceRange: "40€-75€",
    telephone: "+34614412183",
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
        <EmpathySection />
        <ProfessionalTrustSection />
        <LocationSection />
        <ModalitiesSection />
        <section className={`${sectionWarm} py-16 lg:py-24`} style={{ overflow: "visible" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl text-balance">
              Áreas que podemos trabajar en terapia
            </h2>
            <SpecialtyCards />
          </div>
        </section>
        <PricingSection />
        <TrustSection />
        <HowToStartSection />
        <ObjectionsSection />
        <section id="contacto" className={`${sectionSage} py-16 lg:py-24`}>
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">WhatsApp es la vía más directa</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#5D6680]">
                Si quieres pedir información sobre una primera sesión, el canal principal es WhatsApp. El formulario queda como alternativa secundaria.
              </p>
              <div className="mt-8 overflow-hidden rounded-[30px] border border-white/70 bg-white/30 shadow-[0_24px_60px_rgba(38,56,91,0.14)]">
                <Image
                  src="/consulta-psicologia-chamartin-daniela-lopez.webp"
                  alt="Daniela López Meléndez en su despacho de psicología en Chamartín"
                  width={1600}
                  height={2000}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              <a href={whatsappUrl} data-event="click_whatsapp" data-location="contact_block" data-page="landing" data-channel="whatsapp" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition-all hover:-translate-y-0.5 ${ctaGradient}`}>
                <WhatsAppLogo className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>
            <ContactRequestForm compact />
          </div>
        </section>
        <section id="faq" className={`${sectionSage} py-16 lg:py-24`}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">Preguntas frecuentes</h2>
            <FAQAccordion />
          </div>
        </section>
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  )
}
