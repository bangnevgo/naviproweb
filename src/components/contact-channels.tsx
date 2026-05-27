'use client'

import { MessageSquare, Mail, Camera } from 'lucide-react'

const channels = [
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    color: '#25D366',
    href: '#',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@navipro.id',
    color: '#3b82f6',
    href: 'mailto:hello@navipro.id',
  },
  {
    icon: Camera,
    label: 'Instagram',
    value: '@navipro.id',
    color: '#8b5cf6',
    href: '#',
  },
]

export function ContactChannels() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="glass-card rounded-xl border border-primary/15 bg-slate-900/50 p-6 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 neon-border-glow group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: channel.color }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{channel.label}</p>
                  <p className="text-sm text-muted-foreground">{channel.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
