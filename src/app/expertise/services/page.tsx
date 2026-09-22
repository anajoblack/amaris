import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, ShieldCheck, Leaf, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Providing an Extensive Array of Services – Executive Education, ESG, Strategy, and Corporate Advisory by Dr. Amaris Perbi.',
};

const serviceList = [
  {
    icon: Target,
    title: 'Strategic Leadership & Executive Coaching',
    desc: 'One-on-one executive mentorship, c-suite transition coaching, and high-performance leadership alignment designed to cultivate vision and decision-making clarity.',
    features: ['C-Suite Executive Alignment', 'Scenario Planning & Strategy Rollout', 'Change Management Frameworks'],
  },
  {
    icon: Leaf,
    title: 'ESG & Sustainability Strategy Advisory',
    desc: 'End-to-end Environmental, Social, and Governance (ESG) consulting, carbon footprint disclosures, sustainability compliance, and institutional green transitions.',
    features: ['Materiality Assessments & Disclosures', 'Stakeholder Engagement Protocols', 'Sustainability Integration into Core Business'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Risk Management & Crisis Protocols',
    desc: 'Comprehensive risk audits, crisis response contingency planning, corporate governance design, and compliance systems that safeguard brand equity.',
    features: ['Crisis Response Simulation Drills', 'Risk Appetite Frameworks', 'Regulatory Compliance & Auditing'],
  },
  {
    icon: Briefcase,
    title: 'PMO & Agile Project Governance',
    desc: 'Structuring and scaling Project Management Offices (PMO), standardizing delivery pipelines, agile team transformation, and executive project tracking.',
    features: ['Enterprise PMO Architecture', 'Milestone & KPI Governance', 'Agile & Waterfall Hybrid Delivery'],
  },
  {
    icon: Zap,
    title: 'Corporate Team Building & Synergy Retreats',
    desc: 'Immersive, high-energy retreat workshops built around collaborative problem-solving, psychological safety, and breakthrough team synergy.',
    features: ['Customized Retreat Experiences', 'Conflict Transformation Workshops', 'Cross-Functional Synergy Blueprints'],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '90px 0 70px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">SERVICES</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            Providing an Extensive Array of Services
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Delivering bespoke advisory, corporate restructuring, ESG roadmaps, and high-impact
            consulting tailored to the modern enterprise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '30px',
            }}
          >
            {serviceList.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F8FCFC',
                    borderRadius: '16px',
                    padding: '36px 30px',
                    border: '1px solid #eaedf0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 196, 155, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '22px',
                      }}
                    >
                      <Icon size={26} color="var(--primary)" />
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--text-headline)',
                        marginBottom: '14px',
                        lineHeight: 1.3,
                      }}
                    >
                      {srv.title}
                    </h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.65, marginBottom: '22px' }}>
                      {srv.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {srv.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-headline)' }}>
                          <CheckCircle2 size={16} color="var(--primary)" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eaedf0' }}>
                    <Link href="/contact" className="btn-primary" style={{ width: '100%', fontSize: '14px', padding: '11px 0' }}>
                      Inquire About Service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
