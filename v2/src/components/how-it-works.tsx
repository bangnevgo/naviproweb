'use client'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Koneksikan Platform',
      description: 'Hubungkan Tokopedia, Shopee, atau TikTok Shop Anda dalam hitungan menit.',
    },
    {
      number: '02',
      title: 'Atur Kriteria Prospek',
      description: 'Tentukan target customer ideal Anda berdasarkan kategori, budget, lokasi.',
    },
    {
      number: '03',
      title: 'AI Mulai Mencari',
      description: 'Teknologi kami menganalisis jutaan data untuk menemukan prospek terbaik.',
    },
    {
      number: '04',
      title: 'Engagement Otomatis',
      description: 'Sistem otomasi mengirim pesan personal dan follow-up secara cerdas.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cara Kerja NAVI Pro
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Dari setup hingga pertama lead, hanya butuh beberapa menit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl border border-neutral-border">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/60">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
