import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'BOREHOLE, Water – Gallery',
  description: 'Clean borehole water projects and community commissioning – Dr. Amaris Perbi.',
};

export default function BoreholeWaterGalleryPage() {
  return (
    <GalleryView
      initialCategory="borehole-water"
      title="BOREHOLE, Water"
      subtitle="Clean Water Access"
      desc="Providing sustainable, clean, potable borehole water installations to underserved rural communities."
    />
  );
}
