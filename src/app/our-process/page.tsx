import OurProcessHero from '@/components/sections/OurProcessHero';
import OurProcessSteps from '@/components/sections/OurProcessSteps';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import ProcessInAction from '@/components/sections/ProcessInAction';


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
