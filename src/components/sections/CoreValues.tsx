import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Lightbulb, Star, ShieldCheck } from 'lucide-react';

const coreValues = [
  {
    icon: <Leaf className="h-7 w-7 text-primary" />,
    title: 'Sustainability',
    description: 'Prioritizing environmental responsibility in every facet of our operations to build a greener tomorrow.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: 'Integrity',
    description: 'Upholding the highest standards of honesty and transparency in all our business practices and client interactions.',
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-primary" />,
    title: 'Innovation',
    description: 'Continuously developing cutting-edge solutions to meet the evolving challenges of e-waste management.',
  },
  {
    icon: <Star className="h-7 w-7 text-primary" />,
    title: 'Excellence',
    description: 'Committing to deliver superior quality and unparalleled service in every project we undertake.',
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">What We Stand For</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These fundamental principles guide our decisions, shape our corporate culture, and define our commitment to our clients and the environment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white h-full transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-primary/10 rounded-full p-3 mb-6 w-max group-hover:bg-primary transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground flex-grow">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
