'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Leaf, Beef } from 'lucide-react'
import { Sunburst } from '@/components/brand'

export function Meals() {
  const [diet, setDiet] = useState<'non-vegan' | 'vegan'>('non-vegan')

  return (
    <section id="meals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            Fit your body with{' '}
            <span className="italic text-accent">balanced meals</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            With options for every dietary preference—including vegan,
            non-vegan, and allergy-friendly choices—our recipes help you enjoy
            delicious, nutritious meals while staying on track with your goals.
          </p>

          {/* Diet toggle */}
          <div className="mt-8 inline-flex gap-3 rounded-2xl border border-border bg-card p-2">
            <button
              type="button"
              onClick={() => setDiet('non-vegan')}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                diet === 'non-vegan'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Beef className="size-5 shrink-0" />
              <span className="flex flex-col">
                <span className="text-sm font-semibold">Non Vegan</span>
                {diet === 'non-vegan' && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium opacity-90">
                    Start Journey <ArrowRight className="size-3" />
                  </span>
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDiet('vegan')}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                diet === 'vegan'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Leaf className="size-5 shrink-0" />
              <span className="flex flex-col">
                <span className="text-sm font-semibold">Vegan</span>
                {diet === 'vegan' && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium opacity-90">
                    Start Journey <ArrowRight className="size-3" />
                  </span>
                )}
              </span>
            </button>
          </div>

          <p className="mt-8 font-display text-xl italic text-foreground">
            Coach Amelia
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Head of Nutrition · Peak Form
          </p>
        </div>

        {/* Image + calorie card */}
        <div className="relative">
          <Sunburst className="absolute -left-4 -top-4 z-10 size-14 text-accent/60" lines={36} />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-greige">
            <Image
              src="/images/meal-bowl.png"
              alt="Hands holding a healthy breakfast bowl"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute right-4 top-4 w-56 rounded-2xl border border-border/60 bg-background/85 p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-foreground">
                  Calories
                </span>
                <span className="font-display text-lg font-bold text-foreground">
                  2091
                  <span className="text-xs font-medium text-muted-foreground">
                    /2400
                  </span>
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[87%] rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Stay on track with daily meal guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
