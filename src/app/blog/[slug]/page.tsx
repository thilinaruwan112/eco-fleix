
import { getPostBySlug, blogPosts } from '@/lib/blog-data';
import BlogPostContent from '@/components/sections/BlogPostContent';
import Cta from '@/components/sections/Cta';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import common_en from '@/locales/en/common.json';
import blog_en from '@/locales/en/blog.json';

const en_translations = {...common_en, ...blog_en};

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This blog post could not be found.',
    };
  }

  const title = en_translations[post.title as keyof typeof en_translations] || post.title;
  const description = en_translations[post.description as keyof typeof en_translations] || post.description;

  return {
    title: `${title} | ECO FLEIX Blog`,
    description: description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${title} | ECO FLEIX Blog`,
      description: description,
      url: `https://eferecycling.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ECO FLEIX Blog`,
      description: description,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

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
