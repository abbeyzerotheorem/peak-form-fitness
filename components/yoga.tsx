import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const STYLES = [
  { src: '/images/yoga-1.png', label: 'Deep Mobility' },
  { src: '/images/yoga-2.png', label: 'Calm & Restore' },
  { src: '/images/yoga-3.png', label: 'Steady Balance' },
  { src: '/images/yoga-4.png', label: 'Open & Lengthen' },
  { src: '/images/yoga-5.png', label: 'Sun Sequence' },
  { src: '/images/yoga-6.png', label: 'Power Flow' },
]

export function Yoga() {
  return (
    <section id="yoga" className="bg-greige py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            A flow for every
            <br />
            kind of <span className="italic text-accent">day</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Pick the practice that fits your mood and your goal—wind down,
            build balance, or move with intensity. Each class is led by
            instructors who meet you where you are.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STYLES.map((s) => (
            <div
              key={s.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-background"
            >
              <Image
                src={s.src}
                alt={`${s.label} yoga pose`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="z-[1] object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 z-10">
                <a
                  href="#events"
                  className="flex items-center justify-between gap-2 rounded-full bg-card/90 px-4 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  {s.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Browse All Classes
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
