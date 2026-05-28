import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroNew() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Teknologi AI Terdepan
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-950">
          Temukan Prospek Terbaik Dengan{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Kecerdasan AI
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Platform lead generation terintegrasi yang menggunakan AI untuk menemukan, menykor, dan mengkonversi prospek berkualitas tinggi secara otomatis.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
            Mulai Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-slate-200 text-slate-950 font-semibold hover:bg-slate-50 transition-colors">
            Lihat Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8 border-t border-slate-200">
          <div>
            <p className="text-3xl font-bold text-slate-950">5000+</p>
            <p className="text-sm text-slate-600 mt-2">Seller Aktif</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-950">10M+</p>
            <p className="text-sm text-slate-600 mt-2">Prospek/Bulan</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-950">98%</p>
            <p className="text-sm text-slate-600 mt-2">Kepuasan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
