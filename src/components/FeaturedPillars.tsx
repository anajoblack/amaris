import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPillars() {
  return (
    <section
      style={{
        backgroundColor: '#242424',
        padding: '100px 0',
        color: '#ffffff',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
          }}
        >
          {/* Card 1: Books & PowerRead™ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src="/images/21-2_AdEt.jpeg"
                  alt="Books & PowerRead™ by Dr. Amaris Perbi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Books & PowerRead™
              </h3>
              <p
                style={{
                  color: '#a0a0a0',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Explore transformational books designed to ignite purpose, strengthen identity, and inspire
              </p>
            </div>
            <div>
              <Link
                href="/books-powerread"
                className="btn-pillar"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Card 2: Music */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src="/images/WhatsApp-Image-2026-04-01-at-9.48.53-AM-e1776548974791_AdEt.jpeg"
                  alt="Music by Dr. Amaris Perbi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Music
              </h3>
              <p
                style={{
                  color: '#a0a0a0',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Inspirational music crafted to uplift, encourage, and empower listeners.
              </p>
            </div>
            <div>
              <Link
                href="/music"
                className="btn-pillar"
              >
                Listen Up
              </Link>
            </div>
          </div>

          {/* Card 3: Courses Enrolment */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.4)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    padding: '20px',
                  }}
                >
                  Executive Curriculum & Certifications
                </div>
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                Courses Enrolment
              </h3>
              <p
                style={{
                  color: '#a0a0a0',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Enroll in world-class training programs with secure online payment options. decisive action.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="btn-pillar"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
