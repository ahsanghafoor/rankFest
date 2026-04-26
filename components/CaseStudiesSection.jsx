'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const caseStudies = [
  {
    slug: 'bright-smile-dental',
    industry: 'Dental Practice',
    city: 'Austin, TX',
    business: 'Bright Smile Dental',
    problem:
      'Stuck on page 2 for every key search. New practice, 6 months in, barely 20 calls a month. 6 months in, barely 20 calls a month',
    metrics: [
      { value: '+418%', label: 'Monthly Calls' },
      { value: '#1', label: 'Maps Rank' },
      { value: '4.9★', label: 'Review Score' },
    ],
    duration: '90-day campaign',
    initials: 'BSD',
    accentColor: 'bg-blue-500',
    thumbnail: '/assets/dental.jpeg',
    /*
      IMAGE PLACEHOLDER
      File: /public/case-studies/bright-smile-dental.jpg
      Prompt: "Professional exterior photo of a modern dental clinic with clean signage,
               bright natural lighting, welcoming entrance, suburban setting, 16:9 ratio"
      Dimensions: 800 x 450px (16:9)
    */
  },
  {
    slug: 'flowright-plumbing',
    industry: 'Plumbing',
    city: 'Denver, CO',
    business: 'FlowRight Plumbing',
    problem:
      'Lost ground to a national franchise. Three years at #1, dropped to #6 after a competitor spam campaign.',
    metrics: [
      { value: '312%', label: 'Traffic Increase' },
      { value: '14 days', label: 'Back to #1' },
      { value: '+$22k', label: 'Monthly Revenue' },
    ],
    duration: 'Ongoing retainer',
    initials: 'FRP',
    accentColor: 'bg-green-500',
    thumbnail: '/assets/plumbing.jpeg',
    /*
      IMAGE PLACEHOLDER
      File: /public/case-studies/flowright-plumbing.jpg
      Prompt: "Professional photo of a branded plumbing service van parked outside a
               residential home, clean livery, daytime, suburban street, 16:9 ratio"
      Dimensions: 800 x 450px (16:9)
    */
  },
  {
    slug: 'az-home-improvements',
    industry: 'Home Renovation Company',
    city: 'Barnsley, UK',
    business: 'AZ Home Improvements',
    problem:
      'AZ Home Improvements offered great services but did not show up in local searches. We helped them reach the top spot in Barnsley.',
    metrics: [
      { value: '1,200+', label: 'Monthly Visits' },
      { value: '3.2x', label: 'More Leads' },
      { value: '94%', label: '5-Star Reviews' },
    ],
    duration: '60-day launch sprint',
    initials: 'HRC',
    accentColor: 'bg-purple-500',
    thumbnail: '/assets/home-renovation.jpeg',
    /*
      IMAGE PLACEHOLDER
      File: /public/case-studies/iron-collective-gym.jpg
      Prompt: "Modern gym interior with industrial design, exposed ceiling, premium
               equipment, motivational atmosphere, people training, 16:9 ratio"
      Dimensions: 800 x 450px (16:9)
    */
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const headerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section id="case-studies" className="py-12 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">
                Case Studies
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Real clients.{' '}
              <span className="text-orange">Real results.</span>
            </h2>
            <p className="text-ink/45 max-w-md text-sm leading-relaxed mt-4">
              Actual campaigns, actual clients, competitive local markets.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((cs) => (
            <motion.a
              key={cs.business}
              href={`/case-studies/${cs.slug}`}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-ink/6 hover:shadow-2xl hover:shadow-ink/8 transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Image placeholder area */}
              <div className="relative h-44 bg-gradient-to-br from-ink/5 to-ink/10 overflow-hidden">
                <Image
                  src={cs.thumbnail}
                  alt={cs.business}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-ink/10">{cs.initials}</span>
                </div>
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                {/* Industry + city tags */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-ink/70 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-ink/50 text-[10px] px-2.5 py-1 rounded-full">
                    {cs.city}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-1.5">{cs.business}</h3>
                <p className="text-sm text-ink/45 mb-6 leading-relaxed">{cs.problem}</p>

                {/* Metrics grid — equal height, text never stretches the box */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-cream rounded-xl p-3 text-center flex flex-col items-center justify-center min-h-[72px]">
                      <div className="font-display text-sm font-bold text-orange leading-none whitespace-nowrap">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-ink/40 mt-1.5 leading-snug uppercase tracking-wide text-center">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View case study link */}
                <div className="pt-4 border-t border-ink/5">
                  <span className="inline-flex items-center gap-1.5 text-orange text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Read full case study
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
