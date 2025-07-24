import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BlogHero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          <span className="text-primary">Eco</span>-Insights Blog
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
          Stay informed with expert insights on sustainable e-waste disposal, IT recycling best practices, and environmental responsibility in the digital age.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for articles..."
              className="w-full pl-12 h-12 rounded-full bg-white shadow-md focus-visible:ring-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
