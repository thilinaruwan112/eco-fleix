'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const TalkToUs = () => {
  const { t } = useTranslation();
  const phoneNumber = '+971544563685';
  const scheduleMessage = "Hello! I'd like to schedule a meeting to discuss your e-waste recycling services.";
  const scheduleWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(scheduleMessage)}`;

  const contactOptions = [
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: 'talk_to_us_option_1_title',
      description: 'talk_to_us_option_1_desc',
      buttonText: 'talk_to_us_option_1_button',
      href: 'tel:+971544563685',
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: 'talk_to_us_option_2_title',
      description: 'talk_to_us_option_2_desc',
      buttonText: 'talk_to_us_option_2_button',
      href: scheduleWhatsappUrl,
    },
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: 'talk_to_us_option_3_title',
      description: 'talk_to_us_option_3_desc',
      buttonText: 'talk_to_us_option_3_button',
      href: 'mailto:info@eferecycling.com',
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('talk_to_us_title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactOptions.map((option) => (
            <Card key={option.title} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card transform hover:-translate-y-2 group">
              <CardContent className="p-8 flex flex-col items-center h-full">
                <div className="bg-primary rounded-full p-4 mb-6 w-max">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{t(option.title)}</h3>
                <p className="text-muted-foreground mt-2 mb-6 flex-grow">{t(option.description)}</p>
                <a href={option.href} target={option.href.startsWith('https://wa.me/') ? '_blank' : undefined} rel={option.href.startsWith('https://wa.me/') ? 'noopener noreferrer' : undefined} className="w-full mt-auto">
                  <Button className="w-full">{t(option.buttonText)}</Button>
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

    