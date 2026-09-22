import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '9 Assured Steps to Conflict Resolution',
  description: 'A comprehensive guide on managing conflicts effectively by Dr. Amaris Perbi.',
};

const steps = [
  {
    title: 'Identify the Conflict',
    desc: 'The first step in resolving a conflict is to identify it. It is essential to acknowledge that a conflict exists and determine its nature. Conflicts can be caused by misunderstandings, different viewpoints, or conflicting goals.',
  },
  {
    title: 'Listen Actively',
    desc: 'Active listening is crucial in conflict resolution. It involves paying attention to what the other person is saying, asking questions, and clarifying any misunderstandings. Active listening helps to demonstrate empathy and understanding.',
  },
  {
    title: 'Avoid Blame and Accusations',
    desc: 'Blame and accusations are counterproductive in conflict resolution. Instead of blaming the other person, focus on the problem and how to solve it. Blaming and accusing the other person only escalates the conflict.',
  },
  {
    title: 'Express Your Feelings',
    desc: 'It is essential to express your feelings in a conflict. Be honest about how the situation is making you feel. Use “I” statements rather than “you” statements. This approach helps to avoid placing blame on the other person and focuses on your perspective.',
  },
  {
    title: 'Find Common Ground',
    desc: 'Finding common ground is crucial in resolving conflicts. Look for areas of agreement and build on them. Finding common ground helps to create a sense of collaboration and teamwork.',
  },
  {
    title: 'Brainstorm Solutions',
    desc: 'Once you have identified the problem, brainstorm possible solutions. Encourage open discussion and listen to all ideas. Evaluate each solution and choose the best one.',
  },
  {
    title: 'Reach a Compromise',
    desc: 'Compromise is essential in resolving conflicts. It involves finding a solution that meets the needs of all parties involved. Compromise requires flexibility and a willingness to give up something in exchange for something else.',
  },
  {
    title: 'Follow Up',
    desc: 'After reaching a compromise, it is essential to follow up to ensure that the solution is working. Evaluate the solution and make adjustments as necessary. Following up helps to ensure that the conflict does not resurface.',
  },
  {
    title: 'Learn from the Conflict',
    desc: 'Every conflict provides an opportunity for learning and growth. After resolving a conflict, reflect on what you have learned. Identify what worked well and what did not. Use this knowledge to improve your conflict resolution skills in the future.',
  },
];

export default function ConflictResolutionPage() {
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
          <span className="section-subtitle">Leadership &amp; Conflict Management</span>
          <h1 className="section-title light" style={{ fontSize: '38px', marginBottom: '16px' }}>
            9 Assured Steps to Conflict Resolution
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} />
              <span>By Dr. Amaris Perbi</span>
            </div>
            <span>·</span>
            <span>Executive Insights</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-headline)', marginBottom: '40px' }}>
            <p style={{ marginBottom: '24px' }}>
              Conflict is an inevitable part of human interaction. No matter how hard we try,
              conflicts will arise in our personal and professional relationships. The ability to
              manage conflicts effectively is a crucial skill that can improve our lives, elevate
              team morale, and foster trust.
            </p>
            <p>
              Here are nine assured steps developed through years of executive coaching to guide
              leaders toward constructive, enduring conflict resolution:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
            {steps.map((step, idx) => (
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
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, margin: 0, paddingLeft: '44px' }}>
                  {step.desc}
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
              In conclusion, conflict resolution is a vital skill that can improve our personal and
              professional relationships. By following these nine assured steps, we can effectively
              manage conflicts and create more positive, productive interactions with others.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Executive Conflict Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
