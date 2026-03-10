'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#hero')

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveLink(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button onClick={() => scrollToSection('#hero')} className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Chheng Bunheang</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={false}
                animate={{
                  backgroundColor: activeLink === link.href ? 'rgba(0, 0, 0, 0.07)' : 'rgba(0,0,0,0)',
                }}
                whileHover={{
                  backgroundColor:
                    activeLink === link.href
                      ? 'rgba(0, 0, 0, 0.07)'
                      : 'rgba(0, 0, 0, 0.04)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative rounded-lg"
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-4 py-2 block w-full text-left"
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-gray-900 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-2 origin-top"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => {
                    setIsOpen(false)
                    scrollToSection(link.href)
                  }}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
