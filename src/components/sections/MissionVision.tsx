'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Check } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const MissionVision = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('our_purpose')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('mission_vision_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('mission_vision_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-card group">
            <CardContent className="p-8 flex flex-col items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3 mb-2 w-max group-hover:bg-primary transition-colors">
                <Eye className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t('our_vision')}
              </h3>
              <p className="text-muted-foreground text-left">
                {t('our_vision_desc')}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-card group">
            <CardContent className="p-8 flex flex-col items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3 mb-2 w-max group-hover:bg-primary transition-colors">
                <Check className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t('our_mission')}
              </h3>
              <p className="text-muted-foreground text-left">
                {t('our_mission_desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
