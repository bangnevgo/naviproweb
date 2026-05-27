'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, ArrowRight, TrendingUp, Clock, Users, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-30 dark:opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #ea580c, transparent)',
          animation: 'float-slow 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 dark:opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #155e75, transparent)',
          animation: 'float-slow 10s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-15 dark:opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f59e0b, transparent)',
          animation: 'float-slow 12s ease-in-out infinite',
        }}
      />
    </div>
  )
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Main dashboard window */}
      <div className="glass-card rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 dark:border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">NAVI Dashboard</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-red-500" style={{ animation: 'live-pulse 2s ease-in-out infinite' }} />
            <span className="text-red-400 font-medium">LIVE</span>
          </span>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-4">
          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/10 dark:bg-white/5 p-3 border border-white/10">
              <p className="text-xs text-muted-foreground">Total Leads</p>
              <p className="text-lg font-bold gradient-text">2,847</p>
              <span className="flex items-center gap-1 text-xs text-teal-600">
                <TrendingUp className="w-3 h-3" /> +23.5%
              </span>
            </div>
            <div className="rounded-lg bg-white/10 dark:bg-white/5 p-3 border border-white/10">
              <p className="text-xs text-muted-foreground">High Score</p>
              <p className="text-lg font-bold gradient-text">892</p>
              <span className="flex items-center gap-1 text-xs text-teal-600">
                <TrendingUp className="w-3 h-3" /> +45.2%
              </span>
            </div>
          </div>

          {/* Mini chart */}
          <div className="rounded-lg bg-white/10 dark:bg-white/5 p-3 border border-white/10">
            <p className="text-xs text-muted-foreground mb-2">Lead Trend (7 hari)</p>
            <svg viewBox="0 0 200 50" className="w-full h-12">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#155e75" />
                </linearGradient>
                <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="50">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 40 L30 35 L60 25 L90 30 L120 15 L150 20 L180 8 L200 12" fill="none" stroke="url(#chart-gradient)" strokeWidth="2" />
              <path d="M0 40 L30 35 L60 25 L90 30 L120 15 L150 20 L180 8 L200 12 L200 50 L0 50 Z" fill="url(#chart-fill)" />
            </svg>
          </div>

          {/* Pipeline status */}
          <div className="rounded-lg bg-white/10 dark:bg-white/5 p-3 border border-white/10 space-y-2">
            <p className="text-xs text-muted-foreground">Pipeline Status</p>
            {[
              { label: 'Scraping', status: 'Active', color: '#10b981' },
              { label: 'Scoring', status: 'Running', color: '#ea580c' },
              { label: 'DM Queue', status: '12 pending', color: '#f59e0b' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color, animation: 'pulse-dot 2s ease-in-out infinite' }}
                  />
                  <span>{item.label}</span>
                </div>
                <span className="text-muted-foreground">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{ animation: 'float 4s ease-in-out infinite' }}
        className="absolute -right-4 top-16 glass-card rounded-lg bg-teal-700/20 border border-teal-700/30 px-3 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-teal-700/30 flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-teal-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-500">New High-Score Lead</p>
            <p className="text-[10px] text-muted-foreground">Score: 94 · Fashion</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={{ animation: 'float 5s ease-in-out infinite reverse' }}
        className="absolute -left-4 bottom-20 glass-card rounded-lg bg-orange-600/20 border border-orange-600/30 px-3 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-orange-600/30 flex items-center justify-center">
            <Zap className="w-3 h-3 text-orange-500" />
          </div>
          <div>
            <p className="text-xs font-semibold text-orange-400">DM Terkirim Otomatis</p>
            <p className="text-[10px] text-muted-foreground">3 pesan · Shopee</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const trustBadges = [
  { name: 'Tokopedia', color: '#16a34a' },
  { name: 'Shopee', color: '#ea580c' },
  { name: 'TikTok Shop', color: '#155e75' },
  { name: 'Instagram', color: '#be185d' },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <HeroOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-600/30 bg-orange-600/10 px-4 py-1.5 text-sm">
              <span
                className="w-2 h-2 rounded-full bg-teal-600"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
              <span className="text-orange-700 dark:text-orange-500">AI-Powered Platform</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-teal-700">Live 24/7</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Lead Generation
              <br />
              <span className="gradient-text">Otomatis &amp; Cerdas</span>
              <br />
              untuk Seller Indonesia
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Platform AI yang mengotomatisasi seluruh pipeline lead generation — dari scraping, scoring, hingga DM — sehingga Anda fokus closing, bukan cari prospek.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/demo.html">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-teal-700 text-white hover:opacity-90 gap-2 text-base px-6"
                >
                  <Zap className="w-5 h-5" />
                  Coba Gratis 14 Hari
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-6 border-border hover:bg-accent"
              >
                Lihat Cara Kerja
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: 100, suffix: '+', label: 'Seller Aktif' },
                { value: 45, suffix: '%', label: 'Naiknya Lead Quality' },
                { value: 90, suffix: '%', label: 'Waktu Terhemat' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold gradient-text">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xs text-muted-foreground">Terintegrasi dengan:</span>
              {trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: badge.color }}
                >
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: badge.color, opacity: 0.8 }}
                  />
                  <span className="hidden sm:inline">{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
            style={{ animation: 'scroll-line 2s ease-in-out infinite' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
