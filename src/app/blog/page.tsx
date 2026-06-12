
import { Metadata } from 'next';
import BlogPageClient from '@/components/sections/BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | ECO FLEIX E-Waste Recycling Insights',
  description: 'Explore the latest articles, guides, and insights on e-waste recycling, IT asset disposition, data security, and sustainability from the experts at ECO FLEIX.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
