export type ReviewSource = "doctoralia" | "google"

export type Review = {
  source: ReviewSource
  rating: number
  date: string
  text: string
  verified?: boolean
}

/**
 * Opiniones reales de la ficha de Doctoralia (más recientes primero).
 * Sin nombres ni iniciales: no se muestran datos de pacientes.
 */
const doctoraliaReviews: Review[] = [
  {
    source: "doctoralia",
    rating: 5,
    date: "9 de julio de 2026",
    verified: true,
    text: "Daniela es muy amable, empática y sabe escuchar atentamente para después hacerme entender el por qué de las cosas. Siento que me conozco mejor gracias a sus explicaciones claras y voy entendiendo mejor dónde debo trabajar más en mí.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "26 de junio de 2026",
    verified: true,
    text: "Daniela me está ayudando muchísimo a mejorar en mi día a día. Es una gran profesional.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "18 de mayo de 2026",
    verified: true,
    text: "Es la mejor para nosotros. Mi hijo de 8 años, si no es ella, no quiere ir con nadie. Se siente comprendido, entendido y se lo pasa genial con ella.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "15 de mayo de 2026",
    verified: true,
    text: "Daniela está siendo una ayuda indispensable en este momento de mi vida, es una profesional en su trabajo y se nota que lo hace con dedicación. Es un placer tener las sesiones, ya que cada vez que voy siento que progreso muchísimo.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "14 de abril de 2026",
    verified: true,
    text: "Daniela es maravillosa, me he sentido muy escuchada y vista. Siento que he mejorado mucho desde que la veo y no puedo estar más contenta.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "9 de abril de 2026",
    verified: true,
    text: "Me ha encantado, excelente profesional, tiene mucha empatía y llegas a conectar muy fácilmente. De verdad que la recomiendo 100%. Es un 10 de 10.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "8 de abril de 2026",
    verified: true,
    text: "Me ayudó a parar y a entender mis emociones. Gracias a Daniela he conseguido comprender qué me pasaba y aprender a aceptar mis emociones en lugar de intentar controlarlas. Me he sentido muy acompañada en el proceso.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "6 de abril de 2026",
    verified: true,
    text: "Daniela es una profesional increíble. El primer día estaba muy nerviosa y, gracias a su empatía, tranquilidad y profesionalidad, me hizo sentir que había tomado una de las mejores decisiones de mi vida. Nunca me había sentido tan vista.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "5 de abril de 2026",
    verified: true,
    text: "Excelente profesional. Me ayudó mucho a gestionar el estrés. Daniela, desde el primer momento, creó un ambiente muy seguro donde es fácil abrirse y hablar de lo que sea. Si buscas a alguien comprometida con tu bienestar, ella es la indicada.",
  },
  {
    source: "doctoralia",
    rating: 5,
    date: "5 de junio de 2025",
    verified: true,
    text: "Daniela es un encanto, muy empática con los niños, todo fue perfecto.",
  },
]

/**
 * Opiniones de la ficha de Google Business Profile.
 * Las que aparecen cortadas en Google se mantienen con elipsis.
 */
const googleReviews: Review[] = [
  {
    source: "google",
    rating: 5,
    date: "Junio de 2026",
    text: "Daniela te escucha de manera empática, sin juzgarte y respetando tus tiempos. Mantiene una actitud profesional a la vez que se muestra cercana y cálida, generando confianza desde el principio.",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Daniela es una psicóloga excelente y súper cercana. Nunca te sientes juzgado por ella, es muy empática y tiene las herramientas adecuadas para ayudarte. Súper recomendada.",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Es una psicóloga del todo recomendada: profesional, cercana, empática y todo lo que puedas buscar en una profesional de la salud mental. Ojalá mucha gente la descubra y vea cómo pueden progresar.",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Excelente tanto a nivel humano como profesional. ¡Súper recomendada!",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Magnífica profesional. Me hace sentir comprendida y validada desde el primer minuto…",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Me siento totalmente agradecida con Daniela por acompañarme en este proceso con tanta empatía y profesionalidad. Siempre desde la cercanía y el cariño…",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Quiero agradecer el gran trabajo y acompañamiento que he recibido en terapia con Daniela. Desde el primer momento me he sentido escuchada, comprendida…",
  },
  {
    source: "google",
    rating: 5,
    date: "Mayo de 2026",
    text: "Es una excelente profesional, muy comprometida con sus pacientes y los procesos terapéuticos. He tenido la fortuna de trabajar con ella y no tengo más que admiración.",
  },
]

/** Alterna Doctoralia y Google para que ninguna fuente monopolice el carrusel. */
function interleave(primary: Review[], secondary: Review[]) {
  const result: Review[] = []
  const max = Math.max(primary.length, secondary.length)

  for (let i = 0; i < max; i += 1) {
    if (primary[i]) result.push(primary[i])
    if (secondary[i]) result.push(secondary[i])
  }

  return result
}

export const reviews: Review[] = interleave(doctoraliaReviews, googleReviews)
