'use client'

import { useEffect, useState } from 'react'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack', href: '#technologies' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el))

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        const line = window.innerHeight * 0.35
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
        const current = atBottom
          ? sections[sections.length - 1]
          : sections.filter((section) => section.getBoundingClientRect().top <= line).pop()
        setActive(current ? `#${current.id}` : '')
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          'mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl pl-4 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-500',
          scrolled || isOpen
            ? 'bg-ink-2/80 shadow-[inset_0_0_0_1px_var(--line),0_12px_40px_-12px_oklch(0_0_0/0.6)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <a href="#hero" className="flex items-center gap-2.5 rounded-lg" aria-label="Chheng Bunheang, back to top">
          <svg viewBox="0 0 64 64" className="size-7" aria-hidden="true">
            <rect width="64" height="64" rx="16" fill="var(--ink-3)" />
            <path d="M29 22.5a11 11 0 1 0 0 19" fill="none" stroke="var(--text)" strokeWidth="5.5" strokeLinecap="round" />
            <circle cx="41" cy="32" r="5" fill="var(--ember)" />
          </svg>
          <span className="text-[0.95rem] font-semibold tracking-tight text-text">Chheng Bunheang</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative z-10 block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-text' : 'text-text-3 hover:text-text',
                  )}
                >
                  {link.name}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href="/downloads/chheng-bunheang-cv.pdf" download className="btn btn-ghost hidden !min-h-10 sm:inline-flex">
            <ArrowDownToLine size={16} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl text-text hover:bg-white/5 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl bg-ink-2/95 shadow-[inset_0_0_0_1px_var(--line),0_24px_60px_-20px_oklch(0_0_0/0.7)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-white/5',
                      active === link.href ? 'text-text' : 'text-text-2',
                    )}
                  >
                    {link.name}
                    {active === link.href && <span className="size-1.5 rounded-full bg-ember" aria-hidden="true" />}
                  </a>
                </li>
              ))}
              <li className="p-2 pt-3">
                <a href="/downloads/chheng-bunheang-cv.pdf" download className="btn btn-primary w-full">
                  <ArrowDownToLine size={16} aria-hidden="true" />
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
