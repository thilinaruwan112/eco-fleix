
import AboutHero from '@/components/sections/AboutHero';
import PioneeringSustainable from '@/components/sections/PioneeringSustainable';
import MissionVision from '@/components/sections/MissionVision';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ECO FLEIX | Sustainable E-Waste Management in Dubai',
  description: 'Learn about ECO FLEIX, a leading e-waste recycling company in Dubai. Discover our mission, vision, and commitment to sustainable electronics disposal and ITAD services.',
  alternates: {
    canonical: '/about',
  },
};


export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <PioneeringSustainable />
      <MissionVision />
      <CoreValues />
      <Certifications />
    </div>
  );
}
