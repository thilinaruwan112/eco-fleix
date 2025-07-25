'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BlogPost } from '@/lib/blog-data';
import { useTranslation } from '@/hooks/use-translation';
import { Calendar, Clock, Twitter, Facebook, Linkedin, Link } from 'lucide-react';

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

const renderContent = (content: BlogPost['content'], t: (key: string) => string) => {
  const listItems: string[] = [];

  const renderList = (items: string[]) => (
    <ul className="space-y-2">
      {items.map((item, index) => {
        const [strongKey, textKey] = item.split(':');
        return (
          <li key={index}>
            <strong>{t(strongKey)}</strong>: {t(textKey)}
          </li>
        );
      })}
    </ul>
  );

  const elements = content.reduce((acc, part, index) => {
    if (part.type === 'list') {
      listItems.push(part.text);
      if (index === content.length - 1 || content[index + 1].type !== 'list') {
        acc.push(renderList(listItems.slice()));
        listItems.length = 0;
      }
    } else {
      if (listItems.length > 0) {
        acc.push(renderList(listItems.slice()));
        listItems.length = 0;
      }
      switch (part.type) {
        case 'heading':
          acc.push(<h2 key={index}>{t(part.text)}</h2>);
          break;
        case 'paragraph':
          acc.push(<p key={index}>{t(part.text)}</p>);
          break;
        case 'quote':
          acc.push(<blockquote key={index}>{t(part.text)}</blockquote>);
          break;
      }
    }
    return acc;
  }, [] as React.ReactNode[]);

  return elements;
};

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
             {renderContent(post.content, t)}
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
