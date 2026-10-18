import type { Metadata } from "next"
import Image from "next/image"
import { GraduationCap, MapPin, Phone } from "lucide-react"
import { WhatsAppLogo } from "../components/BrandIcons"
import { Header as SiteHeader } from "../components/Header"
import { courses, degrees } from "../data/cv"
import { openGraphMetadata } from "../data/seo"
import { doctoraliaUrl, instagramUrl } from "../data/site"

export const metadata: Metadata = {
 title: "Quién soy | Daniela López Meléndez, psicóloga sanitaria en Madrid",
 description:
 "Conoce a Daniela López Meléndez, Psicóloga General Sanitaria en Madrid. Consulta presencial en Chamartín y terapia online para adultos, adolescentes, infancia y parejas.",
 alternates: {
 canonical: "/quien-soy",
 },
 openGraph: openGraphMetadata({
 title: "Quién soy | Daniela López Meléndez, psicóloga sanitaria",
 description:
 "Psicóloga General Sanitaria en Madrid. Formación, enfoque terapéutico y consulta presencial en Chamartín u online.",
 path: "/quien-soy",
 }),
}

const card = "rounded-lg border border-linea bg-white p-6 shadow-1 "
const badge = "rounded-full border border-linea bg-white px-4 py-2 text-sm font-bold text-marino shadow-1"
const whatsappMessage = "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`

export default function AboutPage() {
 return (
 <main className="min-h-screen bg-[linear-gradient(180deg,#FFFEFA_0%,#EAF1DE_100%)] text-marino">
 <SiteHeader whatsappUrl={whatsappUrl} doctoraliaUrl={doctoraliaUrl} instagramUrl={instagramUrl} />

 <section className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
 <div className="overflow-hidden rounded-lg border border-linea bg-white shadow-1">
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
 <p className="mb-3 inline-flex rounded-full border border-linea bg-white px-4 py-2 text-sm font-bold shadow-1">
 Formación y perfil profesional
 </p>
 <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
 Daniela López Meléndez
 </h1>
 <p className="mb-3 text-xl font-bold text-lavanda-600">Psicóloga General Sanitaria</p>
 <p className="mb-6 font-semibold text-marino">Colegiada M-41829</p>
 <p className="mb-7 text-lg leading-relaxed text-texto-2">
 Acompaño a adultos, adolescentes, infancia y parejas desde un enfoque integrador, cercano y respetuoso con el ritmo de cada persona.
 </p>
 <div className="mb-7 flex flex-wrap gap-3">
 {["Infanto-juvenil", "Adultos", "Crisis", "Pareja"].map((item) => (
 <span key={item} className={badge}>{item}</span>
 ))}
 </div>
 <div className={`${card} mb-7`}>
 <p className="mb-4 font-bold">Daniela López Meléndez, Psicóloga General Sanitaria</p>
 <p className="leading-relaxed text-texto-2">
 Universidad Nebrija | Máster en Psicología General Sanitaria | Formación en intervención en crisis | Psicología infanto-juvenil
 </p>
 </div>
 <div className="grid gap-3 text-texto-2 sm:grid-cols-2">
 <a href="tel:+346****2183" className="flex items-center gap-2 font-semibold hover:text-marino">
 <Phone className="h-4 w-4 text-lavanda-600" />
 +34 614 412 183
 </a>
 <span className="flex items-center gap-2 font-semibold">
 <MapPin className="h-4 w-4 text-lavanda-600" />
 Chamartín, Madrid
 </span>
 </div>
 </div>
 </section>

 <section className="mx-auto grid max-w-[1120px] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24">
 <div className={card}>
 <div className="mb-5 flex items-center gap-3">
 <GraduationCap className="h-7 w-7 text-lavanda-600" />
 <h2 className="font-serif text-2xl font-semibold">Formación</h2>
 </div>

 <ul className="grid gap-4">
 {degrees.map((item) => (
 <li key={item.title} className="flex gap-3">
 <span className="mt-0.5 h-fit rounded-full bg-arena px-2.5 py-1 text-xs font-bold text-marino">{item.year}</span>
 <div>
 <p className="font-semibold leading-snug text-marino">{item.title}</p>
 <p className="text-sm text-texto-3">{item.center}</p>
 </div>
 </li>
 ))}
 </ul>

 <div className="mt-6 border-t border-linea pt-5">
 <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-lavanda-600">Formación complementaria</p>
 <ul className="grid gap-3">
 {courses.map((item) => (
 <li key={item.title} className="flex gap-3">
 <span className="mt-0.5 h-fit rounded-full bg-arena px-2.5 py-1 text-xs font-bold text-marino">{item.year}</span>
 <div>
 <p className="font-medium leading-snug text-marino">{item.title}</p>
 <p className="text-sm text-texto-3">{item.center}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className={card}>
 <p className="mb-3 text-sm font-bold uppercase text-lavanda-600">Trayectoria</p>
 <h2 className="mb-5 font-serif text-2xl font-semibold">Mi enfoque terapéutico</h2>
 <div className="space-y-5 text-lg leading-relaxed text-texto-2">
 <p>Soy psicóloga general sanitaria comprometida con el acompañamiento a personas que buscan comprenderse mejor, sanar sus heridas emocionales y construir relaciones más seguras consigo mismas y con los demás.</p>
 <p>Trabajo desde un enfoque integrador, combinando herramientas de diferentes corrientes psicológicas para adaptarme a la historia, las necesidades y el ritmo de cada paciente.</p>
 <p>Mi experiencia incluye intervención en situaciones de crisis, atención a población infanto-juvenil y adultos. Mi compromiso es ofrecer un espacio seguro y de confianza donde puedas explorar lo que sientes con calma.</p>
 </div>
 </div>
 </section>

 <section className="section-cta border-t border-linea-fuerte px-4 py-[clamp(64px,6vw+32px,120px)] text-center text-crema sm:px-6 lg:px-8">
 <h2 className="mb-6 font-serif text-3xl font-normal text-white text-balance">¿Quieres pedir una primera sesión?</h2>
 <div className="flex flex-col justify-center gap-4 sm:flex-row">
 <a href={whatsappUrl} data-event="click_whatsapp" data-location="about_final_cta" data-page="about" data-channel="whatsapp" className="btn btn--whatsapp">
 <WhatsAppLogo className="h-5 w-5" />
 Pedir primera sesión
 </a>
 <a href="/#reserva" className="btn btn--ghost-inverse">
 Ver precios
 </a>
 </div>
 </section>
 <footer className="border-t border-linea-fuerte bg-crema py-10 text-sm text-texto-3">
 <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
 <aside className="crisis-note mb-8" role="note">
 Esta consulta no es un servicio de urgencias. Si hay riesgo inmediato, llama al <a href="tel:112">112</a>. Línea de atención a la conducta suicida: <a href="tel:024">024</a>.
 </aside>
 <p className="font-medium text-marino">Daniela López Meléndez</p>
 <p>Psicóloga General Sanitaria · Colegiada M-41829</p>
 {/* TODO: nº registro sanitario */}
 <p>C. de Marcenado, 14, despacho 2 · Chamartín, 28002 Madrid</p>
 </div>
 </footer>
 </main>
 )
}
