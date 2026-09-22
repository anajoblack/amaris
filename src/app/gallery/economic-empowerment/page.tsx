import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Economic Empowerment – Gallery',
  description: 'Economic Empowerment initiative photos – Dr. Amaris Perbi.',
};

export default function EconomicEmpowermentGalleryPage() {
  return (
    <GalleryView
      initialCategory="economic-empowerment"
      title="Economic Empowerment"
      subtitle="Social Impact"
      desc="Empowering women and micro-entrepreneurs with vocational skills, equipment, and capital to build resilient livelihoods."
    />
  );
}
