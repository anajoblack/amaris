import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProgramsPreview() {
  return (
    <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            }}
            className="programs-img-col"
          >
            <Image
              src="/images/21-2_AdEt.jpeg"
              alt="Training Programs by Dr. Amaris Perbi"
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

          {/* Right Column Content */}
          <div className="programs-text-col">
            <span className="section-subtitle">Training Programs</span>
            <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '24px' }}>
              Develop your skills and be inspired to achieve success.
            </h2>
            <p className="section-desc" style={{ marginBottom: '20px' }}>
              Delivering 70+ high-impact professional development programs across leadership,
              strategy, ESG, risk, PMO, operational excellence, communication, and digital
              transformation.
            </p>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Whether for executive retreats, corporate workshops, or global leadership
              symposiums, each curriculum is tailor-crafted with experiential learning case
              studies to deliver measurable institutional results.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/expertise/trainings-programs" className="btn-primary">
                View All Programs
              </Link>
              <Link href="/contact" className="btn-outline-dark">
                Request Custom Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
