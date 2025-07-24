import BlogHero from '@/components/sections/BlogHero';
import LatestInsights from '@/components/sections/LatestInsights';

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <LatestInsights />
    </div>
  );
}
