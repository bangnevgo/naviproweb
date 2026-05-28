import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Rp 99.000',
    period: '/bulan',
    description: 'Untuk seller pemula yang ingin mencoba AI',
    cta: 'Coba Gratis',
    highlighted: false,
    features: [
      'Hingga 100 prospek/hari',
      'Smart scoring dasar',
      'Dashboard analytics',
      'Email support',
      'Satu channel integration',
    ],
  },
  {
    name: 'Professional',
    price: 'Rp 499.000',
    period: '/bulan',
    description: 'Untuk seller yang serius scale bisnis',
    cta: 'Mulai Sekarang',
    highlighted: true,
    features: [
      'Hingga 1000 prospek/hari',
      'AI smart scoring advanced',
      'Multi-channel automation',
      'Priority 24/7 support',
      'Integrasi 3 channel',
      'Custom automation workflow',
      'Export data unlimited',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'untuk kebutuhan besar',
    description: 'Solusi enterprise dengan dedicated support',
    cta: 'Hubungi Sales',
    highlighted: false,
    features: [
      'Unlimited prospek',
      'Custom AI model training',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security & compliance',
    ],
  },
]

export function PricingNew() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Pricing yang Transparan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tidak ada hidden fee, bayar hanya untuk apa yang Anda gunakan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-2xl scale-105 bg-white'
                  : 'bg-white border border-slate-200 hover:border-slate-300'
              } p-8`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                  POPULER
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <p className="text-4xl font-bold text-slate-950">
                  {plan.price}
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  {plan.period}
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 flex items-center justify-center gap-2 transition-all ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-slate-200 text-slate-950 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
