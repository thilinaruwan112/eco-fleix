import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, FileText, Leaf, BarChart2 } from 'lucide-react';

const challenges = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
    title: 'Data Security & Privacy',
    description: 'Our certified data destruction processes ensure complete eradication of sensitive information, protecting your organization from data breaches and compliance violations.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
    title: 'Regulatory Compliance',
    description: 'We stay up-to-date with all relevant regulations and provide comprehensive documentation to help you maintain compliance with industry-specific requirements.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
    title: 'Environmental Responsibility',
    description: 'Our zero-landfill policy and responsible recycling practices help your organization reduce its environmental footprint and meet sustainability goals.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />,
    title: 'Cost Management',
    description: 'Our value recovery programs help offset the costs of IT asset disposition, providing a more cost-effective solution than traditional disposal methods.',
  },
];

const CommonChallenges = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">Industry Challenges</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            COMMON CHALLENGES WE SOLVE
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Organizations across all industries face similar challenges when it comes to e-waste management. Here's how we address them.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white h-full transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="bg-primary/10 rounded-full p-3 mb-6 w-max group-hover:bg-primary transition-colors duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex-grow">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
