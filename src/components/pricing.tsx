'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Zap, Crown, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    monthlyPrice: 'Rp 497K',
    yearlyPrice: 'Rp 348K',
    period: '/bulan',
    description: 'Untuk seller yang baru mulai menggunakan AI lead generation.',
    features: [
      '500 leads/bulan',
      '3 platform',
      'Basic scoring',
      '500 DM/bulan',
      'Email support',
    ],
    gradient: 'from-blue-600 to-blue-500',
    popular: false,
  },
  {
    name: 'Growth',
    icon: Crown,
    monthlyPrice: 'Rp 1.2M',
    yearlyPrice: 'Rp 840K',
    period: '/bulan',
    description: 'Untuk seller yang ingin scale dengan AI-powered pipeline lengkap.',
    features: [
      '2,500 leads/bulan',
      '6 platform',
      'Full scoring (100 params)',
      'Unlimited DM',
      'Priority support',
      '4 AI templates',
      'Analytics dashboard',
    ],
    gradient: 'from-blue-600 to-cyan-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    period: '',
    description: 'Untuk bisnis besar yang butuh custom AI dan dedicated support.',
    features: [
      'Unlimited leads',
      'All platforms',
      'Custom AI scoring',
      'Unlimited DM',
      'Dedicated manager',
      'Custom templates',
      'Full API access',
      'SLA guarantee',
    ],
    gradient: 'from-violet-600 to-purple-600',
    popular: false,
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-20 lg:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400">Harga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Pilih Paket yang <span className="gradient-text">Tepat untuk Anda</span>
          </h2>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3">
            <Label htmlFor="billing" className={`text-sm ${!yearly ? 'text-white font-medium' : 'text-slate-500'}`}>
              Bulanan
            </Label>
            <Switch
              id="billing"
              checked={yearly}
              onCheckedChange={setYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-cyan-500"
            />
            <Label htmlFor="billing" className={`text-sm ${yearly ? 'text-white font-medium' : 'text-slate-500'}`}>
              Tahunan
            </Label>
            {yearly && (
              <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                Hemat 30%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-xl border bg-slate-900/50 p-6 transition-all duration-300 relative neon-border-glow ${
                  plan.popular
                    ? 'border-blue-500/40 shadow-xl shadow-blue-500/10 md:-translate-y-4'
                    : 'border-blue-500/15 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg shadow-blue-500/25">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black gradient-text">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-blue-500/25'
                      : 'border border-blue-500/20 text-slate-300 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Hubungi Sales' : 'Mulai Sekarang'}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          14 hari gratis tanpa kartu kredit · Batalkan kapan saja · Garansi uang kembali 30 hari
        </motion.p>
      </div>
    </section>
  )
}
