import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { ContactRequestForm } from "../components/ContactRequestForm"
import { DoctoraliaLogo, InstagramLogo, WhatsAppLogo } from "../components/BrandIcons"
import { DoctoraliaWidget } from "../components/DoctoraliaWidget"
import { Header as SiteHeader } from "../components/Header"
import { SiteFooter } from "../components/SiteFooter"
import { openGraphMetadata } from "../data/seo"

export const metadata: Metadata = {
 title: "Contacto | Daniela López Meléndez, psicóloga sanitaria en Madrid",
 description:
 "Contacta con Daniela López Meléndez, Psicóloga General Sanitaria en Madrid. Primera sesión por WhatsApp, consulta presencial en Chamartín y terapia online.",
 alternates: {
 canonical: "/contacto",
 },
 openGraph: openGraphMetadata({
 title: "Contacto | Daniela López Meléndez, psicóloga sanitaria",
 description:
 "Escríbeme por WhatsApp o reserva la primera sesión. Consulta presencial en Chamartín (Madrid) y terapia online.",
 path: "/contacto",
 }),
}

const whatsappMessage = "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`
const doctoraliaUrl = "https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
const instagramUrl = "https://www.instagram.com/psico.danilopez/"

export default function ContactPage() {
 return (
 <main className="min-h-screen bg-[linear-gradient(180deg,#FFFEFA_0%,#EAF1DE_100%)] text-marino">
 <SiteHeader whatsappUrl={whatsappUrl} doctoraliaUrl={doctoraliaUrl} instagramUrl={instagramUrl} />

 <section className="mx-auto grid max-w-[1120px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
 <div>
 <p className="mb-3 inline-flex rounded-full border border-linea bg-white px-4 py-2 text-sm font-bold shadow-1">
 Contacto
 </p>
 <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
 Pide información sobre una primera sesión
 </h1>

 <figure className="mb-8 overflow-hidden rounded-lg border border-linea bg-white shadow-1">
 <Image
 src="/daniela-contacto.webp"
 alt="Daniela López Meléndez, psicóloga general sanitaria, en su consulta de Chamartín"
 width={1315}
 height={1196}
 priority
 sizes="(min-width: 1024px) 44vw, 100vw"
 className="aspect-square w-full object-cover object-center"
 />
 </figure>

 <p className="mb-8 text-lg leading-relaxed text-texto-2">
 Puedes escribir por WhatsApp o dejar tus datos en el formulario. Daniela te contactará para resolver dudas, revisar disponibilidad y valorar el mejor formato para empezar.
 </p>

 <div className="grid gap-4">
 <a href={whatsappUrl} data-event="click_whatsapp" data-location="contact_page_top" data-page="contact" data-channel="whatsapp" className="flex items-center gap-4 rounded-lg border border-linea bg-[#25D366] p-5 font-bold text-white shadow-1">
 <WhatsAppLogo className="h-7 w-7" />
 Pedir primera sesión
 </a>
 <a href="tel:+346****2183" className="flex items-center gap-4 rounded-lg border border-linea bg-white p-5 shadow-1">
 <Phone className="h-6 w-6 text-lavanda-600" />
 <span><span className="block font-bold">+34 614 412 183</span><span className="text-sm text-texto-2">Teléfono</span></span>
 </a>
 <div className="flex items-center gap-4 rounded-lg border border-linea bg-white p-5 shadow-1">
 <MapPin className="h-6 w-6 text-lavanda-600" />
 <span>
 <span className="block font-bold">C. de Marcenado, 14, Despacho 2</span>
 <span className="text-sm text-texto-2">Chamartín, 28002 Madrid</span>
 <span className="block text-sm font-medium text-texto-2/80">Consulta independiente dentro del centro Psicotep</span>
 </span>
 </div>
 </div>

 <div className="mt-6 flex flex-wrap gap-3">
 <a href={instagramUrl} target="_blank" rel="noopener noreferrer" data-event="click_instagram" data-location="contact_block" data-page="contact" data-channel="instagram" className="inline-flex items-center gap-2 rounded-xl border border-linea bg-white px-5 py-3 font-bold text-marino shadow-1">
 <InstagramLogo className="h-5 w-5" />
 Instagram
 </a>
 <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer" data-event="click_doctoralia" data-location="contact_block" data-page="contact" data-channel="doctoralia" className="inline-flex items-center gap-2 rounded-xl border border-linea bg-white px-5 py-3 font-bold text-marino shadow-1">
 <DoctoraliaLogo className="h-5 w-5" />
 Doctoralia
 </a>
 </div>
 </div>

 <ContactRequestForm page="contact" />
 </section>

 <section className="border-t border-linea-fuerte bg-crema/60 py-14 lg:py-20">
 <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
 <div className="mx-auto mb-8 max-w-2xl text-center">
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-lavanda-600">Reserva online</p>
 <h2 className="mb-4 font-serif text-2xl font-semibold text-marino sm:text-3xl">
 Elige día y hora en la agenda de Doctoralia
 </h2>
 <p className="text-texto-2">
 Si prefieres no escribir antes, puedes reservar directamente la primera sesión en la agenda de Daniela.
 </p>
 </div>
 <DoctoraliaWidget page="contact" type="big_with_calendar" opinion={false} label="Reservar cita en Doctoralia" />
 </div>
 </section>
 <SiteFooter page="contact" />
 </main>
 )
}
