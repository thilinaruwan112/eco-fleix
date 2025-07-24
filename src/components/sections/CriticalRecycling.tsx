import { Card, CardContent } from '@/components/ui/card';
import { TriangleAlert, Leaf, ShieldCheck, Recycle } from 'lucide-react';
import { Badge } from '../ui/badge';

const challenges = [
  'E-waste contains toxic materials like lead and mercury that are harmful to the environment and human health.',
  'Improper disposal poses significant data security risks, exposing sensitive personal and corporate information.',
  'The volume of electronic waste is growing exponentially worldwide, creating a massive environmental challenge.',
];

const solutions = [
    { text: 'Certified environmentally safe processing to neutralize hazardous materials.', icon: <Leaf className="h-5 w-5 text-primary" /> },
    { text: 'Secure, certified data destruction protocols that guarantee information security.', icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
    { text: 'State-of-the-art recycling technology for maximum material recovery and reuse.', icon: <Recycle className="h-5 w-5 text-primary" /> },
];

const CriticalRecycling = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">Why It Matters</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Why Responsible IT Scrap Recycling is Critical
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the challenges of e-waste and our effective solutions is key to protecting our planet and your data.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg border-l-4 border-destructive bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-destructive/10 p-3 rounded-full">
                  <TriangleAlert className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive/50 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-l-4 border-primary bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Recycle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                     {solution.icon}
                    <span className="text-muted-foreground">{solution.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CriticalRecycling;
