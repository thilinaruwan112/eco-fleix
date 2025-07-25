
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatWeAccept from '@/components/sections/WhatWeAccept';
import HowItWorks from '@/components/sections/HowItWorks';
import Certifications from '@/components/sections/Certifications';
import CriticalRecycling from '@/components/sections/CriticalRecycling';
import Faq from '@/components/sections/Faq';
import Testimonials from '@/components/sections/Testimonials';
import Cta from '@/components/sections/Cta';
import { Laptop, Smartphone, Camera, Monitor, Shield, Network, Headphones, Gamepad2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Waste Recycling Dubai | IT Asset Disposition | ECO FLEIX',
  description: 'ECO FLEIX offers professional e-waste recycling and IT asset disposition (ITAD) services in Dubai. We provide secure data destruction, electronics recycling, and sustainable e-waste management for businesses and individuals.',
};

const acceptedItems = [
  {
    icon: <Laptop />,
    title: 'accepted_item_1_title',
    description: 'accepted_item_1_desc',
  },
  {
    icon: <Smartphone />,
    title: 'accepted_item_2_title',
    description: 'accepted_item_2_desc',
  },
  {
    icon: <Camera />,
    title: 'accepted_item_3_title',
    description: 'accepted_item_3_desc',
  },
  {
    icon: <Monitor />,
    title: 'accepted_item_4_title',
    description: 'accepted_item_4_desc',
  },
  {
    icon: <Shield />,
    title: 'accepted_item_5_title',
    description: 'accepted_item_5_desc',
  },
  {
    icon: <Network />,
    title: 'accepted_item_6_title',
    description: 'accepted_item_6_desc',
  },
  {
    icon: <Headphones />,
    title: 'accepted_item_7_title',
    description: 'accepted_item_7_desc',
  },
  {
    icon: <Gamepad2 />,
    title: 'accepted_item_8_title',
    description: 'accepted_item_8_desc',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatWeAccept title="A Wide Range of Accepted E-Waste" items={acceptedItems} />
      <About />
      <HowItWorks />
      <CriticalRecycling />
      <Certifications />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
