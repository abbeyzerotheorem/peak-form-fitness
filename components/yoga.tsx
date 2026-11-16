'use client'

import { motion, cubicBezier } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const STYLES = [
  { src: '/images/yoga-1.png', label: 'Deep Mobility' },
  { src: '/images/yoga-2.png', label: 'Calm & Restore' },
  { src: '/images/yoga-3.png', label: 'Steady Balance' },
  { src: '/images/yoga-4.png', label: 'Open & Lengthen' },
  { src: '/images/yoga-5.png', label: 'Sun Sequence' },
  { src: '/images/yoga-6.png', label: 'Power Flow' },
]

/* ------------------------------------------------------------------ */
/*  Entrance choreography                                             */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // 70ms stagger between cards
    },
  },
}

const entranceEase = cubicBezier(0.16, 1, 0.3, 1)

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: entranceEase,
      duration: 0.6,
    },
  },
}

/* ------------------------------------------------------------------ */
/*  Hover / tap micro-interactions                                    */
/* ------------------------------------------------------------------ */

const cardHover = {
  scale: 1.01,
  boxShadow:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
}

const cardTap = { scale: 0.98 }

const linkHover = { scale: 1.01 }
const linkTap = { scale: 0.98 }

const imageHover = { scale: 1.05 }
const imageTransition = {
  duration: 0.4,
  ease: 'easeOut' as const,
}

export function Yoga() {
  return (
    <section id="yoga" className="bg-greige py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <motion.h2
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: entranceEase, duration: 0.6 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl"
          >
            A flow for every
            <br />
            kind of <span className="italic text-accent">day</span>
          </motion.h2>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: entranceEase,
              duration: 0.6,
              delay: 0.12,
            }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Pick the practice that fits your mood and your goal—wind down,
            build balance, or move with intensity. Each class is led by
            instructors who meet you where you are.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STYLES.map((s) => (
            <motion.div
              key={s.label}
              variants={cardVariants}
              initial="hidden"
              whileHover={cardHover}
              whileTap={cardTap}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-background"
              aria-label={s.label}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-6 z-0 text-center font-display text-6xl font-extrabold uppercase tracking-tight text-foreground/10 will-change-transform"
              >
                Yoga
              </span>
              <motion.img
                src={s.src}
                alt={`${s.label} yoga pose`}
                whileHover={imageHover}
                transition={imageTransition}
                className="w-full h-full object-cover z-[1] will-change-transform"
              />
              <div className="absolute inset-x-4 bottom-4 z-10">
                <motion.a
                  href="#events"
                  whileHover={linkHover}
                  whileTap={linkTap}
                  className="flex items-center justify-between gap-2 rounded-full bg-card/90 px-4 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md will-change-transform"
                >
                  {s.label}
                  <ArrowRight
                    className="size-4 transition-transform will-change-transform"
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
