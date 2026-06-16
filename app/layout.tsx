import type { Metadata } from 'next'
import { openSans, ebGaramond } from '@/lib/fonts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: '作品集 | Your Name',
  description: '视频导演 / 摄影师 — 作品展示',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${openSans.variable} ${ebGaramond.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
