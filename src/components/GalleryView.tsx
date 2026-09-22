'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LightboxModal from './LightboxModal';
import galleryDataRaw from './galleryDetailedData.json';

interface GalleryItem {
  full: string;
  thumb: string;
}

interface GalleryViewProps {
  initialCategory?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
}

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'financial-inclusion', name: 'Financial Inclusion' },
  { id: 'economic-empowerment', name: 'Economic Empowerment' },
  { id: 'steam-education', name: 'STEAM, Education' },
  { id: 'borehole-water', name: 'BOREHOLE, Water' },
  { id: 'others', name: 'Others' },
  { id: '52-weeks-of-wisdom-powerread-series', name: '52 Weeks of Wisdom' },
];

export default function GalleryView({
  initialCategory = 'all',
  title = 'Checkout Pictures from our Projects',
  subtitle = 'Gallery',
  desc = 'Explore authentic moments capturing leadership conferences, borehole installations, youth education, and community impact.',
}: GalleryViewProps) {
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryData = galleryDataRaw as Record<string, GalleryItem[]>;

  // Compile image list based on category
  let itemsToDisplay: GalleryItem[] = [];
  if (selectedCat === 'all') {
    const catKeys = [
      'financial-inclusion',
      'economic-empowerment',
      'steam-education',
      'borehole-water',
      'others',
      '52-weeks-of-wisdom-powerread-series',
    ];
    catKeys.forEach((key) => {
      if (galleryData[key]) {
        itemsToDisplay.push(...galleryData[key]);
      }
    });
    // Remove duplicates by full URL
    const seen = new Set<string>();
    itemsToDisplay = itemsToDisplay.filter((item) => {
      if (seen.has(item.full)) return false;
      seen.add(item.full);
      return true;
    });
  } else {
    itemsToDisplay = galleryData[selectedCat] || [];
  }

  const lightboxImages = itemsToDisplay.map((item, i) => ({
    src: item.full,
    alt: `Dr. Amaris Perbi photo ${i + 1}`,
  }));

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

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
          <span className="section-subtitle">{subtitle}</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            {title}
          </h1>
          <div
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: 'var(--primary)',
              margin: '0 auto 20px auto',
              borderRadius: '2px',
            }}
          />
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {desc}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eaedf0', padding: '24px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? Object.values(galleryData).reduce((acc, arr) => acc + arr.length, 0)
                  : (galleryData[cat.id] || []).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedCat === cat.id ? 'var(--primary)' : '#F8FCFC',
                    color: selectedCat === cat.id ? '#ffffff' : 'var(--text-headline)',
                    border: selectedCat === cat.id ? '1px solid var(--primary)' : '1px solid #eaedf0',
                    boxShadow: selectedCat === cat.id ? '0 4px 12px rgba(0, 196, 155, 0.25)' : 'none',
                  }}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container">
          {itemsToDisplay.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No images available for this category.
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {itemsToDisplay.map((item, index) => (
                <div
                  key={`${item.full}-${index}`}
                  onClick={() => openLightbox(index)}
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    backgroundColor: '#e2e8f0',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
                  }}
                >
                  <Image
                    src={item.full}
                    alt={`Photo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full-screen Lightbox */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}

