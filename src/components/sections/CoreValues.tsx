import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Lightbulb, Star } from 'lucide-react';

const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.5"/><path d="M13 17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5"/><path d="M8 18V7"/><path d="M16 18V9"/></svg>
);


const coreValues = [
  {
    icon: <Leaf className="h-7 w-7 text-green-700" />,
    title: 'Sustainability',
    description: 'Environmental responsibility in everything we do',
    bgColor: 'bg-green-100',
  },
  {
    icon: <HandshakeIcon className="h-7 w-7 text-blue-800" />,
    title: 'Integrity',
    description: 'Honest and transparent business practices',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-green-700" />,
    title: 'Innovation',
    description: 'Cutting-edge solutions for modern challenges',
    bgColor: 'bg-green-100',
  },
  {
    icon: <Star className="h-7 w-7 text-blue-800" />,
    title: 'Excellence',
    description: 'Delivering superior quality in all services',
    bgColor: 'bg-blue-100',
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-green-100 text-green-800 border-transparent mb-4 hover:bg-green-100">What We Stand For</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            OUR CORE VALUES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These principles guide our decisions, shape our culture, and define how we operate.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center gap-4">
                <div className={`rounded-full p-4 mb-2 ${value.bgColor}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
