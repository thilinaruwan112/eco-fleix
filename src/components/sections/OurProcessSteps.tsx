'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Info, Truck, Shield, Recycle, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/hooks/use-translation';

const OurProcessSteps = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: 'our_process_step_1_title',
      image: 'https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZWxlY3Ryb25pYyUyMHdhc3RlfGVufDB8fHx8MTc1MzY0MDE1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'technicians loading truck',
      benefits: [
        'our_process_step_1_benefit_1',
        'our_process_step_1_benefit_2',
        'our_process_step_1_benefit_3',
        'our_process_step_1_benefit_4',
      ],
      timeline: 'our_process_step_1_timeline',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'our_process_step_2_title',
      image: 'https://images.unsplash.com/photo-1714846201700-35b42d937158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8ZGF0YSUyMGRlc3RydWN0aW9ufGVufDB8fHx8MTc1MzY0MDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'server room',
      benefits: [
        'our_process_step_2_benefit_1',
        'our_process_step_2_benefit_2',
        'our_process_step_2_benefit_3',
        'our_process_step_2_benefit_4',
      ],
      timeline: 'our_process_step_2_timeline',
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: 'our_process_step_3_title',
      image: 'https://images.unsplash.com/photo-1550041473-d296a3a8a18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlbGVjdHJvbmljJTIwd2FzdGV8ZW58MHx8fHwxNzUzNjQwMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'electronic waste sorting',
      benefits: [
        'our_process_step_3_benefit_1',
        'our_process_step_3_benefit_2',
        'our_process_step_3_benefit_3',
        'our_process_step_3_benefit_4',
      ],
      timeline: 'our_process_step_3_timeline',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'our_process_step_4_title',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      aiHint: 'person reviewing documents',
      benefits: [
        'our_process_step_4_benefit_1',
        'our_process_step_4_benefit_2',
        'our_process_step_4_benefit_3',
        'our_process_step_4_benefit_4',
      ],
      timeline: 'our_process_step_4_timeline',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('how_it_works')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('our_process_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('our_process_desc')}
          </p>
        </div>

        <div className="space-y-20">
          {processSteps.map((step, index) => (
            <div key={step.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-lg group ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                 <Image
                    src={step.image}
                    alt={t(step.title)}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={step.aiHint}
                  />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {t(step.title)}
                    </h3>
                </div>
                <h4 className="font-semibold text-lg text-foreground">{t('key_benefits')}:</h4>
                <ul className="space-y-3">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(benefit)}</span>
                    </li>
                  ))}
                </ul>
                <Card className="bg-primary/5 border-l-4 border-primary">
                    <CardContent className="p-4 flex items-center gap-3 text-sm">
                        <Info className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-primary">{t('typical_timeframe')}:</span>
                            <span className="text-muted-foreground ml-2">{t(step.timeline)}</span>
                        </div>
                    </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSteps;
