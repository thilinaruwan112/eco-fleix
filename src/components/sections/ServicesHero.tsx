import { ChevronRight } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#0A1E44] to-[#1E40AF] text-white">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start z-20 relative">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <a href="/" className="hover:text-white">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span>Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
          OUR SERVICES
        </h1>
        <p className="max-w-2xl mt-4 text-lg md:text-xl text-white/90">
          Professional data destruction and recycling solutions
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
