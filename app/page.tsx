import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhyWorks } from '@/components/why-works'
import { Meals } from '@/components/meals'
import { Yoga } from '@/components/yoga'
import { Events } from '@/components/events'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <WhyWorks />
      <Meals />
      <Yoga />
      <Events />
      <SiteFooter />
    </main>
  )
}
