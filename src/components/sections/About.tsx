import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  'Certified data destruction services',
  'EPA compliant recycling processes',
  'Free pickup for bulk quantities',
  'Detailed reporting and certificates',
];

const About = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Responsible Electronic Scrap Buyers
          </h2>
          <ul className="space-y-4 inline-block text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Technicians handling electronic waste"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="recycling factory workers"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Professional Team
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our certified technicians ensure secure handling of your electronic waste.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
