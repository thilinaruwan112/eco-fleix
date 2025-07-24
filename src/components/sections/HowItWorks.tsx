import { ClipboardList, Truck, ArrowDownUp, BarChart2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: 'Submit Your List',
    description: 'Provide an inventory of your e-waste items online or over the phone.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Schedule Free Pickup',
    description: 'We arrange a convenient time to collect the items from your location.',
  },
  {
    icon: <ArrowDownUp className="h-8 w-8 text-primary" />,
    title: 'Secure Sorting & Processing',
    description: 'We sort, securely process, and recycle your items at our certified facility.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Receive Detailed Reporting',
    description: 'Get a certificate and report detailing the environmental impact of your recycling.',
  },
];

const HowItWorks = () => {
    const phoneNumber = '+971529058388';
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">Our Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Simple & Transparent Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've streamlined our e-waste pickup service to be as simple and efficient as possible. Here's how it works.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 -z-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                 <div className="bg-primary/10 rounded-full p-4 mb-4 ring-8 ring-background">
                    {step.icon}
                  </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 text-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                    Schedule Your Free Pickup <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
