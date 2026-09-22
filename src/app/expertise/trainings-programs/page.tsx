import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle, Award, Target, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training & Programs',
  description:
    'Unlocking Potential through Comprehensive Training Programs – 70+ Professional Executive Modules by Dr. Amaris Perbi.',
};

const programTracks = [
  {
    category: 'Track 1',
    title: 'Executive Leadership & Strategic Governance',
    icon: Target,
    modules: [
      'Strategic Decision-Making Under High Uncertainty',
      'The High-Performance C-Suite: Aligning Vision & Execution',
      'Board Governance, Fiduciary Duty & Stakeholder Management',
      'Servant Leadership & Cross-Cultural Team Dynamics',
    ],
  },
  {
    category: 'Track 2',
    title: 'ESG, Climate Governance & Sustainable Value',
    icon: Award,
    modules: [
      'ESG Materiality Assessment & Reporting Frameworks',
      'Integrating Sustainability into Corporate Balance Sheets',
      'Renewable Energy Transition Strategy for Enterprises',
      'Social Impact & Community Stakeholder Engagement',
    ],
  },
  {
    category: 'Track 3',
    title: 'Enterprise Risk, Crisis & Resilience Management',
    icon: Shield,
    modules: [
      'Operational Risk Assessment & Mitigation Protocols',
      'Corporate Crisis Simulation & Rapid Response Playbooks',
      'Supply Chain Vulnerability & Geopolitical Hedging',
      'Reputational Protection & Media Crisis Communication',
    ],
  },
  {
    category: 'Track 4',
    title: 'PMO, Operational Excellence & Digital Transformation',
    icon: Users,
    modules: [
      'Building & Scaling an Enterprise PMO (Project Management Office)',
      'Agile Transformation in Legacy Corporate Environments',
      'Process Optimization, Lean Six Sigma & Waste Elimination',
      'Digital Roadmaps & AI Integration for Executives',
    ],
  },
];

export default function TrainingsProgramsPage() {
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
          <span className="section-subtitle">EXECUTIVE CURRICULUM</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            Unlocking Potential through Comprehensive Training Programs
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Delivering 70+ scenario-driven, competency-based professional development courses
            strengthening organizational performance across 5 continents.
          </p>
        </div>
      </section>

      {/* Program Tracks Grid */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '30px',
            }}
          >
            {programTracks.map((track, i) => {
              const Icon = track.icon;
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {track.category}
                      </span>
                      <Icon size={22} color="var(--primary)" />
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--text-headline)',
                        marginBottom: '20px',
                        lineHeight: 1.3,
                      }}
                    >
                      {track.title}
                    </h3>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      {track.modules.map((mod, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.5 }}>
                          <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #eaedf0' }}>
                    <Link href="/contact" className="btn-primary" style={{ width: '100%', fontSize: '14px', padding: '11px 0' }}>
                      Request Syllabus & Enrollment
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="section-subtitle">Training Methodology</span>
          <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '20px' }}>
            The Scenario-Driven Competency Model
          </h2>
          <p className="section-desc" style={{ marginBottom: '32px' }}>
            Traditional corporate seminars often fail because theory rarely survives real-world crisis.
            Dr. Amaris Perbi’s methodology immerses participants in live simulated crises, actual
            balance-sheet dilemmas, and interactive conflict debriefs, ensuring immediate translation
            into workplace mastery.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '14px 34px' }}>
            Schedule a Custom Cohort
          </Link>
        </div>
      </section>
    </div>
  );
}
