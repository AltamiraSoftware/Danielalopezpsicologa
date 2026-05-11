export function WhatsAppLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`${className} block`} fill="currentColor" preserveAspectRatio="xMidYMid meet">
      <path d="M16.04 3.2A12.74 12.74 0 0 0 5.1 22.48L3.68 28.8l6.46-1.5A12.73 12.73 0 1 0 16.04 3.2Zm0 2.32a10.41 10.41 0 0 1 8.86 15.9 10.42 10.42 0 0 1-13.74 3.46l-.43-.25-3.92.91.86-3.82-.28-.45A10.42 10.42 0 0 1 16.04 5.52Zm-4.1 5.39c-.22 0-.58.08-.9.44-.3.36-1.18 1.16-1.18 2.82 0 1.66 1.21 3.27 1.38 3.49.17.22 2.34 3.74 5.78 5.1 2.86 1.13 3.44.9 4.06.85.62-.06 2-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.08-.15-.31-.23-.65-.4-.34-.17-2-.99-2.3-1.1-.31-.11-.54-.17-.76.17-.23.34-.88 1.1-1.07 1.32-.2.22-.4.25-.73.08-.34-.17-1.43-.53-2.72-1.68-1-.9-1.68-2.02-1.88-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.5-.59.17-.2.23-.34.34-.56.11-.23.06-.43-.03-.6-.08-.17-.76-1.84-1.04-2.52-.27-.65-.55-.56-.76-.57h-.65Z" />
    </svg>
  )
}

export function InstagramLogo({ className = "h-5 w-5", gradientId = "instagram-gradient" }: { className?: string; gradientId?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`${className} block`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={gradientId} x1="5" x2="27" y1="27" y2="5">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.35" stopColor="#FA7E1E" />
          <stop offset="0.62" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="25" height="25" x="3.5" y="3.5" rx="7" fill={`url(#${gradientId})`} />
      <circle cx="16" cy="16" r="5.2" fill="none" stroke="white" strokeWidth="2.2" />
      <circle cx="22.4" cy="9.8" r="1.6" fill="white" />
    </svg>
  )
}

export function DoctoraliaLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`${className} block`} preserveAspectRatio="xMidYMid meet">
      <circle cx="16" cy="16" r="14" fill="#00B39B" />
      <path
        d="M10.2 8.4h5.9c4.1 0 7 2.8 7 7.5 0 4.8-2.9 7.7-7 7.7h-5.9V8.4Zm5.7 11.9c2.2 0 3.6-1.55 3.6-4.35 0-2.75-1.4-4.25-3.6-4.25h-2.15v8.6h2.15Z"
        fill="white"
      />
    </svg>
  )
}
