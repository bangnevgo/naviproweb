import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NAVI Pro v2 - Smart Lead Generation untuk Seller Indonesia',
  description:
    'Platform AI-powered lead generation terdepan untuk seller Indonesia. Otomasi pencarian prospek, smart scoring, dan multi-channel engagement dengan teknologi AI terkini.',
  keywords: [
    'NAVI Pro',
    'Lead Generation',
    'AI',
    'Seller Indonesia',
    'Tokopedia',
    'Shopee',
    'TikTok Shop',
    'E-commerce',
    'Automation',
  ],
  authors: [{ name: 'NAVI Pro Team' }],
  openGraph: {
    title: 'NAVI Pro v2 - Smart Lead Generation untuk Seller Indonesia',
    description:
      'Platform AI-powered lead generation terdepan untuk seller Indonesia.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="bg-background" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased text-foreground`}>
        {children}
      </body>
    </html>
  )
}
