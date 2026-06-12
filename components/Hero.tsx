'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const TRUST = [
  '15+ Specialized Services',
  'Pakistan & GCC Focus',
  'AI-Powered Approach',
  'Strategy + Execution',
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '74px',
        background: '#FFFFFF',
      }}
    >
      {/* Dot pattern */}
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.65 }} />

      {/* Primary green glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '0%',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,92,56,0.06) 0%, transparent 68%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '0%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,150,46,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Large decorative crescent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-80px',
          transform: 'translateY(-50%)',
          width: '480px',
          height: '480px',
          opacity: 0.028,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10C50.3 10 10 50.3 10 100S50.3 190 100 190c20.9 0 40.1-6.7 55.8-17.9A72 72 0 0 1 100 100a72 72 0 0 1 55.8-72.1A89.7 89.7 0 0 0 100 10z"
            fill="#0A5C38"
          />
        </svg>
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '96px' }}>
        <div style={{ maxWidth: '860px' }}>

          {/* Eyebrow */}
          <motion.div {...fade(0)} style={{ marginBottom: '24px' }}>
            <span className="badge">
              <CheckCircle2 size={11} />
              Pakistan &amp; GCC Business Consulting
            </span>
          </motion.div>

          {/* Serif accent line */}
          <motion.div
            {...fade(0.06)}
            style={{ marginBottom: '14px' }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '17px',
                color: '#B8962E',
                letterSpacing: '0.06em',
                fontWeight: 500,
              }}
            >
              Crescent Consulting
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fade(0.14)}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(44px, 7.5vw, 88px)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: '#0C1A12',
              marginBottom: '28px',
            }}
          >
            Where{' '}
            <span style={{ color: '#0A5C38' }}>Strategy</span>
            <br />
            Meets{' '}
            <span style={{ color: '#0A5C38' }}>Execution</span>
          </motion.h1>

          {/* Divider accent */}
          <motion.div {...fade(0.22)} style={{ marginBottom: '28px' }}>
            <div className="divider-gold" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            {...fade(0.26)}
            style={{
              fontSize: 'clamp(16px, 2.2vw, 19px)',
              lineHeight: 1.72,
              color: '#6B7C74',
              maxWidth: '580px',
              marginBottom: '42px',
            }}
          >
            Crescent Consulting partners with ambitious organizations across
            Pakistan and the GCC to build stronger businesses through strategic
            consulting, AI integration, and proven operational transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fade(0.34)}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '64px' }}
          >
            <a href="#contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 30px' }}>
              Book Free Consultation
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-secondary" style={{ fontSize: '15px', padding: '14px 30px' }}>
              Explore Services
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            {...fade(0.44)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '28px',
              borderTop: '1px solid #DDE8E2',
            }}
          >
            {TRUST.map((t, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6B7C74' }}
              >
                <div
                  style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0A5C38', flexShrink: 0 }}
                />
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '44px',
          background: 'linear-gradient(to bottom, transparent, rgba(10,92,56,0.45), transparent)',
        }}
      />
    </section>
  )
}