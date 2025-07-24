'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, FileText, Leaf, BarChart2 } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const CommonChallenges = () => {
  const { t } = useTranslation();
  const challenges = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
      title: 'common_challenge_1_title',
      description: 'common_challenge_1_desc',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
      title: 'common_challenge_2_title',
      description: 'common_challenge_2_desc',
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
      title: 'common_challenge_3_title',
      description: 'common_challenge_3_desc',
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
      title: 'common_challenge_4_title',
      description: 'common_challenge_4_desc',
    },
  ];

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('industry_challenges')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('common_challenges_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('common_challenges_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-primary/10 rounded-full p-3 mb-6 w-max group-hover:bg-primary transition-colors duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex-grow">
                  {t(challenge.title)}
                </h3>
                <p className="text-muted-foreground">
                  {t(challenge.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
