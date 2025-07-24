'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/hooks/use-translation';


const Faq = () => {
  const { t } = useTranslation();

  const faqs = [
    {
        question: t('faq_1_question'),
        answer: t('faq_1_answer')
    },
    {
        question: t('faq_2_question'),
        answer: t('faq_2_answer')
    },
    {
        question: t('faq_3_question'),
        answer: t('faq_3_answer')
    },
    {
        question: t('faq_4_question'),
        answer: t('faq_4_answer')
    }
]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
         <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">{t('need_help')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('faq_title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('faq_desc')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index+1}`} className="bg-muted/40 rounded-lg px-6 border-b-0">
                    <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
