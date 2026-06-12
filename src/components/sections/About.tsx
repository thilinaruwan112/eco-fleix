'use client';

import { CheckCircle, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    t('about_feature_1'),
    t('about_feature_2'),
    t('about_feature_3'),
    t('about_feature_4'),
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-transparent hover:bg-primary/10">{t('who_we_are')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {t('about_title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about_desc')}
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
             <a href="/about">
              <Button variant="outline" className="mt-4">
                {t('learn_more_about_us')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-lg group">
             <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZWN5Y2xpbmclMjBmYWN0b3J5JTIwd29ya2Vyc3xlbnwwfHx8fDE3NTM0NTQ0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team at recycling facility"
                layout="fill"
                objectFit="cover"
                className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                data-ai-hint="recycling factory workers"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Users className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">
                  {t('our_professional_team')}
                </h3>
                <p className="mt-1 text-white/90">
                  {t('our_professional_team_desc')}
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
