import React from 'react';
import type { Metadata } from 'next';
import BooksPowerReadView from '@/components/BooksPowerReadView';

export const metadata: Metadata = {
  title: 'Books & PowerRead™ – Dr. Amaris Perbi',
  description:
    'Explore transformational books by Dr. Amaris Perbi: 52 Weeks of Wisdom, Become Your Dream!, and Be Your Highest Self. Order on Amazon, explore the PowerRead movement, and request institutional copies.',
};

export default function BooksPowerReadPage() {
  return <BooksPowerReadView />;
}

