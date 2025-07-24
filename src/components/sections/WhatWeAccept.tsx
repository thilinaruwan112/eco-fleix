import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Smartphone, Camera, Monitor } from 'lucide-react';
import React from 'react';

const acceptedItems = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Desktops, Laptops & Computer Equipment',
    description: 'All types of computers and related hardware',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Smartphones, Tablets & Cell Phones',
    description: 'Mobile devices and accessories',
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: 'Connectors & Digital Cameras',
    description: 'Cables, adapters, and imaging equipment',
  },
  {
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: 'LCD Monitors & Televisions',
    description: 'Display devices and screens',
  },
];

const WhatWeAccept = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            What We Accept
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {acceptedItems.map((item, index) => (
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
