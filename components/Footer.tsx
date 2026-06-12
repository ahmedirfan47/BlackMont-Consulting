'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react'

const SERVICES_LIST = [
  'Business Strategy Consulting', 'Growth Strategy Development',
  'AI Integration Consulting', 'Business Process Automation',
  'Logistics Process Improvement', 'Technology Consulting',
]

const INDUSTRIES_LIST = [
  'Logistics & Transportation', 'Supply Chain',
  'Restaurants & Cafés', 'Manufacturing',
  'Wholesale & Distribution', 'Growth-Stage Companies',
]

function CrescentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.5C5.86 2.5 2.5 5.86 2.5 10S5.86 17.5 10 17.5c1.74 0 3.35-.56 4.66-1.5a6 6 0 0 1 0-12A7.5 7.5 0 0 0 10 2.5z"
        fill="white"
      />
    </svg>
  )
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(160deg, #0A5C38 0%, #052B1C 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.06 }} />

      {/* Gold top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(184,150,46,0.5), transparent)',
        }}
      />

      {/* Decorative crescent */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-60px',
          width: '300px',
          height: '300px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 10C50.3 10 10 50.3 10 100S50.3 190 100 190c20.9 0 40.1-6.7 55.8-17.9A72 72 0 0 1 100 100a72 72 0 0 1 55.8-72.1A89.7 89.7 0 0 0 100 10z" fill="white" />
        </svg>
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Pre-footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          style={{
            margin: '64px 0 60px',
            padding: '48px 44px',
            borderRadius: '18px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '13px',
                color: '#B8962E',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}
            >
              Ready to Get Started?
            </div>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(20px, 3vw, 28px)',
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                marginBottom: '6px',
              }}
            >
              Transform Your Business Today
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
              Our senior team is available for executive briefings worldwide.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0, background: '#FFFFFF', color: '#0A5C38' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#F0F0F0' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#FFFFFF' }}
          >
            Book Free Consultation
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Links grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '40px', paddingBottom: '48px' }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CrescentIcon />
              </div>
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '15px', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  Crescent
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', fontWeight: 600, color: 'rgba(184,150,46,0.8)', letterSpacing: '0.2em', marginTop: '3px' }}>
                  CONSULTING
                </div>
              </div>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.38)', marginBottom: '22px' }}>
              Premium consulting for Pakistan and GCC markets. Strategy, AI, and operational excellence.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { Icon: Linkedin,      href: '#',                           label: 'LinkedIn' },
                { Icon: MessageCircle, href: 'https://wa.me/923235663592', label: 'WhatsApp' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px', borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                    transition: 'background 0.22s, color 0.22s, border-color 0.22s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'rgba(10,92,56,0.3)'
                    el.style.color = 'rgba(255,255,255,0.8)'
                    el.style.borderColor = 'rgba(255,255,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'transparent'
                    el.style.color = 'rgba(255,255,255,0.4)'
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '13px', color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '18px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.38)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '13px', color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '18px' }}>
              Industries
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind}>
                  <a
                    href="#industries"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.38)' }}
                  >
                    {ind}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '13px', color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '18px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { Icon: Mail,   label: 'Email',   val: 'contactahmadirfan66@gmail.com', href: 'mailto:contactahmadirfan66@gmail.com' },
                { Icon: Phone,  label: 'WhatsApp', val: '+92 323 5663592',               href: 'https://wa.me/923235663592' },
                { Icon: MapPin, label: 'Office',   val: 'Lahore, Pakistan',              href: '#' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div
                    style={{
                      width: '30px', height: '30px', borderRadius: '7px', flexShrink: 0,
                      background: 'rgba(10,92,56,0.25)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <item.Icon size={13} color="rgba(255,255,255,0.7)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.28)', marginBottom: '1px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
                    >
                      {item.val}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* GCC expansion */}
            <div
              style={{
                marginTop: '22px',
                padding: '12px 14px',
                borderRadius: '9px',
                background: 'rgba(10,92,56,0.2)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', fontWeight: 600, color: '#B8962E', marginBottom: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                GCC Expansion
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                Saudi Arabia · UAE · Qatar · Bahrain · Kuwait · Oman
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '22px 0 28px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.22)' }}>
            © {year} Crescent Consulting. All rights reserved. Lahore, Pakistan.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.22)' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}