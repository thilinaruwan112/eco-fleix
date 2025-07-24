import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Trusted by Leading Organizations
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-12 relative text-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto mb-4" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 15h3l-4 4v-10h-2a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6" />
                <path d="M21 15h-3l4 4v-10h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v6" />
              </svg>

              <blockquote className="text-lg text-muted-foreground italic">
                "ECO FLEIX provided exceptional service for our office equipment disposal. Their team was professional, punctual, and provided detailed certificates for all recycled items. Highly recommended for any business looking for responsible e-waste management."
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40.png" alt="Ahmed Al Mansouri" data-ai-hint="man portrait"/>
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Ahmed Al Mansouri</p>
                  <p className="text-sm text-muted-foreground">IT Director, TechCorp UAE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
