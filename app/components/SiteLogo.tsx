import { BrandMark } from "./BrandMark"

type SiteLogoProps = {
  name?: string
  onClick?: () => void
}

export function SiteLogo({ name = "Daniela López", onClick }: SiteLogoProps) {
  return (
    <a
      href="/"
      onClick={onClick}
      className="flex min-w-0 items-center gap-4"
      aria-label="Daniela López, psicóloga — inicio"
    >
      <BrandMark className="h-12 w-12 shrink-0 sm:h-[52px] sm:w-[52px]" />
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className="block truncate font-serif text-[22px] font-normal leading-none text-crema sm:text-[26px]">
          {name}
        </span>
        <span className="block truncate font-brand text-[10.5px] font-medium uppercase leading-none tracking-[0.12em] text-crema/65 sm:text-[11px]">
          Psicóloga General Sanitaria · Madrid
        </span>
      </span>
    </a>
  )
}
