"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { DoctoraliaLogo, GoogleLogo } from "./BrandIcons"
import { reviews } from "../data/reviews"

const sourceLabel = {
  doctoralia: "Doctoralia",
  google: "Google",
} as const

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScrollPrev(track.scrollLeft > 4)
    setCanScrollNext(track.scrollLeft < maxScroll - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updateArrows()
    track.addEventListener("scroll", updateArrows, { passive: true })
    window.addEventListener("resize", updateArrows)

    return () => {
      track.removeEventListener("scroll", updateArrows)
      window.removeEventListener("resize", updateArrows)
    }
  }, [updateArrows])

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({ left: direction * Math.round(track.clientWidth * 0.9), behavior: "smooth" })
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Opiniones de pacientes en Doctoralia y Google"
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, index) => (
          <article
            key={`${review.source}-${index}`}
            className="flex shrink-0 basis-[86%] snap-start flex-col rounded-[24px] border border-linea bg-white p-6 shadow-1 sm:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-11px)]"
            role="group"
            aria-roledescription="opinión"
            aria-label={`Opinión ${index + 1} de ${reviews.length}`}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-linea bg-white px-3 py-1.5 text-xs font-bold text-marino">
                {review.source === "doctoralia" ? (
                  <DoctoraliaLogo className="h-4 w-4" />
                ) : (
                  <GoogleLogo className="h-4 w-4" />
                )}
                {sourceLabel[review.source]}
              </span>
              <span className="flex items-center gap-0.5" aria-label={`${review.rating} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-3.5 w-3.5 text-lavanda-600"
                    fill={starIndex < review.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </span>
            </div>

            <p className="grow font-serif text-lg italic leading-snug text-marino">“{review.text}”</p>

            <p className="mt-5 text-sm font-medium text-texto-3">
              {review.date}
              {review.verified ? " · Opinión verificada" : ""}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={!canScrollPrev}
          aria-label="Ver opiniones anteriores"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-marino bg-marino text-white shadow-2 transition-all hover:-translate-y-0.5 hover:border-marino-800 hover:bg-marino-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-linea-fuerte disabled:bg-white disabled:text-texto-3 disabled:shadow-none"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={!canScrollNext}
          aria-label="Ver más opiniones"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-marino bg-marino text-white shadow-2 transition-all hover:-translate-y-0.5 hover:border-marino-800 hover:bg-marino-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-linea-fuerte disabled:bg-white disabled:text-texto-3 disabled:shadow-none"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
