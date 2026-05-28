import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NAVI Pro - Platform Lead Generation AI Terdepan',
  description:
    'Temukan dan konversi prospek berkualitas tinggi dengan AI. Dashboard analytics real-time, smart scoring, dan multi-channel automation untuk seller Indonesia.',
  openGraph: {
    title: 'NAVI Pro - Platform Lead Generation AI',
    description: 'Otomasi pencarian prospek dengan teknologi AI terdepan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased bg-white text-slate-950`}>
        {children}
      </body>
    </html>
  )
}
