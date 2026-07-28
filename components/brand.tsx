import { cn } from '@/lib/utils'

/**
 * Radiating "sunburst" mark used throughout the Peak Form Fitness identity.
 * Built from evenly rotated line segments.
 */
export function Sunburst({
  className,
  lines = 48,
}: {
  className?: string
  lines?: number
}) {
  const strokes = Array.from({ length: lines })
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn('block', className)}
    >
      <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
        {strokes.map((_, i) => {
          const angle = (i / lines) * Math.PI * 2
          const inner = 14
          const outer = 48
          // Round to fixed precision so server and client render identical
          // strings (avoids float-serialization hydration mismatches).
          const x1 = (50 + Math.cos(angle) * inner).toFixed(3)
          const y1 = (50 + Math.sin(angle) * inner).toFixed(3)
          const x2 = (50 + Math.cos(angle) * outer).toFixed(3)
          const y2 = (50 + Math.sin(angle) * outer).toFixed(3)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </g>
    </svg>
  )
}

/** Peak Form "PF" logo mark — a bold ascending chevron. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn('block', className)}
      fill="none"
    >
      <path
        d="M6 30 L20 6 L24 13 L14 30 Z"
        fill="currentColor"
      />
      <path
        d="M20 30 L30 12 L34 19 L27 30 Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <LogoMark className="size-7 text-foreground" />
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Peak Form
      </span>
    </div>
  )
}
