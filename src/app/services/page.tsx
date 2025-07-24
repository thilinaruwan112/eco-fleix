import ServicesContent from '@/components/sections/ServicesContent';
import ServicesHero from '@/components/sections/ServicesHero';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesContent />
    </div>
  );
}
