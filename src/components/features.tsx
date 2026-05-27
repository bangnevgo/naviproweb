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
            <span className="text-card-foreground/70">{score.label}</span>
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
    { label: 'High', action: 'Instant Send', color: 'bg-cyan-400' },
    { label: 'Medium', action: 'Queued', color: 'bg-blue-400' },
    { label: 'Low', action: 'Scheduled', color: 'bg-violet-400' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold gradient-text">Priority List</h4>
      {priorities.map((p) => (
        <div key={p.label} className="flex items-center justify-between p-2 rounded-lg bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${p.color}`} />
            <span className="text-sm font-medium text-card-foreground/70">{p.label}</span>
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
        <div key={t.name} className="p-2 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-xs font-medium mb-0.5 text-card-foreground/70">{t.name}</p>
          <p className="text-[10px] text-muted-foreground line-clamp-1">{t.preview}</p>
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
        <div key={m.label} className="p-2 rounded-lg bg-primary/5 text-center border border-primary/10">
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
    title: 'Penyaringan Pintar 100 Poin',
    description: 'Sistem cerdas yang menilai calon pembeli dari 100 aspek: reputasi toko, jumlah pesanan, omset, dan pertumbuhan — agar Anda tak buang waktu.',
    content: <SmartScoringCard />,
  },
  {
    icon: TrendingUp,
    title: 'Kirim Penawaran Tepat Sasaran',
    description: 'Prospek terbaik langsung dihubungi pertama kali. Yang biasa-biasa saja dijadwalkan otomatis.',
    content: <PriorityAutomationCard />,
  },
  {
    icon: Mail,
    title: 'Pesan yang Terasa Personal',
    description: 'AI menulis pesan penawaran yang natural dan disesuaikan untuk setiap calon pembeli — bukan pesan spam massal.',
    content: <AIMessageTemplatesCard />,
  },
  {
    icon: BarChart3,
    title: 'Pantau Hasil Secara Langsung',
    description: 'Lihat berapa banyak prospek yang sudah dihubungi, berapa yang membalas, dan berapa keuntungan yang dihasilkan.',
    content: <AnalyticsDashboardCard />,
  },
]

export function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-20 lg:py-28 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-primary">Fitur Unggulan</span>
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
                className="glass-card rounded-xl border border-primary/15 bg-slate-900/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border-glow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon className="w-5 h-5 text-primary-foreground" />
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
