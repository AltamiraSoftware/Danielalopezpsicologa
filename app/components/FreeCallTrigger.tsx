"use client"

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react"
import { useFreeCallModal } from "./FreeCallModalProvider"

type FreeCallTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function FreeCallTrigger({ children, onClick, ...props }: FreeCallTriggerProps) {
  const openFreeCallModal = useFreeCallModal()

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event)
    if (event.defaultPrevented) return
    openFreeCallModal()
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
