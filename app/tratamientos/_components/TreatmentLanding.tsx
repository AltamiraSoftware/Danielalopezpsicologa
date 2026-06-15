import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Video,
} from "lucide-react"
import { ContactRequestForm } from "@/app/components/ContactRequestForm"
import { CookieSettingsButton } from "@/app/components/CookieSettingsButton"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "@/app/components/BrandIcons"
import { Header as SiteHeader } from "@/app/components/Header"
import { LocationSection } from "@/app/components/LocationSection"
import { ModalitySection } from "@/app/components/ModalitySection"
import type { Treatment } from "@/app/data/treatments"
import {
  address,
  danielaProfile,
  doctoraliaUrl,
  instagramUrl,
  mapQuery,
  whatsappUrl,
} from "@/app/data/site"

const sectionHero =
  "relative overflow-hidden bg-[radial-gradient(880px_420px_at_12%_8%,rgba(164,190,123,0.14)_0%,rgba(164,190,123,0)_58%),radial-gradient(780px_380px_at_88%_14%,rgba(183,166,232,0.20)_0%,rgba(183,166,232,0)_58%),linear-gradient(180deg,#FBF8FF_0%,#F4F0FB_46%,#F1F5EA_100%)]"
const sectionWarm =
  "relative overflow-hidden bg-[radial-gradient(820px_380px_at_8%_12%,rgba(183,166,232,0.055)_0%,rgba(183,166,232,0)_56%),radial-gradient(780px_360px_at_94%_88%,rgba(164,190,123,0.10)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#FFFEFA_0%,#FCFAF4_100%)]"
const sectionSage =
  "relative overflow-hidden bg-[radial-gradient(900px_420px_at_14%_12%,rgba(255,254,250,0.76)_0%,rgba(255,254,250,0)_56%),radial-gradient(820px_380px_at_88%_86%,rgba(164,190,123,0.28)_0%,rgba(164,190,123,0)_58%),linear-gradient(180deg,#F5F8EF_0%,#EAF1DE_100%)]"
const sectionCta =
  "relative overflow-hidden bg-[radial-gradient(760px_360px_at_14%_12%,rgba(164,190,123,0.20)_0%,rgba(164,190,123,0)_58%),radial-gradient(700px_340px_at_88%_18%,rgba(255,254,250,0.12)_0%,rgba(255,254,250,0)_56%),linear-gradient(135deg,#1E2D4A_0%,#26385B_62%,#536341_100%)]"
const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/24 p-6 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl"
const cardSoft =
  "rounded-[30px] border border-white/65 bg-white/36 p-6 shadow-[0_18px_46px_rgba(38,56,91,0.10)] backdrop-blur-xl"
const cardDeep =
  "rounded-[30px] border border-white/22 bg-[radial-gradient(circle_at_18%_12%,rgba(183,166,232,0.18),transparent_28%),linear-gradient(160deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] p-6 text-white shadow-[0_30px_80px_rgba(27,41,71,0.40)]"
const badgeGlass =
  "rounded-full border border-white/65 bg-white/44 px-3 py-2 text-sm font-semibold text-[#26385B] shadow-[0_8px_22px_rgba(38,56,91,0.10)] backdrop-blur-xl"
const ctaGradient =
  "bg-[linear-gradient(135deg,#1E2D4A_0%,#26385B_58%,#536341_100%)] text-white shadow-[0_18px_42px_rgba(38,56,91,0.24)]"

function treatmentWhatsappUrl(treatment: Treatment) {
  const message = `Hola Daniela, he visto tu página de ${treatment.navLabel.toLowerCase()} y me gustaría pedir información sobre una primera sesión.`

  return `https://wa.me/34614412183?text=${encodeURIComponent(message)}`
}

