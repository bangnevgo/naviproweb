'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, Shield, Mail, TrendingUp } from 'lucide-react'

function SmartScoringCard() {
  const scores = [
    { label: 'Rating', points: 20, width: '80%', color: 'from-orange-600 to-orange-500' },
    { label: 'Order', points: 25, width: '75%', color: 'from-amber-600 to-amber-500' },
    { label: 'GMV', points: 25, width: '85%', color: 'from-teal-700 to-teal-600' },
    { label: 'Growth', points: 30, width: '70%', color: 'from-emerald-600 to-emerald-500' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold gradient-text">Score Breakdown</h4>
      {scores.map((score) => (
        <div key={score.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>{score.label}</span>
            <span className="text-muted-foreground">{score.points}pts</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
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
    { label: 'High', action: 'Instant Send', color: 'bg-emerald-500' },
    { label: 'Medium', action: 'Queued', color: 'bg-amber-500' },
    { label: 'Low', action: 'Scheduled', color: 'bg-red-500' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold gradient-text">Priority List</h4>
      {priorities.map((p) => (
        <div key={p.label} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${p.color}`} />
            <span className="text-sm font-medium">{p.label}</span>
          </div>
          <span className="text-xs text-muted-foreground">{p.action}</span>
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
        <div key={t.name} className="p-2 rounded-lg bg-muted/50 border border-border/50">
          <p className="text-xs font-medium mb-0.5">{t.name}</p>
          <p className="text-[10px] text-muted-foreground line-clamp-1">{t.preview}</p>
        </div>
      ))}
    </div>
  )
}

function AnalyticsDashboardCard() {
  const metrics = [
    { label: 'Reply Rate', value: '78%', color: 'text-teal-600' },
    { label: 'Demo Booked', value: '234', color: 'text-orange-500' },
    { label: 'Avg Score', value: '94', color: 'text-teal-700' },
    { label: 'ROI', value: '3.2x', color: 'text-amber-400' },
  ]

  return (
    <div className="grid grid-cols-2 gap-2">
      {metrics.map((m) => (
        <div key={m.label} className="p-2 rounded-lg bg-muted/50 text-center border border-border/50">
          <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
          <p className="text-[10px] text-muted-foreground">{m.label}</p>
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
    <section id="features" className="py-20 lg:py-28 bg-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-600/30 bg-orange-600/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-orange-700 dark:text-orange-500">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
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
                className="glass-card rounded-xl border border-border bg-card p-6 hover:border-orange-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-teal-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                {card.content}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
