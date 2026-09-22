import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'STEAM, Education – Gallery',
  description: 'STEAM & Education initiatives gallery – Dr. Amaris Perbi.',
};

export default function SteamEducationGalleryPage() {
  return (
    <GalleryView
      initialCategory="steam-education"
      title="STEAM, Education"
      subtitle="Youth Development"
      desc="Equipping school children with robotics, coding, science, and creative arts manipulatives across underprivileged classrooms."
    />
  );
}
