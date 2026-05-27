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
    gradient: 'from-orange-600 to-orange-500',
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
    gradient: 'from-orange-600 to-teal-700',
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
    gradient: 'from-teal-700 to-teal-600',
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
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-600/30 bg-orange-600/10 px-4 py-1.5 text-sm mb-4">
            <span className="text-orange-700 dark:text-orange-500">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pilih Paket yang <span className="gradient-text">Tepat untuk Anda</span>
          </h2>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3">
            <Label htmlFor="billing" className={`text-sm ${!yearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Bulanan
            </Label>
            <Switch
              id="billing"
              checked={yearly}
              onCheckedChange={setYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-600 data-[state=checked]:to-teal-700"
            />
            <Label htmlFor="billing" className={`text-sm ${yearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Tahunan
            </Label>
            {yearly && (
              <span className="text-xs font-medium text-teal-700 bg-teal-700/10 px-2 py-0.5 rounded-full">
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
                className={`glass-card rounded-xl border bg-card p-6 transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-orange-600/50 shadow-xl shadow-orange-600/10 md:-translate-y-4'
                    : 'border-border hover:border-orange-600/30 hover:shadow-lg hover:shadow-orange-600/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-teal-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black gradient-text">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-teal-700 text-white hover:opacity-90'
                      : 'border border-border hover:bg-accent'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Hubungi Sales' : 'Mulai Sekarang'}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-teal-700 flex-shrink-0" />
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
          className="text-center text-sm text-muted-foreground mt-8"
        >
          14 hari gratis tanpa kartu kredit · Batalkan kapan saja · Garansi uang kembali 30 hari
        </motion.p>
      </div>
    </section>
  )
}
