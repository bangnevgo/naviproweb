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
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    step: '02',
    icon: Grid3X3,
    title: 'Data Enricher',
    description: 'Enrichment data dengan AI-powered insights',
    features: ['Niche detection', 'GMV analysis', 'Signal processing'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    step: '03',
    icon: Shield,
    title: 'AI Scorer',
    description: 'Scoring system canggih dengan 100 parameter',
    features: ['Rating analysis', 'Order patterns', 'Revenue prediction'],
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    step: '04',
    icon: Link2,
    title: 'URL Generator',
    description: 'Generate personalized demo pages dengan tracking unik',
    features: ['Unique tracking URLs', 'Analytics integration', 'CRM sync'],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    step: '05',
    icon: Mail,
    title: 'Message Composer',
    description: 'AI-powered message generation yang personal',
    features: ['Personalized templates', 'Tone adaptation', 'A/B testing'],
    gradient: 'from-purple-600 to-cyan-600',
  },
  {
    step: '06',
    icon: MessageSquare,
    title: 'Multi-Channel DM',
    description: 'Kirim pesan ke berbagai platform sekaligus',
    features: ['TikTok DM', 'Shopee Chat', 'Instagram DM & Email'],
    gradient: 'from-cyan-600 to-teal-500',
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
      <div className="glass-card rounded-xl border border-blue-500/15 dark:border-blue-400/10 bg-slate-900/50 dark:bg-slate-900/30 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 neon-border-glow h-full">
        {/* Step number */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-black gradient-text opacity-40">{step.step}</span>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-blue-500/20`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-4">{step.description}</p>

        {/* Features */}
        <ul className="space-y-1.5">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            6-Agent <span className="gradient-text">AI Pipeline</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
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
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-500/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
