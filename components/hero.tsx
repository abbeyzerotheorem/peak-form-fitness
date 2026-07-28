import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Sunburst } from '@/components/brand'

function MiniBars() {
  const bars = [40, 62, 48, 90, 55, 70, 44]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="flex items-end gap-1.5" aria-hidden="true">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <div
            className={`w-2.5 rounded-full ${i === 3 ? 'bg-accent' : 'bg-primary/15'}`}
            style={{ height: `${h}px` }}
          />
          <span className="text-[9px] font-medium text-muted-foreground">
            {days[i]}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-8 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pt-16">
        {/* Left copy */}
        <div className="relative z-10 flex flex-col justify-center">
          <Sunburst className="mb-6 size-12 text-accent/70 lg:size-14" lines={40} />
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Perfect fitness
            <br />
            path with{' '}
            <span className="italic text-accent">Peak Form</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Unlock your full potential with tailored training programs, all
            crafted to help you achieve your fitness goals and reach your peak
            condition.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#events"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Join Our Community
              </p>
              <div className="mt-1.5 flex items-center gap-3 text-muted-foreground">
                {['Discord', 'Instagram', 'YouTube', 'X'].map((s) => (
                  <a
                    key={s}
                    href="#contact"
                    className="text-xs font-medium transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10 border-t border-border pt-8">
            <div>
              <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                500k+
              </p>
              <p className="mt-1 max-w-[10rem] text-xs text-muted-foreground">
                Personalized training programs delivered
              </p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                10k+
              </p>
              <p className="mt-1 max-w-[10rem] text-xs text-muted-foreground">
                Active members achieving real results
              </p>
            </div>
          </div>
        </div>

        {/* Right image + floating cards */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-greige sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/images/hero-athlete.png"
              alt="Athlete in blue training top flexing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />

            {/* Weekly overview card */}
            <div className="absolute right-4 top-4 w-44 rounded-2xl border border-border/60 bg-background/85 p-3 shadow-lg backdrop-blur-md">
              <p className="text-[11px] font-semibold text-foreground">
                Weekly Overview
              </p>
              <p className="mb-2 text-[9px] text-muted-foreground">
                Apr 01 – Apr 07
              </p>
              <MiniBars />
              <p className="mt-2 text-[9px] font-medium text-muted-foreground">
                Peak performance on Thursday
              </p>
            </div>

            {/* Members joined card */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/85 p-3 shadow-lg backdrop-blur-md">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  'oklch(0.58 0.19 258)',
                  'oklch(0.24 0.03 265)',
                  'oklch(0.7 0.14 250)',
                  'oklch(0.8 0.02 85)',
                ].map((c, i) => (
                  <span
                    key={i}
                    className="size-7 rounded-full border-2 border-background"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <p className="text-[11px] font-semibold text-foreground">
                  Members Joined
                </p>
                <p className="text-[10px] text-muted-foreground">12k+ this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
