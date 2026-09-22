import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: '#888888',
        fontSize: '13px',
        padding: '36px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '12px',
        }}
      >
        <p style={{ margin: 0 }}>
          Dr. Amaris Perbi &copy; {new Date().getFullYear()}. All Rights Reserved. Powered by{' '}
          <span style={{ color: '#ffffff', fontWeight: 500 }}>Media Oval Inc.</span>
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/about-us" className="footer-link">
            About Dr. Amaris
          </Link>
          <Link href="/expertise/services" className="footer-link">
            Offerings
          </Link>
          <Link href="/books-powerread" className="footer-link">
            PowerRead™
          </Link>
          <Link href="/music" className="footer-link">
            Music
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
