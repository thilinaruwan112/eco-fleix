import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          READY TO MAKE A DIFFERENCE?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Join us in creating a sustainable future through responsible e-waste management. Together, we can make a positive impact on our planet.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Get Started Now</Button>
          <Button size="lg" variant="outline">Schedule a Pickup</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
