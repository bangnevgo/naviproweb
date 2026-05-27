'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crosshair, Grid3X3, Shield, Link2, Mail, MessageSquare, ArrowRight } from 'lucide-react'

const pipelineSteps = [
  {
    step: '01',
    icon: Crosshair,
    title: 'Cari Prospek Otomatis',
    description: 'AI menyisir e-commerce & media sosial untuk mencari calon pembeli/mitra yang aktif secara real-time.',
    features: ['Deteksi otomatis', 'Multi-platform', 'Bebas data duplikat'],
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    step: '02',
    icon: Grid3X3,
    title: 'Analisis Profil Toko',
    description: 'Mengumpulkan info penting calon pembeli secara otomatis, mulai dari performa jualan hingga kategori produk.',
    features: ['Deteksi kategori produk', 'Estimasi omset', 'Analisis keaktifan toko'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    step: '03',
    icon: Shield,
    title: 'Penyaringan Toko Terbaik',
    description: 'Sistem pintar menilai dan mengurutkan toko mana yang paling berpotensi closing agar Anda hemat waktu.',
    features: ['Skor minat beli', 'Analisis ulasan pembeli', 'Deteksi prospek premium'],
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    step: '04',
    icon: Link2,
    title: 'Halaman Penawaran Khusus',
    description: 'Membuat halaman promo khusus yang dipersonalisasi untuk setiap target toko agar terlihat profesional.',
    features: ['Link penawaran unik', 'Pelacakan kunjungan link', 'Halaman ramah seluler'],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    step: '05',
    icon: Mail,
    title: 'Penyusun Pesan Otomatis',
    description: 'AI merangkai draf pesan penawaran kerja sama yang personal dan natural (bukan seperti spam robot).',
    features: ['Gaya bahasa natural', 'Template pesan otomatis', 'Optimasi kata-kata closing'],
    gradient: 'from-purple-600 to-cyan-600',
  },
  {
    step: '06',
    icon: MessageSquare,
    title: 'Kirim Penawaran Langsung',
    description: 'Mengirimkan pesan penawaran secara otomatis langsung ke inbox Shopee, Tokopedia, TikTok, atau Instagram.',
    features: ['Kirim ke e-commerce & IG', 'Pengiriman aman teratur', 'Laporan pengiriman sukses'],
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
      <div className="glass-card rounded-xl border border-primary/15 dark:border-primary/10 bg-slate-900/50 dark:bg-slate-900/30 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border-glow h-full">
        {/* Step number */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-black gradient-text opacity-40">{step.step}</span>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-primary/20`}>
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

        {/* Features */}
        <ul className="space-y-1.5">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-chart-2" />
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
            <span className="text-blue-400">Cara Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            6 Langkah <span className="gradient-text">Robot AI Bekerja untuk Anda</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Dari mencari calon pembeli hingga mengirim penawaran — semuanya berjalan otomatis tanpa Anda perlu angkat jari.
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
