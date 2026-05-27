import Link from 'next/link';

const agents = [
  { num: '01', name: 'Data Scraper', desc: 'Koleksi data masif dari berbagai platform e-commerce secara real-time', icon: '🔍', features: ['Auto-detection format', 'Multi-platform support', 'Data cleansing otomatis'] },
  { num: '02', name: 'Data Enricher', desc: 'Enrichment data dengan AI-powered insights dan analisis mendalam', icon: '📊', features: ['Niche detection', 'GMV analysis', 'Signal processing'] },
  { num: '03', name: 'AI Scorer', desc: 'Scoring system canggih dengan 100 parameter berbasis machine learning', icon: '🎯', features: ['Rating analysis', 'Order patterns', 'Revenue prediction'] },
  { num: '04', name: 'URL Generator', desc: 'Generate personalized demo pages dengan tracking unik per lead', icon: '🔗', features: ['Unique tracking URLs', 'Analytics integration', 'CRM sync'] },
  { num: '05', name: 'Message Composer', desc: 'AI-powered message generation yang personal dan relevan', icon: '✉️', features: ['Personalized templates', 'Tone adaptation', 'A/B testing built-in'] },
  { num: '06', name: 'Multi-Channel DM', desc: 'Kirim pesan ke berbagai platform sekaligus secara otomatis', icon: '📨', features: ['TikTok DM', 'Shopee Chat', 'Instagram DM & Email'] },
];

