'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Settings2, Rocket, CheckCircle2 } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Discovery & Assessment',
    subtitle: 'Understanding Your Business',
    desc: 'Stakeholder interviews, business assessment, process evaluation, and opportunity identification across your entire organization.',
    items: ['Stakeholder interviews', 'Business assessment', 'Process evaluation', 'Opportunity identification'],
    duration: '1–2 Weeks',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Strategy & Planning',
    subtitle: 'Building Your Roadmap',
    desc: 'Root cause analysis, strategic recommendations, KPI development, and roadmap creation with full executive alignment.',
    items: ['Root cause analysis', 'Strategic roadmap', 'KPI development', 'Executive alignment'],
    duration: '1–3 Weeks',
  },
  {
    num: '03',
    icon: Settings2,
    title: 'Implementation & Transformation',
    subtitle: 'Executing With Precision',
    desc: 'Solution design, process optimization, technology implementation, and hands-on change management support throughout.',
    items: ['Solution design', 'Process optimization', 'Tech implementation', 'Change management'],
    duration: '4–12 Weeks',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Optimization & Results',
    subtitle: 'Measuring & Improving',
    desc: 'KPI monitoring, performance measurement, continuous optimization, and transparent executive reporting on every metric.',
    items: ['KPI monitoring', 'Performance measurement', 'Continuous optimization', 'Executive reporting'],
    duration: 'Ongoing',
  },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Process() {
  return (
    <section className="section" style={{ background: '#F4FAF6' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at top right, rgba(184,150,46,0.045) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: '56px', textAlign: 'center' }}
        >
          <span className="section-label-serif" style={{ textAlign: 'center', display: 'block' }}>
            Our Methodology
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: '16px' }}>
            Crescent Growth Framework™
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7C74', maxWidth: '520px', margin: '0 auto', lineHeight: 1.72 }}>
            A structured four-phase methodology that ensures every engagement
            delivers measurable, sustainable, and impactful business outcomes.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div
          style={{ display: 'grid', gap: '16px' }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.62, delay: i * 0.1, ease }}
                style={{ padding: '30px 26px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}
              >
                {/* Ghost number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                    fontSize: '64px',
                    lineHeight: 1,
                    color: 'rgba(10,92,56,0.045)',
                    userSelect: 'none',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'linear-gradient(145deg, #0A5C38, #073D27)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: '0 4px 14px rgba(10,92,56,0.22)',
                  }}
                >
                  <Icon size={20} color="#FFFFFF" />
                </div>

                {/* Duration badge */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    marginBottom: '12px',
                    background: 'rgba(10,92,56,0.07)',
                    border: '1px solid rgba(10,92,56,0.14)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#0A5C38',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.duration}
                </div>

                {/* Phase label */}
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9.5px',
                    fontWeight: 600,
                    color: '#B8962E',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  Phase {step.num}
                </div>

                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '15.5px',
                    color: '#0C1A12',
                    letterSpacing: '-0.02em',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#0A5C38',
                    fontWeight: 600,
                    marginBottom: '12px',
                  }}
                >
                  {step.subtitle}
                </div>

                <p style={{ fontSize: '13px', color: '#6B7C74', lineHeight: 1.7, marginBottom: '18px' }}>
                  {step.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {step.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', color: '#6B7C74' }}>
                      <CheckCircle2 size={12} color="#0A5C38" style={{ flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Commitment strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          style={{
            marginTop: '28px',
            padding: '22px 28px',
            background: '#FFFFFF',
            border: '1px solid #DDE8E2',
            borderRadius: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <CheckCircle2 size={18} color="#0A5C38" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#0C1A12' }}>
              Minimum 4-week engagement commitment.{' '}
            </span>
            <span style={{ fontSize: '14px', color: '#6B7C74' }}>
              Every Crescent engagement includes proper discovery, implementation, and validation.
              We build lasting results, not quick fixes.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}