import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const LatestInsights = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-green-600 hover:bg-green-700 text-white border-transparent mb-4">
            Featured Article
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            LATEST INSIGHTS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the latest trends and best practices in e-waste recycling across Dubai and the UAE
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1603436039103-a434191370b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM0NTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="E-waste processing facility"
                layout="fill"
                objectFit="cover"
                data-ai-hint="e-waste recycling factory"
              />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                The Future of E-Waste Management in Dubai: Technologies and Trends for 2025
              </h3>
              <p className="mt-4 text-muted-foreground">
                Explore how Dubai is revolutionizing e-waste management with cutting-edge technologies, government initiatives, and sustainable practices that are setting new standards for the region.
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Dr. Sarah Ahmed" data-ai-hint="woman portrait" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <span>Dr. Sarah Ahmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LatestInsights;
