import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const STYLES = [
  { src: '/images/yoga-1.png', label: 'Deep Mobility', category: 'Mobility' },
  { src: '/images/yoga-2.png', label: 'Calm & Restore', category: 'Restore' },
  { src: '/images/yoga-3.png', label: 'Steady Balance', category: 'Balance' },
  { src: '/images/yoga-4.png', label: 'Open & Lengthen', category: 'Flexibility' },
  { src: '/images/yoga-5.png', label: 'Sun Sequence', category: 'Flow' },
  { src: '/images/yoga-6.png', label: 'Power Flow', category: 'Strength' },
]

const entranceEase = 'cubic-bezier(0.16, 1, 0.3, 1)'
const entranceDuration = '0.6s'

export function Yoga() {
  return (
    <section id="yoga" className="bg-greige py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <h2
            className={`font-display text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl animate-[fade-rise_${entranceDuration}_${entranceEase}_forwards]`}
            style={{ animationName: 'fade-rise' }}
          >
            A flow for every
            <br />
            kind of <span className="italic text-accent">day</span>
          </h2>
          <p
            className={`max-w-md text-base leading-relaxed text-muted-foreground animate-[fade-rise_${entranceDuration}_${entranceEase}_0.12s_forwards]`}
            style={{
              animationName: 'fade-rise',
              animationDelay: '0.12s',
            }}
          >
            Pick the practice that fits your mood and your goal—wind down,
            build balance, or move with intensity. Each class is led by
            instructors who meet you where you are.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STYLES.map((s, i) => {
            const delay = `${i * 0.08}s`
            return (
              <article
                key={s.label}
                className="group relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-background shadow-sm transition-all duration-500 ease-out"
                style={{
                  animationName: 'fade-rise',
                  animationDuration: entranceDuration,
                  animationTimingFunction: entranceEase,
                  animationDelay: delay,
                  animationFillMode: 'forwards',
                  opacity: 0,
                  transform: 'translateY(28px)',
                }}
                aria-label={s.label}
              >
                {/* Decorative top glow */}
                <span
                  className="absolute -top-1 -left-1 -right-1 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Background image — immersive */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={s.src}
                    alt={`${s.label} yoga pose`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center will-change-transform transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={i < 2}
                  />
                  {/* Depth overlay: darker bottom, subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_center,_transparent_0%,_rgba(0,0,0,0.35)_100%)] pointer-events-none" />
                </div>

                {/* Top-left category badge */}
                <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm transition-opacity duration-300 group-hover:opacity-0 group-hover:translate-y-[-6px]">
                  {s.category}
                </div>

                {/* Floating "Yoga" watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-8 z-10 text-center font-display text-7xl font-extrabold uppercase tracking-tighter text-foreground/8 will-change-transform"
                >
                  Yoga
                </span>

                {/* Content card — slides up from bottom on hover */}
                <div
                  className="absolute inset-x-0 bottom-[-60%] z-20 flex flex-col gap-2 p-6 pt-[120%] bg-background/95 backdrop-blur-md border-t border-border/40 transition-all duration-500 ease-out will-change-transform group-hover:bottom-0"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {s.label}
                  </h3>
                  <a
                    href="#events"
                    className="mt-2 inline-flex items-center justify-between w-full gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]"
                  >
                    Explore {s.label}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-md"
          >
            Browse All Classes
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
