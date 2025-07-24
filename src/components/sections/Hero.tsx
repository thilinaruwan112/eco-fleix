import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline">
          Give Your Electronics a Second Life
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
          Join EcoCollect Dubai in our mission to create a sustainable future. Schedule a free pick-up for your e-waste and make a positive impact on the environment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
