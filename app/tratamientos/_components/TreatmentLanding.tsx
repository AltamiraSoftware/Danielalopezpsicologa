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
 "section-lavanda relative"
const sectionWarm =
 "section-lavanda relative border-t border-linea-fuerte"
const sectionSage =
 "section-salvia relative border-t border-linea-fuerte"
const sectionCta =
 "section-cta relative border-t border-linea-fuerte text-crema"
const cardGlass =
 "rounded-lg border border-linea bg-white p-6 shadow-1"
const cardSoft =
 "rounded-lg border border-linea bg-white p-6 shadow-1 "
const cardDeep =
 "rounded-lg border border-marino bg-marino p-6 text-crema shadow-2"
const badgeGlass =
 "rounded-full border border-linea bg-white px-3 py-2 font-brand text-sm font-medium text-marino shadow-1"

function treatmentWhatsappUrl(treatment: Treatment) {
 const message = `Hola Daniela, he visto tu página de ${treatment.navLabel.toLowerCase()} y me gustaría pedir información sobre una primera sesión.`

 return `https://wa.me/34614412183?text=${encodeURIComponent(message)}`
}

function HeroSection({ treatment }: { treatment: Treatment }) {
 const treatmentWhatsApp = treatmentWhatsappUrl(treatment)

 return (
 <section className={`${sectionHero} text-marino`}>
 <div className="mx-auto max-w-[1120px] px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
 <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-texto-2">
 <Link href="/" className="transition hover:text-marino">
 Inicio
 </Link>
 <span>/</span>
 <span className="text-marino">{treatment.navLabel}</span>
 </div>

 <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
 <div>
 <div className={`mb-5 inline-flex items-center gap-2 ${badgeGlass}`}>
 <CheckCircle2 className="h-4 w-4" />
 Psicóloga General Sanitaria colegiada {danielaProfile.collegiateNumber}
 </div>
 <h1 className="mb-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] text-marino text-balance sm:text-5xl lg:text-6xl">
 {treatment.heroTitle}
 </h1>
 <p className="mb-7 max-w-2xl text-lg leading-relaxed text-texto-2 text-pretty sm:text-xl">
 {treatment.heroSubtitle}
 </p>
 <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
 <a
 href={treatmentWhatsApp}
 data-event="click_whatsapp"
 data-location="treatment_hero"
 data-page={`tratamiento_${treatment.slug}`}
 data-channel="whatsapp"
 className="btn btn--whatsapp"
 >
 <WhatsAppLogo className="h-5 w-5" />
 Pedir primera sesión
 </a>
 <a
 href="#reserva"
 data-event="click_contact_form"
 data-location="treatment_hero"
 data-page={`tratamiento_${treatment.slug}`}
 data-channel="internal_cta"
 className="btn btn--secondary"
 >
 <Send className="h-5 w-5" />
 Dejar mis datos
 <ArrowRight className="h-4 w-4" />
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
 <div className="relative overflow-hidden rounded-lg border border-linea bg-white shadow-1">
 <Image
 src={danielaProfile.image}
 alt={`${danielaProfile.name}, ${danielaProfile.role} en Madrid`}
 width={900}
 height={1125}
 priority
 sizes="(min-width: 1024px) 42vw, 100vw"
 className="aspect-[4/5] w-full object-cover object-top"
 />
 <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/40 bg-white/70 p-4 shadow-1 ">
 <p className="font-serif text-2xl font-semibold text-marino">{danielaProfile.name}</p>
 <p className="mt-1 font-semibold text-texto-2">{danielaProfile.role}</p>
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
 <section className={`${sectionWarm} py-[clamp(64px,6vw+32px,120px)]`}>
 <div className="mx-auto grid max-w-[1120px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
 <article className={cardGlass}>
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-salvia-600">
 Qué es y cuándo puede ayudarte
 </p>
 <h2 className="mb-5 font-serif text-2xl font-semibold text-marino text-balance sm:text-3xl lg:text-4xl">
 {treatment.introTitle}
 </h2>
 <p className="text-lg leading-relaxed text-texto-2 text-pretty">{treatment.introBody}</p>

 <div className="mt-8 grid gap-3">
 {treatment.introPoints.map((item) => (
 <div key={item} className="flex gap-3 rounded-2xl border border-linea bg-white/38 p-4">
 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-salvia-600" />
 <p className="leading-relaxed text-marino">{item}</p>
 </div>
 ))}
 </div>
 </article>

 <aside className={cardSoft}>
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-salvia-600">
 Señales frecuentes
 </p>
 <h2 className="mb-5 font-serif text-2xl font-semibold text-marino sm:text-3xl">
 Síntomas que suelen aparecer
 </h2>
 <div className="grid gap-3">
 {treatment.symptoms.map((symptom) => (
 <div key={symptom} className="flex gap-3 rounded-2xl bg-white p-4">
 <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-lavanda-600" />
 <p className="text-sm leading-relaxed text-texto-2">{symptom}</p>
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
 <section className={`${sectionCta} py-[clamp(64px,6vw+32px,120px)]`}>
 <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
 <div className="mx-auto mb-12 max-w-3xl text-center">
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-salvia">
 Enfoque terapéutico
 </p>
 <h2 className="font-serif text-2xl font-semibold text-white text-balance sm:text-3xl lg:text-4xl">
 Cómo trabaja Daniela este proceso
 </h2>
 </div>

 <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
 <div className="grid gap-4">
 {treatment.approach.map((item, index) => (
 <article key={item.title} className="rounded-[28px] border border-white/16 bg-white/10 p-5 text-white shadow-1 ">
 <div className="flex gap-4">
 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-sm font-bold text-lavanda">
 {index + 1}
 </span>
 <div>
 <h3 className="text-lg font-semibold text-white">{item.title}</h3>
 <p className="mt-2 leading-relaxed text-white/78">{item.description}</p>
 </div>
 </div>
 </article>
 ))}
 </div>

 <aside className="rounded-lg border border-white/18 bg-white/10 p-6 text-white shadow-1 sm:p-8">
 <p className="text-xs font-bold uppercase tracking-[0.16em] text-salvia">
 Modalidad
 </p>
 <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
 Presencial en Chamartín y online
 </h3>
 <div className="mt-8 grid gap-5">
 <div className="flex gap-4">
 <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
 <MapPin className="h-5 w-5 text-lavanda" />
 </div>
 <div>
 <h4 className="font-semibold text-white">Sesiones presenciales</h4>
 <p className="mt-2 leading-relaxed text-white/78">{treatment.modality.presencial}</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
 <Video className="h-5 w-5 text-lavanda" />
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
 <section className={`${sectionSage} py-[clamp(64px,6vw+32px,120px)]`}>
 <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
 <div className="overflow-hidden rounded-lg border border-linea bg-white shadow-1">
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
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-salvia-600">
 Profesional
 </p>
 <h2 className="mb-5 font-serif text-2xl font-semibold text-marino text-balance sm:text-3xl lg:text-4xl">
 Un proceso con {danielaProfile.name}
 </h2>
 <p className="text-lg leading-relaxed text-texto-2 text-pretty">{treatment.professionalBlurb}</p>

 <div className="mt-8 grid gap-3 sm:grid-cols-2">
 {danielaProfile.credentials.map((credential) => (
 <div key={credential} className="flex gap-3 rounded-2xl border border-linea bg-white p-4 shadow-1">
 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-salvia-600" />
 <span className="font-semibold text-marino">{credential}</span>
 </div>
 ))}
 </div>

 <div className="mt-6 grid gap-3 sm:grid-cols-2">
 {treatment.professionalHighlights.map((highlight) => (
 <div key={highlight} className="rounded-2xl border border-linea bg-white p-4 leading-relaxed text-texto-2 shadow-1">
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
 <section id="reserva" className={`${sectionWarm} scroll-mt-24 py-[clamp(64px,6vw+32px,120px)]`}>
 <div className="mx-auto grid max-w-[1120px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
 <ContactRequestForm compact page={`tratamiento_${treatment.slug}`} source={`tratamiento_${treatment.slug}`} />

 <aside className={cardDeep}>
 <p className="text-xs font-bold uppercase tracking-[0.16em] text-lavanda">
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
 <item.icon className="h-5 w-5 text-lavanda" />
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
 className="btn btn--ghost-inverse btn--sm"
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
 <section id="faq" className={`${sectionSage} scroll-mt-24 py-[clamp(64px,6vw+32px,120px)]`}>
 <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
 <div className="mb-10 text-center">
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-salvia-600">
 Preguntas frecuentes
 </p>
 <h2 className="font-serif text-2xl font-semibold text-marino sm:text-3xl lg:text-4xl">
 Dudas habituales sobre {treatment.navLabel.toLowerCase()}
 </h2>
 </div>
 <div className="grid gap-4">
 {treatment.faqs.map((item) => (
 <details key={item.question} className={`${cardGlass} group`}>
 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-marino">
 <span>{item.question}</span>
 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-1 transition group-open:rotate-45">
 <Sparkles className="h-5 w-5 text-lavanda-600" />
 </span>
 </summary>
 <p className="mt-4 leading-relaxed text-texto-2">{item.answer}</p>
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
 <div className="mx-auto grid max-w-[1120px] gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
 <div className="flex gap-3 rounded-lg border border-linea bg-white p-5 shadow-1">
 <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lavanda-600" />
 <div>
 <p className="font-semibold text-marino">Consulta en Chamartín</p>
 <p className="mt-1 text-sm leading-relaxed text-texto-2">{address}</p>
 </div>
 </div>
 <div className="flex gap-3 rounded-lg border border-linea bg-white p-5 shadow-1">
 <Video className="mt-0.5 h-5 w-5 shrink-0 text-lavanda-600" />
 <div>
 <p className="font-semibold text-marino">Terapia online</p>
 <p className="mt-1 text-sm leading-relaxed text-texto-2">Sesiones por videollamada cuando necesitas más flexibilidad.</p>
 </div>
 </div>
 <a
 href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
 target="_blank"
 rel="noopener noreferrer"
 className="glass glass-hover flex gap-3 rounded-[20px] p-5"
 >
 <Home className="mt-0.5 h-5 w-5 shrink-0 text-salvia-600" />
 <div>
 <p className="font-semibold text-marino">Cómo llegar</p>
 <p className="mt-1 text-sm leading-relaxed text-texto-2">Abrir ubicación en Google Maps.</p>
 </div>
 </a>
 </div>
 </section>
 )
}

function FinalCTASection({ treatment }: { treatment: Treatment }) {
 return (
 <section className={`${sectionCta} py-[clamp(64px,6vw+32px,120px)]`}>
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
 className="btn btn--whatsapp"
 >
 <WhatsAppLogo className="h-6 w-6" />
 Pedir primera sesión
 </a>
 <a
 href="#reserva"
 className="btn btn--ghost-inverse"
 >
 Dejar mis datos
 <ArrowRight className="h-4 w-4" />
 </a>
 </div>
 </div>
 </section>
 )
}

function Footer() {
 return (
 <footer className="border-t border-marino bg-marino py-12 text-texto-inv-2">
 <div className="mx-auto mb-10 max-w-[1120px] px-4 sm:px-6 lg:px-8"><aside className="crisis-note" role="note">Esta consulta no es un servicio de urgencias. Si hay riesgo inmediato, llama al <a href="tel:112">112</a>. Línea de atención a la conducta suicida: <a href="tel:024">024</a>.</aside></div>
 <div className="mx-auto grid max-w-[1120px] gap-8 px-4 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
 <div>
 <h2 className="mb-4 font-serif text-lg font-medium text-crema">{danielaProfile.name}</h2>
 <p>{danielaProfile.role}</p>
 <p>Colegiada {danielaProfile.collegiateNumber}</p>
 {/* TODO: nº registro sanitario */}
 </div>
 <div>
 <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">Contacto</h2>
 <a href="tel:+346****2183" className="mb-3 flex items-center gap-2 transition-colors hover:text-crema">
 <Phone className="h-4 w-4" />
 {danielaProfile.phone}
 </a>
 <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="footer" data-page="treatment" data-channel="instagram" className="flex items-center gap-2 transition-colors hover:text-crema">
 <InstagramLogo className="h-4 w-4" />
 @psico.danilopez
 </a>
 </div>
 <div>
 <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">Consulta</h2>
 <p>C. de Marcenado, 14, Despacho 2</p>
 <p>Chamartín, 28002 Madrid</p>
 <p className="mt-2 text-texto-inv-2/80">Consulta independiente dentro del centro Psicotep</p>
 </div>
 <div>
 <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">Enlaces</h2>
 <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="footer" data-page="treatment" data-channel="doctoralia" className="mb-2 block transition-colors hover:text-crema">Doctoralia</a>
 <Link href="/" className="mb-2 block transition-colors hover:text-crema">Inicio</Link>
 <Link href="/quien-soy" className="mb-2 block transition-colors hover:text-crema">Quién soy</Link>
 <Link href="/contacto" className="mb-2 block transition-colors hover:text-crema">Contacto</Link>
 <Link href="/politica-privacidad" className="mb-2 block transition-colors hover:text-crema">Política de privacidad</Link>
 <Link href="/politica-cookies" className="mb-2 block transition-colors hover:text-crema">Política de cookies</Link>
 <Link href="/aviso-legal" className="mb-2 block transition-colors hover:text-crema">Aviso legal</Link>
 <CookieSettingsButton className="block text-left transition-colors hover:text-crema" />
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
 className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-2 transition-colors hover:bg-whatsapp-600 sm:flex"
 aria-label="Contactar por WhatsApp"
 >
 <WhatsAppLogo className="h-10 w-10" />
 </a>
 )
}

function MobileStickyBar({ treatment }: { treatment: Treatment }) {
 return (
 <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-linea bg-crema/95 p-3 sm:hidden">
 <div className="flex gap-2">
 <a
 href={treatmentWhatsappUrl(treatment)}
 data-event="click_whatsapp"
 data-location="treatment_sticky_mobile"
 data-page={`tratamiento_${treatment.slug}`}
 data-channel="whatsapp"
 className="btn btn--whatsapp flex-1"
 >
 <WhatsAppLogo className="h-5 w-5" />
 Pedir primera sesión
 </a>
 <a
 href="#reserva"
 data-event="click_contact_form"
 data-location="treatment_sticky_mobile"
 data-page={`tratamiento_${treatment.slug}`}
 data-channel="internal_cta"
 className="btn btn--primary flex-1"
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
