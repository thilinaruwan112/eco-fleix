import { ClipboardList, Truck, ArrowDownUp, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-white" />,
    title: 'Submit List',
    description: 'Send us your e-waste inventory',
  },
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    title: 'Pickup',
    description: 'We collect from your location',
  },
  {
    icon: <ArrowDownUp className="h-8 w-8 text-white" />,
    title: 'Sorting',
    description: 'Professional categorization',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-white" />,
    title: 'Reporting',
    description: 'Detailed recycling report',
  },
];

const HowItWorks = () => {
    const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          How Our Scrap Pickup Works
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="bg-primary rounded-full p-4 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Technician working on electronics"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
            data-ai-hint="technician electronics"
          />
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mt-2 mb-6">
              Submit your item list or call us directly for immediate assistance.
            </p>
            <div className="flex flex-col gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full">Submit Item List</Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full">
                    Call Us Now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
