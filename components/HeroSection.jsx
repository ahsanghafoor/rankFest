'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@/components/icons'
import Image from 'next/image'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const bannerItems = [
  'LOCAL SEO', 'GOOGLE MAPS', 'CITATION BUILDING', 'KEYWORD TARGETING',
  'ON-PAGE SEO', 'LINK BUILDING', 'GMB OPTIMIZATION', 'LOCAL RANKINGS',
  'LOCAL SEO', 'GOOGLE MAPS', 'CITATION BUILDING', 'KEYWORD TARGETING',
  'ON-PAGE SEO', 'LINK BUILDING', 'GMB OPTIMIZATION', 'LOCAL RANKINGS',
]

/* ── Stat pill icons ── */
function UsersIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0Zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0Z" />
    </svg>
  )
}

function TrendingUpIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  )
}

const stats = [
  { value: '150+', label: 'Local Clients', Icon: UsersIcon },
  { value: '3x', label: 'Traffic Growth', Icon: TrendingUpIcon },
  {
    value: '4.9 ★', label: 'Client Satisfaction', Icon: StarIcon
  },
]

/* ── Industry outline icons (stroke-based, no fill) ── */
function IcoBriefcase({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  )
}
function IcoWrench({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function IcoWind({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
  )
}
function IcoActivity({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IcoHome({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function IcoSun({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}
function IcoShield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function IcoPencilRuler({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}
function IcoDroplet({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  )
}
function IcoPlusCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}

const trustIndustries = [
  { label: 'Lawyers', Icon: IcoBriefcase },
  { label: 'Plumbers', Icon: IcoWrench },
  { label: 'HVAC', Icon: IcoWind },
  { label: 'Dentists', Icon: IcoActivity },
  { label: 'Roofers', Icon: IcoHome },
  { label: 'Solar Installation', Icon: IcoSun },
  { label: 'Pest Control', Icon: IcoShield },
  { label: 'Home Remodeling', Icon: IcoPencilRuler },
  { label: 'Water & Fire Damage', Icon: IcoDroplet },
  { label: 'Plus more', Icon: IcoPlusCircle, isMore: true },
]

export default function HeroSection() {
  const sectionRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    sectionRef.current.style.setProperty('--mouse-x', `${x}%`)
    sectionRef.current.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-cream"
    >
      {/* ── Layer 0: dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none z-0" />

      {/* ── Layer 0: diagonal line texture ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -52deg,
            rgba(255,111,35,0.09) 0px,
            rgba(255,111,35,0.09) 1px,
            transparent 1px,
            transparent 38px
          )`,
        }}
      />

      {/* ── Layer 0: mouse-tracking radial glow ── */}
      <div className="absolute inset-0 hero-glow pointer-events-none z-0 transition-all duration-75" />

      {/* ── Layer 0: ambient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[6%] right-[4%] w-[520px] h-[520px] rounded-full bg-orange/8 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[12%] left-[-6%] w-72 h-72 rounded-full bg-orange/7 blur-2xl animate-float-medium" />
        <svg className="absolute top-0 right-0 w-[55%] h-full opacity-[0.04]" viewBox="0 0 600 800" fill="none" aria-hidden="true">
          <ellipse cx="500" cy="400" rx="300" ry="380" stroke="#FF6F23" strokeWidth="1" />
          <ellipse cx="500" cy="400" rx="220" ry="280" stroke="#FF6F23" strokeWidth="1" />
          <ellipse cx="500" cy="400" rx="140" ry="180" stroke="#FF6F23" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center pt-24 pb-8 lg:pt-28 lg:pb-10">

        {/* ── Left column ── */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">


          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-[1.08] text-ink"
            style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)' }}
          >
            More than an agency,
            <br />
            a{' '}
            <span className="relative inline-block text-orange">
              growth partner
              {/* Hand-drawn curved underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                viewBox="0 0 300 14"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 10 C60 3, 160 2, 297 9"
                  stroke="#FF6F23"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.55 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="mt-7 text-base lg:text-[1.05rem] text-ink/55 leading-relaxed max-w-[490px]"
          >
            We help your business show up #1 so nearby customers find you first. We audit, fix, and keep improving your rankings over time.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href="#free-audit"
              className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-orange/90 shadow-lg shadow-orange/25 transition-all hover:-translate-y-0.5"
            >
              Get Free Site Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-7 py-3.5 rounded-full border border-ink/12 hover:border-ink/25 text-sm transition-all hover:-translate-y-0.5 shadow-sm"
            >
              See Results
            </a>
          </motion.div>

          {/* Stats — pill cards with icons */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 bg-white/75 backdrop-blur-sm border border-ink/8 rounded-2xl px-4 py-3 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                  <s.Icon />
                </div>
                <div>
                  <div className="font-bold text-lg text-ink leading-none">{s.value}</div>
                  <div className="text-[10px] text-ink/45 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right column — Hero visual ── */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[500px] h-[480px]">
            {/*
              ── AI HERO IMAGE ──────────────────────────────────────────────
              Uncomment below after placing the image at /public/hero-visual.jpg

              IMAGE PROMPT:
              "A sleek 3D smartphone mockup tilted at a 25-degree angle, screen facing
              the viewer, showing a Google Maps interface. A large bold orange (#FF6F23)
              Google Maps location pin floats above the phone screen with a soft glow.
              Background: transparent or very light cream (#F8F2E9). Ultra-realistic render,
              no people, no UI chrome except the map screen. Wide 1:1 canvas. JPG format."
              ────────────────────────────────────────────────────────────────
            */}
            <Image
              src="/hero.png"
              alt="Local SEO growth visualization"
              fill
              className="object-contain"
              priority
            />

            {/* Placeholder rings (shown until real image is added) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
              <div className="absolute w-[380px] h-[380px] rounded-full border border-orange/10" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-orange/15" />
              <div className="absolute w-[180px] h-[180px] rounded-full border border-orange/22 bg-orange/4" />
              <div className="w-3 h-3 rounded-full bg-orange/30 blur-sm relative z-10" />
              <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange/45" />
              <div className="absolute top-1/2 right-[11%] -translate-y-1/2 w-2 h-2 rounded-full bg-orange/30" />
              <div className="absolute bottom-[15%] left-[33%] w-2 h-2 rounded-full bg-orange/40" />
            </div>

            {/* Floating card: +312% */}
            <motion.div
              className="absolute -top-2 -right-4 bg-dark rounded-2xl px-4 py-3.5 shadow-2xl shadow-dark/40 border border-white/6 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-[9px] text-white/40 font-semibold uppercase tracking-wider">Calls Increased</span>
              </div>
              <div className="font-bold text-[1.65rem] leading-none text-white">+312%</div>
              <div className="text-[10px] text-orange/80 mt-1.5 font-medium">vs. last quarter</div>
            </motion.div>

            {/* Floating card: Rank #1 */}
            <motion.div
              className="absolute top-[40%] -left-6 bg-white rounded-2xl px-4 py-3.5 shadow-xl shadow-ink/12 border border-ink/6 z-20"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <div className="text-[9px] text-ink/40 font-semibold uppercase tracking-wider mb-2">Google Maps Ranking</div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-orange flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange/30">
                  <span className="text-white text-[10px] font-black">#1</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-ink leading-tight">Ranked First</div>
                  <div className="text-[10px] text-ink/40">Denver, CO</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card: Rating */}
            <motion.div
              className="absolute bottom-6 -right-2 bg-cream border border-ink/10 rounded-xl px-3.5 py-3 shadow-lg z-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            >
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-2.5 h-2.5 text-orange" />
                ))}
              </div>
              <div className="font-bold text-sm text-ink leading-none">4.9 Rating</div>
              <div className="text-[10px] text-ink/40 mt-0.5">127 verified reviews</div>
            </motion.div>

            {/* Live badge */}
            <motion.div
              className="absolute bottom-[30%] -left-4 bg-dark text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Just ranked — new call incoming
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* ── Static industry trust strip ── */}
      <div className="relative z-10 py-5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.2em] text-ink/50 mb-4">
            TRUSTED BY LOCAL BUSINESSES ACROSS INDUSTRIES
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {trustIndustries.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 transition-colors group cursor-default
                  }`}
              >
                <item.Icon
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${item.isMore ? 'text-orange/60' : 'text-ink/35 group-hover:text-orange/60'
                    }`}
                />
                <span
                  className={`text-[12px] font-medium whitespace-nowrap transition-colors ${item.isMore ? 'text-orange/70' : 'text-ink/45 group-hover:text-ink/65'
                    }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrolling dark banner ── */}
      <div className="relative z-20 mb-4">
        <div
          className="bg-dark overflow-hidden"
        >
          <div className="py-4 overflow-hidden">
            <div className="flex marquee-track" style={{ width: 'max-content' }}>
              <div className="flex items-center h-full">
                {bannerItems.map((item, i) => (
                  <div key={i} className="flex items-center flex-shrink-0">
                    <span className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 whitespace-nowrap">
                      {item}
                    </span>
                    <span className="text-orange text-[12px]">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
