import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Faq = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What types of electronics do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept a wide range of electronic devices, including laptops, smartphones, tablets, desktop computers, monitors, printers, cables, and more. Please see our "What We Accept" section for a more comprehensive list.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is pickup service free?</AccordionTrigger>
            <AccordionContent>
              Yes, our pickup service is completely free for qualifying quantities of e-waste within our service area in Dubai. Contact us with your list of items to see if you qualify.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you ensure data security?</AccordionTrigger>
            <AccordionContent>
              We take data security very seriously. We offer certified data destruction services that are compliant with international standards, ensuring all your sensitive information is securely and permanently erased before recycling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
