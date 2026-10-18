"use client"

import { usePathname } from "next/navigation"
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

export function HashLink({
  targetId,
  className,
  onClick,
  children,
  ...linkProps
}: {
  targetId: string
  className?: string
  onClick?: () => void
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick" | "href">) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    onClick?.()

    const element = document.getElementById(targetId)

    if (!element) {
      window.location.href = `/#${targetId}`
      return
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${targetId}`)
  }

  return (
    <a href={isHome ? `#${targetId}` : `/#${targetId}`} onClick={handleClick} className={className} {...linkProps}>
      {children}
    </a>
  )
}
