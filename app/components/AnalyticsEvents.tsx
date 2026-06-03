"use client"

import { useEffect } from "react"

type DataLayerEvent = {
  event: string
  event_category?: string
  cta_location?: string
  location?: string
  page?: string
  channel?: string
  link_url?: string
  link_text?: string
  page_path?: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

function getText(element: HTMLElement) {
  return element.innerText.replace(/\s+/g, " ").trim().slice(0, 120)
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target

      if (!(target instanceof Element)) return

      const trackingElement = target.closest<HTMLElement>("[data-event]")

      if (!trackingElement || trackingElement instanceof HTMLFormElement) return

      const eventName = trackingElement.dataset.event

      if (!eventName) return

      const link = trackingElement.closest<HTMLAnchorElement>("a[href]")

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: eventName,
        event_category: "interaction",
        location: trackingElement.dataset.location,
        cta_location: trackingElement.dataset.location,
        page: trackingElement.dataset.page,
        channel: trackingElement.dataset.channel,
        link_url: link?.href,
        link_text: getText(trackingElement),
        page_path: window.location.pathname,
      })
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [])

  return null
}
