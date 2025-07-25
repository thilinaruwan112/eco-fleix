'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/use-translation';

interface BlogHeroProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const BlogHero = ({ searchTerm, setSearchTerm }: BlogHeroProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          <span className="text-primary">{t('blog_hero_eco')}</span>{t('blog_hero_insights')}
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
          {t('blog_hero_desc')}
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={t('search_for_articles')}
              className="w-full pl-12 h-12 rounded-full bg-background/80 shadow-md focus-visible:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
