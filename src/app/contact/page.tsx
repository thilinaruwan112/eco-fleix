import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import Faq from '@/components/sections/Faq';
import TalkToUs from '@/components/sections/TalkToUs';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <TalkToUs />
      <Faq />
    </div>
  );
}
