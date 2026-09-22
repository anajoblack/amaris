'use client';

import React, { useState } from 'react';

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Contact"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {/* Tooltip */}
      {hovered && (
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#333333',
            fontSize: '13px',
            fontWeight: 600,
            padding: '6px 12px',
            borderRadius: '20px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            border: '1px solid #e2e8f0',
            whiteSpace: 'nowrap',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          Chat with Dr. Amaris
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/18482137670"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Dr. Amaris Perbi"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="#ffffff"
          style={{ display: 'block' }}
        >
          <path d="M16.002 2.667C8.64 2.667 2.667 8.64 2.667 16.002c0 2.453.666 4.84 1.933 6.946L2.667 29.333l6.574-1.893c2.04 1.187 4.36 1.893 6.76 1.893 7.362 0 13.335-5.973 13.335-13.335S23.364 2.667 16.002 2.667zm7.84 18.787c-.32.906-1.587 1.666-2.587 1.88-.693.146-1.587.266-4.64-.987-3.907-1.586-6.427-5.546-6.627-5.8-.186-.253-1.586-2.12-1.586-4.04 0-1.92 1.013-2.866 1.373-3.253.36-.387.786-.48 1.053-.48.267 0 .533.003.76.016.24.013.56-.093.88.667.333.8 1.133 2.76 1.226 2.96.094.2.16.44.027.707-.133.266-.2.427-.4.653-.2.227-.427.507-.613.68-.2.2-.413.413-.173.827.24.413 1.066 1.76 2.293 2.853 1.573 1.4 2.907 1.84 3.32 2.04.413.2.653.173.906-.12.254-.293 1.08-1.267 1.374-1.707.293-.44.586-.36.986-.213.4.147 2.533 1.187 2.96 1.4.427.213.72.32.827.493.107.174.107 1.014-.213 1.92z" />
        </svg>
      </a>
    </aside>
  );
}
