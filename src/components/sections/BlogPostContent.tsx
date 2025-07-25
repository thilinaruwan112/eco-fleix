'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BlogPost, blogPosts } from '@/lib/blog-data';
import { useTranslation } from '@/hooks/use-translation';
import { Calendar, Clock, ArrowRight, Twitter, Facebook, Linkedin, Link } from 'lucide-react';

const SocialShare = () => {
    const { t } = useTranslation();
    return (
        <div className='flex items-center gap-2'>
            <span className='text-sm font-medium mr-2'>{t('share_this_article')}:</span>
            <Button variant="outline" size="icon" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Copy link">
                <Link className="h-4 w-4" />
            </Button>
        </div>
    )
}

const BlogPostContent = ({ post }: { post: BlogPost }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className={`${post.categoryColor} border-transparent mb-4`}>{t(post.category)}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {t(post.title)}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{t(post.description)}</p>
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://placehold.co/40x40.png`} alt={post.author} data-ai-hint={post.authorAiHint} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t(post.readTime)}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={post.image}
              alt={t(post.title)}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.aiHint}
              priority
            />
          </div>

          {/* Main Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p>{t('blog_p1')}</p>
            <p>{t('blog_p2')}</p>
            
            <h2>{t('blog_h2_1')}</h2>
            <p>{t('blog_p3')}</p>
            
            <blockquote>{t('blog_quote_1')}</blockquote>

            <p>{t('blog_p4')}</p>

            <ul>
                <li><strong>{t('blog_li_1_strong')}</strong>: {t('blog_li_1_text')}</li>
                <li><strong>{t('blog_li_2_strong')}</strong>: {t('blog_li_2_text')}</li>
                <li><strong>{t('blog_li_3_strong')}</strong>: {t('blog_li_3_text')}</li>
            </ul>

            <h2>{t('blog_h2_2')}</h2>
            <p>{t('blog_p5')}</p>
          </article>

          <Separator className="my-12" />

          {/* Footer - Author Bio & Social Share */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <Avatar className="h-16 w-16">
                  <AvatarImage src={`https://placehold.co/64x64.png`} alt={post.author} data-ai-hint={post.authorAiHint} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-lg text-foreground">{post.author}</p>
                    <p className="text-muted-foreground text-sm">{t('blog_author_title')}</p>
                </div>
            </div>
            <SocialShare />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
