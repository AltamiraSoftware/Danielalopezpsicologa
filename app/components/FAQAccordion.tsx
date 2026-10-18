import { ChevronDown } from "lucide-react"
import { faqs } from "../data/faq"

export function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          name="faq"
          className="faq-item group overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm transition-colors open:border-lavanda/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-marino marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-texto-3 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="border-t border-linea px-5 pb-5 pt-3">
            <p className="text-texto-2">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
