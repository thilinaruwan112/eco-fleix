import AboutHero from '@/components/sections/AboutHero';
import PioneeringSustainable from '@/components/sections/PioneeringSustainable';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <div className="py-16 md:py-24">
        <PioneeringSustainable />
      </div>
    </div>
  );
}
