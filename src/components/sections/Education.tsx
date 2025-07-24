import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Leaf } from 'lucide-react';

const Education = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Learn About E-Waste</h2>
          <p className="text-muted-foreground mt-2">Knowledge is the first step towards a greener planet.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is E-Waste?</AccordionTrigger>
            <AccordionContent>
              Electronic waste, or e-waste, refers to discarded electronic devices. This includes everything from smartphones and laptops to refrigerators and televisions. These products contain toxic materials like lead, mercury, and cadmium, which can harm the environment and human health if not disposed of properly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why is Recycling E-Waste Important?</AccordionTrigger>
            <AccordionContent>
              Recycling e-waste conserves natural resources by recovering valuable materials like gold, silver, and copper from old electronics, reducing the need for mining. It also prevents toxic materials from polluting our soil and water. Proper recycling significantly reduces greenhouse gas emissions associated with manufacturing new products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Our Recycling Process</AccordionTrigger>
            <AccordionContent>
              At EcoCollect Dubai, we follow a strict, environmentally-safe process. Once we collect your e-waste, it's transported to our certified recycling facility. Items are manually dismantled, and materials are sorted. Toxic components are safely removed, while valuable materials are processed to be reused in new products, supporting a circular economy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Education;
