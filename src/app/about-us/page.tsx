import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Globe, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Dr. Nana Adjei Amaris Perbi – Global Training Consultant, Executive Educator, ESG & Sustainability Expert.',
};

export default function AboutUsPage() {
  return (
    <div>
      {/* Hero Header */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '80px 0 60px 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container">
          <span className="section-subtitle">Meet Dr. Amaris Perbi</span>
          <h1 className="section-title light" style={{ fontSize: '44px', marginBottom: '16px' }}>
            About Dr. Nana Adjei Amaris Perbi
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Global Training Consultant, Executive Educator, and ESG & Sustainability Strategist.
          </p>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'start',
            }}
          >
            {/* Left Photo & Badges */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  marginBottom: '30px',
                }}
              >
                <Image
                  src="/wp-content/uploads/2026/07/DAPG-CEO-Dr.-Amaris-Perbi-For-DAPG-Asetenapa-Heights-Corporate-leadership-pages-Founders-executive-profile.png"
                  alt="Dr. Nana Adjei Amaris Perbi"
                  width={768}
                  height={768}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div
                style={{
                  backgroundColor: '#F8FCFC',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #eaedf0',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: 'var(--text-headline)',
                  }}
                >
                  Founder & Leadership Roles
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
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>Founder, PowerRead™ Series</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>Creator, BorrowBuddy Nexus™</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>COO, Global Relief Consult</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>Founder & President, Brave Heart Kids Haven</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Biography Content */}
            <div>
              <span className="section-subtitle">Professional Summary</span>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>
                Transforming Complex Concepts into Practical, Actionable Learning Experiences
              </h2>
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                Dr. Nana Adjei Amaris Perbi is a Global Training Consultant and Executive Educator
                with over 15 years of experience designing and delivering high-impact executive
                programs worldwide. Known for his scenario-driven, competency-based training
                methodology, he empowers leaders to navigate modern organizational complexities.
              </p>
              <p className="section-desc" style={{ marginBottom: '30px' }}>
                He has delivered over 70 professional development courses to leaders across the
                U.S., U.K., UAE, Europe, and Africa, strengthening leadership capability, improving
                organizational performance, and driving strategic transformation.
              </p>

              {/* Fields of Expertise Grid */}
              <div style={{ marginBottom: '36px' }}>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: 'var(--text-headline)',
                  }}
                >
                  Core Disciplines & Expertise
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {[
                    'Leadership & Executive Development',
                    'Strategy, Governance & Transformation',
                    'ESG & Sustainability Strategy',
                    'Risk Management & Mitigation',
                    'PMO & Agile Project Governance',
                    'Operational Excellence & Team Dynamics',
                  ].map((field, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '14px 18px',
                        backgroundColor: '#F8FCFC',
                        borderRadius: '8px',
                        border: '1px solid #eaedf0',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--text-headline)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <GraduationCap size={18} color="var(--primary)" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Training Footprint */}
              <div
                style={{
                  backgroundColor: '#070707',
                  color: '#ffffff',
                  borderRadius: '16px',
                  padding: '30px',
                  marginBottom: '36px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Globe size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>Global Training Footprint</h3>
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <strong style={{ color: 'var(--primary)', display: 'block', fontSize: '13px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    In-Person Delivery
                  </strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '15px', margin: 0 }}>
                    United States · United Kingdom · UAE · Rwanda · Ghana · Nigeria · Kenya · South Africa
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary)', display: 'block', fontSize: '13px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Virtual Delivery
                  </strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '15px', margin: 0 }}>
                    Netherlands · France · Germany · Canada · Global Virtual Cohorts
                  </p>
                </div>
              </div>

              {/* Awards & Recognitions */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Award size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>Awards & Recognitions</h3>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {[
                    'Leadership Excellence Awards',
                    'Outstanding Contribution to Youth Development',
                    'Excellence in Training & Development',
                    'Global Sustainability Advocate Honor',
                  ].map((award, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: 'var(--text-body)',
                      }}
                    >
                      <CheckCircle size={16} color="var(--primary)" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-subtitle">Simply Awesome</span>
          <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '30px' }}>
            Client Testimonials
          </h2>
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '40px 36px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid #eaedf0',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-headline)',
                marginBottom: '20px',
              }}
            >
              &ldquo;Dr. Amaris Perbi&rsquo;s executive programs combine intellectual rigor with
              pragmatic industry insight. His scenario-driven training unlocked unprecedented
              cross-departmental alignment and delivered immediate measurable ROI.&rdquo;
            </p>
            <div style={{ fontWeight: 700, color: 'var(--text-headline)' }}>Jannet Cole</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Marketing & Operations Director</div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section
        style={{
          backgroundColor: '#532DF5',
          color: '#ffffff',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '12px',
              display: 'inline-block',
            }}
          >
            Get Connected
          </span>
          <h2 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '20px', color: '#ffffff' }}>
            An Unforgettable experience, filled with learning, growth, and connection awaits you!
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            We ensure a seamless and stress-free experience, making sure your organizational needs
            are met with the highest standard of professionalism.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '14px 36px' }}>
            Book Dr. Amaris
          </Link>
        </div>
      </section>
    </div>
  );
}
