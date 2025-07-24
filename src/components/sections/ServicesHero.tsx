'use client';

import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const ServicesHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center z-20 relative">
         <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-primary">{t('home')}</a>
          <ChevronRight className="h-4 w-4" />
          <span>{t('services')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          {t('our')} <span className="text-primary">{t('services')}</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
          {t('services_hero_desc')}
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
