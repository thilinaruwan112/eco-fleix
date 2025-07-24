import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
    const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Make a Difference?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/90">
                Join us in creating a sustainable future. Schedule your free e-waste pickup today and take the first step towards responsible electronics recycling.
                </p>
            </div>
            <div className="flex-shrink-0">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="secondary" className="text-primary hover:bg-gray-200">
                        Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
