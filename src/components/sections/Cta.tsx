'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const Cta = () => {
    const { t } = useTranslation();
    const phoneNumber = '+971544563685';
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {t('cta_title')}
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/90">
                    {t('cta_desc')}
                </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4">
                <a href="/contact">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        {t('contact_us')}
                    </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="secondary" className="text-primary hover:bg-gray-200">
                        {t('get_a_quote')}
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

    