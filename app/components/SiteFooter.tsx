import { Phone } from "lucide-react"
import { CookieSettingsButton } from "./CookieSettingsButton"
import { DoctoraliaLogo, InstagramLogo } from "./BrandIcons"
import { HashLink } from "./HashLink"
import { doctoraliaUrl, instagramUrl } from "../data/site"

type SiteFooterProps = {
  /** Página de origen, solo para analítica de eventos */
  page?: "landing" | "contact" | "about" | "treatment"
}

export function SiteFooter({ page = "landing" }: SiteFooterProps) {
  return (
    <footer className="border-t border-marino bg-marino py-12 text-texto-inv-2">
      <div className="mx-auto mb-10 max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <aside className="crisis-note" role="note">
          Esta consulta no es un servicio de urgencias. Si hay riesgo inmediato, llama al{" "}
          <a href="tel:112">112</a>. Línea de atención a la conducta suicida:{" "}
          <a href="tel:024">024</a>.
        </aside>
      </div>
      <div className="mx-auto grid max-w-[1120px] gap-8 px-4 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="mb-4 font-serif text-lg font-medium text-crema">Daniela López Meléndez</h2>
          <p>Psicóloga General Sanitaria</p>
          <p>Colegiada M-41829</p>
          {/* TODO: nº registro sanitario */}
        </div>
        <div>
          <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">
            Contacto
          </h2>
          <a href="tel:+34614412183" className="mb-3 flex items-center gap-2 transition-colors hover:text-crema">
            <Phone className="h-4 w-4" />
            +34 614 412 183
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_instagram"
            data-location="footer"
            data-page={page}
            data-channel="instagram"
            className="flex items-center gap-2 transition-colors hover:text-crema"
          >
            <InstagramLogo className="h-4 w-4" />
            @psico.danilopez
          </a>
        </div>
        <div>
          <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">
            Consulta
          </h2>
          <p>C. de Marcenado, 14, Despacho 2</p>
          <p>Chamartín, 28002 Madrid</p>
          <p className="mt-2 text-texto-inv-2/80">Consulta independiente dentro del centro Psicotep</p>
        </div>
        <div>
          <h2 className="mb-4 font-brand text-xs font-medium uppercase tracking-[0.12em] text-crema">
            Enlaces
          </h2>
          <a
            href={doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_doctoralia"
            data-location="footer"
            data-page={page}
            data-channel="doctoralia"
            className="mb-2 block transition-colors hover:text-crema"
          >
            Doctoralia
          </a>
          <a href="/quien-soy" className="mb-2 block transition-colors hover:text-crema">
            Quién soy
          </a>
          <a href="/contacto" className="mb-2 block transition-colors hover:text-crema">
            Contacto
          </a>
          <HashLink
            targetId="reserva"
            data-event="click_prices"
            data-location="footer"
            data-page={page}
            data-channel="internal_cta"
            className="mb-2 block text-left transition-colors hover:text-crema"
          >
            Precios
          </HashLink>
          <a href="/politica-privacidad" className="mb-2 block transition-colors hover:text-crema">
            Política de privacidad
          </a>
          <a href="/politica-cookies" className="mb-2 block transition-colors hover:text-crema">
            Política de cookies
          </a>
          <a href="/aviso-legal" className="mb-2 block transition-colors hover:text-crema">
            Aviso legal
          </a>
          <CookieSettingsButton className="block text-left transition-colors hover:text-crema" />
        </div>
      </div>
    </footer>
  )
}
