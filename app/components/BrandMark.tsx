import Image from "next/image"

/** Isotipo botánico original de Daniela López, en SVG escalable. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-badge ${className}`} aria-hidden="true">
      <Image
        src="/logo-daniela-isotipo.svg"
        alt=""
        width={64}
        height={64}
        unoptimized
        className="block h-full w-full object-contain p-1.5"
      />
    </span>
  )
}
