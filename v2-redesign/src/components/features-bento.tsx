import { Brain, Zap, BarChart3, Lock, Wifi, Cog } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Smart Scoring',
    description: 'Algoritma AI memprioritaskan prospek dengan conversion rate tertinggi',
    span: 'col-span-1 row-span-2',
  },
  {
    icon: Zap,
    title: 'Automation Workflow',
    description: 'Otomasi DM multi-channel untuk engagement maksimal',
    span: 'col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Dashboard lengkap dengan insight mendalam per prospek',
    span: 'col-span-1',
  },
  {
    icon: Wifi,
    title: 'Integrasi Omnichannel',
    description: 'Satu dashboard untuk Tokopedia, Shopee, TikTok Shop',
    span: 'col-span-1 row-span-2',
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Enkripsi end-to-end dan compliance dengan regulasi Indonesia',
    span: 'col-span-1',
  },
  {
    icon: Cog,
    title: 'Custom Integration',
    description: 'API lengkap untuk integrasi dengan sistem existing Anda',
    span: 'col-span-1',
  },
]

export function FeaturesBento() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Teknologi AI terintegrasi untuk automasi lead generation yang cerdas dan efisien
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`${feature.span} p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group`}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-950 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
