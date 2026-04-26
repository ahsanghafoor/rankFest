'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Floating pill wrapper ── */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto flex items-center rounded-full transition-all duration-300 border ${scrolled || mobileOpen
            ? 'bg-white border-ink/15 shadow-2xl shadow-ink/12'
            : 'bg-white/96 border-ink/10 shadow-xl shadow-ink/8 backdrop-blur-sm'
            }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 pl-4 pr-5 py-3">
            <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 shadow-md shadow-orange/30">
              <span className="text-white font-black text-sm leading-none">R</span>
            </div>
            <span className="font-bold text-base text-ink tracking-tight whitespace-nowrap">
              Rank<span className="text-orange">Fest</span>
            </span>
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-ink/10 flex-shrink-0" />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5 px-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-ink/55 hover:text-ink rounded-full hover:bg-ink/5 transition-all duration-150 whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-ink/10 flex-shrink-0" />

          {/* Social proof + CTA */}
          <div className="hidden lg:flex items-center gap-2 px-3 pr-3">

            <a
              href="/#free-audit"
              className="bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange/90 transition-all hover:shadow-lg hover:shadow-orange/25 whitespace-nowrap"
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-14 h-12 ml-1 mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-[2px] bg-ink rounded-full"
              style={{ width: 22 }}
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[2px] bg-ink rounded-full"
              style={{ width: 16 }}
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] bg-ink rounded-full"
              style={{ width: 22 }}
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>

        </motion.nav>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-1 w-full bg-orange" />
            <div className="flex-1 flex flex-col px-6 pt-24 pb-10">
              <nav className="flex flex-col gap-1 mb-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-3xl font-semibold text-ink hover:text-orange transition-colors py-3.5 border-b border-ink/8"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.label}
                    <span className="text-ink/20 text-xl">→</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.35 }}
              >
                <a
                  href="/#free-audit"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full bg-orange text-white font-semibold py-4 rounded-2xl text-base hover:bg-orange/90 transition-colors"
                >
                  Get Free Site Audit
                </a>
                <a
                  href="#free-audit"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full bg-ink/5 text-ink font-semibold py-4 rounded-2xl text-base hover:bg-ink/10 transition-colors"
                >
                  Book a Call
                </a>
              </motion.div>

              <p className="mt-6 text-center text-ink/30 text-xs">info@rankfest.co · +44 748 7516 849</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
