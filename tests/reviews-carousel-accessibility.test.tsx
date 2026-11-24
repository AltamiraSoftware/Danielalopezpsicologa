import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { ReviewsCarousel } from "../app/components/ReviewsCarousel"
import { reviews } from "../app/data/reviews"

afterEach(cleanup)

describe("ReviewsCarousel", () => {
  it("expone cada valoración como una imagen etiquetada y oculta las estrellas decorativas", () => {
    render(<ReviewsCarousel />)

    const ratings = screen.getAllByRole("img", { name: /de 5 estrellas$/ })

    expect(ratings).toHaveLength(reviews.length)
    ratings.forEach((rating) => {
      expect(rating.tagName).toBe("SPAN")
      expect(rating.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(5)
    })
  })
})
