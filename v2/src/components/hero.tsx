'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-neutral-light px-4 py-2 rounded-full border border-neutral-border">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-foreground/70">
                Didukung oleh teknologi AI terdepan
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Lead Generation Cerdas untuk Seller Indonesia
            </h1>

            <p className="text-lg text-foreground/60 max-w-xl">
              Temukan prospek berkualitas tinggi secara otomatis, segmentasikan dengan AI, dan tingkatkan konversi hingga 3x lipat dengan NAVI Pro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-hover transition-smooth font-medium"
              >
                Mulai Demo Gratis
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-border text-foreground rounded-lg hover:bg-neutral-light transition-smooth font-medium"
              >
                Lihat Video Demo
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-neutral-border">
              <div>
                <p className="text-3xl font-bold text-accent">5000+</p>
                <p className="text-sm text-foreground/60">Seller Active</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">10M+</p>
                <p className="text-sm text-foreground/60">Leads Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-sm text-foreground/60">Kepuasan Pengguna</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-neutral-light rounded-3xl p-8 aspect-square flex items-center justify-center border border-neutral-border shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">📊</span>
                </div>
                <p className="text-foreground/60 font-medium">
                  Dashboard Analytics Real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
