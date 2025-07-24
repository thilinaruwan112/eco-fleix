import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] text-white">
       <Image
          src="https://images.unsplash.com/photo-1652658379315-9ff6d19d8929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwYmlufGVufDB8fHx8MTc1MzM0NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="E-waste recycling"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="e-waste recycling bin"
        />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary-foreground">WE RECYCLE</span><br />
            <span className="text-primary-foreground">COMPUTERS &</span><br />
            <span className="text-primary-foreground">ACCESSORIES</span>
          </h1>
          <p className="max-w-lg mt-4 text-lg md:text-xl text-primary-foreground/90">
            Professional electronic waste recycling services for businesses and organizations. Secure, certified, and environmentally responsible disposal.
          </p>
          <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule Pickup Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
