import { ArrowRight, Mail } from 'lucide-react'

export function FooterCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-20 text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Tingkatkan Lead Generation Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai gratis hari ini, tidak perlu kartu kredit. Dapatkan akses penuh ke semua fitur AI kami.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Coba Gratis Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <p className="font-bold text-xl text-slate-950 mb-4">
                NAVI <span className="text-blue-600">Pro</span>
              </p>
              <p className="text-slate-600 text-sm">
                Platform lead generation AI terdepan untuk seller Indonesia.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="font-semibold text-slate-950 mb-4">Produk</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-950 transition-colors">Fitur</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">API Docs</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-semibold text-slate-950 mb-4">Perusahaan</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-950 transition-colors">Tentang</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-slate-950 transition-colors">Karir</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold text-slate-950 mb-4">Hubungi Kami</p>
              <div className="flex items-center gap-2 text-slate-600 text-sm mb-3 hover:text-slate-950 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>hello@navipro.id</span>
              </div>
              <p className="text-slate-600 text-sm">
                +62 811-222-3333
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>2024 NAVI Pro. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-950 transition-colors">Privasi</a>
              <a href="#" className="hover:text-slate-950 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-950 transition-colors">Cookies</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
