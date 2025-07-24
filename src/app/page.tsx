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
import ServicesContent from '@/components/sections/ServicesContent';

const acceptedItems = [
  {
    icon: <Laptop />,
    title: 'Desktop, Laptop & Computer Equipment',
    description: 'Desktops, laptops, and all related computer equipment.',
  },
  {
    icon: <Smartphone />,
    title: 'Smartphones, Tablets & Cell Phones',
    description: 'Smartphones, tablets, cell phones, and accessories.',
  },
  {
    icon: <Camera />,
    title: 'Camcorders & Digital Cameras',
    description: 'Camcorders, digital cameras, and other video equipment.',
  },
  {
    icon: <Monitor />,
    title: 'LCD Monitors & Televisions',
    description: 'Monitors, televisions, and other display equipment.',
  },
  {
    icon: <Shield />,
    title: 'Security Devices',
    description: 'Security cameras, alarm systems, and other security electronics.',
  },
  {
    icon: <Network />,
    title: 'Network Switches & Equipment',
    description: 'Routers, switches, modems, and other networking gear.',
  },
  {
    icon: <Headphones />,
    title: 'Audio & Sound Equipments',
    description: 'Headphones, speakers, amplifiers, and other audio devices.',
  },
  {
    icon: <Gamepad2 />,
    title: 'Games & Game Accessories',
    description: 'Gaming consoles, controllers, and other gaming accessories.',
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