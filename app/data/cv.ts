export type TrainingItem = {
  year: string
  title: string
  center: string
}

/** Titulaciones académicas. */
export const degrees: TrainingItem[] = [
  {
    year: "2023",
    title: "Grado en Psicología",
    center: "Universidad Nebrija, Madrid",
  },
  {
    year: "2025",
    title: "Máster en Psicología General Sanitaria",
    center: "Universidad Europea, Tenerife",
  },
  {
    year: "2026",
    title: "Máster en Psicología Infanto-Juvenil",
    center: "Academia AMIR, Madrid",
  },
]

/** Cursos y formación complementaria. */
export const courses: TrainingItem[] = [
  {
    year: "2026",
    title: "Estrategias y técnicas de intensidad emocional",
    center: "Eduardo Torres Psicología",
  },
  {
    year: "2026",
    title: "Guion de vida del paciente",
    center: "Eduardo Torres Psicología",
  },
  {
    year: "2023",
    title: "Psicóloga orientadora en intervención en crisis",
    center: "Fundación ANAR",
  },
  {
    year: "2023",
    title: "Curso experto en prevención e intervención en la conducta suicida",
    center: "AEPSIS",
  },
  {
    year: "2023",
    title: "Curso experto en trauma",
    center: "AEPSIS",
  },
]
