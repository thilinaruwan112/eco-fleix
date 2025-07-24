import WhoWeServeHero from '@/components/sections/WhoWeServeHero';
import WhoWeServeContent from '@/components/sections/WhoWeServeContent';

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col">
      <WhoWeServeHero />
      <WhoWeServeContent />
    </div>
  );
}
