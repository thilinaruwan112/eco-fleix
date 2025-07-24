import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Recycle, Award } from 'lucide-react';

const certificationItems = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-green-700"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l2.5 5L20 7.5l-5 2.5L14.5 15l-2.5-5L7 9.5l5-2.5z" />
        <path d="M12 15l-2.5 5L4 19.5l5-2.5L9.5 12" />
        <path d="M12 9.5L14.5 12l2.5-5L20 7.5l-5 2.5" />
      </svg>
    ),
    title: 'Environmental Management',
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-700" />,
    title: 'Information Security',
  },
  {
    icon: <Recycle className="h-8 w-8 text-green-700" />,
    title: 'Responsible Recycling',
  },
  {
    icon: <Award className="h-8 w-8 text-blue-700" />,
    title: 'Responsible e-Waste Management',
  },
];

const Certifications = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">Our Credentials</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            CERTIFICATIONS &amp; COMPLIANCE
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We adhere to the highest industry standards for quality, security, and environmental responsibility.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationItems.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center gap-4">
                <div className="bg-muted rounded-full p-4 mb-2">
                    {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
