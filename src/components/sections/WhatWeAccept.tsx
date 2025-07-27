'use client';

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface AcceptedItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  aiHint: string;
}

interface WhatWeAcceptProps {
  title: string;
  items: AcceptedItem[];
}

const WhatWeAccept: React.FC<WhatWeAcceptProps> = ({ title, items }) => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-24 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('what_we_recycle')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t(title)}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('we_accept_comprehensive_range')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
             <Card key={index} className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-56 w-full">
                  <Image
                      src={item.image}
                      alt={t(item.title)}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 pt-12">
                <div className="relative">
                    <div className="absolute bottom-full left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="bg-background p-4 rounded-lg shadow-md relative">
                       <h3 className="text-lg font-bold text-foreground truncate">{t(item.title)}</h3>
                       <div className="h-20 overflow-hidden relative mt-2">
                          <p className="text-sm text-muted-foreground opacity-100 transition-opacity duration-300 group-hover:opacity-0">{t(item.description)}</p>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Button variant="outline" size="sm">
                              {t('learn_more')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAccept;
