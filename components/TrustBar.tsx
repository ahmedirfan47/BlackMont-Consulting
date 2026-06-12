'use client'

import { motion } from 'framer-motion'
import { Layers, GitBranch, Globe, ArrowRight } from 'lucide-react'

const METRICS = [
  { icon: Layers,     value: '15+',     label: 'Expert Services',      sub: 'Across all practice areas' },
  { icon: GitBranch,  value: '4-Phase', label: 'Transformation Method', sub: 'Crescent Growth Framework™' },
  { icon: Globe,      value: 'GCC',     label: 'Market Expansion',      sub: 'Saudi Arabia to Oman' },
  { icon: ArrowRight, value: '100%',    label: 'Execution Focus',       sub: 'Strategy + implementation' },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function TrustBar() {
  return (
    <section
      style={{
        padding: 0,
        background: 'linear-gradient(to bottom, #F4FAF6, #FBFCFB)',
        borderTop: '1px solid #DDE8E2',
        borderBottom: '1px solid #DDE8E2',
      }}
    >
      <div className="wrap">
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          className="sm:grid-cols-4"
        >
          {METRICS.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                style={{
                  padding: '32px 24px',
                  borderRight: i < 3 ? '1px solid #DDE8E2' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  className="icon-box"
                  style={{ width: '42px', height: '42px', flexShrink: 0 }}
                >
                  <Icon size={18} color="#0A5C38" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: '#0A5C38',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#374740',
                      marginTop: '3px',
                    }}
                  >
                    {m.label}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#9BAFAA', marginTop: '2px' }}>
                    {m.sub}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}