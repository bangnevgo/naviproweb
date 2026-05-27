'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden cta-gradient" ref={sectionRef}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
        />
        <div
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--chart-2), transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--chart-3), transparent)' }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary/80">Siap Tingkatkan Penjualan?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Mulai Cari Calon Pembeli <br />
            <span className="gradient-text-shimmer">Otomatis Hari Ini</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href="/demo.html">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground hover:opacity-90 gap-2 text-base px-6 shadow-lg shadow-primary/25"
              >
                <Zap className="w-5 h-5" />
                Coba Gratis 14 Hari
              </Button>
            </a>
            <a href="/demo.html">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-muted-foreground hover:bg-primary/10 hover:text-primary gap-2 text-base px-6"
              >
                Jadwalkan Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            Tidak perlu kartu kredit · Setup 5 menit · Batalkan kapan saja
          </p>
        </motion.div>
      </div>
    </section>
  )
}
