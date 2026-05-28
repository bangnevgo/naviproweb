'use client'

import { Zap, Brain, Target, BarChart3, Lock, Workflow } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Lead Scoring',
    description: 'Algoritma AI canggih menganalisis setiap prospek untuk memberikan skor kualitas akurat.',
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Filter dan segmentasi prospek berdasarkan perilaku, demografi, dan preferensi.',
  },
  {
    icon: Workflow,
    title: 'Multi-Channel Automation',
    description: 'Engagement otomatis melalui DM, Email, WhatsApp dalam satu platform.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Dashboard komprehensif untuk tracking conversion, ROI, dan campaign performance.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Enkripsi end-to-end dan compliance dengan regulasi data Indonesia.',
  },
  {
    icon: Zap,
    title: 'Fast Integration',
    description: 'Setup mudah dengan API lengkap dan dokumentasi developer terbaik.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fitur Unggulan NAVI Pro
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Platform lead generation paling lengkap untuk seller Indonesia dengan teknologi AI terdepan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-neutral-border bg-background hover:border-accent/30 hover:shadow-lg transition-smooth"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
