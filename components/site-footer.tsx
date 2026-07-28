import { ArrowUpRight } from 'lucide-react'
import { LogoMark, Sunburst } from '@/components/brand'

const COLUMNS = [
  {
    title: 'Programs',
    links: ['Strength', 'Yoga', 'Nutrition', 'Cardio'],
  },
  {
    title: 'Company',
    links: ['About', 'Coaches', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Contact', 'FAQ', 'Community', 'Help Center'],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* CTA */}
        <div className="grid grid-cols-1 gap-8 border-b border-primary-foreground/15 pb-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Sunburst className="mb-6 size-12 text-accent" lines={40} />
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              Ready to reach your{' '}
              <span className="italic text-accent">peak form?</span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Join thousands of members transforming their lives with tailored
              training, expert coaching, and a community that lifts you higher.
            </p>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              action="#"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Join Now
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark className="size-7 text-accent" />
              <span className="font-display text-lg font-bold">Peak Form</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-primary-foreground/60">
              Train smarter. Eat better. Reach your peak.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-4 px-4 pb-6">
          <LogoMark className="size-16 shrink-0 text-accent sm:size-24 lg:size-32" />
          <span className="font-display text-[18vw] font-extrabold leading-none tracking-tighter text-primary-foreground/95 lg:text-[15rem]">
            Peak Form
          </span>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-primary-foreground/15 px-4 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:px-6">
          <p>© 2026 Peak Form Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
