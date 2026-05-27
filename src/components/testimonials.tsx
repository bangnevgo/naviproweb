'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Andi Rizky',
    role: 'Fashion Seller',
    metric: '+340% Leads',
    text: 'NAVI Pro benar-benar mengubah cara saya mendapatkan leads. Dari manual yang memakan waktu berjam-jam, sekarang semuanya otomatis dan kualitas lead-nya jauh lebih baik.',
    rating: 5,
  },
  {
    name: 'Dewi Sartika',
    role: 'Beauty Entrepreneur',
    metric: '+180% Revenue',
    text: 'Sejak pakai NAVI Pro, revenue toko saya naik 180%. AI scoring-nya sangat akurat — lead yang datang memang benar-benar potensial. Ini game changer untuk bisnis saya.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Budi Wijaya',
    role: 'Electronics Seller',
    metric: '4x ROI',
    text: 'Investasi NAVI Pro balik modal dalam 2 minggu. ROI 4x lipat dari sebelumnya. Prioritas otomatisnya bikin leads high-value selalu diurus duluan.',
    rating: 5,
  },
  {
    name: 'Rina Novita',
    role: 'Home & Living',
    metric: '90% Time Saved',
    text: 'Waktu yang saya hemat 90% — dari 4 jam cari leads jadi semuanya otomatis. Sekarang saya bisa fokus ke operasional dan customer service.',
    rating: 5,
  },
  {
    name: 'Hendra Pratama',
    role: 'Multi-Category Seller',
    metric: '5x Coverage',
    text: 'Multi-channel DM-nya luar biasa. Saya bisa reach 5x lebih banyak prospek sekaligus di Shopee, TikTok, dan Instagram. Tidak bisa dibandingkan dengan cara manual.',
    rating: 5,
  },
  {
    name: 'Lisa Kusuma',
    role: 'Fashion & Accessories',
    metric: '200+ Demo/Month',
    text: 'Dulu susah banget dapetin 20 demo sebulan. Dengan NAVI Pro, sekarang konsisten 200+ demo per bulan. Template AI-nya sangat personal dan efektif.',
    rating: 5,
  },
]

export function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0c1025]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400">Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Cerita Sukses Seller <span className="gradient-text">NAVI Pro</span>
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-xl border bg-slate-900/50 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 relative neon-border-glow ${
                testimonial.featured
                  ? 'border-blue-500/40 shadow-lg shadow-blue-500/10 md:-translate-y-2'
                  : 'border-blue-500/15'
              }`}
            >
              {testimonial.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg shadow-blue-500/25">
                  Featured
                </div>
              )}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <span className="text-sm font-bold gradient-text">{testimonial.metric}</span>
              </div>
              <Quote className="w-6 h-6 text-blue-500/20 mb-2" />
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '4.9/5', label: 'Rating' },
            { value: '98%', label: 'Kepuasan' },
            { value: '3.8x', label: 'Avg ROI' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
