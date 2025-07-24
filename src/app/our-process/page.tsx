import OurProcessHero from '@/components/sections/OurProcessHero';
import HowWeHandleEWaste from '@/components/sections/HowWeHandleEWaste';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';


export default function OurProcessPage() {
  return (
    <div className="flex flex-col">
      <OurProcessHero />
      <HowWeHandleEWaste />
      <Faq />
      <Cta />
    </div>
  );
}
