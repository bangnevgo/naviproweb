'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crosshair, Grid3X3, Shield, Link2, Mail, MessageSquare, ArrowRight } from 'lucide-react'

const pipelineSteps = [
  {
    step: '01',
    icon: Crosshair,
    title: 'Data Scraper',
    description: 'Koleksi data masif dari berbagai platform e-commerce secara real-time',
    features: ['Auto-detection', 'Multi-platform', 'Data cleansing'],
    gradient: 'from-cyan-500 to-cyan-400',
  },
  {
    step: '02',
    icon: Grid3X3,
    title: 'Data Enricher',
    description: 'Enrichment data dengan AI-powered insights',
    features: ['Niche detection', 'GMV analysis', 'Signal processing'],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    step: '03',
    icon: Shield,
    title: 'AI Scorer',
    description: 'Scoring system canggih dengan 100 parameter',
    features: ['Rating analysis', 'Order patterns', 'Revenue prediction'],
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    step: '04',
    icon: Link2,
    title: 'URL Generator',
    description: 'Generate personalized demo pages dengan tracking unik',
    features: ['Unique tracking URLs', 'Analytics integration', 'CRM sync'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    step: '05',
    icon: Mail,
    title: 'Message Composer',
    description: 'AI-powered message generation yang personal',
    features: ['Personalized templates', 'Tone adaptation', 'A/B testing'],
    gradient: 'from-purple-500 to-fuchsia-500',
  },
  {
    step: '06',
    icon: MessageSquare,
    title: 'Multi-Channel DM',
    description: 'Kirim pesan ke berbagai platform sekaligus',
    features: ['TikTok DM', 'Shopee Chat', 'Instagram DM & Email'],
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

function PipelineCard({ step, index }: { step: typeof pipelineSteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-72 group"
    >
      <div className="glass-card rounded-xl border border-white/20 dark:border-white/10 bg-card/80 dark:bg-white/5 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 h-full">
        {/* Step number */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-black gradient-text opacity-40">{step.step}</span>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2">{step.title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

        {/* Features */}
        <ul className="space-y-1.5">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Pipeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="pipeline" className="py-20 lg:py-28 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-cyan-600 dark:text-cyan-400">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            6-Agent <span className="gradient-text">AI Pipeline</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Dari data mentah hingga DM terkirim — semuanya otomatis dalam satu pipeline AI yang cerdas.
          </p>
        </motion.div>

        {/* Pipeline cards - horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {pipelineSteps.map((step, index) => (
            <div key={step.step} className="snap-start">
              <PipelineCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* Connector arrows for desktop */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.step} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
