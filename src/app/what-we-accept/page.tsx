
import WhatWeAccept from '@/components/sections/WhatWeAccept';
import { acceptedItems } from '@/lib/accepted-items';
import { Metadata } from 'next';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';

export const metadata: Metadata = {
  title: 'What We Accept | E-Waste Recycling Dubai | ECO FLEIX',
  description: 'View the comprehensive list of electronic items we accept for recycling at ECO FLEIX. We handle everything from laptops and servers to household electronics.',
  alternates: {
    canonical: '/what-we-accept',
  },
};

export default function WhatWeAcceptPage() {
  return (
    <div className="flex flex-col">
        <div className="pt-24">
            <WhatWeAccept title="what_we_accept" items={acceptedItems} />
        </div>
        <Faq />
        <Cta />
    </div>
  );
}
