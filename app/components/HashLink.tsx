"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

export function HashLink({
  targetId,
  className,
  onClick,
  children,
  ...buttonProps
}: {
  targetId: string
  className?: string
  onClick?: () => void
  children: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">) {
  function handleClick() {
    onClick?.()
    const element = document.getElementById(targetId)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <button type="button" onClick={handleClick} className={className} {...buttonProps}>
      {children}
    </button>
  )
}
