import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatWeAccept from '@/components/sections/WhatWeAccept';
import HowItWorks from '@/components/sections/HowItWorks';
import Certifications from '@/components/sections/Certifications';
import CriticalRecycling from '@/components/sections/CriticalRecycling';
import Faq from '@/components/sections/Faq';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-8 md:pb-12">
      <Hero />
      <About />
      <WhatWeAccept />
      <HowItWorks />
      <Certifications />
      <CriticalRecycling />
      <Faq />
      <Testimonials />
    </div>
  );
}
