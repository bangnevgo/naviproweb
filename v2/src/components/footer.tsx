'use client'

import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-bold text-xl">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                N
              </div>
              <span>NAVI Pro</span>
            </div>
            <p className="text-white/70 mb-4">
              Platform lead generation AI terdepan untuk seller Indonesia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-smooth">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-smooth">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-smooth">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-white">Produk</h4>
            <div className="space-y-2">
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Fitur
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Pricing
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Integrasi
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Roadmap
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Perusahaan</h4>
            <div className="space-y-2">
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Tentang Kami
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Blog
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Karir
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth block">
                Press
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Mail size={18} />
                <span>support@navipro.id</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone size={18} />
                <span>+62 21 XXXX XXXX</span>
              </div>
              <p className="text-white/70">Jakarta Selatan, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 NAVI Pro. Semua hak dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-white/70">
            <Link href="#" className="hover:text-white transition-smooth">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white transition-smooth">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-white transition-smooth">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
