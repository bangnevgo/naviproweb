'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Users, TrendingUp, Heart, ShieldCheck, Zap, Award } from 'lucide-react'

const values = [
  { icon: Database, label: 'Berbasis Data', description: 'Setiap keputusan didasarkan pada data nyata dari toko e-commerce.' },
  { icon: Users, label: 'Untuk Seller', description: 'Kami memprioritaskan kebutuhan dan kesuksesan seller Indonesia.' },
  { icon: ShieldCheck, label: 'Aman & Terpercaya', description: 'Data Anda terlindungi dengan keamanan tingkat tinggi.' },
]

const stats = [
  { value: '100+', label: 'Seller Aktif', icon: Users },
  { value: '5M+', label: 'Prospek Ditemukan', icon: Database },
  { value: '3.8x', label: 'Keuntungan Rata-rata', icon: TrendingUp },
  { value: '98%', label: 'Puas & Lanjut', icon: Heart },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm">
              <span className="text-primary">Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Membangun Masa Depan <span className="gradient-text">Penjualan Online</span>
            </h2>

            <p className="text-slate-400 leading-relaxed">
              NAVI Pro lahir dari satu misi sederhana: membantu seller Indonesia mendapatkan pembeli baru dengan lebih mudah, lebih cepat, dan tanpa repot. Kami menggabungkan kekuatan AI dengan pemahaman mendalam tentang pasar e-commerce lokal.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Tim kami terdiri dari ahli teknologi dan data yang paham kebutuhan seller di Tokopedia, Shopee, TikTok Shop, dan platform lainnya. Setiap fitur kami rancang dari masukan langsung para seller yang sudah menggunakan NAVI Pro.
            </p>

            {/* Value items */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/50 border border-primary/15 neon-border-glow">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-2 shadow-lg shadow-primary/20">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-semibold mb-1 text-foreground">{value.label}</p>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
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
            <div className="glass-card rounded-2xl border border-primary/15 bg-slate-900/50 p-8 neon-border-glow">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Team avatars */}
              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-sm font-medium mb-3 text-foreground">Tim Kami</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {teamAvatars.map((avatar, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                        style={{
                          background: `linear-gradient(135deg, var(--color-primary), var(--chart-2))`,
                        }}
                      >
                        {avatar}
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground">+12 anggota tim</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
