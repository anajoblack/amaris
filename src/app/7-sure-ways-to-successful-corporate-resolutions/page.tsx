import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, User, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '7 Sure ways to successful corporate resolutions',
  description: 'Strategies for drafting and executing successful corporate resolutions by Dr. Amaris Perbi.',
};

const ways = [
  {
    title: 'Preparation',
    desc: 'Preparation is crucial for successful corporate resolutions. Before making any decisions, the board of directors or shareholders should gather all the necessary information, review the relevant laws and regulations, and consult with legal and financial experts. Adequate preparation helps to ensure that the resolution is well-informed and legally sound.',
  },
  {
    title: 'Clear Objectives',
    desc: 'Corporate resolutions should have clear objectives. The objectives should be specific, measurable, achievable, relevant, and time-bound (SMART). This approach helps to ensure that the resolution is focused and actionable.',
  },
  {
    title: 'Collaborative Approach',
    desc: 'Corporate resolutions should be developed through a collaborative approach. The board of directors or shareholders should work together to reach a consensus on the resolution’s objectives and implementation. Collaboration helps to ensure that everyone is on the same page and committed to the resolution’s success.',
  },
  {
    title: 'Effective Communication',
    desc: 'Effective communication is essential for successful corporate resolutions. The board of directors or shareholders should communicate the resolution’s objectives, benefits, and implementation plan clearly and consistently. This approach helps to ensure that everyone understands the resolution’s purpose and their role in its success.',
  },
  {
    title: 'Adequate Resources',
    desc: 'Corporate resolutions require adequate resources to succeed. The board of directors or shareholders should allocate the necessary resources, including funding, personnel, and technology, to implement the resolution successfully. Adequate resources help to ensure that the resolution is implemented effectively and efficiently.',
  },
  {
    title: 'Monitoring and Evaluation',
    desc: 'Monitoring and evaluation are essential for successful corporate resolutions. The board of directors or shareholders should establish clear performance indicators and regularly monitor and evaluate the resolution’s progress. This approach helps to ensure that the resolution is on track and identify any areas that require adjustment.',
  },
  {
    title: 'Flexibility',
    desc: 'Finally, corporate resolutions should be flexible. The board of directors or shareholders should be willing to adjust the resolution if necessary based on feedback or changing circumstances. Flexibility helps to ensure that the resolution is responsive to the company’s evolving needs.',
  },
];

export default function CorporateResolutionsPage() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '80px 0 60px 0',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>
          <span className="section-subtitle">Governance &amp; Corporate Strategy</span>
          <h1 className="section-title light" style={{ fontSize: '38px', marginBottom: '16px' }}>
            7 Sure Ways to Successful Corporate Resolutions
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} />
              <span>By Dr. Amaris Perbi</span>
            </div>
            <span>·</span>
            <span>Corporate Governance</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-headline)', marginBottom: '40px' }}>
            <p style={{ marginBottom: '24px' }}>
              Corporate resolutions are formal documents that record the decisions and actions taken
              by a corporation&rsquo;s board of directors or shareholders. These resolutions can have a
              profound impact on operational continuity, shareholder value, and legal compliance.
            </p>
            <p>
              Here are seven sure ways to ensure corporate resolutions achieve strategic success and
              drive lasting organizational momentum:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
            {ways.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FCFC',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  border: '1px solid #eaedf0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-headline)' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, margin: 0, paddingLeft: '44px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '36px',
              marginTop: '40px',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
              Conclusion
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              In conclusion, corporate resolutions can have a significant impact on a company’s
              operations, and it is essential to ensure that they are successful. By following these
              seven sure ways, boards of directors and executive leadership can develop and implement
              successful corporate resolutions that drive company growth and long-term resilience.
            </p>
            <Link href="/contact" className="btn-primary">
              Consult with Dr. Amaris on Governance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
