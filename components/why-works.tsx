import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const ORGANS = [
  { src: '/images/organ-liver.png', label: 'Metabolism', href: '#how-it-works' },
  { src: '/images/organ-heart.png', label: 'Healthy Heart', href: '#how-it-works', active: true },
  { src: '/images/organ-cells.png', label: 'Circulation', href: '#how-it-works' },
]

export function WhyWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-1 gap-6 rounded-[2rem] bg-greige p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
        {/* Legs image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-background lg:aspect-auto">
          <Image
            src="/images/legs-running.png"
            alt="Athletic legs mid-stride in running shoes"
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover"
          />
        </div>

        {/* Copy + organ cards */}
        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-3xl bg-background/70 p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Built On The Science
            </span>
            <p className="mt-3 text-lg leading-relaxed text-foreground text-pretty">
              Real training changes what happens inside you. The right work
              strengthens your heart, sharpens circulation, and helps your body
              recover and adapt faster with every session.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {ORGANS.map((o) => (
              <a
                key={o.label}
                href={o.href}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl border border-border/50 bg-background p-3 transition-transform hover:-translate-y-1"
              >
                <Image
                  src={o.src}
                  alt={o.label}
                  fill
                  sizes="(max-width: 640px) 30vw, 15vw"
                  className="object-contain p-4"
                />
                <div
                  className={`relative z-10 flex items-center justify-between gap-1 rounded-full px-3 py-2 text-[11px] font-semibold ${
                    o.active
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100'
                  }`}
                >
                  <span className="truncate">{o.label}</span>
                  <ArrowUpRight className="size-3 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
