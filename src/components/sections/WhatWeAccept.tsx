'use client';

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';

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
             <Card key={index} className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card">
              <div className="relative h-56 w-full">
                  <Image
                      src={item.image}
                      alt={t(item.title)}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.aiHint}
                  />
                   <div className="absolute inset-x-0 bottom-0 p-4">
                     <div className="bg-primary/80 backdrop-blur-sm text-primary-foreground text-center rounded-lg px-4 py-2 text-lg font-bold">
                       {t(item.title)}
                     </div>
                   </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground flex-grow">{t(item.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAccept;
