import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import Faq from '@/components/sections/Faq';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <Faq />
    </div>
  );
}
