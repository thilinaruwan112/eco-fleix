import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Recycle, Award, CheckCircle } from 'lucide-react';

const certificationItems = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Quality Management',
    description: 'ISO 9001',
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: 'Environmental Management',
    description: 'ISO 14001',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Information Security',
    description: 'ISO 27001',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Responsible Recycling',
    description: 'R2 Certified',
  },
];

const Certifications = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Our Credentials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Certifications & Compliance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We adhere to the highest industry standards for quality, security, and environmental responsibility, ensuring your peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationItems.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white">
              <CardContent className="p-8 flex flex-col items-center justify-center gap-4 h-full">
                <div className="bg-primary/10 rounded-full p-4 mb-2">
                    {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
