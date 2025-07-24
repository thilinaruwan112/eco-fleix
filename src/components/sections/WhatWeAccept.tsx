'use client';

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/hooks/use-translation';

interface AcceptedItem {
  icon: React.ReactNode;
  title: string;
  description: string;
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
            <Card key={index} className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-primary/10 rounded-full p-3 mb-6 w-max group-hover:bg-primary transition-colors duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-8 w-8 text-primary group-hover:text-white transition-colors duration-300"})}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2 flex-grow">
                  {t(item.title)}
                </h3>
                <p className="text-muted-foreground">
                  {t(item.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAccept;
