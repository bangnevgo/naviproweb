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
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
        />
        <div
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300">Ready to Scale? 🚀</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Mulai Lead Generation <br />
            <span className="gradient-text">Otomatis Hari Ini</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 gap-2 text-base px-6"
            >
              <Zap className="w-5 h-5" />
              Coba Gratis 14 Hari
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 gap-2 text-base px-6"
            >
              Jadwalkan Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-white/50 pt-2">
            Tidak perlu kartu kredit · Setup 5 menit · Batalkan kapan saja
          </p>
        </motion.div>
      </div>
    </section>
  )
}
