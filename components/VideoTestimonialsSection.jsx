'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { StarIcon } from '@/components/icons'

const testimonials = [
  {
    id: 'vid-1',
    youtubeId: 'dQw4w9WgXcQ',
    name: 'Sarah K.',
    business: 'Bright Smile Dental — Austin, TX',
    quote: 'We went from invisible to fully booked in under 90 days.',
    initials: 'SK',
    result: '+418% more calls',
  },
  {
    id: 'vid-2',
    youtubeId: 'dQw4w9WgXcQ',
    name: 'James T.',
    business: 'FlowRight Plumbing — Denver, CO',
    quote: 'Ranking #1 on Maps changed our entire business overnight.',
    initials: 'JT',
    result: '#1 in 14 days',
  },
  {
    id: 'vid-3',
    youtubeId: 'dQw4w9WgXcQ',
    name: 'Anita M.',
    business: 'Luxe Hair Studio — Nashville, TN',
    quote: 'Finally, a marketing agency that actually gets local business.',
    initials: 'AM',
    result: '3.2x more leads',
  },
]

function PlayIcon() {
  return (
    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoCard({ t, isCenter, onPlay, playingId }) {
  const isPlaying = playingId === t.id
  const thumbUrl = `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`

  return (
    <div className={`rounded-2xl overflow-hidden border border-white/8 bg-white/5 ${isCenter ? 'shadow-2xl shadow-dark/50' : ''}`}>
      {/* Video / thumbnail area */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${t.name} testimonial`}
          />
        ) : (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
            onClick={() => isCenter && onPlay(t.id)}
            style={{ cursor: isCenter ? 'pointer' : 'default' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbUrl}
              alt={`${t.name} testimonial`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-200" />
            {isCenter && (
              <>
                <span className="absolute top-3 left-3 text-[10px] bg-orange text-white font-semibold px-2.5 py-1 rounded-full z-10">
                  {t.result}
                </span>
                <div className="relative z-10 w-14 h-14 rounded-full bg-orange flex items-center justify-center shadow-lg shadow-orange/40 group-hover:scale-110 transition-transform duration-200">
                  <PlayIcon />
                </div>
              </>
            )}
          </button>
        )}
      </div>

      {/* Info footer — center card only */}
      {isCenter && (
        <div className="p-5">
          <div className="flex gap-0.5 mb-2.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5 text-orange" />
            ))}
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-3 pt-3 border-t border-white/8">
            <div className="w-9 h-9 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[11px] font-bold text-orange">{t.initials}</span>
            </div>
            <div>
              <div className="font-semibold text-white text-sm">{t.name}</div>
              <div className="text-[11px] text-white/35">{t.business}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function VideoTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingId,   setPlayingId]   = useState(null)
  const headerRef    = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })
  const n = testimonials.length

  const prevIdx = (activeIndex - 1 + n) % n
  const nextIdx = (activeIndex + 1) % n

  // Auto-advance every 4 s — pause while a video is playing
  useEffect(() => {
    if (playingId) return
    const timer = setInterval(() => setActiveIndex((i) => (i + 1) % n), 4000)
    return () => clearInterval(timer)
  }, [playingId, n])

  const advance = (i) => { setActiveIndex(i); setPlayingId(null) }

  return (
    <section id="testimonials" className="py-12 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-orange" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">Client Stories</span>
            <div className="w-8 h-[1.5px] bg-orange" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
            Don&apos;t take our{' '}
            <span className="text-gradient italic">word for it.</span>
          </h2>
          <p className="mt-4 text-base text-white/40 leading-relaxed">
            Straight from the business owners who lived it.
          </p>
        </motion.div>

        {/* ── 3-card carousel ── */}
        <div className="flex items-center gap-4 lg:gap-6 justify-center">

          {/* Left — animated prev card */}
          <div className="hidden lg:block flex-shrink-0 w-[210px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`prev-${prevIdx}`}
                className="pointer-events-none select-none"
                style={{ transformOrigin: 'right center' }}
                initial={{ x: -40, opacity: 0, scale: 0.85 }}
                animate={{ x: 0, opacity: 0.28, scale: 0.88 }}
                exit={{ x: -40, opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ filter: 'blur(1.5px)' }}>
                  <VideoCard t={testimonials[prevIdx]} isCenter={false} onPlay={() => {}} playingId={null} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center — main animated card */}
          <div className="flex-1 max-w-[540px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0,   opacity: 1 }}
                exit={{   x: -80,  opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <VideoCard
                  t={testimonials[activeIndex]}
                  isCenter={true}
                  onPlay={setPlayingId}
                  playingId={playingId}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — animated next card */}
          <div className="hidden lg:block flex-shrink-0 w-[210px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`next-${nextIdx}`}
                className="pointer-events-none select-none"
                style={{ transformOrigin: 'left center' }}
                initial={{ x: 40, opacity: 0, scale: 0.85 }}
                animate={{ x: 0, opacity: 0.28, scale: 0.88 }}
                exit={{ x: 40, opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ filter: 'blur(1.5px)' }}>
                  <VideoCard t={testimonials[nextIdx]} isCenter={false} onPlay={() => {}} playingId={null} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => advance(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-7 h-2 bg-orange' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
