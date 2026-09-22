import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Insights',
  description:
    'Latest articles, insights, and perspectives on leadership, corporate resolutions, and crisis management by Dr. Amaris Perbi.',
};

const articles = [
  {
    title: '9 Assured Steps to Conflict Resolution',
    slug: '9-assured-steps-to-conflict-resolution',
    category: 'Leadership & Conflict',
    date: 'Dr. Amaris Perbi Insights',
    readTime: '5 min read',
    excerpt:
      'Conflict is an inevitable part of human interaction. Discover the proven 9-step methodology to address friction, align interests, and rebuild interpersonal and team cohesion.',
  },
  {
    title: '7 Sure ways to successful corporate resolutions',
    slug: '7-sure-ways-to-successful-corporate-resolutions',
    category: 'Corporate Strategy',
    date: 'Dr. Amaris Perbi Insights',
    readTime: '6 min read',
    excerpt:
      'Corporate resolutions are formal documents that record board and shareholder actions. Explore the 7 strategic keys to navigating complex governance decisions and executing legally sound resolutions.',
  },
  {
    title: 'How to rollout crisis management effectively in an organization',
    slug: 'how-to-rollout-crisis-management-effectively-in-an-organization',
    category: 'Crisis & Risk',
    date: 'Dr. Amaris Perbi Insights',
    readTime: '7 min read',
    excerpt:
      'When turbulence strikes, agility and structured communication determine survival. Learn how to establish rapid-response protocols, train crisis teams, and safeguard brand equity.',
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '90px 0 70px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">UPDATES &amp; PERSPECTIVES</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            News &amp; Leadership Insights
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Practical frameworks, strategic thoughts, and leadership blueprints by Dr. Amaris Perbi.
          </p>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {articles.map((art) => (
              <article
                key={art.slug}
                className="post-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  border: '1px solid #eaedf0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      backgroundColor: 'rgba(0, 196, 155, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                    }}
                  >
                    {art.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                    {art.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1.3, marginBottom: '16px' }}>
                  <Link href={`/${art.slug}`} style={{ color: 'var(--text-headline)' }}>
                    {art.title}
                  </Link>
                </h2>

                <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.65, marginBottom: '24px' }}>
                  {art.excerpt}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
                    <User size={15} />
                    <span>Dr. Amaris Perbi</span>
                  </div>

                  <Link
                    href={`/${art.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      fontSize: '14px',
                    }}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
