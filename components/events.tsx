import { Sunburst } from '@/components/brand'

const EVENTS = [
  {
    n: '01',
    title: 'Peak Wellness Expo',
    meta: 'Full-day event · 01.03.2026',
    place: 'Summit Arena',
  },
  {
    n: '02',
    title: 'Mind Balance Retreat',
    meta: 'Full-day event · 08.03.2026',
    place: 'Summit Arena',
  },
  {
    n: '03',
    title: 'Strength Training Workshop',
    meta: 'Full-day workshop · 14.04.2026',
    place: 'Summit Arena',
  },
  {
    n: '04',
    title: 'Meal Planning Seminar',
    meta: 'Full-day seminar · 23.04.2026',
    place: 'Summit Arena',
  },
]

function Marquee() {
  const items = Array.from({ length: 6 })
  return (
    <div className="flex select-none overflow-hidden border-y border-border py-6">
      <div className="flex animate-marquee items-center whitespace-nowrap will-change-transform">
        {items.map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-8 font-display text-4xl font-bold uppercase tracking-tight text-foreground/80 sm:text-5xl">
              Exhibition
            </span>
            <Sunburst className="size-8 text-accent/70" lines={32} />
          </span>
        ))}
      </div>
    </div>
  )
}

export function Events() {
  return (
    <section id="events" className="py-16 lg:py-24">
      <Marquee />

      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <ul className="divide-y divide-border">
          {EVENTS.map((e) => (
            <li
              key={e.n}
              className="group grid grid-cols-1 items-center gap-4 py-6 sm:grid-cols-[auto_1fr_auto_auto] sm:gap-8"
            >
              <span className="font-display text-sm font-semibold text-muted-foreground">
                {e.n}
              </span>
              <h3 className="font-display text-2xl font-bold italic tracking-tight text-foreground sm:text-3xl">
                {e.title}
              </h3>
              <div className="text-sm text-muted-foreground sm:text-right">
                <p>{e.meta}</p>
                <p className="text-xs">({e.place})</p>
              </div>
              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Reserve Your Spot
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
