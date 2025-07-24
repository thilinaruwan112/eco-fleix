'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
    {
        src: "https://content-provider.payshia.com/eco-fleix/hero-1.webp",
        alt: "E-waste recycling",
        hint: "e-waste recycling"
    },
    {
        src: "https://content-provider.payshia.com/eco-fleix/hero-2.webp",
        alt: "E-waste collection",
        hint: "e-waste collection"
    },
    {
        src: "https://content-provider.payshia.com/eco-fleix/hero-3.webp",
        alt: "Electronics recycling",
        hint: "electronics recycling"
    },
    {
        src: "https://content-provider.payshia.com/eco-fleix/hero-4.webp",
        alt: "Recycling plant",
        hint: "recycling plant"
    }
];

const Hero = () => {
    const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative w-full h-[600px] md:h-[500px] text-white">
      <Carousel
        className="absolute w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full" data-embla-carousel-fade="true">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
                data-ai-hint={image.hint}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary-foreground">WE RECYCLE</span><br />
            <span className="text-primary-foreground">COMPUTERS &</span><br />
            <span className="text-primary-foreground">ACCESSORIES</span>
          </h1>
          <p className="max-w-lg mt-4 text-lg md:text-xl text-primary-foreground/90">
            Professional electronic waste recycling services for businesses and organizations. Secure, certified, and environmentally responsible disposal.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Pickup Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
