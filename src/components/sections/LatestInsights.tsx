'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useTranslation } from '@/hooks/use-translation';

const LatestInsights = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] text-white">
          <Image
            src="https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM2MzkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="E-waste processing facility"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="e-waste recycling factory"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <Badge className="bg-primary hover:bg-primary/90 text-white border-transparent mb-4 text-sm">
              {t('featured_article')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
              {t('latest_insights_title')}
            </h2>
            <div className="flex items-center flex-wrap gap-4 mt-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzYwMjc1Mnww&ixlib=rb-4.1.0&q=80&w=1080" alt="Dr. Sarah Ahmed" data-ai-hint="woman portrait" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <span>{t('latest_insights_author')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('latest_insights_date')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t('latest_insights_read_time')}</span>
              </div>
            </div>
            <a href="/blog/the-future-of-e-waste-management-in-dubai">
             <Button size="lg" className="mt-6 bg-white text-primary hover:bg-white/90">
                {t('read_full_article')}
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
