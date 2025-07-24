import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Mail } from 'lucide-react';

const contactOptions = [
  {
    icon: <Phone className="h-8 w-8 text-white" />,
    title: 'Call Us',
    description: 'Speak directly with our team',
    buttonText: 'Call Now',
    href: 'tel:+971529058388',
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: 'Schedule Meeting',
    description: 'Book a consultation call',
    buttonText: 'Schedule',
    href: '#',
  },
  {
    icon: <Mail className="h-8 w-8 text-white" />,
    title: 'Email Us',
    description: 'Send us a detailed message',
    buttonText: 'Email',
    href: 'mailto:ecofleixewasterecyclinguae@gmail.com',
  },
];

const TalkToUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Prefer to Talk Directly?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactOptions.map((option) => (
            <Card key={option.title} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col items-center h-full">
                <div className="bg-primary rounded-full p-4 mb-6 w-max">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                <p className="text-muted-foreground mt-2 mb-6 flex-grow">{option.description}</p>
                <a href={option.href} className="w-full mt-auto">
                  <Button className="w-full">{option.buttonText}</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
