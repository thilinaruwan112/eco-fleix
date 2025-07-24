'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your e-waste recycling services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://content-provider.payshia.com/eco-fleix/hero-1.webp"
          alt="Sustainable E-waste Recycling Solutions"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
      </div>
      <div className="container mx-auto px-4 z-20 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Sustainable E-Waste Recycling for a Greener Dubai
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-primary-foreground/90">
            Professional electronic waste recycling services for businesses and organizations. Secure, certified, and environmentally responsible disposal.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Pickup Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/about">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
