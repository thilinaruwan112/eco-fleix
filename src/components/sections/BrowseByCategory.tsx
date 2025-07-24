import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Leaf, Recycle, Shield } from 'lucide-react';

const categories = [
  {
    icon: <Recycle className="h-8 w-8 text-green-600" />,
    title: 'E-Waste Recycling',
    count: '12 articles',
  },
  {
    icon: <Laptop className="h-8 w-8 text-blue-700" />,
    title: 'IT Disposal',
    count: '8 articles',
  },
  {
    icon: <Shield className="h-8 w-8 text-red-600" />,
    title: 'Data Security',
    count: '6 articles',
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: 'Sustainability',
    count: '10 articles',
  },
];

const BrowseByCategory = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            BROWSE BY CATEGORY
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find articles specific to your e-waste recycling needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-background cursor-pointer"
            >
              <CardContent className="p-8 flex flex-col items-center justify-center gap-3">
                {category.icon}
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
