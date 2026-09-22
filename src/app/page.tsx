import type { Metadata } from 'next';
import HomepageView from '@/components/HomepageView';

export const metadata: Metadata = {
  title: 'Dr. Amaris Nana Adjei Perbi – Global Training Consultant & Executive Educator',
  description:
    'Official website of Dr. Amaris Nana Adjei Perbi: executive educator, global leadership consultant, author, philanthropist, and speaker with over 15 years of transatlantic leadership experience.',
};

export default function Home() {
  return <HomepageView />;
}
