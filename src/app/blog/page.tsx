'use client';

import { useState, useMemo } from 'react';
import BlogHero from '@/components/sections/BlogHero';
import ExploreBlog from '@/components/sections/ExploreBlog';
import LatestInsights from '@/components/sections/LatestInsights';
import BrowseByCategory from '@/components/sections/BrowseByCategory';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { useTranslation } from '@/hooks/use-translation';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, language } = useTranslation();

  const filteredBlogPosts = useMemo(() => {
    if (!searchTerm) {
      return blogPosts;
    }

    return blogPosts.filter((post: BlogPost) => {
      const title = t(post.title).toLowerCase();
      const description = t(post.description).toLowerCase();
      const category = t(post.category).toLowerCase();
      const lowercasedSearchTerm = searchTerm.toLowerCase();

      return (
        title.includes(lowercasedSearchTerm) ||
        description.includes(lowercasedSearchTerm) ||
        category.includes(lowercasedSearchTerm)
      );
    });
  }, [searchTerm, t, language]);


  return (
    <div className="flex flex-col">
      <BlogHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LatestInsights />
      <ExploreBlog posts={filteredBlogPosts} />
      <BrowseByCategory />
    </div>
  );
}
