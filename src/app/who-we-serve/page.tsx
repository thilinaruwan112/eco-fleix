import WhoWeServeHero from '@/components/sections/WhoWeServeHero';
import WhoWeServeContent from '@/components/sections/WhoWeServeContent';
import CommonChallenges from '@/components/sections/CommonChallenges';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function WhoWeServeContentSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col">
      <WhoWeServeHero />
      <Suspense fallback={<WhoWeServeContentSkeleton />}>
        <WhoWeServeContent />
      </Suspense>
      <CommonChallenges />
    </div>
  );
}
