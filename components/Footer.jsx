'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, LinkedIn, XIcon, Instagram } from '@/components/icons'

const serviceLinks = [
  { label: 'Local SEO', href: '/services/local-seo' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI Chatbots', href: '/services/ai-chatbots' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/#process' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: LinkedIn, href: '#', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">
                <span className="text-orange">Rank</span>
                <span className="text-white">Fest</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
              Local SEO that moves the needle. No vanity metrics, no fluff.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-orange flex items-center justify-center text-white hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/65 text-sm hover:text-orange transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/65 text-sm hover:text-orange transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@rankfest.co"
                  className="flex items-start gap-2.5 text-white/65 text-sm hover:text-orange transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  info@rankfest.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+18887265378"
                  className="flex items-start gap-2.5 text-white/65 text-sm hover:text-orange transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  +44 748 7516 849
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/#free-audit"
                  className="inline-flex items-center bg-orange text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-orange/90 transition-colors"
                >
                  Get Free Audit
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © 2026 RankFest. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-white/35 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/35 text-xs hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
