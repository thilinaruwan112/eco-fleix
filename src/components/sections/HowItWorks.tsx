'use client';

import { ClipboardList, Truck, ArrowDownUp, BarChart2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { useTranslation } from '@/hooks/use-translation';

const HowItWorks = () => {
    const { t } = useTranslation();
    const phoneNumber = '+971529058388';
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const steps = [
      {
        icon: <ClipboardList className="h-8 w-8 text-primary" />,
        title: t('how_it_works_step_1_title'),
        description: t('how_it_works_step_1_desc'),
      },
      {
        icon: <Truck className="h-8 w-8 text-primary" />,
        title: t('how_it_works_step_2_title'),
        description: t('how_it_works_step_2_desc'),
      },
      {
        icon: <ArrowDownUp className="h-8 w-8 text-primary" />,
        title: t('how_it_works_step_3_title'),
        description: t('how_it_works_step_3_desc'),
      },
      {
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
        title: t('how_it_works_step_4_title'),
        description: t('how_it_works_step_4_desc'),
      },
    ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('our_process')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('how_it_works_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('how_it_works_desc')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 -z-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                 <div className="bg-primary/10 rounded-full p-4 mb-4 ring-8 ring-background">
                    {step.icon}
                  </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 text-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                    {t('schedule_your_free_pickup')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
