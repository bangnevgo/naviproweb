const steps = [
  {
    number: '01',
    title: 'Connect Your Store',
    description: 'Hubungkan toko Anda (Tokopedia, Shopee, atau TikTok Shop) dalam hitungan menit',
  },
  {
    number: '02',
    title: 'AI Analyzes Data',
    description: 'Sistem AI menganalisis data penjualan dan behavior pembeli secara real-time',
  },
  {
    number: '03',
    title: 'Smart Prospecting',
    description: 'AI menemukan prospek berkualitas tinggi dengan conversion score terbaik',
  },
  {
    number: '04',
    title: 'Automated Engagement',
    description: 'Otomatis follow-up via DM dengan personalisasi berdasarkan behavior prospek',
  },
]

export function WorkflowSteps() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Cara Kerjanya Sangat Sederhana
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dari setup hingga prospek berkualitas, hanya 4 langkah mudah
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step number circle */}
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
