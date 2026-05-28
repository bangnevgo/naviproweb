'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-neutral-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-foreground">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
              N
            </div>
            <span>NAVI Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition-smooth">
              Fitur
            </Link>
            <Link href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-smooth">
              Cara Kerja
            </Link>
            <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition-smooth">
              Pricing
            </Link>
            <Link href="#faq" className="text-foreground/70 hover:text-foreground transition-smooth">
              FAQ
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="px-4 py-2 text-foreground/70 hover:text-foreground transition-smooth"
            >
              Login
            </Link>
            <Link
              href="#"
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-smooth font-medium"
            >
              Demo Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-neutral-light rounded-lg transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-border space-y-4">
            <Link href="#features" className="block text-foreground/70 hover:text-foreground transition-smooth">
              Fitur
            </Link>
            <Link href="#how-it-works" className="block text-foreground/70 hover:text-foreground transition-smooth">
              Cara Kerja
            </Link>
            <Link href="#pricing" className="block text-foreground/70 hover:text-foreground transition-smooth">
              Pricing
            </Link>
            <Link href="#faq" className="block text-foreground/70 hover:text-foreground transition-smooth">
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="#"
                className="px-4 py-2 text-center text-foreground/70 hover:text-foreground transition-smooth"
              >
                Login
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-center bg-accent text-white rounded-lg hover:bg-accent-hover transition-smooth font-medium"
              >
                Demo Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
