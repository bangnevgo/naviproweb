'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl text-slate-950">
          NAVI <span className="text-blue-600">Pro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-950 transition-colors text-sm font-medium">
            Fitur
          </a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-950 transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-950 transition-colors text-sm font-medium">
            Tentang
          </a>
        </div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors">
            Masuk
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden">
            <div className="space-y-4">
              <a href="#features" className="block text-slate-700 hover:text-slate-950 transition-colors">
                Fitur
              </a>
              <a href="#pricing" className="block text-slate-700 hover:text-slate-950 transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-slate-700 hover:text-slate-950 transition-colors">
                Tentang
              </a>
              <button className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Masuk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
