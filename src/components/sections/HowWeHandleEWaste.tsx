import { Card, CardContent } from '@/components/ui/card';
import { Truck, Shield, Recycle, FileText, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const processSteps = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    step: 'STEP 1',
    title: 'Collection & Transport',
    description: 'Secure pickup and transportation of your electronic equipment with full chain of custody documentation.',
    timeline: '1-2 days',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    step: 'STEP 2',
    title: 'Data Destruction',
    description: 'Complete data sanitization using DOD-approved methods with certified destruction certificates.',
    timeline: '2-3 days',
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    step: 'STEP 3',
    title: 'Processing & Sorting',
    description: 'Professional dismantling and sorting of materials for maximum recovery and recycling efficiency.',
    timeline: '3-5 days',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    step: 'STEP 4',
    title: 'Reporting & Compliance',
    description: 'Comprehensive reporting with certificates of destruction and recycling compliance documentation.',
    timeline: '1-2 days',
  },
];

const HowWeHandleEWaste = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How We Handle Your E-Waste
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our proven 4-step process ensures secure, compliant, and environmentally responsible disposal of your electronic equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <Card key={index} className={`text-left shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white border-t-4 ${index % 2 === 0 ? 'border-primary' : 'border-blue-500'}`}>
              <CardContent className="p-8 flex flex-col items-start gap-4 h-full">
                <div className={`bg-opacity-10 rounded-full p-3 mb-2 w-max ${index % 2 === 0 ? 'bg-primary' : 'bg-blue-500'}`}>
                    {React.cloneElement(item.icon, { className: `h-8 w-8 ${index % 2 === 0 ? 'text-primary' : 'text-blue-500'}` })}
                </div>
                <Badge variant={index % 2 === 0 ? 'default' : 'secondary'} className={`${index % 2 !== 0 && 'bg-blue-500 text-white'}`}>{item.step}</Badge>
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t w-full mt-auto">
                    <Clock className="h-4 w-4" />
                    <span>Timeline: {item.timeline}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHandleEWaste;
