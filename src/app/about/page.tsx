import AboutHero from '@/components/sections/AboutHero';
import PioneeringSustainable from '@/components/sections/PioneeringSustainable';
import WhatWeAccept from '@/components/sections/WhatWeAccept';
import { Laptop, Smartphone, Camera, Monitor } from 'lucide-react';

const acceptedItems = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Desktops, Laptops & Computer Equipment',
    description: 'All types of computers and related hardware',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Smartphones, Tablets & Cell Phones',
    description: 'Mobile devices and accessories',
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: 'Connectors & Digital Cameras',
    description: 'Cables, adapters, and imaging equipment',
  },
  {
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: 'LCD Monitors & Televisions',
    description: 'Display devices and screens',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <div className="py-16 md:py-24">
        <PioneeringSustainable />
      </div>
      <WhatWeAccept title="What We Accept" items={acceptedItems} />
    </div>
  );
}
