'use client';

import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import Link from 'next/link';

export const LegalContent = ({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode}) => {
    const { t } = useTranslation();
    return (
        <div className="bg-background">
            <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center z-20 relative">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">{t('home')}</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span>{title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        {title}
                    </h1>
                    <p className="max-w-3xl mx-auto mt-4 text-sm text-muted-foreground">
                       Last Updated: {lastUpdated}
                    </p>
                </div>
            </section>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto prose dark:prose-invert">
                    {children}
                </div>
            </div>
        </div>
    )
}
