'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: 'https://content-provider.payshia.com/eco-fleix/hero-1.webp',
    text: {
        line1: 'WE RECYCLE',
        line2: 'COMPUTERS &',
        line3: 'ACCESSORIES',
    }
  },
  {
    src: 'https://content-provider.payshia.com/eco-fleix/hero-2.webp',
    text: {
        line1: 'SUSTAINABLE',
        line2: 'E-WASTE',
        line3: 'SOLUTIONS',
    }
  },
  {
    src: 'https://content-provider.payshia.com/eco-fleix/hero-3.webp',
    text: {
        line1: 'SECURE DATA',
        line2: 'DESTRUCTION',
        line3: 'GUARANTEED',
    }
  },
  {
    src: 'https://content-provider.payshia.com/eco-fleix/hero-4.webp',
     text: {
        line1: 'JOIN US IN',
        line2: 'PROTECTING THE',
        line3: 'ENVIRONMENT',
    }
  },
];

const Hero = () => {
  const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your e-waste recycling services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full h-[600px] text-white">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-[600px] relative">
                <Image
                  src={slide.src}
                  alt={`E-waste recycling slide ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="z-0"
                  priority={index === 0}
                />
                 <div className="absolute inset-0 bg-black/50 z-10" />
                 <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
                    <div className="max-w-xl text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="text-primary-foreground">{slide.text.line1}</span>
                            <br />
                            <span className="text-primary-foreground">{slide.text.line2}</span>
                            <br />
                            <span className="text-primary-foreground">{slide.text.line3}</span>
                        </h1>
                        <p className="max-w-lg mt-4 text-lg md:text-xl text-primary-foreground/90">
                            Professional electronic waste recycling services for businesses and organizations.
                            Secure, certified, and environmentally responsible disposal.
                        </p>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Schedule Pickup Today
                            </Button>
                        </a>
                    </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
