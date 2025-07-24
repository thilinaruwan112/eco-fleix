import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-6 w-6" />
          Our Service Area
        </CardTitle>
        <CardDescription>We currently offer free e-waste collection across all major zones in Dubai.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <Image
            src="https://images.unsplash.com/photo-1573773095589-edd9586b7cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkdWJhaSUyMG1hcHxlbnwwfHx8fDE3NTMzNDQ0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Map of Dubai service area"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            data-ai-hint="dubai map"
          />
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary/70"></div>
            <span>Zone A: Downtown & Business Bay</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-secondary-foreground/50"></div>
            <span>Zone B: Marina & JLT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent-foreground/30"></div>
            <span>Zone C: All Other Areas</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceArea;
