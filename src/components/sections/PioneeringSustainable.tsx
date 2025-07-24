'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

const PioneeringSustainable = () => {
    const { t } = useTranslation();
    const phoneNumber = '+971529058388';
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8fDE3NTM0Mzg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaborating in an office"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              data-ai-hint="business team collaboration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-transparent hover:bg-primary/10">{t('our_story')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {t('pioneering_sustainable_title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('pioneering_sustainable_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">{t('contact_us')}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PioneeringSustainable;
