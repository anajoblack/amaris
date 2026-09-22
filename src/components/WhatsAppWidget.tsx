'use client';

import React, { useState } from 'react';

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="whatsapp-widget-container fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center"
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Tooltip on Desktop Hover */}
      {hovered && (
        <div
          className="whatsapp-tooltip hidden sm:block"
          style={{
            position: 'absolute',
            right: 'calc(100% + 12px)',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            fontSize: '13px',
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: '20px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
            border: '1px solid #e2e8f0',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
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
        className="whatsapp-btn w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-950/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current"
          style={{ width: '28px', height: '28px' }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.002 2.667C8.64 2.667 2.667 8.64 2.667 16.002c0 2.453.666 4.84 1.933 6.946L2.667 29.333l6.574-1.893c2.04 1.187 4.36 1.893 6.76 1.893 7.362 0 13.335-5.973 13.335-13.335S23.364 2.667 16.002 2.667zm7.84 18.787c-.32.906-1.587 1.666-2.587 1.88-.693.146-1.587.266-4.64-.987-3.907-1.586-6.427-5.546-6.627-5.8-.186-.253-1.586-2.12-1.586-4.04 0-1.92 1.013-2.866 1.373-3.253.36-.387.786-.48 1.053-.48.267 0 .533.003.76.016.24.013.56-.093.88.667.333.8 1.133 2.76 1.226 2.96.094.2.16.44.027.707-.133.266-.2.427-.4.653-.2.227-.427.507-.613.68-.2.2-.413.413-.173.827.24.413 1.066 1.76 2.293 2.853 1.573 1.4 2.907 1.84 3.32 2.04.413.2.653.173.906-.12.254-.293 1.08-1.267 1.374-1.707.293-.44.586-.36.986-.213.4.147 2.533 1.187 2.96 1.4.427.213.72.32.827.493.107.174.107 1.014-.213 1.92z" />
        </svg>
      </a>
    </aside>
  );
}
