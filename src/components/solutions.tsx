'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shirt, Smartphone, Sparkles, TrendingUp, BarChart3, Heart } from 'lucide-react'

const solutions = [
  {
    icon: Shirt,
    title: 'Fashion & Apparel',
    description: 'Optimalkan lead generation untuk industri fashion dengan scoring yang memahami tren dan seasonality.',
    stats: [
      { label: 'Conv Rate', value: '+62%', icon: TrendingUp },
      { label: 'Lead Quality', value: '2.8x', icon: BarChart3 },
    ],
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'Electronics & Gadget',
    description: 'Target high-value buyer di segmen electronics dengan AI scoring berbasis GMV dan review quality.',
    stats: [
      { label: 'High-Value Leads', value: '+78%', icon: TrendingUp },
      { label: 'ROI', value: '4.1x', icon: BarChart3 },
    ],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Wellness',
    description: 'Bangun loyalitas customer di industri beauty dengan personalized messaging dan repeat buyer detection.',
    stats: [
      { label: 'Repeat Buyers', value: '+55%', icon: Heart },
      { label: 'LTV', value: '3.5x', icon: BarChart3 },
    ],
    gradient: 'from-cyan-600 to-teal-500',
  },
]

export function Solutions() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="solutions" className="py-20 lg:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400">Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Untuk Semua Jenis <span className="gradient-text">Seller</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            NAVI Pro dirancang untuk berbagai kategori seller dengan scoring dan messaging yang disesuaikan.
          </p>
        </motion.div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl border border-blue-500/15 bg-slate-900/50 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 neon-border-glow group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{solution.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {solution.stats.map((stat) => {
                    const StatIcon = stat.icon
                    return (
                      <div key={stat.label} className="rounded-lg bg-blue-500/5 p-3 border border-blue-500/10">
                        <div className="flex items-center gap-1 mb-1">
                          <StatIcon className="w-3 h-3 text-blue-400" />
                          <span className="text-[10px] text-slate-500">{stat.label}</span>
                        </div>
                        <p className="text-lg font-bold gradient-text">{stat.value}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
