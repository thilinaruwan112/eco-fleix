'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TriangleAlert, Leaf, ShieldCheck, Recycle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/hooks/use-translation';

const CriticalRecycling = () => {
  const { t } = useTranslation();

  const challenges = [
    t('critical_recycling_challenge_1'),
    t('critical_recycling_challenge_2'),
    t('critical_recycling_challenge_3'),
  ];
  
  const solutions = [
      { text: t('critical_recycling_solution_1'), icon: <Leaf className="h-5 w-5 text-primary" /> },
      { text: t('critical_recycling_solution_2'), icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
      { text: t('critical_recycling_solution_3'), icon: <Recycle className="h-5 w-5 text-primary" /> },
  ];

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('why_it_matters')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('critical_recycling_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('critical_recycling_desc')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg border-l-4 border-destructive bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-destructive/10 p-3 rounded-full">
                  <TriangleAlert className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('the_challenge')}</h3>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive/50 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-l-4 border-primary bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Recycle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('our_solution')}</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                     {solution.icon}
                    <span className="text-muted-foreground">{solution.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CriticalRecycling;
