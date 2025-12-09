
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import Faq from '@/components/sections/Faq';
import TalkToUs from '@/components/sections/TalkToUs';
import Cta from '@/components/sections/Cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | E-Waste Recycling & ITAD Services in Dubai',
  description: 'Contact ECO FLEIX for e-waste recycling, IT asset disposition (ITAD), and secure data destruction services in Dubai. Schedule a free pickup or get a quote today.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <TalkToUs />
      <Faq />
      <Cta />
    </div>
  );
}
