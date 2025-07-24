'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Lightbulb, Star, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const CoreValues = () => {
    const { t } = useTranslation();
    const coreValues = [
        {
          icon: <Leaf className="h-7 w-7 text-primary" />,
          title: t('core_value_1_title'),
          description: t('core_value_1_desc'),
        },
        {
          icon: <ShieldCheck className="h-7 w-7 text-primary" />,
          title: t('core_value_2_title'),
          description: t('core_value_2_desc'),
        },
        {
          icon: <Lightbulb className="h-7 w-7 text-primary" />,
          title: t('core_value_3_title'),
          description: t('core_value_3_desc'),
        },
        {
          icon: <Star className="h-7 w-7 text-primary" />,
          title: t('core_value_4_title'),
          description: t('core_value_4_desc'),
        },
      ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('what_we_stand_for')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('our_core_values')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('our_core_values_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-primary/10 rounded-full p-3 mb-6 w-max group-hover:bg-primary transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground flex-grow">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
