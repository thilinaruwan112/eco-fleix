import WhoWeServeHero from '@/components/sections/WhoWeServeHero';
import WhoWeServeContent from '@/components/sections/WhoWeServeContent';
import CommonChallenges from '@/components/sections/CommonChallenges';

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col">
      <WhoWeServeHero />
      <WhoWeServeContent />
      <CommonChallenges />
    </div>
  );
}
