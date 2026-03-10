import type { Metadata } from 'next'
import { Gelasio } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-gelasio',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chheng Bunheang | Fullstack Developer',
  description: 'Portfolio of Chheng Bunheang - A fullstack developer specializing in React, Node.js, and modern web technologies',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={gelasio.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
