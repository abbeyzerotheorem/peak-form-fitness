'use client'

import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/brand'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Meals', href: '#meals' },
  { label: 'Yoga', href: '#yoga' },
  { label: 'Events', href: '#events' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border border-border/70 bg-background/80 px-4 py-2.5 shadow-sm backdrop-blur-md">
          <a href="#top" className="shrink-0">
            <Logo />
            <span className="sr-only">Peak Form Fitness home</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-muted sm:inline-flex"
            >
              Contact Us
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden rounded-3xl transition-all lg:hidden',
            open ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <nav className="flex flex-col gap-1 rounded-3xl border border-border/70 bg-card/95 p-3 shadow-sm backdrop-blur-md">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact Us
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
