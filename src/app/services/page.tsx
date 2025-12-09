
import ServicesContent from '@/components/sections/ServicesContent';
import ServicesHero from '@/components/sections/ServicesHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | ITAD, Data Destruction, E-Waste Recycling in Dubai',
  description: 'Explore our e-waste and ITAD services in Dubai, including IT asset remarketing, remanufacturing, disposition, and certified data destruction by ECO FLEIX.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesContent />
    </div>
  );
}
