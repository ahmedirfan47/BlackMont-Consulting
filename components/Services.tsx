'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, TrendingUp, Settings2, Activity, Users, BarChart2,
  Brain, Layers, Zap, Monitor, LineChart, Database,
  Truck, GitMerge, Building2, ArrowUpRight,
} from 'lucide-react'

type Category = 'consulting' | 'technology' | 'operations'

const CATEGORIES: { key: Category; label: string; count: string }[] = [
  { key: 'consulting',  label: 'Business Consulting', count: '6' },
  { key: 'technology',  label: 'Technology & AI',     count: '6' },
  { key: 'operations',  label: 'Operations',          count: '3' },
]

const SERVICES: Record<Category, { icon: React.ElementType; title: string; desc: string; duration: string }[]> = {
  consulting: [
    { icon: Target,    title: 'Business Strategy Consulting',      desc: 'Comprehensive strategy aligned with your goals, market opportunities, competitive positioning, and long-term growth objectives.',                    duration: '6–12 wks' },
    { icon: TrendingUp, title: 'Growth Strategy Development',       desc: 'Actionable plans to increase revenue, market share, and customer acquisition through disciplined market expansion and performance focus.',             duration: '4–8 wks' },
    { icon: Settings2, title: 'Business Process Optimization',      desc: 'Analysis and redesign of workflows and operational systems to improve efficiency, reduce costs, and increase organizational scalability.',              duration: '4–8 wks' },
    { icon: Activity,  title: 'Operational Excellence Consulting',  desc: 'Better systems, governance structures, accountability frameworks, and performance management for consistent, high-quality business outcomes.',           duration: '8–16 wks' },
    { icon: Users,     title: 'Organizational Development',         desc: 'Improve structure, leadership alignment, communication, roles, and overall organizational effectiveness during periods of growth and change.',              duration: '6–12 wks' },
    { icon: BarChart2, title: 'Performance Improvement Consulting', desc: 'Identify performance gaps across departments and implement targeted initiatives to improve productivity, profitability, and business outcomes.',         duration: '4–10 wks' },
  ],
  technology: [
    { icon: Brain,     title: 'AI Integration Consulting',          desc: 'Assess your operations and identify practical AI opportunities across workflows, decision-making, and customer engagement systems.',                      duration: '4–8 wks' },
    { icon: Layers,    title: 'AI Workflow Design',                  desc: 'Design intelligent AI-powered workflows that automate repetitive tasks, improve efficiency, reduce human error, and increase scalability.',                 duration: '4–6 wks' },
    { icon: Zap,       title: 'Business Process Automation',         desc: 'Implement automation solutions using AI and modern technology to streamline operations and reduce dependency on costly manual processes.',                  duration: '6–16 wks' },
    { icon: Monitor,   title: 'Corporate Website Development',       desc: 'Design and develop premium corporate websites that strengthen brand credibility, improve customer engagement, and generate business opportunities.',         duration: '4–12 wks' },
    { icon: LineChart, title: 'Website Performance Optimization',    desc: 'Improve website speed, user experience, conversion effectiveness, and technical performance to maximize your digital ROI.',                               duration: '4–6 wks' },
    { icon: Database,  title: 'Website Analytics & Reporting',       desc: 'Implement analytics systems providing clear visibility into website performance, customer behavior, and lead generation outcomes.',                         duration: '4–6 wks' },
  ],
  operations: [
    { icon: Truck,     title: 'Logistics Process Improvement',       desc: 'Analyze and optimize logistics operations, transportation workflows, inventory management, and supply chain performance for maximum output.',               duration: '6–12 wks' },
    { icon: GitMerge,  title: 'Systems Integration Consulting',      desc: 'Connect business systems, software platforms, and operational tools into a unified ecosystem that eliminates data silos and manual transfers.',              duration: '6–12 wks' },
    { icon: Building2, title: 'Technology Consulting',               desc: 'Expert guidance on technology investments, software selection, digital transformation initiatives, and technology strategy for modern organizations.',       duration: '4–8 wks' },
  ],
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Services() {
  const [active, setActive] = useState<Category>('consulting')

  return (
    <section id="services" className="section" style={{ background: '#FFFFFF' }}>
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: '52px' }}
        >
          <span className="section-label-serif">Our Capabilities</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: '16px' }}>
            15 Specialized Services.
            <br />
            <span style={{ color: '#0A5C38' }}>One Strategic Partner.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7C74', maxWidth: '520px', lineHeight: 1.72 }}>
            From strategic advisory to hands-on implementation — comprehensive services
            across two core practice areas, all designed to deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            marginBottom: '40px',
            borderBottom: '1px solid #DDE8E2',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              style={{
                padding: '10px 22px',
                background: 'none',
                border: 'none',
                borderBottom: active === cat.key ? '2.5px solid #0A5C38' : '2.5px solid transparent',
                marginBottom: '-1px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: active === cat.key ? 600 : 500,
                color: active === cat.key ? '#0A5C38' : '#6B7C74',
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {cat.label}
              <span
                style={{
                  padding: '1px 7px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  background: active === cat.key ? 'rgba(10,92,56,0.1)' : '#F4FAF6',
                  color: active === cat.key ? '#0A5C38' : '#9BAFAA',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '16px',
            }}
          >
            {SERVICES[active].map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  className="card-hover"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  style={{ padding: '28px 26px' }}
                >
                  <div className="icon-box" style={{ marginBottom: '18px' }}>
                    <Icon size={20} color="#0A5C38" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      letterSpacing: '-0.02em',
                      color: '#0C1A12',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6B7C74', lineHeight: 1.72, marginBottom: '18px' }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10.5px',
                        fontWeight: 500,
                        color: '#9BAFAA',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s.duration}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#0A5C38',
                      }}
                    >
                      Learn more <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ marginTop: '44px', display: 'flex', justifyContent: 'center' }}
        >
          <a href="#contact" className="btn-ghost">
            Discuss Your Requirements
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}