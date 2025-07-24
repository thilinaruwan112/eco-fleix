import { Badge } from '@/components/ui/badge';

const BlogHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-gray-800 text-white">
      <div className="absolute inset-0 bg-blue-900/90 z-10" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-white">E-WASTE </span>
          <span className="text-green-400">RECYCLING </span>
          <span className="text-white">BLOG</span>
        </h1>
        <p className="max-w-2xl mt-4 text-lg md:text-xl text-white/90">
          Stay informed with expert insights on sustainable e-waste disposal, IT recycling best practices, and environmental responsibility in the digital age.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
