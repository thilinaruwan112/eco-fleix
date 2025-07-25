import OurProcessHero from '@/components/sections/OurProcessHero';
import OurProcessSteps from '@/components/sections/OurProcessSteps';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import ProcessInAction from '@/components/sections/ProcessInAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process | Secure & Transparent E-Waste Recycling in Dubai',
  description: 'Discover the secure and transparent e-waste recycling process at ECO FLEIX in Dubai. From collection and data destruction to final reporting, we ensure responsible ITAD.',
};

export default function OurProcessPage() {
  return (
    <div className="flex flex-col">
      <OurProcessHero />
      <OurProcessSteps />
      <ProcessInAction />
      <Faq />
      <Cta />
    </div>
  );
}
