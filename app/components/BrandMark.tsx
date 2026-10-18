export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-badge ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="presentation" className="h-full w-full">
        <rect width="64" height="64" rx="13" fill="#FFFEFA" />
        <text
          x="30"
          y="46"
          textAnchor="middle"
          fill="#6F5EAE"
          style={{
            fontFamily: "var(--font-jost), Jost, Verdana, sans-serif",
            fontWeight: 600,
            fontSize: "44.5px",
            letterSpacing: "-2.2px",
          }}
        >
          dl
        </text>
        <circle cx="50.5" cy="43" r="3" fill="#7F9256" />
      </svg>
    </span>
  )
}
