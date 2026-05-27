'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'Platform', href: '#pipeline' },
  { label: 'Features', href: '#features' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Tentang', href: '#about' },
]

function NavLogo() {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
        <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M16 8V24" stroke="white" strokeWidth="1.5" />
        <path d="M8 12L24 20" stroke="white" strokeWidth="1.5" />
        <path d="M24 12L8 20" stroke="white" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" fill="white" />
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#00d4ff" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold gradient-text">NAVI Pro</span>
    </a>
  )
}

const emptySubscribe = () => () => {}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <span className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'navbar-glass bg-background/80 border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a href="/demo.html">
              <Button variant="outline" size="sm" className="border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10">
                Demo
              </Button>
            </a>
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90"
            >
              Hubungi
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                    <a href="/demo.html">
                      <Button variant="outline" className="border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10">
                        Demo
                      </Button>
                    </a>
                    <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90">
                      Hubungi
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
