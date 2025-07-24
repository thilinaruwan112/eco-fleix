import { Card, CardContent } from '@/components/ui/card';
import { TriangleAlert, Leaf, ShieldCheck, Recycle } from 'lucide-react';

const challenges = [
  'E-waste contains toxic materials harmful to environment',
  'Data security risks from improper disposal',
  'Growing volume of electronic waste globally',
];

const solutions = [
    { text: 'Certified environmentally safe processing', icon: <Leaf className="h-5 w-5 text-green-700" /> },
    { text: 'Secure data destruction protocols', icon: <ShieldCheck className="h-5 w-5 text-green-700" /> },
    { text: 'Maximum material recovery and reuse', icon: <Recycle className="h-5 w-5 text-green-700" /> },
];

const CriticalRecycling = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Why Responsible IT Scrap Recycling is Critical
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-red-50 border-red-200 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-red-700 mb-6">The Challenge</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <TriangleAlert className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-green-800 mb-6">Our Solution</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  {solution.icon}
                  <span className="text-muted-foreground">{solution.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CriticalRecycling;
