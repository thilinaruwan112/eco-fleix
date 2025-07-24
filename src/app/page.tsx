import Hero from '@/components/sections/Hero';
import PickupForm from '@/components/sections/PickupForm';
import ImpactCalculator from '@/components/sections/ImpactCalculator';
import AcceptedMaterials from '@/components/sections/AcceptedMaterials';
import ServiceArea from '@/components/sections/ServiceArea';
import Education from '@/components/sections/Education';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-8 md:pb-12">
      <Hero />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-8 md:gap-12">
            <PickupForm />
            <AcceptedMaterials />
          </div>
          <div className="flex flex-col gap-8 md:gap-12">
            <ImpactCalculator />
            <ServiceArea />
          </div>
        </div>
      </div>
      <Education />
    </div>
  );
}
