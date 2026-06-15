export type Treatment = {
  slug: string
  path: string
  navLabel: string
  cardTitle: string
  cardDescription: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  heroBadges: string[]
  introTitle: string
  introBody: string
  introPoints: string[]
  symptoms: string[]
  approach: Array<{
    title: string
    description: string
  }>
  modality: {
    presencial: string
    online: string
  }
  professionalBlurb: string
  professionalHighlights: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedTreatments: Array<{
    label: string
    href: string
  }>
  serviceType: string[]
}

const commonFaqs = [
  {
    question: "¿Puedo empezar aunque no tenga claro lo que me pasa?",
    answer:
      "Sí. La primera sesión también sirve para ordenar el motivo de consulta, resolver dudas y valorar si este espacio puede ayudarte.",
  },
  {
    question: "¿Las sesiones pueden ser online?",
    answer:
      "Sí. Daniela ofrece sesiones presenciales en Chamartín y sesiones online, adaptando la modalidad a cada situación.",
  },
  {
    question: "¿Cómo puedo pedir una primera sesión?",
    answer:
      "Puedes escribir por WhatsApp o dejar tus datos en el formulario. Daniela te contactará para revisar disponibilidad y orientarte.",
  },
]

export const treatments: Treatment[] = [
  {
    slug: "ansiedad",
    path: "/tratamientos/ansiedad",
    navLabel: "Ansiedad",
    cardTitle: "Ansiedad y regulación emocional",
    cardDescription:
      "Para preocupación constante, mente acelerada, bloqueo, ataques de ansiedad o dificultad para descansar.",
    metaTitle: "Psicóloga para ansiedad en Madrid y online | Daniela López",
    metaDescription:
      "Terapia para ansiedad con Daniela López, psicóloga sanitaria en Chamartín. Sesiones presenciales en Madrid y online para preocupación, bloqueo e insomnio.",
    heroTitle: "Psicóloga para ansiedad en Madrid y online",
    heroSubtitle:
      "Un espacio terapéutico para entender qué está sosteniendo la ansiedad, bajar la activación y construir recursos que puedas usar en tu día a día.",
    heroBadges: ["Presencial en Chamartín", "Terapia online", "Adultos y adolescentes"],
    introTitle: "Cuándo pedir ayuda psicológica por ansiedad",
    introBody:
      "La ansiedad puede aparecer como preocupación constante, anticipación, síntomas físicos, bloqueo mental o sensación de no poder desconectar. En terapia revisamos qué está ocurriendo, qué lo mantiene y qué pasos pueden ayudarte a recuperar seguridad y margen.",
    introPoints: [
      "Sientes preocupación constante, anticipación excesiva o te cuesta desconectar incluso cuando no hay un motivo claro.",
      "Notas ataques de ansiedad, bloqueo, irritabilidad, insomnio o síntomas físicos que te preocupan.",
      "La ansiedad está afectando al descanso, al trabajo, a tus relaciones o a tu capacidad para sostener el día a día.",
    ],
    symptoms: [
      "Preocupación constante o sensación de alerta.",
      "Nudo en el pecho, palpitaciones o tensión corporal.",
      "Ataques de ansiedad o miedo a perder el control.",
      "Insomnio o mente acelerada al final del día.",
      "Bloqueo mental, saturación o irritabilidad.",
      "Evitación de situaciones, conversaciones o decisiones.",
    ],
    approach: [
      {
        title: "Comprender qué activa la ansiedad",
        description:
          "Exploramos contexto, disparadores y patrones para entender por qué la ansiedad aparece y cómo se mantiene.",
      },
      {
        title: "Trabajar regulación emocional",
        description:
          "Buscamos bajar activación, ordenar lo que sientes y construir herramientas útiles fuera de sesión.",
      },
      {
        title: "Avanzar con un proceso adaptado a ti",
        description:
          "El objetivo no es solo reducir síntomas, sino relacionarte de forma más estable con tus emociones y necesidades.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en consulta presencial en Chamartín, en un espacio tranquilo y cuidado para trabajar la ansiedad con continuidad.",
      online:
        "Sesiones online si necesitas flexibilidad o prefieres empezar desde casa manteniendo el mismo encuadre terapéutico.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de ansiedad desde un enfoque integrador, cercano y adaptado a cada persona, tanto presencial como online.",
    professionalHighlights: [
      "No se reduce la ansiedad solo al síntoma: se revisa qué está pasando en tu historia, tus vínculos y tu día a día.",
      "El proceso combina comprensión, regulación emocional y herramientas sostenibles para recuperar sensación de control.",
    ],
    faqs: [
      {
        question: "¿Cómo sé si necesito terapia por ansiedad?",
        answer:
          "Puede ser útil consultar si la ansiedad afecta a tu descanso, tus relaciones, el trabajo, tu concentración o tu bienestar diario.",
      },
      {
        question: "¿Qué se hace en la primera sesión?",
        answer:
          "La primera sesión sirve para entender qué te está pasando, revisar cómo te afecta y valorar un plan de trabajo realista.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Autoestima", href: "/tratamientos/autoestima" },
      { label: "Trauma", href: "/tratamientos/trauma" },
      { label: "Duelo", href: "/tratamientos/duelo" },
    ],
    serviceType: ["Ansiedad", "Regulación emocional", "Terapia psicológica"],
  },
  {
    slug: "trauma",
    path: "/tratamientos/trauma",
    navLabel: "Trauma",
    cardTitle: "Trauma y estrés",
    cardDescription:
      "Para experiencias difíciles que siguen afectando a cómo te sientes, reaccionas o te relacionas.",
    metaTitle: "Terapia para trauma en Madrid y online | Daniela López",
    metaDescription:
      "Terapia para trauma psicológico con Daniela López en Madrid y online. Acompañamiento gradual para experiencias dolorosas, hipervigilancia y bloqueo.",
    heroTitle: "Terapia para trauma psicológico en Madrid",
    heroSubtitle:
      "Un proceso gradual para comprender el impacto de experiencias dolorosas, recuperar seguridad emocional y trabajar sin forzar tus tiempos.",
    heroBadges: ["Acompañamiento gradual", "Presencial y online", "Ritmo seguro"],
    introTitle: "Qué entendemos por trauma y cuándo puede ayudarte la terapia",
    introBody:
      "El trauma no depende solo de lo que ocurrió, sino de cómo esa experiencia quedó registrada en el cuerpo, las emociones y la forma de vincularte. La terapia no busca obligarte a revivir nada, sino construir primero seguridad y recursos.",
    introPoints: [
      "Hay experiencias del pasado que siguen afectándote en el presente.",
      "Sientes bloqueos emocionales, hipervigilancia o respuestas intensas que te cuesta comprender.",
      "Algunas situaciones o relaciones activan miedo, inseguridad o desregulación emocional.",
    ],
    symptoms: [
      "Hipervigilancia o sensación constante de alerta.",
      "Bloqueo, desconexión o dificultad para sentirte presente.",
      "Reacciones intensas ante situaciones que te activan.",
      "Recuerdos intrusivos o malestar difícil de nombrar.",
      "Dificultad para confiar o sentir seguridad en vínculos.",
      "Vergüenza, culpa o amenaza interna persistente.",
    ],
    approach: [
      {
        title: "Crear seguridad antes de profundizar",
        description:
          "El trabajo empieza por generar sostén, estabilidad y recursos para que el proceso sea habitable.",
      },
      {
        title: "Entender el impacto sin forzar",
        description:
          "Se respeta tu ritmo y no se empuja a hablar de más si aún no hay base suficiente para sostenerlo.",
      },
      {
        title: "Recuperar regulación y vínculo",
        description:
          "El objetivo es ampliar tu sensación de seguridad interna y de libertad en relaciones y vida cotidiana.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Chamartín cuando necesitas un entorno cuidado y una presencia terapéutica estable.",
      online:
        "Sesiones online si necesitas flexibilidad, manteniendo una mirada gradual y adaptada a tu capacidad de sostén.",
    },
    professionalBlurb:
      "Daniela trabaja trauma psicológico desde una mirada integradora, respetando tiempos, límites y necesidades de seguridad emocional.",
    professionalHighlights: [
      "El foco está en construir seguridad antes de entrar en contenidos difíciles.",
      "La intervención se adapta a lo que puedes sostener en cada momento, sin exigirte ir más rápido.",
    ],
    faqs: [
      {
        question: "¿Tengo que contar todo lo vivido desde la primera sesión?",
        answer:
          "No. La terapia no consiste en contarlo todo de golpe. Se trabaja a partir de lo que puedas sostener y de lo que sea posible abordar.",
      },
      {
        question: "¿Puede ayudar aunque no sepa si lo que viví fue traumático?",
        answer:
          "Sí. Si algo sigue afectando a tu forma de sentirte o vincularte, puede trabajarse aunque no tengas clara la etiqueta.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Ansiedad", href: "/tratamientos/ansiedad" },
      { label: "Duelo", href: "/tratamientos/duelo" },
      { label: "Autoestima", href: "/tratamientos/autoestima" },
    ],
    serviceType: ["Trauma psicológico", "Estrés", "Regulación emocional"],
  },
  {
    slug: "terapia-infanto-juvenil",
    path: "/tratamientos/terapia-infanto-juvenil",
    navLabel: "Terapia infanto-juvenil",
    cardTitle: "Terapia infanto-juvenil",
    cardDescription:
      "Atención psicológica para niños, adolescentes y familias cuando aparecen cambios emocionales o de conducta.",
    metaTitle: "Psicóloga infantil y adolescentes en Madrid | Daniela López",
    metaDescription:
      "Terapia infanto-juvenil en Madrid con Daniela López. Atención psicológica para niños, adolescentes y orientación familiar en Chamartín y online.",
    heroTitle: "Psicóloga infantil y de adolescentes en Madrid",
    heroSubtitle:
      "Acompañamiento psicológico para niños, adolescentes y familias, con una mirada sensible a cada etapa evolutiva y al contexto familiar.",
    heroBadges: ["Niños y adolescentes", "Orientación familiar", "Chamartín"],
    introTitle: "Cuándo puede ayudar la terapia infanto-juvenil",
    introBody:
      "A veces niños y adolescentes expresan su malestar a través de cambios de conducta, dificultades emocionales o problemas para gestionar lo que sienten. El proceso también puede incluir orientación a madres, padres o cuidadores.",
    introPoints: [
      "Notas cambios emocionales o de comportamiento que te preocupan.",
      "Existen dificultades en casa, en el colegio o en sus relaciones.",
      "Como familia, necesitáis orientación para acompañarle mejor.",
    ],
    symptoms: [
      "Irritabilidad, tristeza o desregulación emocional frecuente.",
      "Problemas de conducta o conflictos en casa.",
      "Dificultades escolares o sociales.",
      "Ansiedad, miedos o bloqueos en determinadas situaciones.",
      "Cambios de sueño, apetito o motivación.",
      "Necesidad de pautas y orientación familiar.",
    ],
    approach: [
      {
        title: "Comprender el momento evolutivo",
        description:
          "Se valora qué ocurre teniendo en cuenta edad, entorno, vínculos y necesidades del niño o adolescente.",
      },
      {
        title: "Acompañar al menor y orientar a la familia",
        description:
          "El trabajo puede combinar espacio terapéutico con el menor y orientación a la familia cuando es necesario.",
      },
      {
        title: "Favorecer regulación y seguridad",
        description:
          "Buscamos que el menor tenga más recursos emocionales y que la familia sepa mejor cómo acompañar.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Chamartín para trabajo terapéutico con niños, adolescentes y orientación familiar.",
      online:
        "La modalidad online puede valorarse según edad, motivo de consulta y situación concreta.",
    },
    professionalBlurb:
      "Daniela está especializada en población infanto-juvenil y adapta la intervención a cada etapa evolutiva y contexto familiar.",
    professionalHighlights: [
      "La mirada clínica tiene en cuenta tanto al menor como a su contexto relacional y familiar.",
      "La orientación a madres, padres o cuidadores puede formar parte del proceso cuando ayuda a sostener cambios.",
    ],
    faqs: [
      {
        question: "¿La intervención incluye a la familia?",
        answer:
          "Sí, cuando es necesario. En muchos casos se combinan sesiones con el menor y espacios de orientación familiar.",
      },
      {
        question: "¿La terapia online sirve en adolescentes?",
        answer:
          "Depende del caso. Puede ser útil en algunas situaciones, pero se valora según edad, motivo de consulta y capacidad de sostén.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Ansiedad", href: "/tratamientos/ansiedad" },
      { label: "Autoestima", href: "/tratamientos/autoestima" },
      { label: "Duelo", href: "/tratamientos/duelo" },
    ],
    serviceType: ["Psicología infantil", "Terapia adolescentes", "Orientación familiar"],
  },
  {
    slug: "duelo",
    path: "/tratamientos/duelo",
    navLabel: "Duelo",
    cardTitle: "Duelo",
    cardDescription:
      "Acompañamiento para transitar pérdidas, rupturas y cambios vitales con sostén emocional.",
    metaTitle: "Terapia de duelo en Madrid y online | Daniela López",
    metaDescription:
      "Terapia de duelo con Daniela López en Madrid y online. Acompañamiento psicológico para pérdidas, rupturas y cambios vitales.",
    heroTitle: "Terapia de duelo en Madrid y online",
    heroSubtitle:
      "Un espacio para transitar una pérdida, entender lo que estás viviendo y contar con apoyo profesional sin forzar tiempos ni emociones.",
    heroBadges: ["Pérdidas y rupturas", "Presencial y online", "Acompañamiento respetuoso"],
    introTitle: "Cuándo puede ayudarte la terapia en un proceso de duelo",
    introBody:
      "Una pérdida, una ruptura, una enfermedad o un cambio importante pueden remover emociones difíciles de sostener. La terapia ofrece un espacio seguro para comprender lo que estás viviendo y recolocar esa experiencia a tu ritmo.",
    introPoints: [
      "Sientes que la pérdida te está desbordando.",
      "El duelo se mezcla con culpa, enfado o bloqueo.",
      "Necesitas un espacio donde poder sostenerlo con calma.",
    ],
    symptoms: [
      "Tristeza intensa o sensación de vacío.",
      "Dificultad para aceptar lo ocurrido.",
      "Culpa, rabia o confusión emocional.",
      "Cambios en sueño, apetito o energía.",
      "Aislamiento o sensación de incomprensión.",
      "Dificultad para recolocarte tras la pérdida.",
    ],
    approach: [
      {
        title: "Dar espacio a la pérdida",
        description:
          "Poner palabras a lo que ha cambiado y a cómo esa pérdida afecta tu mundo interno.",
      },
      {
        title: "Sostener emociones complejas",
        description:
          "Trabajar tristeza, rabia, culpa o bloqueo sin forzar un cierre artificial ni una respuesta correcta.",
      },
      {
        title: "Recolocar la experiencia",
        description:
          "Buscar que la pérdida pueda integrarse de una manera más habitable dentro de tu historia.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Chamartín en un espacio tranquilo para acompañar el proceso con presencia, tiempo y sostén.",
      online:
        "Sesiones online si necesitas continuidad, flexibilidad o prefieres empezar desde un entorno conocido.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de duelo con sensibilidad clínica, respeto por el tiempo emocional y atención a cada historia personal.",
    professionalHighlights: [
      "El proceso no busca acelerar ni cerrar de forma artificial, sino acompañar lo que necesitas elaborar.",
      "Se trabaja con las emociones que aparezcan, incluso cuando sean contradictorias o difíciles de nombrar.",
    ],
    faqs: [
      {
        question: "¿Es normal sentir emociones muy cambiantes en un duelo?",
        answer:
          "Sí. En un duelo pueden convivir tristeza, rabia, culpa, alivio o bloqueo. No hay una única forma correcta de vivirlo.",
      },
      {
        question: "¿La terapia ayuda aunque la pérdida no sea reciente?",
        answer:
          "Sí. A veces el duelo se reactiva con el tiempo o queda sin elaborar. También puede trabajarse en esos casos.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Trauma", href: "/tratamientos/trauma" },
      { label: "Ansiedad", href: "/tratamientos/ansiedad" },
      { label: "Autoestima", href: "/tratamientos/autoestima" },
    ],
    serviceType: ["Duelo", "Pérdidas", "Rupturas"],
  },
  {
    slug: "autoestima",
    path: "/tratamientos/autoestima",
    navLabel: "Autoestima",
    cardTitle: "Autoestima",
    cardDescription:
      "Para revisar autoexigencia, inseguridad, dificultad para poner límites o dependencia de la aprobación externa.",
    metaTitle: "Terapia para autoestima en Madrid y online | Daniela López",
    metaDescription:
      "Terapia para autoestima con Daniela López en Madrid y online. Acompañamiento para inseguridad, autoexigencia, límites y autoconcepto.",
    heroTitle: "Terapia para la autoestima en Madrid",
    heroSubtitle:
      "Un proceso para revisar la forma en la que te hablas, te valoras y te relacionas contigo, sin recetas vacías ni exigencias añadidas.",
    heroBadges: ["Autoconcepto", "Límites", "Presencial y online"],
    introTitle: "Qué trabajamos cuando hablamos de autoestima",
    introBody:
      "La autoestima no es solo quererse más. También tiene que ver con cómo interpretas tus errores, cuánto valor das a tus necesidades y cómo te colocas en tus relaciones. En terapia se puede revisar ese autoconcepto y construir una relación interna más segura.",
    introPoints: [
      "Predomina la autoexigencia o la sensación de no ser suficiente.",
      "Te cuesta poner límites o priorizarte.",
      "Tu seguridad depende mucho de la aprobación externa.",
    ],
    symptoms: [
      "Crítica interna muy dura o constante.",
      "Inseguridad en decisiones cotidianas.",
      "Necesidad de validación externa para sentirte bien.",
      "Dificultad para poner límites o expresar necesidades.",
      "Comparación frecuente con otras personas.",
      "Autoexigencia o culpa cuando no llegas a todo.",
    ],
    approach: [
      {
        title: "Entender de dónde viene esa mirada hacia ti",
        description:
          "Revisamos experiencias, mensajes y vínculos que han podido moldear tu autoconcepto.",
      },
      {
        title: "Trabajar la relación interna",
        description:
          "Exploramos autoexigencia, culpa, comparación y otras dinámicas que sostienen el malestar.",
      },
      {
        title: "Construir formas más seguras de estar contigo",
        description:
          "Buscamos una autoestima más realista, estable y conectada con tus necesidades y valores.",
      },
    ],
    modality: {
      presencial:
        "Sesiones en Chamartín para trabajar con calma tu historia personal, tus vínculos y la forma en la que te tratas.",
      online:
        "Modalidad online si necesitas flexibilidad o quieres empezar desde un entorno conocido sin perder profundidad terapéutica.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de autoestima desde un enfoque respetuoso, sin fórmulas vacías y adaptado a la historia de cada persona.",
    professionalHighlights: [
      "La terapia permite revisar de dónde vienen la autoexigencia y la inseguridad sin convertirlo en otra obligación más.",
      "El trabajo se orienta a construir una relación interna más amable, clara y sostenible.",
    ],
    faqs: [
      {
        question: "¿La autoestima se puede trabajar aunque nunca haya hecho terapia?",
        answer:
          "Sí. Es un motivo de consulta frecuente y no hace falta haber pasado por terapia antes para empezar a trabajarlo.",
      },
      {
        question: "¿Sirve si mi problema principal son mis relaciones?",
        answer:
          "Sí. Muchas veces la autoestima y la forma de vincularnos están muy conectadas, por lo que pueden abordarse juntas.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Ansiedad", href: "/tratamientos/ansiedad" },
      { label: "Terapia de pareja", href: "/tratamientos/terapia-pareja" },
      { label: "Trauma", href: "/tratamientos/trauma" },
    ],
    serviceType: ["Autoestima", "Autoconcepto", "Límites"],
  },
  {
    slug: "terapia-pareja",
    path: "/tratamientos/terapia-pareja",
    navLabel: "Terapia de pareja",
    cardTitle: "Terapia de pareja",
    cardDescription:
      "Para trabajar comunicación, conflictos recurrentes, distancia emocional o dudas sobre la relación.",
    metaTitle: "Terapia de pareja en Madrid y online | Daniela López",
    metaDescription:
      "Terapia de pareja con Daniela López en Madrid y online. Sesiones para comunicación, conflictos recurrentes y seguridad relacional.",
    heroTitle: "Terapia de pareja en Madrid y online",
    heroSubtitle:
      "Un espacio para revisar la comunicación, los conflictos y la forma de vincularos, con una mirada clínica clara y respetuosa.",
    heroBadges: ["Comunicación", "Conflictos", "Vínculo de pareja"],
    introTitle: "Cuándo puede ser útil la terapia de pareja",
    introBody:
      "La terapia de pareja no solo sirve cuando la relación está al límite. También puede ayudar cuando hay distancia emocional, conflictos repetidos, dificultades de comunicación o dudas sobre cómo seguir cuidando el vínculo.",
    introPoints: [
      "Discutís siempre por lo mismo y no encontráis salida.",
      "La distancia emocional o el desgaste se ha instalado.",
      "Queréis entender mejor qué está pasando en la relación.",
    ],
    symptoms: [
      "Conflictos recurrentes que no terminan de resolverse.",
      "Dificultad para hablar sin entrar en defensa o reproche.",
      "Distancia, desconexión o soledad dentro de la relación.",
      "Problemas de confianza, límites o acuerdos.",
      "Desgaste por dinámicas repetitivas.",
      "Dudas sobre continuidad o proyecto común.",
    ],
    approach: [
      {
        title: "Comprender la dinámica relacional",
        description:
          "Observamos qué pasa entre vosotros, qué patrones se repiten y cómo se sostiene el conflicto o la distancia.",
      },
      {
        title: "Mejorar la comunicación",
        description:
          "Trabajamos para expresar necesidades, límites y emociones con más claridad y menos escalada.",
      },
      {
        title: "Tomar decisiones con más conciencia",
        description:
          "La terapia ayuda a cuidar el vínculo o revisar hacia dónde queréis ir desde una posición menos reactiva.",
      },
    ],
    modality: {
      presencial:
        "Sesiones presenciales en Chamartín para trabajar la dinámica de pareja en un entorno neutral y estructurado.",
      online:
        "Sesiones online si necesitáis mayor flexibilidad o vivís en lugares distintos, manteniendo un encuadre claro.",
    },
    professionalBlurb:
      "Daniela acompaña procesos de pareja con una mirada integradora, ayudando a ordenar el conflicto sin simplificar la complejidad del vínculo.",
    professionalHighlights: [
      "El foco está en comprender la dinámica que se repite, no en buscar culpables.",
      "La terapia puede ayudar tanto a cuidar la relación como a tomar decisiones más conscientes.",
    ],
    faqs: [
      {
        question: "¿Tiene sentido ir aunque no haya una crisis grave?",
        answer:
          "Sí. La terapia de pareja también puede ser útil para prevenir desgaste o entender mejor cómo estáis funcionando.",
      },
      {
        question: "¿Se puede hacer terapia de pareja online?",
        answer:
          "Sí. La modalidad online también permite trabajar la dinámica relacional con estructura y continuidad.",
      },
      ...commonFaqs,
    ],
    relatedTreatments: [
      { label: "Autoestima", href: "/tratamientos/autoestima" },
      { label: "Ansiedad", href: "/tratamientos/ansiedad" },
      { label: "Duelo", href: "/tratamientos/duelo" },
    ],
    serviceType: ["Terapia de pareja", "Comunicación", "Vínculo"],
  },
]

export const treatmentRoutes = treatments.map((treatment) => treatment.path)

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug)
}
