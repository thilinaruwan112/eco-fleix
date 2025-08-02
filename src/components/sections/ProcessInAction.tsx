'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

const ProcessInAction = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('process_in_action_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process_in_action_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8fDE3NTM3MDkzODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern office workstations"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1MzY0MzEzMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical equipment"
              layout="fill"
              objectFit="cover"
              data-ai-hint="medical equipment"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2c65a0cfb3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wdXRIciUyMGxhYnxlbnwwfHx8fDE3NTM5NDg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Old computer lab"
              layout="fill"
              objectFit="cover"
              data-ai-hint="computer lab"
            />
          </div>
        </div>

        <Card className="shadow-xl rounded-2xl bg-card">
            <CardContent className="p-8 grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">{t('challenge')}</h3>
                    <p className="text-muted-foreground text-sm">
                        {t('process_in_action_challenge')}
                    </p>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">{t('solution')}</h3>
                    <p className="text-muted-foreground text-sm">
                        {t('process_in_action_solution')}
                    </p>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">{t('results')}</h3>
                    <p className="text-muted-foreground text-sm">
                        {t('process_in_action_results')}
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessInAction;
