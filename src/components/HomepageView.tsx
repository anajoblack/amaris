'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Compass,
  Disc,
  Droplet,
  ExternalLink,
  GraduationCap,
  Heart,
  Layers,
  Mic,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function HomepageView() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#070707', overflowX: 'hidden' }}>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO — FULL-BLEED BACKGROUND ACTION PHOTO WITH OVERLAID TEXT
      ───────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ─────────────────────────────────────────────────────────────
          2. A SHORT "WHO HE IS" INTRODUCTION
      ───────────────────────────────────────────────────────────── */}
      <section id="about" style={{ backgroundColor: '#ffffff', padding: '100px 0 90px 0', borderBottom: '1px solid #eaedf0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Headline & Overview */}
            <div>
              <span className="section-subtitle">Profile &amp; Perspective</span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-headline)',
                  marginBottom: '24px',
                }}
              >
                Human-Centered Leadership with Proven Institutional Rigor
              </h2>
              <Link
                href="/about-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                }}
              >
                <span>Read Full Biography</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Editorial Bio & Footprint */}
            <div>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'var(--text-body)',
                  marginBottom: '20px',
                }}
              >
                With more than <strong>15 years of international advisory and education experience</strong>, Dr. Amaris Nana Adjei Perbi partners with senior executives, corporate boards, and non-profit institutions to navigate complex change, execute long-term strategy, and instill operational resilience.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'var(--text-body)',
                  marginBottom: '32px',
                }}
              >
                His work spans North America, the United Kingdom, Europe, the United Arab Emirates, and Sub-Saharan Africa. Rooted in scenario-driven and competency-based models, his curriculum translates high-level strategy into tangible daily habits that elevate organizational performance.
              </p>

              {/* Key Credentials Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid #eaedf0',
                }}
              >
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-headline)' }}>
                    15+
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Years International Advisory
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-headline)' }}>
                    5
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Global Regions Active
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-headline)' }}>
                    70+
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Executive Programs Designed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HIS WORLD OF WORK (6 Key Professional Pillars)
      ───────────────────────────────────────────────────────────── */}
      <section id="offerings" style={{ backgroundColor: '#F8FCFC', padding: '90px 0', borderBottom: '1px solid #eaedf0' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <span className="section-subtitle">Strategic Disciplines</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-headline)' }}>
              His World of Work
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.7 }}>
              Distinctive practice areas developed through years of cross-border consulting, enterprise capability building, and organizational stewardship.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                title: 'LEADERSHIP',
                desc: 'Develop leaders who can navigate ambiguity and create meaningful, enduring results.',
                link: '/expertise/trainings-programs',
              },
              {
                title: 'STRATEGY',
                desc: 'Turn strategic thinking into practical, measurable execution across diverse market realities.',
                link: '/expertise/services',
              },
              {
                title: 'EXECUTIVE EDUCATION',
                desc: 'Build the adaptive capabilities, competencies, and mindset organizations need to scale.',
                link: '/expertise/trainings-programs',
              },
              {
                title: 'ESG & SUSTAINABILITY',
                desc: 'Help organizations build responsible, compliant, and sustainable futures with social impact.',
                link: '/expertise/services',
              },
              {
                title: 'RISK & OPERATIONAL EXCELLENCE',
                desc: 'Strengthen enterprise resilience, business continuity, agile PMO systems, and execution speed.',
                link: '/expertise/services',
              },
              {
                title: 'DIGITAL TRANSFORMATION',
                desc: 'Prepare organizations and cross-functional teams to thrive in a rapidly changing world.',
                link: '/expertise/trainings-programs',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  border: '1px solid #eaedf0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#eaedf0';
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: 'var(--primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {pillar.title}
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {pillar.desc}
                  </p>
                </div>

                <Link
                  href={pillar.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-headline)',
                  }}
                >
                  <span>Explore Practice</span>
                  <ArrowUpRight size={15} color="var(--primary)" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. TRAINING PROGRAMS — MAJOR EXECUTIVE FEATURE
      ───────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <span className="section-subtitle">Executive Capability Building</span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 800,
                  color: 'var(--text-headline)',
                  marginBottom: '12px',
                }}
              >
                Learn. Lead. Transform.
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', maxWidth: '640px' }}>
                Explore high-impact professional development programs designed for leaders, teams and organizations.
              </p>
            </div>

            <Link
              href="/expertise/trainings-programs"
              className="btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <span>View All Training Programs</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Executive Education Catalogue Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                track: 'Executive Leadership Track',
                title: 'Strategic Leadership & Boardroom Governance',
                desc: 'Equips C-suite directors and senior managers with governance frameworks, stakeholder alignment tools, and strategic decision-making competencies.',
                format: 'Multi-Day Executive Intensive',
              },
              {
                track: 'Governance & Risk Track',
                title: 'Enterprise Risk Management & Operational Resilience',
                desc: 'A comprehensive immersion into proactive risk architecture, regulatory compliance frameworks, crisis response protocols, and business continuity.',
                format: 'Executive Cohort Series',
              },
              {
                track: 'Sustainability & ESG Track',
                title: 'ESG Architecture & Sustainable Corporate Strategy',
                desc: 'Aligning business performance with environmental, social, and corporate governance standards to unlock sustainable institutional capital.',
                format: 'Masterclass & Advisory',
              },
              {
                track: 'Operations & Execution Track',
                title: 'Agile PMO Leadership & Project Delivery Excellence',
                desc: 'Building adaptive Project Management Offices capable of navigating cross-functional bottlenecks and executing strategic roadmaps on time.',
                format: 'Practitioner Workshop',
              },
              {
                track: 'Transformation Track',
                title: 'Digital Transformation & Change Architecture',
                desc: 'Preparing leaders and legacy teams to adopt technology-enabled workflows, modernize organizational cultures, and lead human-centered change.',
                format: 'Executive Workshop',
              },
              {
                track: 'Conflict & Resolution Track',
                title: 'Conflict Resolution & High-Stakes Negotiation',
                desc: 'Proven behavioral frameworks to address organizational friction, negotiate with multi-party stakeholders, and restore collaborative momentum.',
                format: 'Interactive Simulation',
              },
            ].map((program, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #eaedf0',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderLeft: '4px solid var(--primary)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    {program.track}
                  </span>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--text-headline)',
                      lineHeight: 1.35,
                      marginBottom: '14px',
                    }}
                  >
                    {program.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {program.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid #f0f0f0',
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    {program.format}
                  </span>
                  <Link
                    href="/expertise/trainings-programs"
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Curriculum</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SPEAKING — KEYNOTE ENGAGEMENTS
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '100px 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Keynote Photo from WordPress Export */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '998 / 848',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Image
                src="/wp-content/uploads/2026/02/singggamae1.jpg"
                alt="Dr. Amaris Perbi addressing conference arena audience"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Right Column: Speaking Information */}
            <div>
              <span
                style={{
                  color: 'var(--primary)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                Keynotes &amp; Facilitation
              </span>

              <h2
                style={{
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: '#ffffff',
                  marginBottom: '20px',
                }}
              >
                Ideas worth bringing into the room.
              </h2>

              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'rgba(255, 255, 255, 0.82)',
                  marginBottom: '28px',
                }}
              >
                Dr. Amaris Perbi brings transformative clarity, practical frameworks, and memorable storytelling to stage engagements worldwide.
              </p>

              <div style={{ marginBottom: '36px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                  Dr. Perbi regularly delivers keynotes and strategic sessions at:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Conferences & Global Summits',
                    'Corporate Events & Boardroom Seminars',
                    'Leadership Retreats',
                    'Executive Gatherings',
                    'Professional Development Events',
                  ].map((forum, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                      <CheckCircle size={16} color="var(--primary)" />
                      <span>{forum}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ padding: '13px 32px' }}
                >
                  <span>Book Dr. Perbi</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/expertise/speaking-media-conference"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    padding: '13px 26px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>View Speaking Topics</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE PERSONAL BRAND — BEYOND THE BOARDROOM
      ───────────────────────────────────────────────────────────── */}
      <section id="powerread" style={{ backgroundColor: '#ffffff', padding: '100px 0', borderBottom: '1px solid #eaedf0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <span className="section-subtitle">A Cohesive Personal Brand</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-headline)' }}>
              Beyond the Boardroom
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.7 }}>
              Dr. Perbi’s work extends past executive consulting into authorship, music composition, community philanthropy, and youth development.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Pillar 1: PowerRead */}
            <Link
              href="/books-powerread"
              style={{
                backgroundColor: '#F8FCFC',
                borderRadius: '18px',
                padding: '36px 28px',
                border: '1px solid #eaedf0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 196, 155, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '20px',
                  }}
                >
                  <BookOpen size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                  PowerRead™
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Books and ideas designed to inspire purpose, identity and growth across universities and communities.
                </p>
              </div>

              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>Explore Movement</span>
                <ArrowRight size={13} />
              </span>
            </Link>

            {/* Pillar 2: Music */}
            <Link
              href="/music"
              style={{
                backgroundColor: '#F8FCFC',
                borderRadius: '18px',
                padding: '36px 28px',
                border: '1px solid #eaedf0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(114, 83, 206, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)',
                    marginBottom: '20px',
                  }}
                >
                  <Disc size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                  Music
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Inspirational music, medleys and purposeful compositions created to uplift, heal, and encourage.
                </p>
              </div>

              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>Listen &amp; Stream</span>
                <ArrowRight size={13} />
              </span>
            </Link>

            {/* Pillar 3: Philanthropy */}
            <Link
              href="/philanthropist"
              style={{
                backgroundColor: '#F8FCFC',
                borderRadius: '18px',
                padding: '36px 28px',
                border: '1px solid #eaedf0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(209, 52, 91, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D1345B',
                    marginBottom: '20px',
                  }}
                >
                  <Heart size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                  Philanthropy
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Work focused on creating meaningful social impact, clean water access, and economic self-reliance.
                </p>
              </div>

              <span style={{ fontSize: '13px', fontWeight: 700, color: '#D1345B', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>View Pillars</span>
                <ArrowRight size={13} />
              </span>
            </Link>

            {/* Pillar 4: Education & Community */}
            <Link
              href="/gallery/steam-education"
              style={{
                backgroundColor: '#F8FCFC',
                borderRadius: '18px',
                padding: '36px 28px',
                border: '1px solid #eaedf0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 184, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#b8860b',
                    marginBottom: '20px',
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                  Education &amp; Community
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Initiatives supporting youth learning, robotics, economic literacy, and human development.
                </p>
              </div>

              <span style={{ fontSize: '13px', fontWeight: 700, color: '#b8860b', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>Community Gallery</span>
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FEATURED IMPACT (Actual Philanthropic Categories & Media)
      ───────────────────────────────────────────────────────────── */}
      <section id="gallery" style={{ backgroundColor: '#F8FCFC', padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '50px',
            }}
          >
            <div>
              <span className="section-subtitle">Verified Stewardship</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: 'var(--text-headline)' }}>
                Featured Community Impact
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-body)', maxWidth: '640px', marginTop: '8px' }}>
                Tangible humanitarian interventions focused on clean water, vocational empowerment, and quality education.
              </p>
            </div>

            <Link
              href="/gallery"
              className="btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <span>Explore His Impact</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Impact 1: Economic Empowerment */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #eaedf0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                <Image
                  src="/wp-content/uploads/2026/05/Women-Empowerment-Training-Sessions-20.jpeg"
                  alt="Economic Empowerment training and vocational support"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                  Economic Empowerment
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Equipping women entrepreneurs and micro-business leaders with vocational training, sewing equipment, and capital.
                </p>
                <Link
                  href="/gallery/economic-empowerment"
                  style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>View Project Photos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Impact 2: STEAM & Education */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #eaedf0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                <Image
                  src="/wp-content/uploads/2026/05/IMG_7206.jpg"
                  alt="STEAM and youth robotics education initiative"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                  STEAM &amp; Education
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Providing school children with robotics kits, science manipulatives, and creative coding literacy.
                </p>
                <Link
                  href="/gallery/steam-education"
                  style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>View Project Photos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Impact 3: Clean Water / Borehole Projects */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #eaedf0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                <Image
                  src="/wp-content/uploads/2023/05/231.jpeg"
                  alt="Clean borehole water commissioning ceremony"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                  Water / Borehole Projects
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Drilling, testing, and commissioning clean potable borehole water installations for rural communities.
                </p>
                <Link
                  href="/gallery/borehole-water"
                  style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>View Project Photos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Impact 4: Financial Inclusion */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #eaedf0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                <Image
                  src="/wp-content/uploads/2023/05/1-1.jpeg"
                  alt="Financial literacy and inclusion workshop participants"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                  Financial Inclusion
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Teaching budgeting, savings culture, and credit management to grassroots community cohorts.
                </p>
                <Link
                  href="/gallery/financial-inclusion"
                  style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>View Project Photos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. BOOKS / POWERREAD — EDITORIAL AUTHORS FEATURE
      ───────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#ffffff', padding: '100px 0', borderBottom: '1px solid #eaedf0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left: Authentic Author & Book Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                aspectRatio: '1024 / 683',
              }}
            >
              <Image
                src="/wp-content/uploads/2026/05/tapsb-1024x683.jpg"
                alt="Dr. Amaris Perbi with 52 Weeks of Wisdom books"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Right: Editorial Overview & 3 Publications */}
            <div>
              <span className="section-subtitle">Authorship &amp; Literature</span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: 'var(--text-headline)',
                  marginBottom: '18px',
                }}
              >
                Ideas that stay with you.
              </h2>

              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'var(--text-body)',
                  marginBottom: '28px',
                }}
              >
                Transformational books designed to ignite purpose, strengthen identity, and inspire decisive action.
                Dr. Perbi&rsquo;s writing delivers weekly micro-reflections and behavioral prompts that guide readers toward authentic leadership.
              </p>

              {/* 3 Publications List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-headline)' }}>
                    52 Weeks of Wisdom: A Year of Motivation, Clarity, and Practical Life Lessons
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Structured across Courage &amp; Resilience, Vision &amp; Purpose, Gratitude &amp; Growth, and New Beginnings.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-headline)' }}>
                    Become Your Dream!
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Confronting fear, breaking limitations, and clarifying purposeful vocation.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-headline)' }}>
                    Be Your Highest Self
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Character architecture and the daily habits required for sustained impact.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/books-powerread"
                  className="btn-primary"
                  style={{ padding: '13px 32px' }}
                >
                  <span>Explore PowerRead™</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ADr.%2BAmaris%2B%2BPerbi&s=relevancerank&text=Dr.+Amaris++Perbi&ref=dp_byline_sr_ebooks_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                  style={{ padding: '13px 24px' }}
                >
                  <span>Amazon Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. LATEST INSIGHTS — EXECUTIVE PERSPECTIVES FEED
      ───────────────────────────────────────────────────────────── */}
      <section id="news" style={{ backgroundColor: '#F8FCFC', padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <span className="section-subtitle">Thought Leadership</span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 800,
                  color: 'var(--text-headline)',
                }}
              >
                Insights &amp; Perspectives
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-body)', maxWidth: '640px', marginTop: '8px' }}>
                Practical frameworks, boardroom reflections, and crisis management playbooks by Dr. Amaris Perbi.
              </p>
            </div>

            <Link
              href="/blog"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>View All Perspectives</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                title: '9 Assured Steps to Conflict Resolution',
                slug: '/9-assured-steps-to-conflict-resolution',
                category: 'Leadership & Conflict',
                excerpt:
                  'Conflict is an inevitable part of human interaction. Discover the proven 9-step methodology to address organizational friction, align executive interests, and rebuild team cohesion.',
              },
              {
                title: '7 Sure ways to successful corporate resolutions',
                slug: '/7-sure-ways-to-successful-corporate-resolutions',
                category: 'Corporate Strategy',
                excerpt:
                  'Mastering boardroom dynamics and stakeholder alignment requires deliberate frameworks. Explore the 7 strategic keys to navigating complex organizational governance.',
              },
              {
                title: 'How to rollout crisis management effectively in an organization',
                slug: '/how-to-rollout-crisis-management-effectively-in-an-organization',
                category: 'Crisis & Risk',
                excerpt:
                  'When turbulence strikes, agility and structured communication determine institutional resilience. Learn how to establish rapid-response protocols and proactive contingency systems.',
              },
            ].map((article, i) => (
              <article
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  border: '1px solid #eaedf0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--primary)',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {article.category}
                  </span>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-headline)',
                      lineHeight: 1.35,
                      marginBottom: '16px',
                    }}
                  >
                    <Link href={article.slug} style={{ color: 'inherit' }}>
                      {article.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '18px' }}>
                  <Link
                    href={article.slug}
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--text-headline)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>Read Perspective</span>
                    <ArrowRight size={14} color="var(--primary)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FINAL CALL TO ACTION — EXECUTIVE COMMITMENT
      ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '100px 0',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div id="book" />
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span
            style={{
              color: 'var(--primary)',
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Organizational Growth &amp; Engagement
          </span>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Ready to learn, lead and transform?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              maxWidth: '680px',
              margin: '0 auto 40px auto',
            }}
          >
            Explore Dr. Amaris Perbi’s training programs, invite him to speak, or connect for your next organizational development initiative.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/expertise/trainings-programs"
              className="btn-primary"
              style={{
                fontSize: '15px',
                padding: '15px 36px',
                borderRadius: '50px',
                fontWeight: 700,
              }}
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                padding: '15px 32px',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
