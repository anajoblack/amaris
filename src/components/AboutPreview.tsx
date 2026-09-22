import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column Text */}
          <div>
            <span className="section-subtitle">Meet Dr. Amaris Nana Adjei Perbi</span>
            <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '24px' }}>
              Driving Executive Excellence & Sustainable Transformation
            </h2>
            <p className="section-desc" style={{ marginBottom: '20px' }}>
              Dr. Amaris Nana Adjei Perbi is a global training consultant, executive educator,
              and ESG & sustainability expert with 15+ years’ experience delivering leadership,
              strategy, risk, and digital transformation programs across the U.S., U.K., UAE,
              Europe, Africa, and beyond.
            </p>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Renowned for scenario-driven, competency-based methodologies, Dr. Perbi equips
              c-suite executives, senior managers, and cross-functional teams with practical,
              actionable frameworks to master organizational challenges.
            </p>
            <Link href="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>

          {/* Right Column Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            }}
          >
            <Image
              src="/images/WhatsApp-Image-2026-04-01-at-9.48.53-AM-e1776548974791_AdEt.jpeg"
              alt="Dr. Amaris Nana Adjei Perbi"
              width={650}
              height={550}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
