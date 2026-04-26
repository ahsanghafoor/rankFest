'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industriesRow1 = [
  { icon: '⚖️',  label: 'Lawyers'           },
  { icon: '🔧',  label: 'Plumbers'           },
  { icon: '❄️',  label: 'HVAC'               },
  { icon: '🦷',  label: 'Dentists'           },
  { icon: '🏚️', label: 'Roofers'            },
  { icon: '☀️',  label: 'Solar Installation' },
  { icon: '🪲',  label: 'Pest Control'       },
]

const industriesRow2 = [
  { icon: '🏗️', label: 'Home Remodeling'    },
  { icon: '🔥',  label: 'Water & Fire Damage'},
  { icon: '🍽️', label: 'Restaurants'        },
  { icon: '🚗',  label: 'Auto Services'      },
  { icon: '🏥',  label: 'Medical Clinics'    },
  { icon: '🏡',  label: 'Real Estate'        },
  { icon: '💆',  label: 'Chiropractors'      },
]

function IndustryPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-ink/8 rounded-2xl px-4 py-2.5 whitespace-nowrap shadow-sm flex-shrink-0">
      <span className="text-[15px] leading-none">{icon}</span>
      <span className="font-medium text-[13px] text-ink/65">{label}</span>
    </div>
  )
}

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section ref={ref} className="py-10 bg-cream border-t border-ink/5 overflow-hidden">
      <motion.p
        className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35 mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Trusted by local businesses across industries
      </motion.p>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {/* Row 1 — scrolls left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          <div className="flex gap-3 marquee-track" style={{ width: 'max-content' }}>
            {[...industriesRow1, ...industriesRow1].map((ind, i) => (
              <IndustryPill key={i} icon={ind.icon} label={ind.label} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (opposite direction) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-3 marquee-track-slow"
            style={{ width: 'max-content', animationDirection: 'reverse' }}
          >
            {[...industriesRow2, ...industriesRow2].map((ind, i) => (
              <IndustryPill key={i} icon={ind.icon} label={ind.label} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
