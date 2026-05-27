'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Users, TrendingUp, Heart, ShieldCheck, Zap, Award } from 'lucide-react'

const values = [
  { icon: Database, label: 'Data-Driven', description: 'Setiap keputusan didasarkan pada data dan analisis mendalam.' },
  { icon: Users, label: 'Seller-First', description: 'Kami memprioritaskan kebutuhan dan kesuksesan seller.' },
  { icon: ShieldCheck, label: 'Aman & Terpercaya', description: 'Data Anda terlindungi dengan enkripsi tingkat enterprise.' },
]

const stats = [
  { value: '100+', label: 'Seller', icon: Users },
  { value: '5M+', label: 'Leads', icon: Database },
  { value: '3.8x', label: 'ROI', icon: TrendingUp },
  { value: '98%', label: 'Retention', icon: Heart },
]

const teamAvatars = ['A', 'R', 'D', 'B', 'S', 'K']

export function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0c1025]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm">
              <span className="text-blue-400">Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Membangun Masa Depan <span className="gradient-text">Lead Generation</span>
            </h2>

            <p className="text-slate-400 leading-relaxed">
              NAVI Pro didirikan dengan misi sederhana: membuat lead generation lebih cerdas, lebih cepat, dan lebih efektif untuk seller Indonesia. Kami menggabungkan kekuatan AI dengan pemahaman mendalam tentang ekosistem e-commerce lokal.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Tim kami terdiri dari engineer dan data scientist berpengalaman yang memahami kebutuhan unik seller di Tokopedia, Shopee, TikTok Shop, dan platform e-commerce lainnya. Setiap fitur dirancang berdasarkan data nyata dan feedback dari komunitas seller.
            </p>

            {/* Value items */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/50 border border-blue-500/15 neon-border-glow">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold mb-1 text-white">{value.label}</p>
                    <p className="text-xs text-slate-400">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl border border-blue-500/15 bg-slate-900/50 p-8 neon-border-glow">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Team avatars */}
              <div className="mt-6 pt-6 border-t border-blue-500/10">
                <p className="text-sm font-medium mb-3 text-white">Tim Kami</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {teamAvatars.map((avatar, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-[#0a0e1a] flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${
                            i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6'
                          }, ${
                            i % 2 === 0 ? '#06b6d4' : '#3b82f6'
                          })`,
                        }}
                      >
                        {avatar}
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-slate-500">+12 anggota tim</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
