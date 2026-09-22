import React from 'react';
import Link from 'next/link';

export default function CorporateTrainingBanner() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('/images/15-21_AdEt.jpeg')",
        backgroundPosition: 'center 25%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '100px 0',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '850px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.9)',
            display: 'inline-block',
            marginBottom: '14px',
          }}
        >
          Succeed with Dr. Amaris Perbi
        </span>

        <h2
          style={{
            fontSize: '40px',
            fontWeight: 800,
            lineHeight: 1.25,
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '-0.01em',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          Corporate Training & Team Building
        </h2>

        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.92)',
            marginBottom: '32px',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Our customized corporate training and team building programs are designed
          to meet the unique needs of your organization, helping you to achieve your
          strategic goals, streamline team dynamics, and accelerate performance.
        </p>

        <div>
          <Link
            href="/expertise/services"
            className="btn-primary"
            style={{ padding: '14px 36px' }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
