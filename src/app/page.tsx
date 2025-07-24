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
    icon: <Laptop />,
    title: 'Computers & Laptops',
    description: 'Desktops, laptops, and all related computer equipment.',
  },
  {
    icon: <Smartphone />,
    title: 'Mobile Devices',
    description: 'Smartphones, tablets, cell phones, and accessories.',
  },
  {
    icon: <Monitor />,
    title: 'Displays & Screens',
    description: 'Monitors, televisions, and other display equipment.',
  },
  {
    icon: <Camera />,
    title: 'Peripherals & More',
    description: 'Cameras, printers, cables, and other electronic accessories.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <WhatWeAccept title="A Wide Range of Accepted E-Waste" items={acceptedItems} />
      <HowItWorks />
      <CriticalRecycling />
      <Certifications />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
