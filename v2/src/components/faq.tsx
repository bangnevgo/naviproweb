'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Apa itu NAVI Pro dan bagaimana cara kerjanya?',
    answer:
      'NAVI Pro adalah platform lead generation berbasis AI yang mengotomatisasi pencarian dan engagement prospek untuk seller Indonesia. Kami menganalisis jutaan data dari marketplace untuk menemukan customer potensial dan mengirim pesan personalized secara otomatis.',
  },
  {
    question: 'Platform apa saja yang didukung NAVI Pro?',
    answer:
      'Kami mendukung integrasi dengan Tokopedia, Shopee, TikTok Shop, Lazada, dan Blibli. Untuk keperluan khusus, kami juga menyediakan API custom integration.',
  },
  {
    question: 'Berapa banyak leads yang bisa saya dapatkan?',
    answer:
      'Jumlah leads tergantung paket yang Anda pilih. Paket Starter menghasilkan ~500 leads/bulan, Professional ~5000 leads/bulan, dan Enterprise tidak terbatas dengan custom training AI.',
  },
  {
    question: 'Apakah data prospek saya aman?',
    answer:
      'Ya, kami menggunakan enkripsi end-to-end dan compliance penuh dengan regulasi privasi data Indonesia (GDPR, UU PDP). Data Anda tidak akan dibagikan kepada pihak ketiga.',
  },
  {
    question: 'Bagaimana jika conversion rate saya rendah?',
    answer:
      'Tim support kami siap membantu optimization strategy Anda. Kami akan review message template, target criteria, dan campaign setting untuk meningkatkan conversion rate Anda.',
  },
  {
    question: 'Apakah ada periode trial gratis?',
    answer:
      'Ya, kami menawarkan free trial 14 hari untuk semua paket baru. Tidak perlu kartu kredit, langsung bisa akses semua fitur.',
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang NAVI Pro.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-border rounded-lg overflow-hidden bg-white transition-smooth"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-light transition-smooth"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-accent transition-transform flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-4 border-t border-neutral-border">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Masih ada pertanyaan?</h3>
          <p className="mb-4 opacity-90">
            Tim support kami siap membantu 24/7 untuk menjawab semua kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2 bg-white text-accent rounded-lg font-medium hover:bg-neutral-light transition-smooth">
              Hubungi Support
            </button>
            <button className="px-6 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-smooth">
              Chat Live
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
