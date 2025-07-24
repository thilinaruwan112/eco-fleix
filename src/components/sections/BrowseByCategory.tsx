'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Leaf, Recycle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

const BrowseByCategory = () => {
  const { t } = useTranslation();

  const categories = [
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: 'browse_category_1_title',
      description: 'browse_category_1_desc',
      count: 'browse_category_1_count',
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: 'browse_category_2_title',
      description: 'browse_category_2_desc',
      count: 'browse_category_2_count',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'browse_category_3_title',
      description: 'browse_category_3_desc',
      count: 'browse_category_3_count',
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: 'browse_category_4_title',
      description: 'browse_category_4_desc',
      count: 'browse_category_4_count',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('browse_by_category_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('browse_by_category_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a href="#" key={category.title} className="block group">
              <Card className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="bg-primary/10 rounded-full p-3 mb-4 w-max">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground flex-grow">
                    {t(category.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-4 flex-grow">{t(category.description)}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-sm font-medium text-primary">{t(category.count)}</p>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
                {t('view_all_categories')}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
