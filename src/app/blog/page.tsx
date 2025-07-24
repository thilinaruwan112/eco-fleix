import BlogHero from '@/components/sections/BlogHero';
import ExploreBlog from '@/components/sections/ExploreBlog';
import LatestInsights from '@/components/sections/LatestInsights';

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <LatestInsights />
      <ExploreBlog />
    </div>
  );
}
