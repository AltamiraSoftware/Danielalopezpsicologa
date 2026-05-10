"use client"

import { useEffect } from "react"

const revealSelector = [
  "main > section",
  "main article",
  "main form",
  "main iframe",
  "[data-reveal]",
].join(",")

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (element) => !element.closest("[data-no-reveal]"),
    )

    elements.forEach((element, index) => {
      element.dataset.reveal = "true"
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.setAttribute("data-reveal-visible", "true")
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}
