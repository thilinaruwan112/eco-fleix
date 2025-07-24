import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4 hover:bg-primary/10">Client Feedback</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trusted by Leading Organizations
          </h2>
           <p className="mt-4 text-lg text-muted-foreground">
            See what our clients have to say about our professional, secure, and responsible e-waste management services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl rounded-2xl bg-card transform -rotate-1">
            <CardContent className="p-8 md:p-12 relative text-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/20 absolute top-6 left-6 -z-0" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 15h3l-4 4v-10h-2a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6" />
                <path d="M21 15h-3l4 4v-10h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v6" />
              </svg>

              <blockquote className="text-xl text-card-foreground font-medium italic relative z-10">
                "ECO FLEIX provided exceptional service for our office equipment disposal. Their team was professional, punctual, and provided detailed certificates for all recycled items. Highly recommended for any business looking for responsible e-waste management."
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://placehold.co/48x48.png" alt="Ahmed Al Mansouri" data-ai-hint="man portrait"/>
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg text-card-foreground">Ahmed Al Mansouri</p>
                  <p className="text-muted-foreground">IT Director, TechCorp UAE</p>
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
