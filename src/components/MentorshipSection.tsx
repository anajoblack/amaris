import React from 'react';
import Link from 'next/link';

export default function MentorshipSection() {
  return (
    <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
        <span className="section-subtitle">Join the Winning Team</span>
        <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '20px' }}>
          Join Our Game-Changing Mentorship Program Today!
        </h2>
        <p className="section-desc" style={{ marginBottom: '24px', fontSize: '17px' }}>
          Our innovative approach to problem-solving has helped us secure a reputation
          as a leader in our field. Through our mentorship program, we’ve seen leaders and
          team members take on bold challenges and achieve breakthrough success beyond
          what they thought possible.
        </p>
        <p className="section-desc" style={{ marginBottom: '36px' }}>
          Get personalized coaching, strategic career positioning, executive accountability,
          and direct access to Dr. Amaris Perbi’s global network.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '13px 34px' }}>
            Apply for Mentorship
          </Link>
          <Link href="/philanthropist" className="btn-outline-dark" style={{ padding: '13px 30px' }}>
            Explore Social Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
