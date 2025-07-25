import { getPostBySlug } from '@/lib/blog-data';
import BlogPostContent from '@/components/sections/BlogPostContent';
import Cta from '@/components/sections/Cta';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <BlogPostContent post={post} />
      <Cta />
    </div>
  );
}
