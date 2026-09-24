import type { Metadata, Viewport } from 'next'
import { Mona_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const mona = Mona_Sans({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-mona',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chhengbunheang.dev'),
  title: 'Chheng Bunheang | Fullstack Developer',
  description:
    'Chheng Bunheang is a fullstack developer and CS student at CADT in Phnom Penh, building web, mobile, and desktop apps with React, Node.js, Laravel, and Flutter.',
  openGraph: {
    title: 'Chheng Bunheang | Fullstack Developer',
    description: 'Web, mobile, and desktop apps built across the whole stack.',
    url: 'https://chhengbunheang.dev',
    siteName: 'Chheng Bunheang',
    images: ['/profile.jpg'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0d12',
}

const contract = `<!--
THESIS: The category standard played straight: a dark developer portfolio whose bento grid IS the argument, every tile carrying real work instead of icon-heading-text filler.
OWN-WORLD: Night ink and graphite tiles with a 1px lit rim that follows the pointer, one ember accent for action and live state, ice for data; Mona Sans stretched wide for display, Geist Mono only for dates, stacks, and data.
STORY: Peers see a fullstack builder with range, open real project previews, then message him or grab the CV.
FIRST VIEWPORT: Bento hero: wide name statement tile, portrait tile, "now building" live tile, current-role tile, stack marquee; Contact and CV buttons inside the statement tile.
FORM: Canon (category standard), user-chosen after two rolls; seed key 86fa9aac.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${mona.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div hidden dangerouslySetInnerHTML={{ __html: contract }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
