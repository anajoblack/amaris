'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: { src: string; alt?: string; title?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
          <X size={20} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav prev"
            onClick={onPrev}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Main Image */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image
            src={current.src}
            alt={current.alt || 'Gallery photo'}
            width={1200}
            height={800}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '6px',
            }}
            priority
          />
          {current.title && (
            <div
              style={{
                marginTop: '12px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              {current.title}
            </div>
          )}
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav next"
            onClick={onNext}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image Counter */}
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