function HeroSection({ treatment }: { treatment: Treatment }) {
  const treatmentWhatsApp = treatmentWhatsappUrl(treatment)

  return (
    <section className={`${sectionHero} text-[#26385B]`}>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5D6680]">
          <Link href="/" className="transition hover:text-[#26385B]">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[#26385B]">{treatment.navLabel}</span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
          <div>
            <div className={`mb-5 inline-flex items-center gap-2 ${badgeGlass}`}>
              <CheckCircle2 className="h-4 w-4" />
              Psicóloga General Sanitaria colegiada {danielaProfile.collegiateNumber}
            </div>
            <h1 className="mb-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] text-[#26385B] text-balance sm:text-5xl lg:text-6xl">
              {treatment.heroTitle}
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-[#5D6680] text-pretty sm:text-xl">
              {treatment.heroSubtitle}
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={treatmentWhatsApp}
                data-event="click_whatsapp"
                data-location="treatment_hero"
                data-page={`tratamiento_${treatment.slug}`}
                data-channel="whatsapp"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all hover:-translate-y-0.5 ${ctaGradient}`}
              >
                <WhatsAppLogo className="h-5 w-5" />
                Consultar disponibilidad
              </a>
              <a
                href="#reserva"
                data-event="click_contact_form"
                data-location="treatment_hero"
                data-page={`tratamiento_${treatment.slug}`}
                data-channel="internal_cta"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B7A6E8]/25 bg-white/48 px-6 py-4 text-base font-semibold text-[#26385B] shadow-[0_14px_34px_rgba(38,56,91,0.10)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/64"
              >
                <Send className="h-5 w-5" />
                Dejar mis datos
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {treatment.heroBadges.map((badge) => (
                <span key={badge} className={badgeGlass}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/18 shadow-[0_26px_72px_rgba(38,56,91,0.16)]">
              <Image
                src={danielaProfile.image}
                alt={`${danielaProfile.name}, ${danielaProfile.role} en Madrid`}
                width={900}
                height={1125}
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/40 bg-white/70 p-4 shadow-[0_18px_40px_rgba(38,56,91,0.14)] backdrop-blur-xl">
                <p className="font-serif text-2xl font-semibold text-[#26385B]">{danielaProfile.name}</p>
                <p className="mt-1 font-semibold text-[#5D6680]">{danielaProfile.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection({ treatment }: { treatment: Treatment }) {
  return (
    <section className={`${sectionWarm} py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <article className={cardGlass}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7F9256]">
            Qué es y cuándo puede ayudarte
          </p>
          <h2 className="mb-5 font-serif text-2xl font-semibold text-[#26385B] text-balance sm:text-3xl lg:text-4xl">
            {treatment.introTitle}
          </h2>
          <p className="text-lg leading-relaxed text-[#5D6680] text-pretty">{treatment.introBody}</p>

          <div className="mt-8 grid gap-3">
            {treatment.introPoints.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/65 bg-white/38 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7F9256]" />
                <p className="leading-relaxed text-[#26385B]">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className={cardSoft}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7F9256]">
            Señales frecuentes
          </p>
          <h2 className="mb-5 font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl">
            Síntomas que suelen aparecer
          </h2>
          <div className="grid gap-3">
            {treatment.symptoms.map((symptom) => (
              <div key={symptom} className="flex gap-3 rounded-2xl bg-white/44 p-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#9B8BD3]" />
                <p className="text-sm leading-relaxed text-[#5D6680]">{symptom}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

function ApproachSection({ treatment }: { treatment: Treatment }) {
  return (
    <section className={`${sectionCta} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#B8CA82]">
            Enfoque terapéutico
          </p>
          <h2 className="font-serif text-2xl font-semibold text-white text-balance sm:text-3xl lg:text-4xl">
            Cómo trabaja Daniela este proceso
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {treatment.approach.map((item, index) => (
              <article key={item.title} className="rounded-[28px] border border-white/16 bg-white/10 p-5 text-white shadow-[0_18px_46px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-sm font-bold text-[#D8E6A3]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/78">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-[30px] border border-white/18 bg-white/10 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B8CA82]">
              Modalidad
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
              Presencial en Chamartín y online
            </h3>
            <div className="mt-8 grid gap-5">
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
                  <MapPin className="h-5 w-5 text-[#D8E6A3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sesiones presenciales</h4>
                  <p className="mt-2 leading-relaxed text-white/78">{treatment.modality.presencial}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
                  <Video className="h-5 w-5 text-[#D8E6A3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sesiones online</h4>
                  <p className="mt-2 leading-relaxed text-white/78">{treatment.modality.online}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ProfessionalSection({ treatment }: { treatment: Treatment }) {
  return (
    <section className={`${sectionSage} py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/30 shadow-[0_24px_60px_rgba(38,56,91,0.14)]">
          <Image
            src={danielaProfile.cardImage}
            alt={`${danielaProfile.name} en su consulta de psicología en Chamartín`}
            width={1600}
            height={2000}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full object-cover object-center"
          />
        </div>

        <article>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7F9256]">
            Profesional
          </p>
          <h2 className="mb-5 font-serif text-2xl font-semibold text-[#26385B] text-balance sm:text-3xl lg:text-4xl">
            Un proceso con {danielaProfile.name}
          </h2>
          <p className="text-lg leading-relaxed text-[#5D6680] text-pretty">{treatment.professionalBlurb}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {danielaProfile.credentials.map((credential) => (
              <div key={credential} className="flex gap-3 rounded-2xl border border-white/65 bg-white/36 p-4 shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7F9256]" />
                <span className="font-semibold text-[#26385B]">{credential}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {treatment.professionalHighlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-white/65 bg-white/30 p-4 leading-relaxed text-[#5D6680] shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
                {highlight}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function ContactSection({ treatment }: { treatment: Treatment }) {
  const process = [
    {
      icon: MessageCircle,
      title: "Primer contacto",
      description: "Puedes escribir por WhatsApp o dejar tus datos en el formulario.",
    },
    {
      icon: CalendarDays,
      title: "Orientación inicial",
      description: "Daniela revisa contigo qué necesitas y resuelve dudas antes de empezar.",
    },
    {
      icon: HeartHandshake,
      title: "Primera sesión",
      description: "Si encaja, acordáis modalidad presencial u online y el primer encuentro.",
    },
  ]

  return (
    <section id="reserva" className={`${sectionWarm} scroll-mt-24 py-16 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <ContactRequestForm compact page={`tratamiento_${treatment.slug}`} source={`tratamiento_${treatment.slug}`} />

        <aside className={cardDeep}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8E6A3]">
            Primer paso
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
            Reserva o consulta una primera sesión
          </h2>
          <p className="mt-4 leading-relaxed text-white/82">
            No necesitas tenerlo todo claro para escribir. Puedes contar brevemente qué ocurre y Daniela te orientará sobre si este proceso encaja contigo.
          </p>

          <div className="mt-8 grid gap-4">
            {process.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-white/12 bg-white/10 p-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <item.icon className="h-5 w-5 text-[#D8E6A3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/74">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Tratamientos relacionados
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {treatment.relatedTreatments.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white/86 transition hover:bg-white/16 hover:text-white"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function FaqSection({ treatment }: { treatment: Treatment }) {
  return (
    <section id="faq" className={`${sectionSage} scroll-mt-24 py-16 lg:py-24`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7F9256]">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-2xl font-semibold text-[#26385B] sm:text-3xl lg:text-4xl">
            Dudas habituales sobre {treatment.navLabel.toLowerCase()}
          </h2>
        </div>
        <div className="grid gap-4">
          {treatment.faqs.map((item) => (
            <details key={item.question} className={`${cardGlass} group`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#26385B]">
                <span>{item.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/46 shadow-[0_12px_24px_rgba(38,56,91,0.10)] transition group-open:rotate-45">
                  <Sparkles className="h-5 w-5 text-[#9B8BD3]" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[#5D6680]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationStrip() {
  return (
    <section className={`${sectionWarm} py-12`}>
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="flex gap-3 rounded-[24px] border border-white/65 bg-white/30 p-5 shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9B8BD3]" />
          <div>
            <p className="font-semibold text-[#26385B]">Consulta en Chamartín</p>
            <p className="mt-1 text-sm leading-relaxed text-[#5D6680]">{address}</p>
          </div>
        </div>
        <div className="flex gap-3 rounded-[24px] border border-white/65 bg-white/30 p-5 shadow-[0_14px_34px_rgba(38,56,91,0.08)]">
          <Video className="mt-0.5 h-5 w-5 shrink-0 text-[#9B8BD3]" />
          <div>
            <p className="font-semibold text-[#26385B]">Terapia online</p>
            <p className="mt-1 text-sm leading-relaxed text-[#5D6680]">Sesiones por videollamada cuando necesitas más flexibilidad.</p>
          </div>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 rounded-[24px] border border-white/65 bg-white/30 p-5 shadow-[0_14px_34px_rgba(38,56,91,0.08)] transition hover:-translate-y-0.5 hover:bg-white/44"
        >
          <Home className="mt-0.5 h-5 w-5 shrink-0 text-[#7F9256]" />
          <div>
            <p className="font-semibold text-[#26385B]">Cómo llegar</p>
            <p className="mt-1 text-sm leading-relaxed text-[#5D6680]">Abrir ubicación en Google Maps.</p>
          </div>
        </a>
      </div>
    </section>
  )
}

function FinalCTASection({ treatment }: { treatment: Treatment }) {
  return (
    <section className={`${sectionCta} py-16 lg:py-24`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-white text-balance sm:text-3xl lg:text-4xl">
          Dar el primer paso no significa tenerlo todo claro
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-white/90 text-pretty">
          Puedes escribir a Daniela y contar brevemente qué está pasando. A partir de ahí valoráis cuál puede ser el siguiente paso.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={treatmentWhatsappUrl(treatment)}
            data-event="click_whatsapp"
            data-location="treatment_final_cta"
            data-page={`tratamiento_${treatment.slug}`}
            data-channel="whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#26385B] shadow-[0_18px_42px_rgba(0,0,0,0.20)] transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            <WhatsAppLogo className="h-6 w-6" />
            Pedir primera sesión
          </a>
          <a
            href="#reserva"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            Dejar mis datos
          </a>
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
          <h2 className="mb-4 text-lg font-semibold text-white">{danielaProfile.name}</h2>
          <p>{danielaProfile.role}</p>
          <p>Colegiada {danielaProfile.collegiateNumber}</p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Contacto</h2>
          <a href="tel:+34614412183" className="mb-3 flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" />
            {danielaProfile.phone}
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="footer" data-page="treatment" data-channel="instagram" className="flex items-center gap-2 hover:text-white">
            <InstagramLogo className="h-4 w-4" />
            @psico.danilopez
          </a>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Consulta</h2>
          <p>C. de Marcenado, 14, Despacho 2</p>
          <p>Chamartín, 28002 Madrid</p>
          <p className="mt-2 text-white/55">Consulta independiente dentro del centro Psicotep</p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-white">Enlaces</h2>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="footer" data-page="treatment" data-channel="doctoralia" className="mb-2 block hover:text-white">Doctoralia</a>
          <Link href="/" className="mb-2 block hover:text-white">Inicio</Link>
          <Link href="/quien-soy" className="mb-2 block hover:text-white">Quién soy</Link>
          <Link href="/contacto" className="mb-2 block hover:text-white">Contacto</Link>
          <Link href="/politica-privacidad" className="mb-2 block hover:text-white">Política de privacidad</Link>
          <Link href="/politica-cookies" className="mb-2 block hover:text-white">Política de cookies</Link>
          <Link href="/aviso-legal" className="mb-2 block hover:text-white">Aviso legal</Link>
          <CookieSettingsButton className="block text-left hover:text-white" />
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp({ treatment }: { treatment: Treatment }) {
  return (
    <a
      href={treatmentWhatsappUrl(treatment)}
      data-event="click_whatsapp"
      data-location="treatment_floating"
      data-page={`tratamiento_${treatment.slug}`}
      data-channel="whatsapp"
      className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.30)] transition-all hover:-translate-y-1 hover:scale-105 hover:bg-[#22C55E] sm:flex"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppLogo className="h-10 w-10" />
    </a>
  )
}

function MobileStickyBar({ treatment }: { treatment: Treatment }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E2E4D8] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(38,56,91,0.16)] backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={treatmentWhatsappUrl(treatment)}
          data-event="click_whatsapp"
          data-location="treatment_sticky_mobile"
          data-page={`tratamiento_${treatment.slug}`}
          data-channel="whatsapp"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white"
        >
          <WhatsAppLogo className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="#reserva"
          data-event="click_contact_form"
          data-location="treatment_sticky_mobile"
          data-page={`tratamiento_${treatment.slug}`}
          data-channel="internal_cta"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1E2D4A] via-[#26385B] to-[#536341] py-3 font-semibold text-white shadow-[0_16px_34px_rgba(38,56,91,0.20)]"
        >
          Primera sesión
        </a>
      </div>
    </div>
  )
}

export function TreatmentLanding({ treatment }: { treatment: Treatment }) {
  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} doctoraliaUrl={doctoraliaUrl} instagramUrl={instagramUrl} />
      <main className="min-h-screen pb-20 sm:pb-0">
        <HeroSection treatment={treatment} />
        <IntroSection treatment={treatment} />
        <ContactSection treatment={treatment} />
        <ApproachSection treatment={treatment} />
        <ProfessionalSection treatment={treatment} />
        <ModalitySection />
        <LocationSection page={`tratamiento_${treatment.slug}`} whatsappHref={treatmentWhatsappUrl(treatment)} />
        <FaqSection treatment={treatment} />
        <FinalCTASection treatment={treatment} />
      </main>
      <Footer />
      <FloatingWhatsApp treatment={treatment} />
      <MobileStickyBar treatment={treatment} />
    </>
  )
}
