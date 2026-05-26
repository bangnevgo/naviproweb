'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Pipeline } from '@/components/pipeline'
import { Features } from '@/components/features'
import { Solutions } from '@/components/solutions'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { ContactChannels } from '@/components/contact-channels'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Pipeline />
        <Features />
        <Solutions />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
        <ContactChannels />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
