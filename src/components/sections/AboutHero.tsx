import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] text-white">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NTM0Mzg4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Team working together in an office"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="team meeting office"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20 relative">
        <Badge className="mb-4 bg-green-500/80 text-white border-transparent">Our Story</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-white">ABOUT </span>
          <span className="text-green-400">US</span>
        </h1>
        <p className="max-w-2xl mt-4 text-lg md:text-xl text-white/90">
          We transform e-waste management through sustainable practices and innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
