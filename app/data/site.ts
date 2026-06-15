export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danielalopezpsicologa.es"

export const whatsappMessage =
  "Hola Daniela, he visto tu página y me gustaría pedir información sobre una primera sesión."
export const whatsappUrl = `https://wa.me/34614412183?text=${encodeURIComponent(whatsappMessage)}`
export const doctoraliaUrl = "https://www.doctoralia.es/daniela-lopez-melendez/psicologo/madrid"
export const instagramUrl = "https://www.instagram.com/psico.danilopez/"

export const address = "C. de Marcenado, 14, Despacho 2, Chamartín, 28002 Madrid"
export const mapQuery = encodeURIComponent(address)

export const danielaProfile = {
  name: "Daniela López Meléndez",
  role: "Psicóloga General Sanitaria",
  collegiateNumber: "M-41829",
  phone: "+34 614 412 183",
  image: "/daniela-lopez-psicologa-sanitaria-madrid.webp",
  cardImage: "/consulta-psicologia-chamartin-daniela-lopez.webp",
  credentials: [
    "Psicóloga General Sanitaria colegiada M-41829",
    "Especializada en población infanto-juvenil",
    "Atención a adultos, adolescentes, parejas y familias",
    "Consulta presencial en Chamartín y online",
  ],
  chips: ["Adultos", "Adolescentes", "Pareja", "Familia"],
}
