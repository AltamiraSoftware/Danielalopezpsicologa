"use client"

import { createContext, useContext, useState } from "react"
import { FreeCallWidget } from "./FreeCallWidget"

const FreeCallModalContext = createContext<(() => void) | null>(null)

export function FreeCallModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FreeCallModalContext.Provider value={() => setIsOpen(true)}>
      {children}
      <FreeCallWidget isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} />
    </FreeCallModalContext.Provider>
  )
}

export function useFreeCallModal() {
  const open = useContext(FreeCallModalContext)

  if (!open) {
    throw new Error("useFreeCallModal must be used within FreeCallModalProvider")
  }

  return open
}
