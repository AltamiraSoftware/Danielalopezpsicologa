"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { faqs } from "../data/faq"

const cardGlass =
  "rounded-[30px] border border-white/65 bg-white/18 shadow-[0_24px_60px_rgba(38,56,91,0.12)] backdrop-blur-xl transition-all hover:border-white/80 hover:bg-white/24"

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={faq.question} className={`overflow-hidden ${cardGlass}`}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-5 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="pr-4 font-semibold text-[#26385B]">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 shrink-0 text-[#6F6D9E]" />
            ) : (
              <ChevronDown className="h-5 w-5 shrink-0 text-[#5D6680]" />
            )}
          </button>
          {openIndex === index && (
            <div id={`faq-answer-${index}`} className="border-t border-[#E6E1D3]/70 px-5 pb-5 pt-3">
              <p className="text-[#5D6680]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
