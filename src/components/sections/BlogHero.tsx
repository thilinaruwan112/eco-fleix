'use client';

import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from '@/components/ui/card';
import { BlogPost } from '@/lib/blog-data';
import Image from 'next/image';

interface BlogHeroProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    isFocused: boolean;
    setIsFocused: (isFocused: boolean) => void;
    filteredPosts: BlogPost[];
    containerRef: React.RefObject<HTMLDivElement>;
}

const BlogHero = ({ searchTerm, setSearchTerm, isFocused, setIsFocused, filteredPosts, containerRef }: BlogHeroProps) => {
  const { t } = useTranslation();
  const showResults = isFocused && searchTerm.length > 0;

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          <span className="text-primary">{t('blog_hero_eco')}</span>{t('blog_hero_insights')}
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
          {t('blog_hero_desc')}
        </p>
        <div className="mt-8 max-w-xl mx-auto" ref={containerRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
            <Input
              placeholder={t('search_for_articles')}
              className="w-full pl-12 h-12 rounded-full bg-background/80 shadow-md focus-visible:ring-primary relative z-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
            />
            {showResults && (
              <Card className="absolute top-full mt-2 w-full text-left shadow-lg rounded-2xl bg-background z-50">
                <CardContent className="p-4 space-y-2 max-h-96 overflow-y-auto">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <a 
                        key={post.slug} 
                        href={`/blog/${post.slug}`} 
                        className="p-3 flex items-center gap-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                           <Image src={post.image} alt={t(post.title)} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
                        </div>
                        <div className="flex-grow overflow-hidden">
                          <p className="font-semibold text-sm truncate group-hover:text-primary">{t(post.title)}</p>
                          <p className="text-xs text-muted-foreground truncate">{t(post.description)}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-4 text-sm">{t('no_results_found', { searchTerm: searchTerm })}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
