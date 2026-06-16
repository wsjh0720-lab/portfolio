import { Open_Sans, EB_Garamond } from 'next/font/google'

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-neue-haas-grotesk-text',
  display: 'swap',
})
