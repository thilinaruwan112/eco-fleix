import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatWeAccept from '@/components/sections/WhatWeAccept';
import HowItWorks from '@/components/sections/HowItWorks';
import Certifications from '@/components/sections/Certifications';
import CriticalRecycling from '@/components/sections/CriticalRecycling';
import Faq from '@/components/sections/Faq';
import Testimonials from '@/components/sections/Testimonials';
import Cta from '@/components/sections/Cta';
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

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <About />
      <WhatWeAccept title="What We Accept" items={acceptedItems} />
      <HowItWorks />
      <Certifications />
      <CriticalRecycling />
      <Faq />
      <Testimonials />
      <Cta />
    </div>
  );
}
