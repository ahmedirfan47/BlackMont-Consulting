'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function CTABanner() {
  return (
    <section
      className="section-sm"
      style={{ background: 'linear-gradient(150deg, #0A5C38 0%, #073D27 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dot pattern */}
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />

      {/* Gold accent top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #B8962E 50%, transparent)',
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(184,150,46,0.06)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#B8962E',
                letterSpacing: '0.1em',
                marginBottom: '14px',
              }}
            >
              Ready to Transform Your Business?
            </div>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(26px, 3.8vw, 46px)',
                color: '#FFFFFF',
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                marginBottom: '16px',
              }}
            >
              Let&apos;s Build Something
              <br />
              Exceptional Together
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Join ambitious businesses across Pakistan and the GCC that trust Crescent
              Consulting to deliver strategic, operational, and technology transformation.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', flexShrink: 0 }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                background: '#FFFFFF',
                color: '#0A5C38',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'background 0.22s, transform 0.18s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = '#F0F0F0'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = '#FFFFFF'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              }}
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/923235663592"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                background: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                borderRadius: '10px',
                border: '1.5px solid rgba(255,255,255,0.28)',
                textDecoration: 'none',
                transition: 'border-color 0.22s, background 0.22s, transform 0.18s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.56)'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.28)'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}