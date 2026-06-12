'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BlogPost, BlogContentPart } from '@/lib/blog-data';
import { useTranslation } from '@/hooks/use-translation';
import { Calendar, Clock, Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { 
  BlogParagraph,
  BlogHeading,
  BlogSubHeading,
  BlogList,
  BlogAlert,
  BlogTable,
  BlogChecklist,
  BlogStatCard,
  BlogCallToAction,
} from './BlogComponents';

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

const renderContent = (content: BlogContentPart[]) => {
  return content.map((part, index) => {
    switch (part.type) {
      case 'heading':
        return <BlogHeading key={index} text={part.text} />;
      case 'subheading':
        return <BlogSubHeading key={index} text={part.text} />;
      case 'paragraph':
        return <BlogParagraph key={index} text={part.text} />;
      case 'list':
        return <BlogList key={index} items={part.items!} />;
      case 'alert':
        return <BlogAlert key={index} title={part.title!} text={part.text} variant={part.variant} />;
      case 'table':
        return <BlogTable key={index} headers={part.headers!} rows={part.rows!} />;
      case 'checklist':
        return (
          <div key={index} className="grid md:grid-cols-2 gap-8 my-6">
            <BlogChecklist title={part.pros!.title} items={part.pros!.items} type="pros" />
            <BlogChecklist title={part.cons!.title} items={part.cons!.items} type="cons" />
          </div>
        );
      case 'stats':
        return (
          <div key={index} className="grid md:grid-cols-3 gap-8 my-12">
            {part.items!.map((stat, i) => (
              <BlogStatCard key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        );
      case 'cta':
        return <BlogCallToAction key={index} {...part.props!} />;
      default:
        return null;
    }
  });
};


const BlogPostContent = ({ post }: { post: BlogPost }) => {
  const { t } = useTranslation();
  
  const authorImages: {[key: string]: string} = {
    'Dr. Sarah Ahmed': 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzYwMjc1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'Mike Johnson': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTM2MDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Lisa Chen': 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzYwMjc1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'Emma Wilson': 'https://images.unsplash.com/photo-1706523588518-580c9a2e1914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTM2MDI3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Ahmed Al-Rashid': 'https://images.unsplash.com/photo-1715029005043-e88d219a3c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTM2MDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Fatima Hassan': 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzYwMjc1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'David Lee': 'https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTM2MDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  }
  
  const authorImage = authorImages[post.author] || 'https://placehold.co/40x40.png';


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
                  <AvatarImage src={authorImage} alt={post.author} data-ai-hint={post.authorAiHint} />
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
          <article className="prose-lg dark:prose-invert max-w-none mx-auto space-y-4">
             {renderContent(post.content)}
          </article>

          <Separator className="my-12" />

          {/* Footer - Author Bio & Social Share */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <Avatar className="h-16 w-16">
                  <AvatarImage src={authorImage} alt={post.author} data-ai-hint={post.authorAiHint} />
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
