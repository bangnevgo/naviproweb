'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '99',
    period: '/bulan',
    description: 'Untuk seller baru yang ingin mencoba',
    features: [
      'Hingga 500 leads/bulan',
      'Basic AI scoring',
      'Single channel (DM)',
      'Email support',
      'Report bulanan',
    ],
    cta: 'Mulai Gratis',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '299',
    period: '/bulan',
    description: 'Untuk seller aktif yang serius berkembang',
    features: [
      'Hingga 5000 leads/bulan',
      'Advanced AI scoring',
      'Multi-channel (DM, Email, WA)',
      'Priority support',
      'Real-time analytics',
      'Custom templates',
      'API access',
    ],
    cta: 'Coba Sekarang',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Untuk tim dan perusahaan besar',
    features: [
      'Unlimited leads',
      'Custom AI training',
      'Dedicated account manager',
      '24/7 phone support',
      'Advanced analytics',
      'Custom integrations',
      'SLA guarantee 99.9%',
    ],
    cta: 'Hubungi Sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Harga Transparan
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border transition-smooth ${
                plan.highlighted
                  ? 'border-accent bg-accent/5 shadow-2xl scale-105 md:scale-110'
                  : 'border-neutral-border bg-background'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  Rekomendasi
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-foreground/60">{plan.period}</span>
                    )}
                  </div>
                </div>

                <Link
                  href="#"
                  className={`block w-full py-3 px-6 rounded-lg font-medium text-center transition-smooth mb-8 ${
                    plan.highlighted
                      ? 'bg-accent text-white hover:bg-accent-hover'
                      : 'border-2 border-neutral-border text-foreground hover:bg-neutral-light'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
