import AboutHero from '@/components/sections/AboutHero';
import PioneeringSustainable from '@/components/sections/PioneeringSustainable';
import MissionVision from '@/components/sections/MissionVision';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';

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
