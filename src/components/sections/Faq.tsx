import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '../ui/badge';

const faqs = [
    {
        question: 'What types of electronics do you accept?',
        answer: 'We accept a wide range of electronic devices, including laptops, smartphones, tablets, desktop computers, monitors, printers, cables, and more. Please see our "What We Accept" section for a more comprehensive list.'
    },
    {
        question: 'Is pickup service free?',
        answer: 'Yes, our pickup service is completely free for qualifying quantities of e-waste within our service area in Dubai. Contact us with your list of items to see if you qualify.'
    },
    {
        question: 'How do you ensure data security?',
        answer: 'We take data security very seriously. We offer certified data destruction services that are compliant with international standards, ensuring all your sensitive information is securely and permanently erased before recycling.'
    },
    {
        question: 'What happens to my e-waste after it\'s collected?',
        answer: 'Your e-waste is transported to our secure facility where it is sorted, dismantled, and processed. We recover valuable materials for reuse in new products and safely dispose of any hazardous components according to environmental regulations.'
    }
]

const Faq = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
         <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">Need Help?</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our e-waste recycling services.
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
