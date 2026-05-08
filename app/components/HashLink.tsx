"use client"

import { ReactNode } from "react"

export function HashLink({
  targetId,
  className,
  onClick,
  children,
}: {
  targetId: string
  className?: string
  onClick?: () => void
  children: ReactNode
}) {
  function handleClick() {
    onClick?.()
    const element = document.getElementById(targetId)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
