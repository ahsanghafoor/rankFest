'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SearchIcon, MapIcon, Bolt, TrendingUp } from '@/components/icons'

const steps = [
  {
    number: '01',
    icon: SearchIcon,
    title: 'Audit',
    description:
      'We tear apart your current online presence: GBP, citations, backlinks, on-page signals, and pinpoint exactly where visibility is being lost.',
    detail: 'Full GBP audit, citation check, competitor gap analysis',
  },
  {
    number: '02',
    icon: MapIcon,
    title: 'Strategy',
    description:
      'No templates. We build a campaign plan specific to your industry, city, and competition level. You know exactly what we are doing and why.',
    detail: 'Custom keyword map, local content plan, citation targets',
  },
  {
    number: '03',
    icon: Bolt,
    title: 'Execute',
    description:
      'We handle everything: optimization, citation cleanup, content, link outreach. You keep running your business. We do the work.',
    detail: 'Hands-off execution, weekly progress updates',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Rankings climb, calls increase, foot traffic grows. Monthly reporting shows exactly what has moved and where we are pushing next.',
    detail: 'Monthly report, ranking tracker, ROI breakdown',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ProcessSection() {
  const ref = useRef(null)
  const headerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section id="process" className="py-12 lg:py-16 bg-dark relative overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Large decorative background numbers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span className="absolute -left-8 top-0 font-display text-[20rem] font-bold text-white/[0.02] leading-none">
          0
        </span>
        <span className="absolute right-0 bottom-0 font-display text-[20rem] font-bold text-white/[0.02] leading-none">
          4
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-xl mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-orange" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
            From unknown to{' '}
            <span className="text-orange">undeniable.</span>
          </h2>
          <p className="mt-4 text-base text-white/40 leading-relaxed">
            Four steps. Zero guesswork. A process refined across 150+ local business campaigns.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-orange/25 transition-all duration-300 overflow-hidden"
              >
                {/* Large ghost number */}
                <span className="absolute -right-3 -bottom-4 font-display text-8xl font-bold text-white/[0.05] group-hover:text-orange/10 transition-colors duration-300 leading-none select-none">
                  {step.number}
                </span>

                {/* Top row: step number badge + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-orange/15 text-orange font-display font-bold text-sm group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {step.number}
                  </span>
                  <Icon className="w-5 h-5 text-white/25 group-hover:text-orange/70 transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Detail tag */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-orange/40" />
                  <span className="text-[10px] text-orange/60 uppercase tracking-wider sm:tracking-widest font-medium break-words">
                    {step.detail}
                  </span>
                </div>

                {/* Step connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-9 z-10">
                    <div className="w-6 h-px bg-white/10" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
