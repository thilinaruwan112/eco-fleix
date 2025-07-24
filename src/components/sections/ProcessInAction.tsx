import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProcessInAction = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Process in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from our comprehensive e-waste management process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8fDE3NTM3MDkzODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern office workstations"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-6f13e506b5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8fDE3NTM3NjY5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical equipment"
              layout="fill"
              objectFit="cover"
              data-ai-hint="medical equipment"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2c65a0cfb3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wdXRIciUyMGxhYnxlbnwwfHx8fDE3NTM5NDg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Old computer lab"
              layout="fill"
              objectFit="cover"
              data-ai-hint="computer lab"
            />
          </div>
        </div>

        <Card className="shadow-xl rounded-2xl bg-card">
            <CardContent className="p-8 grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Challenge</h3>
                    <p className="text-muted-foreground text-sm">
                        A major financial corporation needed to securely dispose of 500+ workstations containing sensitive client data while maintaining compliance with federal regulations.
                    </p>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Solution</h3>
                    <p className="text-muted-foreground text-sm">
                        Our team provided on-site data destruction, secure transport, and complete material recovery with full documentation and compliance reporting.
                    </p>
                </div>
                 <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Results</h3>
                    <p className="text-muted-foreground text-sm">
                        100% data security compliance, 95% material recovery rate, and $50,000 in recovered value returned to the client.
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessInAction;
