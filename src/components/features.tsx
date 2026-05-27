'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, Shield, Mail, TrendingUp } from 'lucide-react'

function SmartScoringCard() {
  const scores = [
    { label: 'Rating', points: 20, width: '80%', color: 'from-blue-600 to-blue-400' },
    { label: 'Order', points: 25, width: '75%', color: 'from-indigo-600 to-indigo-400' },
    { label: 'GMV', points: 25, width: '85%', color: 'from-violet-600 to-violet-400' },
    { label: 'Growth', points: 30, width: '70%', color: 'from-cyan-600 to-cyan-400' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold gradient-text">Score Breakdown</h4>
      {scores.map((score) => (
        <div key={score.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">{score.label}</span>
            <span className="text-slate-500">{score.points}pts</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${score.color} score-bar`}
              style={{ '--bar-width': score.width } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function PriorityAutomationCard() {
  const priorities = [
    { label: 'High', action: 'Instant Send', color: 'bg-cyan-400' },
    { label: 'Medium', action: 'Queued', color: 'bg-blue-400' },
    { label: 'Low', action: 'Scheduled', color: 'bg-violet-400' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold gradient-text">Priority List</h4>
      {priorities.map((p) => (
        <div key={p.label} className="flex items-center justify-between p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${p.color}`} />
            <span className="text-sm font-medium text-slate-300">{p.label}</span>
          </div>
          <span className="text-xs text-slate-500">{p.action}</span>
        </div>
      ))}
    </div>
  )
}

function AIMessageTemplatesCard() {
  const templates = [
    { name: 'Curiosity', preview: 'Saya perhatikan toko Anda punya rating tinggi...' },
    { name: 'Pain Point', preview: 'Apakah kesulitan meningkatkan visibility...' },
    { name: 'Data Driven', preview: 'Berdasarkan data GMV Anda yang naik 45%...' },
  ]

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold gradient-text">Template Preview</h4>
      {templates.map((t) => (
        <div key={t.name} className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
          <p className="text-xs font-medium mb-0.5 text-slate-300">{t.name}</p>
          <p className="text-[10px] text-slate-500 line-clamp-1">{t.preview}</p>
        </div>
      ))}
    </div>
  )
}

function AnalyticsDashboardCard() {
  const metrics = [
    { label: 'Reply Rate', value: '78%', color: 'text-cyan-400' },
    { label: 'Demo Booked', value: '234', color: 'text-blue-400' },
    { label: 'Avg Score', value: '94', color: 'text-violet-400' },
    { label: 'ROI', value: '3.2x', color: 'text-indigo-400' },
  ]

  return (
    <div className="grid grid-cols-2 gap-2">
      {metrics.map((m) => (
        <div key={m.label} className="p-2 rounded-lg bg-blue-500/5 text-center border border-blue-500/10">
          <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
          <p className="text-[10px] text-slate-500">{m.label}</p>
        </div>
      ))}
    </div>
  )
}

const featureCards = [
  {
    icon: Shield,
    title: 'Smart Scoring 100-Point',
    description: 'Scoring system dengan 100 parameter yang menganalisis rating, order, GMV, dan growth secara real-time.',
    content: <SmartScoringCard />,
  },
  {
    icon: TrendingUp,
    title: 'Priority Automation',
    description: 'Otomatisasi pengiriman pesan berdasarkan priority scoring — high lead dikirim instant.',
    content: <PriorityAutomationCard />,
  },
  {
    icon: Mail,
    title: 'AI Message Templates',
    description: 'Template pesan AI yang personal dan adaptif untuk setiap segmen lead.',
    content: <AIMessageTemplatesCard />,
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Dashboard real-time untuk monitoring performa lead generation dan ROI.',
    content: <AnalyticsDashboardCard />,
  },
]

export function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0c1025]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Mengapa Ribuan Seller <span className="gradient-text">Memilih NAVI Pro</span>
          </h2>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featureCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl border border-blue-500/15 bg-slate-900/50 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 neon-border-glow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">{card.description}</p>
                {card.content}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
