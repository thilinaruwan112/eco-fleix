import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

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
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center gap-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
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
