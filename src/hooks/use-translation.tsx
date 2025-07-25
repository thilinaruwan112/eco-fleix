"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import common_en from '@/locales/en/common.json';
import home_en from '@/locales/en/home.json';
import about_en from '@/locales/en/about.json';
import services_en from '@/locales/en/services.json';
import who_we_serve_en from '@/locales/en/who-we-serve.json';
import our_process_en from '@/locales/en/our-process.json';
import contact_en from '@/locales/en/contact.json';
import blog_en from '@/locales/en/blog.json';

import common_ar from '@/locales/ar/common.json';
import home_ar from '@/locales/ar/home.json';
import about_ar from '@/locales/ar/about.json';
import services_ar from '@/locales/ar/services.json';
import who_we_serve_ar from '@/locales/ar/who-we-serve.json';
import our_process_ar from '@/locales/ar/our-process.json';
import contact_ar from '@/locales/ar/contact.json';
import blog_ar from '@/locales/ar/blog.json';

const translations = {
  en: {
    ...common_en,
    ...home_en,
    ...about_en,
    ...services_en,
    ...who_we_serve_en,
    ...our_process_en,
    ...contact_en,
    ...blog_en,
  },
  ar: {
    ...common_ar,
    ...home_ar,
    ...about_ar,
    ...services_ar,
    ...who_we_serve_ar,
    ...our_process_ar,
    ...contact_ar,
    ...blog_ar,
  }
};

type Language = 'en' | 'ar';

interface TranslationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
  dir: 'ltr' | 'rtl';
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ar')) {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    const newDir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = newDir;
    setDir(newDir);
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = useCallback((key: string, options?: { [key: string]: string | number }): string => {
    let translation = translations[language][key as keyof typeof translations[Language]] || key;
    if (options) {
      Object.keys(options).forEach(optionKey => {
        translation = translation.replace(`{${optionKey}}`, String(options[optionKey]));
      });
    }
    return translation;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