const testimonials = [
  { quote: '"Dalam 2 minggu pertama pakai NAVI Pro, leads yang masuk naik 3x lipat. Yang lebih penting, kualitasnya jauh lebih baik — hampir 70% langsung booking demo!"', author: 'Andi Rizky', role: 'Fashion Store Owner · Tokopedia Star', metric: '+340%', metricLabel: 'Leads', avatar: 'AR', color: 'from-amber-500 to-red-500' },
  { quote: '"Dulu saya habiskan 6 jam sehari hanya untuk outreach manual. Sekarang dengan NAVI Pro semua otomatis, saya bisa fokus ke strategi dan produk. Revenue naik 180% dalam 3 bulan!"', author: 'Dewi Sartika', role: 'Electronics Reseller · 50K+ Followers', metric: '+180%', metricLabel: 'Revenue', avatar: 'DS', color: 'from-indigo-500 to-cyan-400' },
  { quote: '"AI Scorer-nya benar-benar akurat. Kami bisa fokus hanya ke leads dengan score 80+ dan konversi kami melejit. ROI-nya sudah 4x dalam bulan pertama saja."', author: 'Budi Wijaya', role: 'Beauty Brand Owner · Shopee Preferred', metric: '4x', metricLabel: 'ROI', avatar: 'BW', color: 'from-emerald-500 to-teal-600' },
];

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-bold">N</div>
              <span className="font-bold text-lg">NAVI Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <a href="#platform" className="hover:text-white transition-colors">Platform</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="hover:text-white transition-colors">Tentang</a>
              <a href="/demo" className="hover:text-white transition-colors">Demo Interaktif</a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link
                href="/dashboard"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Coba Gratis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI-Powered Platform · Live 24/7
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Lead Generation<br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Otomatis & Cerdas</span><br />
              untuk Seller Indonesia
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Platform AI yang mengubah cara Anda menemukan customer. 6 agen AI bekerja bersamaan — dari scraping hingga pengiriman pesan — tanpa campur tangan manual.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-indigo-500/25 text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Coba Gratis 14 Hari
              </Link>
              <a href="#platform" className="inline-flex items-center gap-2 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 font-medium px-8 py-3.5 rounded-xl transition-all text-lg">
                Lihat Cara Kerja
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-500">
              <div><strong className="text-white text-2xl">128+</strong><br />Seller Aktif</div>
              <div className="w-px h-12 bg-gray-800" />
              <div><strong className="text-white text-2xl">45%</strong><br />Naiknya Lead Quality</div>
              <div className="w-px h-12 bg-gray-800" />
              <div><strong className="text-white text-2xl">90%</strong><br />Waktu Terhemat</div>
            </div>
            <div className="pt-4 text-sm text-gray-500">
              <span>Platform terpercaya oleh seller di: </span>
              <span className="inline-flex gap-2 ml-2">
                <span className="bg-gray-800/60 px-3 py-1 rounded-full text-xs">🛍️ Tokopedia</span>
                <span className="bg-gray-800/60 px-3 py-1 rounded-full text-xs">🟠 Shopee</span>
                <span className="bg-gray-800/60 px-3 py-1 rounded-full text-xs">🎵 TikTok Shop</span>
                <span className="bg-gray-800/60 px-3 py-1 rounded-full text-xs">📸 Instagram</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform / Pipeline Section */}
      <section id="platform" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">How It Works</div>
            <h2 className="text-3xl sm:text-4xl font-bold">6-Agent AI Pipeline</h2>
            <p className="text-gray-400 mt-2">Sistem lead generation paling canggih di Indonesia — bekerja penuh otomatis 24/7</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <div key={agent.num} className={`bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6 hover:border-indigo-500/30 transition-all group ${i === 5 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-[10px] text-indigo-400 font-mono mb-1">0{agent.num}</div>
                    <span className="text-2xl">{agent.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-200">{agent.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{agent.desc}</p>
                    <ul className="mt-3 space-y-1">
                      {agent.features.map((f) => (
                        <li key={f} className="text-xs text-gray-400 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-indigo-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Platform Features</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Mengapa Ribuan Seller Memilih NAVI Pro</h2>
            <p className="text-gray-400 mt-2">Teknologi AI terdepan yang dirancang khusus untuk e-commerce Indonesia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Smart Scoring */}
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                  <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Scoring 100-Point</h3>
              <p className="text-sm text-gray-400 mb-4">AI scoring system dengan weight distribution optimal berdasarkan data jutaan transaksi e-commerce Indonesia</p>
              {[{ label: 'Rating & Reviews', pts: 20 }, { label: 'Order Volume', pts: 25 }, { label: 'GMV Analysis', pts: 25 }, { label: 'Growth Signals', pts: 30 }].map((s) => (
                <div key={s.label} className="flex items-center gap-3 mb-2 text-xs">
                  <span className="text-gray-400 w-28">{s.label}</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${s.pts}%` }} />
                  </div>
                  <span className="text-gray-500 w-10 text-right">{s.pts} pts</span>
                </div>
              ))}
            </div>

            {/* Priority Automation */}
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Priority Automation</h3>
              <p className="text-sm text-gray-400 mb-4">Auto-prioritization berdasarkan score untuk timing outreach yang paling optimal</p>
              {[
                { label: 'High Priority', range: 'Score 80–100', badge: 'Instant Send', color: 'bg-emerald-500' },
                { label: 'Medium Priority', range: 'Score 60–79', badge: 'Queued', color: 'bg-amber-500' },
                { label: 'Low Priority', range: 'Score 40–59', badge: 'Scheduled', color: 'bg-gray-500' },
              ].map((p) => (
                <div key={p.label} className="flex items-center justify-between py-2 border-b border-gray-700/40 last:border-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
                    <div>
                      <p className="text-sm text-gray-200">{p.label}</p>
                      <p className="text-xs text-gray-500">{p.range}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${p.color === 'bg-emerald-500' ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' : p.color === 'bg-amber-500' ? 'text-amber-300 border-amber-500/30 bg-amber-500/10' : 'text-gray-300 border-gray-500/30 bg-gray-500/10'}`}>{p.badge}</span>
                </div>
              ))}
            </div>

            {/* AI Templates */}
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" /><path d="M8 10h8M8 14h5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Message Templates</h3>
              <p className="text-sm text-gray-400 mb-4">4 template pesan yang dipilih AI secara otomatis berdasarkan profil setiap lead</p>
              <div className="space-y-3">
                <div className="bg-gray-900/60 rounded-lg p-3">
                  <span className="text-xs text-indigo-300 font-medium">🔮 Curiosity</span>
                  <p className="text-xs text-gray-400 mt-1">&quot;Sistem AI kami mendeteksi toko Anda memiliki potensi growth yang tinggi...&quot;</p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-3">
                  <span className="text-xs text-amber-300 font-medium">💡 Pain Point</span>
                  <p className="text-xs text-gray-400 mt-1">&quot;Seller di level GMV Anda biasanya menghadapi tantangan scaling di...&quot;</p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-3">
                  <span className="text-xs text-cyan-300 font-medium">📈 Data Driven</span>
                  <p className="text-xs text-gray-400 mt-1">&quot;Berdasarkan analisis 847 toko serupa, strategi ini meningkatkan...&quot;</p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /><path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-gray-400 mb-4">Monitor semua aktivitas pipeline dalam real-time dengan insights yang actionable</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: '78%', label: 'Reply Rate', change: '+12%' },
                  { val: '234', label: 'Demo Booked', change: '+34' },
                  { val: '94', label: 'Avg Score', change: '+8' },
                  { val: '3.2x', label: 'ROI', change: '+0.4x' },
                ].map((m) => (
                  <div key={m.label} className="bg-gray-900/60 rounded-lg p-3">
                    <p className="text-lg font-bold text-white">{m.val}</p>
                    <p className="text-xs text-gray-400">{m.label}</p>
                    <p className="text-[10px] text-emerald-400">{m.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Solutions</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Untuk Semua Jenis Seller</h2>
            <p className="text-gray-400 mt-2">Platform yang adaptif untuk kebutuhan kategori bisnis Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '👗', name: 'Fashion & Apparel', desc: 'Temukan buyer fashion dengan interest tinggi dan budget yang sesuai', stats: ['+62% Conversion Rate', '2.8x Lead Quality'], features: ['Seasonal targeting', 'Trend analysis', 'Competitor monitor'] },
              { icon: '📱', name: 'Electronics & Gadget', desc: 'Target buyer dengan budget tinggi yang aktif mencari produk elektronik', stats: ['+78% High-Value Leads', '4.1x ROI'], features: ['Price-point targeting', 'Feature matching', 'Review analysis'] },
              { icon: '💄', name: 'Beauty & Wellness', desc: 'Outreach dipersonalisasi berdasarkan preferensi beauty buyer', stats: ['+55% Repeat Buyers', '3.5x LTV'], features: ['Demographic targeting', 'Beauty scoring', 'Seasonal campaigns'] },
            ].map((sol) => (
              <div key={sol.name} className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6 hover:border-indigo-500/30 transition-all">
                <span className="text-3xl mb-3 block">{sol.icon}</span>
                <h3 className="font-semibold mb-2">{sol.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{sol.desc}</p>
                <div className="flex gap-4 mb-4 text-sm">
                  {sol.stats.map((s) => {
                    const [val, label] = s.split(' ');
                    return <div key={s}><strong className="text-indigo-300">{val}</strong> <span className="text-gray-500 text-xs">{label}</span></div>;
                  })}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sol.features.map((f) => (
                    <span key={f} className="text-[10px] bg-gray-700/50 text-gray-400 px-2 py-1 rounded">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Social Proof</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Cerita Sukses Seller NAVI Pro</h2>
            <p className="text-gray-400 mt-2">Ribuan seller telah merasakan dampak nyata platform kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6 relative">
                <div className="text-amber-400 mb-3">★★★★★</div>
                <blockquote className="text-sm text-gray-300 mb-6 leading-relaxed">{t.quote}</blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold`}>{t.avatar}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="text-[10px] text-gray-500">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-300 font-bold text-sm">{t.metric}</p>
                    <p className="text-[10px] text-gray-500">{t.metricLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-12 mt-12 p-6 bg-gray-800/20 rounded-xl border border-gray-800">
            {[
              { val: '4.9/5', label: 'Rating Rata-rata', sub: 'dari 500+ review' },
              { val: '98%', label: 'Kepuasan Pengguna', sub: 'renew setelah trial' },
              { val: '3.8x', label: 'Average ROI', sub: 'dalam 30 hari pertama' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.val}</p>
                <p className="text-sm text-gray-300">{s.label}</p>
                <p className="text-[10px] text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Pricing</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Investasi yang Menghasilkan ROI Nyata</h2>
            <p className="text-gray-400 mt-2">Pilih paket yang sesuai kebutuhan bisnis Anda. Tanpa kartu kredit, batalkan kapan saja.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { tier: 'Starter', price: 'Rp 497K', period: '/bulan', desc: 'Cocok untuk seller baru yang ingin memulai', features: ['500 leads/bulan', '3 platform scraping', 'Basic AI scoring', '500 DM/bulan', 'Email support'], notAvail: ['Custom templates', 'Priority support', 'API access'] },
              { tier: 'Growth', price: 'Rp 1.2M', period: '/bulan', desc: 'Untuk seller yang aktif scale-up', features: ['2,500 leads/bulan', '6 platform scraping', 'Full AI scoring 100-pt', 'Unlimited DM', 'Priority support 24/7', '4 Custom templates', 'Analytics dashboard'], notAvail: ['API access'], popular: true },
              { tier: 'Enterprise', price: 'Custom', period: '', desc: 'Solusi khusus untuk brand besar', features: ['Unlimited leads', 'Semua platform', 'Custom AI model', 'Unlimited DM', 'Dedicated account manager', 'Unlimited templates', 'Advanced analytics', 'Full API access'], notAvail: [] },
            ].map((pkg) => (
              <div key={pkg.tier} className={`relative bg-gray-800/40 backdrop-blur rounded-xl border ${pkg.popular ? 'border-indigo-500' : 'border-gray-700/60'} p-6 ${pkg.popular ? 'scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-[10px] font-semibold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="text-lg font-semibold mb-1">{pkg.tier}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  {pkg.period && <span className="text-sm text-gray-400 ml-1">{pkg.period}</span>}
                </div>
                <p className="text-xs text-gray-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-xs text-gray-300 flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                  {pkg.notAvail.map((f) => (
                    <li key={f} className="text-xs text-gray-600 flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`block text-center text-sm font-medium py-2.5 rounded-lg transition-all ${pkg.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}
                >
                  {pkg.tier === 'Enterprise' ? 'Hubungi Sales' : 'Mulai ' + pkg.tier}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">14 hari gratis tanpa kartu kredit · Batalkan kapan saja · Garansi uang kembali 30 hari</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Tentang Kami</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kami Dibangun oleh Seller, untuk Seller</h2>
              <p className="text-gray-400 mb-4">NAVI Pro lahir dari frustrasi nyata: tim kami dulu menghabiskan ratusan jam setiap bulan untuk outreach manual yang hasilnya tidak konsisten. Kami membangun teknologi yang kami sendiri butuhkan.</p>
              <p className="text-gray-400 mb-6">Sejak 2024, kami telah membantu lebih dari 128 seller di Indonesia mengotomatiskan proses lead generation mereka — dari Tokopedia hingga TikTok Shop — dengan hasil yang terukur dan konsisten.</p>
              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Data-Driven', desc: 'Setiap keputusan berdasarkan data nyata dari jutaan transaksi e-commerce' },
                  { icon: '🚀', title: 'Seller-First', desc: 'Produk kami didesain dengan feedback langsung dari seller aktif Indonesia' },
                  { icon: '🔒', title: 'Aman & Terpercaya', desc: 'Semua data dienkripsi dan kami tidak pernah menjual data seller kami' },
                ].map((v) => (
                  <div key={v.title} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{v.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{v.title}</p>
                      <p className="text-xs text-gray-500">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-8">
              <h3 className="text-lg font-semibold mb-6">Impact kami sejauh ini</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: '128+', label: 'Seller Aktif' },
                  { val: '5M+', label: 'Leads Generated' },
                  { val: '3.8x', label: 'Avg ROI' },
                  { val: '98%', label: 'Retention Rate' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                <div className="flex items-center justify-center -space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-bold border-2 border-gray-800">A</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center text-xs font-bold border-2 border-gray-800">B</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-xs font-bold border-2 border-gray-800">C</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold border-2 border-gray-800">+</div>
                </div>
                <p className="text-xs text-gray-500">Tim 15+ engineer & growth specialist berpengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Contact Form Section */}
      <section id="demo" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Coba Gratis</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mulai 14 Hari Trial Gratis Sekarang</h2>
              <p className="text-gray-400 mb-8">Tidak perlu kartu kredit. Setup dalam 5 menit. Lihat hasil nyata dalam 24 jam pertama.</p>
              <div className="space-y-4">
                {[
                  { icon: '⚡', title: 'Setup Instan', desc: 'Platform siap digunakan dalam 5 menit, tanpa konfigurasi teknis yang rumit' },
                  { icon: '📊', title: 'Dashboard Real-time', desc: 'Monitor semua aktivitas pipeline secara langsung dari dashboard Anda' },
                  { icon: '🎓', title: 'Onboarding Support', desc: 'Tim kami akan membantu setup dan optimasi di hari pertama Anda' },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{b.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{b.title}</p>
                      <p className="text-xs text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-2 mt-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /><path d="M9 12l2 2 4-4" /></svg>
                Garansi uang kembali 30 hari jika tidak puas
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6">
              <h3 className="text-lg font-semibold mb-6">Daftar Sekarang — Gratis</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Nama Lengkap *</label>
                    <input type="text" placeholder="Nama Anda" className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">No. WhatsApp *</label>
                    <input type="tel" placeholder="08xxxxxxxxxx" className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Email Bisnis *</label>
                  <input type="email" placeholder="email@toko.com" className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Link Toko (Shopee/Tokopedia/TikTok) *</label>
                  <input type="url" placeholder="https://shopee.co.id/toko-anda" className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Kategori Produk</label>
                    <select className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-400 focus:outline-none focus:border-indigo-500">
                      <option>Pilih kategori...</option>
                      <option>Fashion & Apparel</option>
                      <option>Electronics & Gadget</option>
                      <option>Beauty & Wellness</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Paket Yang Diminati</label>
                    <select className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-400 focus:outline-none focus:border-indigo-500">
                      <option>Pilih paket...</option>
                      <option>Starter (Rp 497K/bln)</option>
                      <option>Growth (Rp 1.2M/bln)</option>
                      <option>Enterprise (Custom)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Ada pertanyaan atau kebutuhan khusus?</label>
                  <textarea rows={3} placeholder="Ceritakan tentang bisnis Anda..." className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                </div>
                <Link
                  href="/dashboard"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  🚀 Mulai Trial Gratis 14 Hari
                </Link>
                <p className="text-[10px] text-gray-600 text-center">Dengan mendaftar, Anda setuju dengan Syarat & Ketentuan dan Kebijakan Privasi kami.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1 text-xs text-indigo-300 mb-4">Hubungi Kami</div>
          <h2 className="text-3xl font-bold mb-2">Ada Pertanyaan?</h2>
          <p className="text-gray-400 mb-8">Tim kami siap membantu Anda 24/7</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '💬', name: 'WhatsApp', desc: 'Chat langsung dengan tim kami', href: 'https://wa.me/6281234567890' },
              { icon: '✉️', name: 'Email', desc: 'hello@navipro.id', href: 'mailto:hello@navipro.id' },
              { icon: '📸', name: 'Instagram', desc: '@navipro.id', href: '#' },
            ].map((c) => (
              <a key={c.name} href={c.href} className="bg-gray-800/40 backdrop-blur rounded-xl border border-gray-700/60 p-6 hover:border-indigo-500/30 transition-all group">
                <span className="text-2xl mb-2 block">{c.icon}</span>
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-gray-500">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-transparent to-cyan-600/20" />
        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          <div className="text-indigo-300 text-sm font-medium">Ready to Scale? 🚀</div>
          <h2 className="text-3xl sm:text-4xl font-bold">Mulai Lead Generation<br />Otomatis Hari Ini</h2>
          <p className="text-gray-400">Bergabung dengan 128+ seller Indonesia yang sudah merasakan manfaatnya</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all"
            >
              Coba Gratis 14 Hari
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </Link>
            <a href="/demo" className="inline-flex items-center text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 font-medium px-6 py-3 rounded-xl transition-all">
              Jadwalkan Demo
            </a>
          </div>
          <p className="text-sm text-gray-500">Tidak perlu kartu kredit · Setup 5 menit · Batalkan kapan saja</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-bold">N</div>
                <span className="font-bold text-lg">NAVI Pro</span>
              </div>
              <p className="text-xs text-gray-500">AI Lead Generation Platform untuk seller e-commerce Indonesia. Otomatis, cerdas, dan terukur.</p>
            </div>
            {[
              { title: 'Product', links: ['Platform', 'Features', 'Pricing', 'API Docs'] },
              { title: 'Company', links: ['Tentang Kami', 'Blog', 'Careers', 'Kontak'] },
              { title: 'Resources', links: ['Dokumentasi', 'Tutorial', 'Status Page', 'Syarat & Ketentuan'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex items-center justify-between text-xs text-gray-600">
            <p>© 2026 NAVI Pro. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400">Privacy</a>
              <a href="#" className="hover:text-gray-400">Terms</a>
              <a href="#" className="hover:text-gray-400">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
