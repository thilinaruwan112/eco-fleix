'use client';

import { cn } from '@/lib/utils';
import { Lightbulb, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';

export const BlogParagraph = ({ text }: { text: string }) => {
    const { t } = useTranslation();
    return <p className="text-muted-foreground leading-relaxed">{t(text)}</p>
};

export const BlogHeading = ({ text }: { text: string }) => {
    const { t } = useTranslation();
    return <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">{t(text)}</h2>
};

export const BlogSubHeading = ({ text }: { text: string }) => {
    const { t } = useTranslation();
    return <h3 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">{t(text)}</h3>
};

export const BlogList = ({ items }: { items: string[] }) => {
    const { t } = useTranslation();
    return (
        <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
            {items.map((item, index) => (
                <li key={index}>{t(item)}</li>
            ))}
        </ul>
    );
};

export const BlogAlert = ({ title, text, variant = 'default' }: { title: string; text: string; variant?: 'default' | 'warning' }) => {
    const { t } = useTranslation();
    const variants = {
        default: {
            icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
            container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-500/30',
        },
        warning: {
            icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
            container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-500/30',
        },
    };
    const selectedVariant = variants[variant];
    return (
        <div className={cn('p-6 rounded-lg border-l-4 my-6', selectedVariant.container)}>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{selectedVariant.icon}</div>
                <div>
                    <h4 className="font-bold text-lg text-foreground">{t(title)}</h4>
                    <p className="text-muted-foreground mt-1">{t(text)}</p>
                </div>
            </div>
        </div>
    );
};

export const BlogTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => {
    const { t } = useTranslation();
    return (
        <div className="my-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header} className="p-4 bg-muted/50 border-b font-semibold text-sm">{t(header)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-4 text-sm text-muted-foreground">{t(cell)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const BlogChecklist = ({ title, items, type }: { title: string, items: string[], type: 'pros' | 'cons' }) => {
    const { t } = useTranslation();
    const isPros = type === 'pros';
    return (
        <div className={cn(
            'p-6 rounded-lg border-2 h-full',
            isPros ? 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                   : 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900/20'
        )}>
            <h4 className="font-bold text-lg text-foreground mb-4">{t(title)}</h4>
            <ul className="space-y-3">
                {items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                        {isPros ? <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> : <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />}
                        <span className="text-muted-foreground">{t(item)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const BlogStatCard = ({ value, label }: { value: string, label: string }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-muted/40 p-6 rounded-lg text-center">
            <p className="text-5xl font-extrabold text-primary">{t(value)}</p>
            <p className="text-muted-foreground mt-2">{t(label)}</p>
        </div>
    );
};

export const BlogCallToAction = ({ title, desc, button1Text, button1Link, button2Text, button2Link }: { title: string, desc: string, button1Text: string, button1Link: string, button2Text: string, button2Link: string }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-blue-900 text-white p-8 rounded-lg my-12 text-center">
            <h3 className="text-2xl font-bold">{t(title)}</h3>
            <p className="mt-2 mb-6 max-w-2xl mx-auto">{t(desc)}</p>
            <div className="flex justify-center gap-4">
                <a href={button1Link} className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
                    {t(button1Text)}
                </a>
                 <a href={button2Link} className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded">
                    {t(button2Text)}
                </a>
            </div>
        </div>
    );
};
