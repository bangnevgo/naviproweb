'use client'

import { Twitter, Linkedin, Heart, Camera } from 'lucide-react'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Pipeline', href: '#pipeline' },
      { label: 'Integrations', href: '#' },
      { label: 'API Docs', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partners', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)" />
                <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M16 8V24" stroke="white" strokeWidth="1.5" />
                <path d="M8 12L24 20" stroke="white" strokeWidth="1.5" />
                <path d="M24 12L8 20" stroke="white" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="3" fill="white" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="var(--color-primary)" />
                    <stop offset="1" stopColor="var(--chart-2)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold gradient-text">NAVI Pro</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Platform AI-powered lead generation otomatis untuk seller Indonesia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NAVI Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary/80 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
