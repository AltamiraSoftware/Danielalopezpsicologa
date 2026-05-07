"use client"

import { ReactNode } from "react"

export function HashLink({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: ReactNode
}) {
  function handleClick() {
    const element = document.getElementById(targetId)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${targetId}`)
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
