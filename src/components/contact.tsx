'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, BarChart3, Headphones, ShieldCheck, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

const benefits = [
  { icon: Zap, label: 'Setup Instan', description: 'Aktif dalam 5 menit tanpa konfigurasi rumit.' },
  { icon: BarChart3, label: 'Dashboard Real-time', description: 'Monitor semua lead dan performance secara live.' },
  { icon: Headphones, label: 'Onboarding Support', description: 'Tim kami bantu Anda dari awal hingga sukses.' },
]

const categories = [
  'Fashion & Apparel',
  'Electronics & Gadget',
  'Beauty & Wellness',
  'Home & Living',
  'Food & Beverage',
  'Lainnya',
]

const planOptions = ['Starter', 'Growth', 'Enterprise']

interface FormState {
  name: string
  phone: string
  email: string
  storeUrl: string
  category: string
  plan: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  storeUrl?: string
  category?: string
  plan?: string
}

export function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    storeUrl: '',
    category: '',
    plan: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!form.phone.trim()) newErrors.phone = 'Nomor telepon wajib diisi'
    if (!form.email.trim()) newErrors.email = 'Email wajib diisi'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Format email tidak valid'
    if (!form.storeUrl.trim()) newErrors.storeUrl = 'URL toko wajib diisi'
    if (!form.category) newErrors.category = 'Pilih kategori'
    if (!form.plan) newErrors.plan = 'Pilih paket'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)

    toast.success('Pendaftaran berhasil! 🎉', {
      description: 'Tim kami akan menghubungi Anda dalam 24 jam.',
    })

    setForm({ name: '', phone: '', email: '', storeUrl: '', category: '', plan: '', message: '' })
    setErrors({})
  }

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm">
              <span className="text-cyan-600 dark:text-cyan-400">Coba Gratis</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Mulai Lead Generation <span className="gradient-text">Otomatis Hari Ini</span>
            </h2>

            <p className="text-muted-foreground">
              Daftar sekarang dan nikmati 14 hari gratis tanpa kartu kredit. Setup hanya 5 menit.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{benefit.label}</p>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>14 hari gratis · Tanpa kartu kredit · Garansi uang kembali 30 hari</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. Telepon</Label>
                  <Input
                    id="phone"
                    placeholder="08123456789"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeUrl">URL Toko</Label>
                <Input
                  id="storeUrl"
                  placeholder="https://tokopedia.com/toko-anda"
                  value={form.storeUrl}
                  onChange={(e) => updateField('storeUrl', e.target.value)}
                  className={errors.storeUrl ? 'border-destructive' : ''}
                />
                {errors.storeUrl && <p className="text-xs text-destructive">{errors.storeUrl}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Kategori</Label>
                  <Select value={form.category} onValueChange={(v) => updateField('category', v)}>
                    <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Paket</Label>
                  <Select value={form.plan} onValueChange={(v) => updateField('plan', v)}>
                    <SelectTrigger className={errors.plan ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Pilih paket" />
                    </SelectTrigger>
                    <SelectContent>
                      {planOptions.map((plan) => (
                        <SelectItem key={plan} value={plan}>
                          {plan}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.plan && <p className="text-xs text-destructive">{errors.plan}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan (opsional)</Label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Daftar Coba Gratis
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
