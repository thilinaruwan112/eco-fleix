'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { BlogPost } from '@/lib/blog-data';


const ExploreBlog = ({ posts }: { posts: BlogPost[]}) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t('all_articles')}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t('explore_blog_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <a key={post.title} href={`/blog/${post.slug}`} className="flex flex-col group">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={t(post.title)}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={post.aiHint}
                />
              </div>
              <Badge className={`${post.categoryColor} self-start border-transparent mb-2`}>{t(post.category)}</Badge>
              <h3 className="text-xl font-bold text-foreground mb-2 flex-grow">
                <span className="hover:text-primary transition-colors">{t(post.title)}</span>
              </h3>
              <p className="text-muted-foreground text-sm mb-4 ">{t(post.description)}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={post.author} data-ai-hint={post.authorAiHint} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-semibold text-foreground">{post.author}</span>
                      <p>{post.date} • {t(post.readTime)}</p>
                    </div>
                </div>
                 <span className="flex items-center gap-1 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('read_more')} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBlog;
