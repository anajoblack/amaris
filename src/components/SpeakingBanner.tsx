import React from 'react';
import Link from 'next/link';

export default function SpeakingBanner() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('/images/singggamae1_AdEt.jpg')",
        backgroundPosition: 'center 35%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '100px 0',
      }}
    >
      {/* Contrast Overlay */}
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
          Speaking Engagements
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
          Book Dr. Perbi for Keynotes, Conferences,
          <br />
          Corporate Retreats & Global Events
        </h2>

        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.92)',
            marginBottom: '32px',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Inspiring global audiences with powerful insights on servant leadership,
          sustainable development, crisis resolution, and institutional excellence.
        </p>

        <div>
          <Link
            href="/expertise/speaking-media-conference"
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
