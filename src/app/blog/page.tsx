
'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import BlogHero from '@/components/sections/BlogHero';
import ExploreBlog from '@/components/sections/ExploreBlog';
import LatestInsights from '@/components/sections/LatestInsights';
import BrowseByCategory from '@/components/sections/BrowseByCategory';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { useTranslation } from '@/hooks/use-translation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ECO FLEIX E-Waste Recycling Insights',
  description: 'Explore the latest articles, guides, and insights on e-waste recycling, IT asset disposition, data security, and sustainability from the experts at ECO FLEIX.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { t } = useTranslation();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const filteredBlogPosts = useMemo(() => {
    if (!searchTerm) {
      return [];
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return blogPosts.filter((post: BlogPost) => {
      const title = t(post.title).toLowerCase();
      const description = t(post.description).toLowerCase();
      const category = t(post.category).toLowerCase();

      return (
        title.includes(lowercasedSearchTerm) ||
        description.includes(lowercasedSearchTerm) ||
        category.includes(lowercasedSearchTerm)
      );
    });
  }, [searchTerm, t]);

  const allPosts = useMemo(() => {
    // This memo is to avoid re-filtering all posts on every render of ExploreBlog
    return blogPosts;
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <BlogHero 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isFocused={isSearchFocused}
        setIsFocused={setIsSearchFocused}
        filteredPosts={filteredBlogPosts}
        containerRef={searchContainerRef}
      />
      <LatestInsights />
      <ExploreBlog posts={allPosts} />
      <BrowseByCategory />
    </div>
  );
}
