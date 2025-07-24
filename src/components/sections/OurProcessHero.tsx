import { ChevronRight } from 'lucide-react';

const OurProcessHero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center z-20 relative">
         <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-primary">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span>Our Process</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Our <span className="text-primary">Process</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
          A clear and transparent process for secure and sustainable e-waste management.
        </p>
      </div>
    </section>
  );
};

export default OurProcessHero;
