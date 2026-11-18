import { WhatsAppLogo } from "./BrandIcons"
import { whatsappUrl } from "../data/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      data-event="click_whatsapp"
      data-location="floating"
      data-page="site"
      data-channel="whatsapp"
      className="fixed bottom-24 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-2 transition-colors hover:bg-whatsapp-600 sm:flex"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppLogo className="h-10 w-10" />
    </a>
  )
}
