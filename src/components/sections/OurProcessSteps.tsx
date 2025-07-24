import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Info, Truck, Shield, Recycle, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const processSteps = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Collection & Transport',
    image: 'https://images.unsplash.com/photo-1582575223332-cb3c80461517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0ZWNobmljaWFucyUyMGxvYWRpbmclMjB0cnVja3xlbnwwfHx8fDE3NTM3NjY5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'technicians loading truck',
    benefits: [
      'Secure chain of custody from pickup to processing',
      'Trained professionals handle all equipment',
      'Flexible scheduling to minimize business disruption',
      'Complete inventory documentation',
    ],
    timeline: '1-2 business days',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Data Destruction',
    image: 'https://images.unsplash.com/photo-1555949963-ff9808253635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzZXJ2ZXIlMjByb29tfGVufDB8fHx8fDE3NTM0NTYyODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'server room',
    benefits: [
      'DOD-approved data sanitization methods',
      'Certified destruction for all media types',
      'On-site and off-site services available',
      'Guaranteed protection against data breaches',
    ],
    timeline: '2-3 business days',
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: 'Processing & Sorting',
    image: 'https://images.unsplash.com/photo-1603436039103-a434191370b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM0NTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'e-waste recycling factory',
    benefits: [
      'Manual dismantling for component separation',
      'Advanced sorting for maximum material recovery',
      'Environmentally safe handling of hazardous materials',
      'Focus on circular economy principles',
    ],
    timeline: '3-5 business days',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Reporting & Compliance',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    aiHint: 'person reviewing documents',
    benefits: [
      'Certificate of Destruction for each asset',
      'Detailed environmental impact reports',
      'Full documentation for audit and compliance needs',
      'Transparent tracking throughout the process',
    ],
    timeline: '1-2 business days',
  },
];

const OurProcessSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Step-by-Step E-Waste Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a meticulous process to ensure your electronic assets are handled securely, transparently, and with the utmost respect for the environment.
          </p>
        </div>

        <div className="space-y-20">
          {processSteps.map((step, index) => (
            <div key={step.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-lg group ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                 <Image
                    src={step.image}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={step.aiHint}
                  />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                </div>
                <h4 className="font-semibold text-lg text-foreground">Key Benefits:</h4>
                <ul className="space-y-3">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Card className="bg-primary/5 border-l-4 border-primary">
                    <CardContent className="p-4 flex items-center gap-3 text-sm">
                        <Info className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-primary">Typical Timeframe:</span>
                            <span className="text-muted-foreground ml-2">{step.timeline}</span>
                        </div>
                    </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSteps;
