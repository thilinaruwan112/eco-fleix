'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from '@/hooks/use-translation';

const Hero = () => {
    const { t, language } = useTranslation();
    const phoneNumber = '+971544563685';
    const message = "Hello! I'm interested in your e-waste recycling services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const slides = [
      {
        image: 'https://content-provider.payshia.com/eco-fleix/hero-design-optimized.webp',
        mobileImage: 'https://content-provider.payshia.com/eco-fleix/hero-mobile-1-optimized.webp',
        titleKey: 'hero_title_1',
        descriptionKey: 'hero_desc_1',
      },
      {
        image: 'https://content-provider.payshia.com/eco-fleix/hero-new-2-optimized.webp',
        mobileImage: 'https://content-provider.payshia.com/eco-fleix/hero-mobile-2-optimized.webp',
        titleKey: 'hero_title_2',
        descriptionKey: 'hero_desc_2',
      },
      {
        image: 'https://content-provider.payshia.com/eco-fleix/hero-3.jpg-optimized.webp',
        mobileImage: 'https://content-provider.payshia.com/eco-fleix/hero-mobile-3-optimized.webp',
        titleKey: 'hero_title_3',
        descriptionKey: 'hero_desc_3',
      }
    ];

  return (
      <section className="w-full">
        <Carousel
            key={language}
            opts={{ loop: true, direction: language === 'ar' ? 'rtl' : 'ltr' }}
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
            ]}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[90vh] min-h-[600px] text-white">
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={t(slide.titleKey)}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0}
                      className="hidden md:block"
                    />
                    <Image
                      src={slide.mobileImage}
                      alt={t(slide.titleKey)}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0}
                      className="block md:hidden"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
                  <div className="container mx-auto px-4 z-20 relative flex flex-col justify-center h-full text-center">
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        {t(slide.titleKey)}
                      </h1>
                      <p className="max-w-2xl mx-auto mt-4 md:mt-6 text-base md:text-lg text-primary-foreground/90">
                        {t(slide.descriptionKey)}
                      </p>
                      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                            {t('schedule_pickup_today')} <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                        <a href="/about" className="w-full sm:w-auto">
                          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
                            {t('learn_more')}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 text-white bg-black/30 hover:bg-black/50 border-white/50 hover:border-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 text-white bg-black/30 hover:bg-black/50 border-white/50 hover:border-white" />
        </Carousel>
      </section>
  );
};

export default Hero;

    