import AboutHero from '@/components/sections/AboutHero';
import PioneeringSustainable from '@/components/sections/PioneeringSustainable';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <AboutHero />
      <PioneeringSustainable />
    </div>
  );
}
