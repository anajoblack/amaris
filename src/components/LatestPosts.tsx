import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: '9 Assured Steps to Conflict Resolution',
    slug: '9-assured-steps-to-conflict-resolution',
    category: 'Leadership & Conflict',
    excerpt:
      'Conflict is an inevitable part of human interaction. Discover the proven 9-step methodology to address friction, align interests, and rebuild team cohesion.',
    date: 'Dr. Amaris Perbi Insights',
  },
  {
    title: '7 Sure ways to successful corporate resolutions',
    slug: '7-sure-ways-to-successful-corporate-resolutions',
    category: 'Corporate Strategy',
    excerpt:
      'Mastering boardroom dynamics and stakeholder alignment requires deliberate frameworks. Explore the 7 strategic keys to navigating complex organizational resolutions.',
    date: 'Dr. Amaris Perbi Insights',
  },
  {
    title: 'How to rollout crisis management effectively in an organization',
    slug: 'how-to-rollout-crisis-management-effectively-in-an-organization',
    category: 'Crisis & Risk',
    excerpt:
      'When turbulence strikes, agility and structured communication determine resilience. Learn how to establish rapid-response protocols and proactive contingency systems.',
    date: 'Dr. Amaris Perbi Insights',
  },
];

export default function LatestPosts() {
  return (
    <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <span className="section-subtitle">Updates by Dr. Amaris Perbi</span>
          <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '12px' }}>
            Latest Posts
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
            Get informed with practical insights, leadership reflections, and organizational blueprints.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="post-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #eaedf0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--primary)',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-headline)',
                    lineHeight: 1.35,
                    marginBottom: '16px',
                  }}
                >
                  <Link href={`/${post.slug}`} style={{ color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h3>
                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid #f0f0f0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                    fontSize: '13px',
                  }}
                >
                  <User size={14} />
                  <span>Dr. Amaris Perbi</span>
                </div>
                <Link
                  href={`/${post.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  <span>Read Post</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
