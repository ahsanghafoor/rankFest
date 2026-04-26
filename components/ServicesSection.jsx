'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── Service icons (filled white on orange bg) ── */
function IconLocalSEO({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-8-5.686-8-12a8 8 0 0116 0c0 6.314-8 12-8 12z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  )
}

function IconWebDev({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M8 10l2 2-2 2M13 14h3" />
    </svg>
  )
}

function IconChatbot({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" />
    </svg>
  )
}

const services = [
  {
    Icon: IconLocalSEO,
    slug: 'local-seo',
    title: 'Local SEO',
    description:
      'Get found by customers searching in your area. We optimize your GBP/GMB, build local citations, and create content that pushes you to position 1 on Google Search and Maps.',
    bullets: [
      'GBP/GMB optimization',
      'On-page + content creation',
      'Local citation building',
      'Review strategy',
    ],
  },
  {
    Icon: IconWebDev,
    slug: 'web-development',
    title: 'Web Development',
    description:
      'We build fast, clean, and conversion-ready websites that turn visitors into paying customers. No bloated templates, no slow load times.',
    bullets: [
      'Custom Website',
      'Wordpress Website',
      'Software Development',
      'Shopify Development',
    ],
  },
  {
    Icon: IconChatbot,
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    description:
      'Never miss a lead again. Our AI chatbots are trained on your business, answer questions instantly, capture lead details, and book appointments 24 hours a day, 7 days a week.',
    bullets: [
      'Trained on your content',
      'Lead capture',
      'Calendar booking',
      'Handoff to Your Team',
    ],
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesSection() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-60px 0px' })

  return (
    <section id="services" className="py-12 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section header — centered ── */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 36 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-6">

            {/* Label */}
            <div className="w-6 h-[2px] bg-orange rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
              What we Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
            Three things, done{' '}
            <em className="italic text-orange not-italic" style={{ fontStyle: 'italic' }}>well.</em>
          </h2>

          {/* Sub */}
          <p className="mt-4 text-base text-ink/50 leading-relaxed">
            We do not spread ourselves thin. We focus on three core services that actually bring local businesses more calls, more leads, and more revenue
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-7 border border-ink/6 shadow-sm hover:shadow-xl hover:shadow-ink/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover bg accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/[0.02] group-hover:to-orange/[0.04] transition-all duration-500 rounded-3xl" />

              {/* Icon — solid orange square, white icon */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-orange flex items-center justify-center mb-6 shadow-lg shadow-orange/30 group-hover:scale-105 transition-transform duration-300">
                <svc.Icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-display text-xl font-bold text-ink mb-2.5">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-ink/50 leading-relaxed mb-6">
                {svc.description}
              </p>

              {/* Checklist */}
              <ul className="relative z-10 space-y-2 mb-7">
                {svc.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-orange" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-ink/60">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href={`/services/${svc.slug}`}
                className="relative z-10 inline-flex items-center gap-1.5 text-orange text-sm font-semibold hover:gap-2.5 transition-all duration-200"
              >
                See the playbook
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
